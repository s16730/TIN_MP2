"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const index_1 = require("typeorm/index");
const Book_1 = require("@entities/Book");
const BookService_1 = require("@services/BookService");
const NotFoundException_1 = require("@/exceptions/NotFoundException");
const AuthorService_1 = require("@services/AuthorService");
class BookController {
    static getBookPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookService = BookService_1.BookService.instance;
            const books = yield bookService.getBooks({ id: req.params.id });
            if (books.length > 0) {
                const book = books[0];
                const authorSimilar = yield bookService.getBooksByAuthors(book.authors);
                res.render("page/book/book", {
                    book,
                    authorSimilar,
                });
            }
            else {
                throw new NotFoundException_1.NotFoundException();
            }
        });
    }
    static getBookViewPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield BookService_1.BookService.instance.getBooks();
            const authorService = AuthorService_1.AuthorService.instance;
            const authors = yield authorService.getAuthors();
            res.render("page/book/bookView", {
                books,
                authors,
            });
        });
    }
    static getEditAddBookPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookService = BookService_1.BookService.instance;
            let data = (yield bookService.getBooks({ id: req.params.id }))[0];
            if (!data) {
                data = null;
            }
            res.render("page/book/bookEditorView", {
                data,
                message: req.body.message
            });
        });
    }
    static addBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookRepository = index_1.getRepository(Book_1.Book);
            const body = req.body;
            const book = bookRepository.create();
            const errors = BookService_1.BookService.validate(body);
            if (0 === errors.length) {
                const authorService = AuthorService_1.AuthorService.instance;
                book.title = body.title;
                book.isbn = body.isbn || "";
                book.publicationDate = body.publicationDate;
                book.description = body.description;
                book.authors = yield authorService.getAuthorsByFullName(body.authors.split(','));
                yield bookRepository.save(book);
                res.end(JSON.stringify({
                    redirect: `/book/${book.id}`
                }));
            }
            else {
                res.status(400);
                res.end(JSON.stringify({
                    errors,
                }));
            }
        });
    }
    static updateBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookService = BookService_1.BookService.instance;
            const body = req.body;
            const book = (yield bookService.getBooks({ id: req.params.id }))[0];
            if (book) {
                const errors = BookService_1.BookService.validate(body);
                if (0 === errors.length) {
                    const bookRepository = index_1.getRepository(Book_1.Book);
                    const authorService = AuthorService_1.AuthorService.instance;
                    book.title = body.title;
                    book.isbn = body.isbn || "";
                    book.publicationDate = body.publicationDate;
                    book.description = body.description;
                    book.authors = yield authorService.getAuthorsByFullName(body.authors.split(','));
                    yield bookRepository.save(book);
                    res.end(JSON.stringify({ message: "Zapisano" }));
                }
                else {
                    res.status(400);
                    res.end(JSON.stringify({ errors }));
                }
            }
            else {
                this.addBook(req, res);
            }
        });
    }
}
exports.BookController = BookController;
