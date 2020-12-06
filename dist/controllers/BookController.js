"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
class BookController {
    static getBookPage(req, res) {
        res.render("page/book/book", {});
    }
    static getBookViewPage(req, res) {
        console.log('here 2');
        res.render("page/book/bookView", {});
    }
    static getAddBookPage(req, res) {
        res.render("page/book/addBook", {});
    }
}
exports.BookController = BookController;
