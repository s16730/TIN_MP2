import { createQueryBuilder, getManager, getRepository, QueryBuilder, Repository } from "typeorm/index";
import { Book } from "@entities/Book";
import { DataObject } from "@/types";
import { Author } from "@entities/Author";
import { Validator } from "@/utils/Validator";

export class BookService {

  private bookRepository: Repository<Book>;

  private static _instance: BookService;

  public static get instance() {
    if (!this._instance) {
      this._instance = new BookService()
    }

    return this._instance
  }

  private constructor() {
    this.bookRepository = getRepository<Book>(Book)
  }


  public getBooks(searchParams?: DataObject) {
    return this.bookRepository.find(searchParams);
  }

  async getBooksByAuthors(authors: Author[]): Promise<Book[]> {
    const authorIds: number[] = [];

    authors.forEach(a => authorIds.push(a.id))

    return await createQueryBuilder(Book, "book")
      .innerJoinAndSelect("book.authors", "author", "author.id IN(:authorIds)", { authorIds })
      .getMany();
  }

  static validate(requestBody: DataObject) {
    const errors = [];

    errors.push(
      Validator.isFilled("title", requestBody.title),
      Validator.isFilled(" publicationDate", requestBody.publicationDate),
      Validator.isFilled("authors", requestBody.authors),
      Validator.isDate("publicationDate", requestBody.publicationDate)
    )
    return errors.filter(error => error);
  }
}

