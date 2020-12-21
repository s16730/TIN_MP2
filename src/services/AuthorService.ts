import { createQueryBuilder, getManager, getRepository, QueryBuilder, Repository } from "typeorm/index";
import { Book } from "@entities/Book";
import { DataObject } from "@/types";
import { Author } from "@entities/Author";
import { BookService } from "@services/BookService";

export class AuthorService {

  private authorRepository: Repository<Author>;
  private bookService: BookService;

  private static _instance: AuthorService;

  public static get instance() {
    if (!this._instance) {
      this._instance = new AuthorService()
    }

    return this._instance
  }

  private constructor() {
    this.bookService = BookService.instance;
    this.authorRepository = getRepository<Author>(Author)
  }


  public getAuthors(searchParams?: DataObject) {
    return this.authorRepository.find(searchParams);
  }

  getBooks(author: Author) {
    return this.bookService.getBooksByAuthors([author]);
  }
}

