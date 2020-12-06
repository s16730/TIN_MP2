import { Request, Response } from "express";

export class BookController {
  public static getBookPage(req: Request, res: Response) {
    res.render("page/book/book", {})
  }

  public static getBookViewPage(req: Request, res: Response) {
    console.log('here 2')
    res.render("page/book/bookView", {})
  }

  public static getAddBookPage(req: Request, res: Response) {
    res.render("page/book/addBook", {})

  }
}
