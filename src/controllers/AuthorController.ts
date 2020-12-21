import { Request, Response } from "express";
import { AuthorService } from "@services/AuthorService";
import { BookService } from "@services/BookService";

export class AuthorController {
  public static async getAuthorPage(req: Request, res: Response) {
    const authorService = AuthorService.instance;
    const authors = await authorService.getAuthors({ id: req.params.id });

    const author = authors[0];
    const books = await authorService.getBooks(author);

    res.render("page/author/author", {
      author,
      books
    })
  }

  public static getAddAuthorPage(req: Request, res: Response) {
    res.render("page/author/addAuthor", {})
  }

  public static async getAuthorViewPage(req: Request, res: Response) {
    const authorService = AuthorService.instance;
    const authors = await authorService.getAuthors()

    res.render("page/author/authorsView", {
      authors
    })
  }

  public static async getAuthorBooksViewPage(req: Request, res: Response) {
    const bookService = BookService.instance;
    const authorService = AuthorService.instance;

    const author = await authorService.getAuthors({ id: req.params.id })
    const books = await bookService.getBooksByAuthors(author);

    res.render("page/book/bookView", {
      books,
      authors: null,
    })
  }
}
