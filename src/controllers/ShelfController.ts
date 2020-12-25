import { Request, Response } from "express";
import { ShelfService } from "@services/ShelfService";

export class ShelfController {
  public static async getShelfPage(req: Request, res: Response) {
    const shelfService = ShelfService.instance;
    const shelf = (await shelfService.getShelf({ id: req.params.id }))[0];
    const books = await shelfService.getBooksDataByShelf(shelf);


    res.render("page/shelf/shelf", {
      shelf,
      books,
    })
  }

  public static async getShelvesViewPage(req: Request, res: Response) {
    const shelfService = ShelfService.instance;
    const shelves = await shelfService.getShelf();


    res.render("page/shelf/shelves", {
      shelves,
    })
  }

  public static getAddShelfPage(req: Request, res: Response) {
    res.render("page/shelf/addShelf", {})
  }
}
