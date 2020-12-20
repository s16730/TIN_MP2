import { Request, Response } from "express";

export class UserController {
  public static getLoginPage(req: Request, res: Response) {
    res.render("page/user/login", {})
  }

  public static getRegistrationPage(req: Request, res: Response) {
    res.render("page/user/register", {})
  }

  public static getUserPage(req: Request, res: Response) {
    res.render("page/user/user", {})
  }

  public static getUserViewPage(req: Request, res: Response) {
    res.render("page/user/usersView", {})
  }
  public static getEditPage(req: Request, res: Response) {
    res.render("page/user/register", {})
  }

  static logout() {

  }
}
