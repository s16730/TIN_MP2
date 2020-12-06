"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorController = void 0;
class AuthorController {
    static getAuthorPage(req, res) {
        res.render("page/author/author", {});
    }
    static getAddAuthorPage(req, res) {
        res.render("page/author/addAuthor", {});
    }
    static getAuthorViewPage(req, res) {
        res.render("page/author/authorsView", {});
    }
    static getAuthorBooksViewPage(req, res) {
        res.render("page/author/authorBooksView", {});
    }
}
exports.AuthorController = AuthorController;
