import { Request, Response } from "express";
import { UserService } from "@services/UserService";
import { User } from "@entities/User";
import { ShelfService } from "@services/ShelfService";

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
}
