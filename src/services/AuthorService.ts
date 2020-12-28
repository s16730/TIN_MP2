import { createQueryBuilder, getManager, getRepository, QueryBuilder, Repository } from "typeorm/index";
import { Book } from "@entities/Book";
import { DataObject, ErrorObject } from "@/types";
import { Author } from "@entities/Author";
import { BookService } from "@services/BookService";
import { Validator } from "@/utils/Validator";

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

  async getAuthorsByFullName(names: string[]) {
    let result: Author[] = [];
    const promises: Promise<void>[] = []

    names.forEach((name) => {
      let data = name.split(" ");

      data = data.filter(entry => entry.length > 0)

      promises.push(new Promise<void>(async resolve => {
        const author = await this.authorRepository.find({
          name: data[0],
          surname: data[1],
        })

        result.push(author[0])
        resolve();
      }))
    })

    await Promise.all(promises);

    result = result.filter(entry => entry);

    return result;
  }

  static validate(body: DataObject) {
    const errors = [];

    errors.push(
      Validator.isFilled("name", body.name),
      Validator.isFilled("surname", body.surname),
    )

    return errors.filter(e => e);
  }
}

