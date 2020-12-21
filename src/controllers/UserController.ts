import { Request, Response } from "express";
import { UserService } from "@services/UserService";

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

    const user = users[0];

    res.render("page/user/user", {
      user,
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
