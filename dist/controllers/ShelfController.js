"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelfController = void 0;
class ShelfController {
    static getShelfPage(req, res) {
        res.render("page/shelf/shelf", {});
    }
    static getShelvesViewPage(req, res) {
        res.render("page/shelf/shelves", {});
    }
    static getAddShelfPage(req, res) {
        res.render("page/shelf/addShelf", {});
    }
}
exports.ShelfController = ShelfController;
