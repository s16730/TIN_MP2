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
exports.BookService = void 0;
const index_1 = require("typeorm/index");
const Book_1 = require("@entities/Book");
const Validator_1 = require("@/utils/Validator");
class BookService {
    constructor() {
        this.bookRepository = index_1.getRepository(Book_1.Book);
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new BookService();
        }
        return this._instance;
    }
    getBooks(searchParams) {
        return this.bookRepository.find(searchParams);
    }
    getBooksByAuthors(authors) {
        return __awaiter(this, void 0, void 0, function* () {
            const authorIds = [];
            authors.forEach(a => authorIds.push(a.id));
            return yield index_1.createQueryBuilder(Book_1.Book, "book")
                .innerJoinAndSelect("book.authors", "author", "author.id IN(:authorIds)", { authorIds })
                .getMany();
        });
    }
    static validate(requestBody) {
        const errors = [];
        errors.push(Validator_1.Validator.isFilled("title", requestBody.title), Validator_1.Validator.isFilled(" publicationDate", requestBody.publicationDate), Validator_1.Validator.isFilled("authors", requestBody.authors), Validator_1.Validator.isDate("publicationDate", requestBody.publicationDate));
        return errors.filter(error => error);
    }
}
exports.BookService = BookService;
