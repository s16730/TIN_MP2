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
exports.AuthorService = void 0;
const index_1 = require("typeorm/index");
const Author_1 = require("@entities/Author");
const BookService_1 = require("@services/BookService");
const Validator_1 = require("@/utils/Validator");
class AuthorService {
    constructor() {
        this.bookService = BookService_1.BookService.instance;
        this.authorRepository = index_1.getRepository(Author_1.Author);
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new AuthorService();
        }
        return this._instance;
    }
    getAuthors(searchParams) {
        return this.authorRepository.find(searchParams);
    }
    getBooks(author) {
        return this.bookService.getBooksByAuthors([author]);
    }
    getAuthorsByFullName(names) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            const promises = [];
            names.forEach((name) => {
                let data = name.split(" ");
                data = data.filter(entry => entry.length > 0);
                promises.push(new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                    const author = yield this.authorRepository.find({
                        name: data[0],
                        surname: data[1],
                    });
                    result.push(author[0]);
                    resolve();
                })));
            });
            yield Promise.all(promises);
            result = result.filter(entry => entry);
            return result;
        });
    }
    static validate(body) {
        const errors = [];
        errors.push(Validator_1.Validator.isFilled("name", body.name), Validator_1.Validator.isFilled("surname", body.surname));
        return errors.filter(e => e);
    }
}
exports.AuthorService = AuthorService;
