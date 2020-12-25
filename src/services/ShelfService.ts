import { createQueryBuilder, getManager, getRepository, QueryBuilder, Repository } from "typeorm/index";
import { Book } from "@entities/Book";
import { DataObject } from "@/types";
import { Author } from "@entities/Author";
import { User } from "@entities/User";
import { Shelf } from "@entities/Shelf";
import { BookOnShelf } from "@entities/BookOnShelf";
import { BookData } from "@entities/DataEntities/BookData";

export class ShelfService {

  private shelfRepository: Repository<Shelf>;

  private static _instance: ShelfService;

  public static get instance() {
    if (!this._instance) {
      this._instance = new ShelfService()
    }

    return this._instance
  }

  private constructor() {
    this.shelfRepository = getRepository<Shelf>(Shelf)
  }

  public async getShelf(params?: DataObject): Promise<Shelf[]> {
    return this.shelfRepository.find(params)
  }

  public async getBooksDataByShelf(shelf: Shelf): Promise<BookData[]> {
    const result: BookData[] = [];

    for (const bookOnShelf of shelf.books) {
      const bookData = new BookData(bookOnShelf.book);

      bookData.addedToShelf = bookOnShelf.added;

      result.push(bookData)
    }

    return result;
  }
}

