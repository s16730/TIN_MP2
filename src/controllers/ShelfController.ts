import { Request, Response } from "express";
import { ShelfService } from "@services/ShelfService";
import { getRepository } from "typeorm/index";
import { Shelf } from "@entities/Shelf";
import { UserService } from "@services/UserService";

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

  public static async getEditShelfPage(req: Request, res: Response) {
    const data = (await ShelfService.instance.getShelf({ id: req.params.id }))[0]

    res.render("page/shelf/editShelf", {
      data,
      message: req.body.message,
    })
  }

  static async updateShelf(req: Request, res: Response) {
    const shelf = (await ShelfService.instance.getShelf({ id: req.params.id }))[0]
    const body = req.body;

    if (shelf) {
      const errors = ShelfService.validate(body);


      if (0 === errors.length) {
        const shelfRepository = getRepository<Shelf>(Shelf);
        shelf.name = body.name;

        await shelfRepository.save(shelf);

        res.end(JSON.stringify({ message: "Zapisano" }))
      } else {
        res.status(400)
        res.end(JSON.stringify({ errors }))
      }
    } else {
      this.addShelf(req, res);
    }
  }

  static async addShelf(req: Request, res: Response) {
    const body = req.body;
    const errors = ShelfService.validate(body);

    if (0 === errors.length) {
      const shelfRepository = getRepository<Shelf>(Shelf);
      const shelf = shelfRepository.create();
      shelf.name = body.name;
//todo: set owner
      await shelfRepository.save(shelf);

      res.end(JSON.stringify({ message: "Zapisano" }))
    } else {
      res.status(400)
      res.end(JSON.stringify({ errors }))
    }
  }
}
