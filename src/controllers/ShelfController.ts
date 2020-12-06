import { Request, Response } from "express";

export class ShelfController {
  public static getShelfPage(req: Request, res: Response) {
    res.render("page/shelf/shelf", {})
  }

  public static getShelvesViewPage(req: Request, res: Response) {
    res.render("page/shelf/shelves", {})
  }

  public static getAddShelfPage(req: Request, res: Response) {
    res.render("page/shelf/addShelf", {})
  }
}
