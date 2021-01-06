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
exports.AuthorController = void 0;
const AuthorService_1 = require("@services/AuthorService");
const BookService_1 = require("@services/BookService");
const index_1 = require("typeorm/index");
const Author_1 = require("@entities/Author");
const NotFoundException_1 = require("@/exceptions/NotFoundException");
class AuthorController {
    static getAuthorPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const authorService = AuthorService_1.AuthorService.instance;
            const authors = yield authorService.getAuthors({ id: req.params.id });
            const author = authors[0];
            if (author) {
                const books = yield authorService.getBooks(author);
                res.render("page/author/author", {
                    author,
                    books
                });
            }
            else {
                throw new NotFoundException_1.NotFoundException();
            }
        });
    }
    static getAuthorViewPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const authorService = AuthorService_1.AuthorService.instance;
            const authors = yield authorService.getAuthors();
            res.render("page/author/authorsView", {
                authors
            });
        });
    }
    static getAuthorBooksViewPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookService = BookService_1.BookService.instance;
            const authorService = AuthorService_1.AuthorService.instance;
            const author = yield authorService.getAuthors({ id: req.params.id });
            if (!author) {
                const books = yield bookService.getBooksByAuthors(author);
                res.render("page/book/bookView", {
                    books,
                    authors: null,
                });
            }
            else {
                throw new NotFoundException_1.NotFoundException();
            }
        });
    }
    static getEditAuthorPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = (yield AuthorService_1.AuthorService.instance.getAuthors({ id: req.params.id }))[0];
            res.render("page/author/authorEdit", {
                data,
                message: req.body.message,
            });
        });
    }
    static updateAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = (yield AuthorService_1.AuthorService.instance.getAuthors({ id: req.params.id }))[0];
            const body = req.body;
            if (author) {
                const errors = AuthorService_1.AuthorService.validate(body);
                if (0 === errors.length) {
                    const authorRepository = index_1.getRepository(Author_1.Author);
                    author.name = body.name;
                    author.surname = body.surname;
                    author.bio = body.bio;
                    yield authorRepository.save(author);
                    res.end(JSON.stringify({ message: "Zapisano" }));
                }
                else {
                    res.status(400);
                    res.end(JSON.stringify({ errors }));
                }
            }
            else {
                this.addAuthor(req, res);
            }
        });
    }
    static addAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const errors = AuthorService_1.AuthorService.validate(body);
            if (0 === errors.length) {
                const authorRepository = index_1.getRepository(Author_1.Author);
                const author = authorRepository.create();
                author.name = body.name;
                author.surname = body.surname;
                author.bio = body.bio;
                yield authorRepository.save(author);
                res.end(JSON.stringify({
                    redirect: `/author/${author.id}`
                }));
            }
            else {
                res.status(400);
                res.end(JSON.stringify({ errors }));
            }
        });
    }
}
exports.AuthorController = AuthorController;
