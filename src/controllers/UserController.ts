import { NextFunction, Request, Response } from "express";
import { UserService } from "@services/UserService";
import { User } from "@entities/User";
import { ShelfService } from "@services/ShelfService";
import { getRepository } from "typeorm/index";
import { UserRole } from "@entities/UserRole";

export class UserController {
  public static getLoginPage(req: Request, res: Response) {
    res.render("page/user/login", {})
  }

  public static getRegistrationPage(req: Request, res: Response) {
    res.render("page/user/register", {})
  }

  public static async getUserPage(req: Request, res: Response) {
    const userService = UserService.instance;
    const users = await userService.getUsers({ id: req.params.id })
    const user: User = users[0];

    const shelfService = ShelfService.instance;
    const shelves = await shelfService.getShelf({ owner: user })

    res.render("page/user/user", {
      user,
      shelves,
    })
  }

  public static async getCurrentUserPage(req: Request, res: Response) {
    const userService = UserService.instance;

    const users = await userService.getUsers({ id: (req.user as any).id })
    const user: User = users[0];

    if (!user) {
      res.redirect("/user/login");
    }

    const shelfService = ShelfService.instance;
    const shelves = await shelfService.getShelf({ owner: user })

    res.render("page/user/user", {
      user,
      shelves,
    })
  }

  public static async getUserViewPage(req: Request, res: Response) {
    const userService = UserService.instance;
    const users = await userService.getUsers({ id: req.params.id })

    res.render("page/user/usersView", {
      users,
    })
  }

  public static getEditPage(req: Request, res: Response) {
    res.render("page/user/register", {})
  }

  static logout() {

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

        req.logIn(user, (err) => {
          if (err) {
            return next(err)
          }

          res.end(JSON.stringify({
            redirect: `/user`,
          }))
        })
      } else {
        res.end(JSON.stringify({
          message: "Użytkownik o tej nazwie lub adresie email już istnieje",
        }))
      }
    } else {
      res.end(JSON.stringify({ errors }))
    }

  }
}
