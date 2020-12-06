"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    static getLoginPage(req, res) {
        res.render("page/user/login", {});
    }
    static getRegistrationPage(req, res) {
        res.render("page/user/register", {});
    }
    static getUserPage(req, res) {
        res.render("page/user/user", {});
    }
    static getUserViewPage(req, res) {
        res.render("page/user/usersView", {});
    }
    static getEditPage(req, res) {
        res.render("page/user/register", {});
    }
}
exports.UserController = UserController;
