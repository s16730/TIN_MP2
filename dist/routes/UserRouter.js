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
const UserController_1 = require("../controllers/UserController");
const passport_1 = __importDefault(require("passport"));
const UserService_1 = require("@services/UserService");
const ForbiddenException_1 = require("@/exceptions/ForbiddenException");
const router = express_1.Router();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
router.get('/all', (req, res, next) => {
    UserController_1.UserController.getUserViewPage(req, res);
});
router.get('/', (req, res, next) => {
    UserController_1.UserController.getCurrentUserPage(req, res);
});
router.get('/register', (req, res, next) => {
    UserController_1.UserController.getRegistrationPage(req, res);
});
router.post('/register', (req, res, next) => {
    UserController_1.UserController.register(req, res, next);
});
router.get('/login', (req, res, next) => {
    UserController_1.UserController.getLoginPage(req, res);
});
router.post('/login', passport_1.default.authenticate("local"), (req, res, next) => {
    res.end(JSON.stringify({
        redirect: "/user"
    }));
});
router.get('/logout', (req, res, next) => {
    UserController_1.UserController.logout();
});
router.get('/:id/edit', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserService_1.UserService.currentUser(req);
    if (user && user.id.toString() === req.params.id) {
        UserController_1.UserController.getUserViewPage(req, res);
    }
    else {
        throw new ForbiddenException_1.ForbiddenException();
    }
    UserController_1.UserController.getEditPage(req, res);
}));
router.get('/:id', (req, res, next) => {
    UserController_1.UserController.getUserPage(req, res);
});
exports.default = router;
