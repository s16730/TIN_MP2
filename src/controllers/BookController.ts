import { Request, Response } from "express";
import { getRepository } from "typeorm/index";
import { Book } from "@entities/Book";
import { BookService } from "@services/BookService";
import { NotFoundException } from "@/exceptions/NotFoundException";
import { AuthorService } from "@services/AuthorService";

export class BookController {
  public static async getBook(req: Request, res: Response) {
    const bookService = BookService.instance;
    const books = await bookService.getBooks({ id: req.params.id })

    if (books.length > 0) {
      const book = books[0];
      const authorSimilar = await bookService.getBooksByAuthors(book.authors)

      res.end(JSON.stringify({
        book,
        authorSimilar,
      }));
    } else {
      throw new NotFoundException()
    }
  }

  public static async getBooks(req: Request, res: Response) {
    const books = await BookService.instance.getBooks()

    res.end(JSON.stringify({
      books,
    }));
  }

  public static async getEditAddBookPage(req: Request, res: Response) {

    const bookService = BookService.instance;
    let data: Book | null = (await bookService.getBooks({ id: req.params.id }))[0];

    if (!data) {
      data = null;
    }

    res.render("page/book/bookEditorView", {
      data,
      message: req.body.message
    })
  }

  static async addBook(req: Request, res: Response) {
    const bookRepository = getRepository<Book>(Book);

    const body = req.body;
    const book = bookRepository.create();
    const errors = BookService.validate(body);

    if (0 === errors.length) {
      const authorService = AuthorService.instance;

      book.title = body.title;
      book.isbn = body.isbn || "";
      book.publicationDate = body.publicationDate;
      book.description = body.description;
      book.authors = await authorService.getAuthorsByFullName(body.authors.split(','));

      await bookRepository.save(book);

      res.end(JSON.stringify({
        redirect: `/book/${book.id}`
      }))
    } else {
      res.status(400)
      res.end(JSON.stringify({
        errors,
      }))
    }
  }

  static async updateBook(req: Request, res: Response) {
    const bookService = BookService.instance;

    const body = req.body;
    const book = (await bookService.getBooks({ id: req.params.id }))[0];
    if (book) {

      const errors = BookService.validate(body);
      if (0 === errors.length) {
        const bookRepository = getRepository<Book>(Book);
        const authorService = AuthorService.instance;

        book.title = body.title;
        book.isbn = body.isbn || "";
        book.publicationDate = body.publicationDate;
        book.description = body.description;
        book.authors = await authorService.getAuthorsByFullName(body.authors.split(','));

        await bookRepository.save(book);
        res.end(JSON.stringify({ message: "Zapisano" }))
      } else {
        res.status(400)
        res.end(JSON.stringify({ errors }))
      }
    } else {
      this.addBook(req, res);
    }
  }
}
