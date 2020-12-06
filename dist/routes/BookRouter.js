"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const BookController_1 = require("../controllers/BookController");
const router = express_1.Router();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
router.get('/:id', (req, res, next) => {
    BookController_1.BookController.getBookPage(req, res);
});
router.get('/all', (req, res, next) => {
    BookController_1.BookController.getBookViewPage(req, res);
});
router.get('/', (req, res, next) => {
    BookController_1.BookController.getBookViewPage(req, res);
});
router.get('/add', (req, res, next) => {
    BookController_1.BookController.getAddBookPage(req, res);
});
router.get('/:id/edit', (req, res, next) => {
    BookController_1.BookController.getAddBookPage(req, res);
});
exports.default = router;
