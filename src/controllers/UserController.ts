import { NextFunction, Request, Response } from "express";
import { UserService } from "@services/UserService";
import { User } from "@entities/User";
import { ShelfService } from "@services/ShelfService";
import { getRepository } from "typeorm/index";
import { UserRole } from "@entities/UserRole";
import { NotFoundException } from "@/exceptions/NotFoundException";
import jwt from "jsonwebtoken";
import { passportConfig } from "@/config/passportConfig";

export class UserController {

  public static async getFullUser(req: Request, res: Response) {
    const userService = UserService.instance;
    const users = await userService.getUsers({ id: req.params.id })
    const user: User = users[0];

    if (user) {
      const shelfService = ShelfService.instance;
      const shelves = await shelfService.getShelf({ owner: user })

      res.end(JSON.stringify({
        user,
        shelves,
      }));
    } else {
      throw new NotFoundException()
    }
  }

  public static async getCurrentUser(req: Request, res: Response) {
    const userService = UserService.instance;


    const users = await userService.getUsers({ id: (req.user as any).id })
    const user: User = users[0];


    // @ts-ignore
    delete (user.password)

    // @ts-ignore
    user.hasUserEditPermission = user.roles.includes(UserRole.ADMIN)
    // @ts-ignore
    user.hasBlockPermission = user.roles.includes(UserRole.ADMIN)
    // @ts-ignore
    user.hasPasswordChangePermission = user.roles.includes(UserRole.ADMIN);

    // @ts-ignore
    user.hasContentEditPermission = user.roles.includes(UserRole.ADMIN) || user.roles.includes(UserRole.EDITOR)

    if (!user) {
      res.end(JSON.stringify({
        user: null,
      }));
    } else {
      const shelfService = ShelfService.instance;
      const shelves = await shelfService.getShelf({ owner: user })

      res.end(JSON.stringify({
        user,
        shelves,
      }))
    }
  }

  public static async getUsers(req: Request, res: Response) {
    const userService = UserService.instance;
    const users = await userService.getUsers()

    res.end(JSON.stringify({
      users,
    }));
  }

  static logout(req: Request) {
    req.logout();
  }

  static async register(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const errors = UserService.validate(body);

    if (0 === errors.length) {
      const userExists = await UserService.instance.userExists(body.username, body.email);

      if (!userExists) {
        const repository = getRepository(User);
        const user = repository.create();

        user.email = body.email;
        user.username = body.username;
        user.roles = [UserRole.AUTHORIZED];
        user.shelves = []

        await user.setPassword(body.password);
        await repository.save(user);

        const token = jwt.sign(
          { email: user.email },
          passportConfig.secret,
          {
            expiresIn: 1000000000000
          });

        res.end(JSON.stringify({
          redirect: `/user`,
          token,
        }))
      } else {
        res.end(JSON.stringify({
          message: "Użytkownik o tej nazwie lub adresie email już istnieje",
        }))
      }
    } else {
      res.end(JSON.stringify({ errors }))
    }

  }

  static async update(req: Request, res: Response) {
    const body = req.body;
    const errors = UserService.validateUpdate(body);


    if (0 === errors.length) {
      const user = (await UserService.instance.getUsers({ id: req.params.id }))[0];

      const emailUser = (await UserService.instance.getUsers({ email: body.email }))[0]
      const usernameUser = (await UserService.instance.getUsers({ email: body.username }))[0]

      if (user && !emailUser && !usernameUser) {
        const repository = getRepository(User);

        user.email = req.body.email;
        user.username = req.body.username;

        await repository.save(user);
      } else {
        res.status(400).end(JSON.stringify({
          message: "Użytkownik o tym adresie email/nazwie już istnieje"
        }))
      }
    } else {
      res.status(400).end(JSON.stringify({ errors }))
    }
  }
}
