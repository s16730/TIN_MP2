"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookRouter_1 = __importDefault(require("./BookRouter"));
const AuthorRouter_1 = __importDefault(require("./AuthorRouter"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const ShelfRouter_1 = __importDefault(require("./ShelfRouter"));
const BookController_1 = require("../controllers/BookController");
// Init router and path
const router = express_1.Router();
// Add sub-routes
router.use('/user', UserRouter_1.default);
router.use('/shelf', ShelfRouter_1.default);
router.use('/book', BookRouter_1.default);
router.use('/author', AuthorRouter_1.default);
router.get('', ((req, res, next) => {
    BookController_1.BookController.getBookViewPage(req, res);
}));
// Export the base-router
exports.default = router;
