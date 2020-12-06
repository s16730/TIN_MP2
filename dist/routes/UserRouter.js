"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = express_1.Router();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
router.get('/all', (req, res, next) => {
    UserController_1.UserController.getUserViewPage(req, res);
});
router.get('/register', (req, res, next) => {
    UserController_1.UserController.getRegistrationPage(req, res);
});
router.get('/login', (req, res, next) => {
    UserController_1.UserController.getLoginPage(req, res);
});
router.get('/logout', (req, res, next) => {
});
router.get('/:id/edit', (req, res, next) => {
    UserController_1.UserController.getEditPage(req, res);
});
router.get('/:id', (req, res, next) => {
    UserController_1.UserController.getUserPage(req, res);
});
exports.default = router;
