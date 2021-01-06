"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookData = void 0;
const Book_1 = require("../Book");
class BookData extends Book_1.Book {
    constructor(book) {
        super();
        this.addedToShelf = null;
        this.title = book.title;
        this.authors = book.authors;
        this.publicationDate = book.publicationDate;
        this.isbn = book.isbn;
        this.description = book.description;
        this.id = book.id;
    }
}
exports.BookData = BookData;
