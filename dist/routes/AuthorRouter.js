"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const AuthorController_1 = require("../controllers/AuthorController");
const router = express_1.Router();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
router.get('/:id', (req, res, next) => {
    AuthorController_1.AuthorController.getAuthorPage(req, res);
});
router.get('/add', (req, res, next) => {
    AuthorController_1.AuthorController.getAddAuthorPage(req, res);
});
router.get('/:id/edit', (req, res, next) => {
    AuthorController_1.AuthorController.getAddAuthorPage(req, res);
});
router.get('/all', (req, res, next) => {
    AuthorController_1.AuthorController.getAuthorViewPage(req, res);
});
router.get('/:id/books', (req, res, next) => {
    AuthorController_1.AuthorController.getAuthorBooksViewPage(req, res);
});
exports.default = router;
