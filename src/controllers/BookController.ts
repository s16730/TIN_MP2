import { Request, Response } from "express";
import { getRepository } from "typeorm/index";
import { Book } from "@entities/Book";
import { BookService } from "@services/BookService";
import { NotFoundException } from "@/exceptions/NotFoundException";
import { AuthorService } from "@services/AuthorService";

export class BookController {
  public static async getBookPage(req: Request, res: Response) {
    const bookService = BookService.instance;
    const books = await bookService.getBooks({ id: req.params.id })

    if (books.length > 0) {
      const book = books[0];
      const authorSimilar = await bookService.getBooksByAuthors(book.authors)

      res.render("page/book/book", {
        book,
        authorSimilar,
      })

      console.log(book)
    } else {
      throw new NotFoundException()
    }
  }

  public static async getBookViewPage(req: Request, res: Response) {
    const books = await BookService.instance.getBooks()
    const authorService = AuthorService.instance;
    const authors = await authorService.getAuthors()

    res.render("page/book/bookView", {
      books,
      authors,
    })
  }

  public static getAddBookPage(req: Request, res: Response) {
    res.render("page/book/addBook", {})

  }
}
