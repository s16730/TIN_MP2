"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const ShelfController_1 = require("../controllers/ShelfController");
const router = express_1.Router();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
router.get('/:id', (req, res, next) => {
    ShelfController_1.ShelfController.getShelfPage(req, res);
});
router.get('/all', (req, res, next) => {
    ShelfController_1.ShelfController.getShelvesViewPage(req, res);
});
router.get('/all/short', (req, res, next) => {
    // todo: only for logged users, returns only data for adding to shelf
});
router.post('/:shelfId/add-book/:bookId', ((req, res, next) => {
}));
router.get('/add', ((req, res, next) => {
    ShelfController_1.ShelfController.getAddShelfPage(req, res);
}));
router.get('/:id/edit', ((req, res, next) => {
    ShelfController_1.ShelfController.getAddShelfPage(req, res);
}));
exports.default = router;
