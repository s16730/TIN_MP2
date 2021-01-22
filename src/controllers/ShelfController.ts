import { Request, Response } from "express";
import { ShelfService } from "@services/ShelfService";
import { getRepository } from "typeorm/index";
import { Shelf } from "@entities/Shelf";
import { UserService } from "@services/UserService";
import { NotFoundException } from "@/exceptions/NotFoundException";
import { ForbiddenException } from "@/exceptions/ForbiddenException";
import { BookOnShelf } from "@entities/BookOnShelf";

export class ShelfController {
  public static async getShelf(req: Request, res: Response) {
    const user = await UserService.currentUser(req);

    if (user) {
      const shelfService = ShelfService.instance;
      const shelf = (await shelfService.getShelf({
        id: req.params.id,
        owner: user.id,
      }))[0];

      if (shelf) {
        const books = await shelfService.getBooksDataByShelf(shelf);

        res.end(JSON.stringify({
          shelf,
          books,
        }))
      } else {
        throw new NotFoundException()
      }
    } else {
      throw new NotFoundException()
    }
  }

  public static async getShelves(req: Request, res: Response) {
    const user = await UserService.currentUser(req);

    if (user) {
      const shelfService = ShelfService.instance;
      const shelves = await shelfService.getShelf({
        owner: user.id,
      });

      res.end(JSON.stringify({
        shelves,
      }));
    } else {
      throw new NotFoundException();
    }
  }

  public static async getEditShelfPage(req: Request, res: Response) {

    const user = await UserService.currentUser(req);

    if (user) {
      const data = (await ShelfService.instance.getShelf({
        id: req.params.id,
        owner: user.id,
      }))[0]

      res.render("page/shelf/editShelf", {
        data,
        message: req.body.message,
      })
    } else {
      throw new NotFoundException();
    }


  }

  static async updateShelf(req: Request, res: Response) {
    const user = await UserService.currentUser(req);

    if (user) {
      const shelf = (await ShelfService.instance.getShelf({
        id: req.params.id,
        owner: user.id,
      }))[0]
      const body = req.body;

      if (shelf) {
        const errors = ShelfService.validate(body);


        if (0 === errors.length) {
          const shelfRepository = getRepository<Shelf>(Shelf);
          shelf.name = body.name;

          await shelfRepository.save(shelf);

          res.end(JSON.stringify({
            redirect: `/shelf/${shelf.id}`,
            message: "Zapisano"
          }))
        } else {
          res.status(400)
          res.end(JSON.stringify({ errors }))
        }
      } else {
        return await this.addShelf(req, res);
      }
    } else {
      throw new ForbiddenException()
    }
  }

  static async addShelf(req: Request, res: Response) {
    const user = await UserService.currentUser(req);
    if (user) {

      const body = req.body;
      const errors = ShelfService.validate(body);

      if (0 === errors.length) {
        const shelfRepository = getRepository<Shelf>(Shelf);
        const shelf = shelfRepository.create();
        shelf.name = body.name;
        shelf.owner = user;
        await shelfRepository.save(shelf);

        res.end(JSON.stringify({
          redirect: `/shelf/${shelf.id}`,
          message: "Zapisano"
        }))
      } else {
        res.status(400)
        res.end(JSON.stringify({ errors }))
      }
    } else {
      throw new ForbiddenException();
    }
  }

  static async AddBookToShelf(req: Request, res: Response) {
    const user = await UserService.currentUser(req);

    if (user) {
      const body = req.body;

      const bookOnShelfRepository = getRepository<BookOnShelf>(BookOnShelf);

      const bookOnShelf = bookOnShelfRepository.create();
      try {
        // @ts-ignore
        bookOnShelf.book = body.bookId as unknown as number;
        // @ts-ignore
        bookOnShelf.shelf = body.shelfId as unknown as number;

        await bookOnShelfRepository.save(bookOnShelf)

        res.status(200).end()
      } catch (e) {
        console.log(e)
        res.status(400).end()
      }
    } else {
      throw new ForbiddenException();
    }
  }

  static async RemoveBookFromShelf(req: Request, res: Response) {
    const user = await UserService.currentUser(req);

    if (user) {
      const body = req.body;

      const bookOnShelfRepository = getRepository<BookOnShelf>(BookOnShelf);

      const result = await bookOnShelfRepository.find({
        // @ts-ignore
        book: body.bookId,
        shelf: body.shelfId,
      })

      console.log(result)

      await bookOnShelfRepository.remove(result);

      res.status(200).end();
    } else {
      throw new ForbiddenException();
    }
  }


}
