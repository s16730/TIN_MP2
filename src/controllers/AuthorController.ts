import { Request, Response } from "express";
import { AuthorService } from "@services/AuthorService";
import { BookService } from "@services/BookService";
import { getRepository } from "typeorm/index";
import { Author } from "@entities/Author";
import { NotFoundException } from "@/exceptions/NotFoundException";

export class AuthorController {
  public static async getAuthor(req: Request, res: Response) {
    const authorService = AuthorService.instance;
    const authors = await authorService.getAuthors({ id: req.params.id });

    const author = authors[0];

    if (author) {

      const books = await authorService.getBooks(author);

      res.end(JSON.stringify({
        author,
        books,
      }))
    } else {
      throw new NotFoundException()
    }
  }

  public static async getAuthors(req: Request, res: Response) {
    const authorService = AuthorService.instance;
    const authors = await authorService.getAuthors()

    res.end(JSON.stringify({
      authors
    }));
  }

  public static async getAuthorBooks(req: Request, res: Response) {
    const bookService = BookService.instance;
    const authorService = AuthorService.instance;

    const author = await authorService.getAuthors({ id: req.params.id })

    if (!author) {
      const books = await bookService.getBooksByAuthors(author);

      res.end(JSON.stringify({
        books,
      }))
    } else {
      throw new NotFoundException()
    }
  }

  static async getEditAuthorPage(req: Request, res: Response) {
    const data = (await AuthorService.instance.getAuthors({ id: req.params.id }))[0];

    res.render("page/author/authorEdit", {
      data,
      message: req.body.message,
    })
  }

  static async updateAuthor(req: Request, res: Response) {
    const author = (await AuthorService.instance.getAuthors({ id: req.params.id }))[0];
    const body = req.body;

    if (author) {
      const errors = AuthorService.validate(body);

      if (0 === errors.length) {
        const authorRepository = getRepository<Author>(Author);

        author.name = body.name;
        author.surname = body.surname;
        author.bio = body.bio;

        await authorRepository.save(author);
        res.end(JSON.stringify({ message: "Zapisano" }))
      } else {
        res.status(400);
        res.end(JSON.stringify({ errors }))
      }
    } else {
      this.addAuthor(req, res);
    }
  }

  static async addAuthor(req: Request, res: Response) {
    const body = req.body;

    const errors = AuthorService.validate(body);

    if (0 === errors.length) {
      const authorRepository = getRepository<Author>(Author);

      const author = authorRepository.create();
      author.name = body.name;
      author.surname = body.surname;
      author.bio = body.bio;

      await authorRepository.save(author);

      res.end(JSON.stringify({
        redirect: `/author/${author.id}`
      }))
    } else {
      res.status(400);
      res.end(JSON.stringify({ errors }))
    }
  }
}
