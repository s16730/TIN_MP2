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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("@services/UserService");
const User_1 = require("@entities/User");
const ShelfService_1 = require("@services/ShelfService");
const index_1 = require("typeorm/index");
const UserRole_1 = require("@entities/UserRole");
const NotFoundException_1 = require("@/exceptions/NotFoundException");
class UserController {
    static getLoginPage(req, res) {
        res.render("page/user/login", {});
    }
    static getRegistrationPage(req, res) {
        res.render("page/user/register", {});
    }
    static getUserPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = UserService_1.UserService.instance;
            const users = yield userService.getUsers({ id: req.params.id });
            const user = users[0];
            if (!user) {
                const shelfService = ShelfService_1.ShelfService.instance;
                const shelves = yield shelfService.getShelf({ owner: user });
                res.render("page/user/user", {
                    user,
                    shelves,
                });
            }
            else {
                throw new NotFoundException_1.NotFoundException();
            }
        });
    }
    static getCurrentUserPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = UserService_1.UserService.instance;
            const users = yield userService.getUsers({ id: req.user.id });
            const user = users[0];
            if (!user) {
                res.redirect("/user/login");
            }
            const shelfService = ShelfService_1.ShelfService.instance;
            const shelves = yield shelfService.getShelf({ owner: user });
            res.render("page/user/user", {
                user,
                shelves,
            });
        });
    }
    static getUserViewPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = UserService_1.UserService.instance;
            const users = yield userService.getUsers({ id: req.params.id });
            res.render("page/user/usersView", {
                users,
            });
        });
    }
    static getEditPage(req, res) {
        res.render("page/user/register", {});
    }
    static logout() {
    }
    static register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const errors = UserService_1.UserService.validate(body);
            if (0 === errors.length) {
                const userExists = yield UserService_1.UserService.instance.userExists(body.username, body.email);
                if (!userExists) {
                    const repository = index_1.getRepository(User_1.User);
                    const user = repository.create();
                    user.email = body.email;
                    user.username = body.username;
                    user.roles = [UserRole_1.UserRole.AUTHORIZED];
                    user.shelves = [];
                    yield user.setPassword(body.password);
                    yield repository.save(user);
                    req.logIn(user, (err) => {
                        if (err) {
                            return next(err);
                        }
                        res.end(JSON.stringify({
                            redirect: `/user`,
                        }));
                    });
                }
                else {
                    res.end(JSON.stringify({
                        message: "Użytkownik o tej nazwie lub adresie email już istnieje",
                    }));
                }
            }
            else {
                res.end(JSON.stringify({ errors }));
            }
        });
    }
}
exports.UserController = UserController;
