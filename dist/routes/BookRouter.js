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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const BookController_1 = require("../controllers/BookController");
const UserService_1 = require("@services/UserService");
const ArrayHelper_1 = require("@/utils/ArrayHelper");
const UserRole_1 = require("@entities/UserRole");
const ForbiddenException_1 = require("@/exceptions/ForbiddenException");
const router = express_1.Router();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
router.get('/all', (req, res, next) => {
    BookController_1.BookController.getBookViewPage(req, res);
});
router.get('/', (req, res, next) => {
    BookController_1.BookController.getBookViewPage(req, res);
});
router.get('/add', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserService_1.UserService.currentUser(req);
    if (user && ArrayHelper_1.ArrayHelper.intersect(user.roles, [UserRole_1.UserRole.ADMIN, UserRole_1.UserRole.EDITOR])) {
        BookController_1.BookController.getEditAddBookPage(req, res);
    }
    else {
        throw new ForbiddenException_1.ForbiddenException();
    }
}));
router.post('/add', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserService_1.UserService.currentUser(req);
    if (user && ArrayHelper_1.ArrayHelper.intersect(user.roles, [UserRole_1.UserRole.ADMIN, UserRole_1.UserRole.EDITOR])) {
        BookController_1.BookController.addBook(req, res);
    }
    else {
        throw new ForbiddenException_1.ForbiddenException();
    }
}));
router.get('/:id/edit', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserService_1.UserService.currentUser(req);
    if (user && ArrayHelper_1.ArrayHelper.intersect(user.roles, [UserRole_1.UserRole.ADMIN, UserRole_1.UserRole.EDITOR])) {
        BookController_1.BookController.getEditAddBookPage(req, res);
    }
    else {
        throw new ForbiddenException_1.ForbiddenException();
    }
}));
router.post('/:id/edit', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserService_1.UserService.currentUser(req);
    if (user && ArrayHelper_1.ArrayHelper.intersect(user.roles, [UserRole_1.UserRole.ADMIN, UserRole_1.UserRole.EDITOR])) {
        yield BookController_1.BookController.updateBook(req, res);
        BookController_1.BookController.getBookViewPage(req, res);
    }
    else {
        throw new ForbiddenException_1.ForbiddenException();
    }
}));
router.get('/:id', (req, res, next) => {
    BookController_1.BookController.getBookPage(req, res);
});
exports.default = router;
