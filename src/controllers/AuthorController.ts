import { Request, Response } from "express";

export class AuthorController {
  public static getAuthorPage(req: Request, res: Response) {
    res.render("page/author/author", {})
  }

  public static getAddAuthorPage(req: Request, res: Response) {
    res.render("page/author/addAuthor", {})
  }

  public static getAuthorViewPage(req: Request, res: Response) {
    res.render("page/author/authorsView", {})
  }

  public static getAuthorBooksViewPage(req: Request, res: Response) {
    res.render("page/author/authorBooksView", {})
  }
}
