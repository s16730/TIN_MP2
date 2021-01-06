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
exports.ShelfController = void 0;
const ShelfService_1 = require("@services/ShelfService");
const index_1 = require("typeorm/index");
const Shelf_1 = require("@entities/Shelf");
const UserService_1 = require("@services/UserService");
const NotFoundException_1 = require("@/exceptions/NotFoundException");
const ForbiddenException_1 = require("@/exceptions/ForbiddenException");
class ShelfController {
    static getShelfPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserService_1.UserService.currentUser(req);
            if (user) {
                const shelfService = ShelfService_1.ShelfService.instance;
                const shelf = (yield shelfService.getShelf({
                    id: req.params.id,
                    owner: user.id,
                }))[0];
                if (shelf) {
                    const books = yield shelfService.getBooksDataByShelf(shelf);
                    res.render("page/shelf/shelf", {
                        shelf,
                        books,
                    });
                }
                else {
                    throw new NotFoundException_1.NotFoundException();
                }
            }
            else {
                throw new NotFoundException_1.NotFoundException();
            }
        });
    }
    static getShelvesViewPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserService_1.UserService.currentUser(req);
            if (user) {
                const shelfService = ShelfService_1.ShelfService.instance;
                const shelves = yield shelfService.getShelf({
                    owner: user.id,
                });
                res.render("page/shelf/shelves", {
                    shelves,
                });
            }
            else {
                throw new NotFoundException_1.NotFoundException();
            }
        });
    }
    static getEditShelfPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserService_1.UserService.currentUser(req);
            if (user) {
                const data = (yield ShelfService_1.ShelfService.instance.getShelf({
                    id: req.params.id,
                    owner: user.id,
                }))[0];
                res.render("page/shelf/editShelf", {
                    data,
                    message: req.body.message,
                });
            }
            else {
                throw new NotFoundException_1.NotFoundException();
            }
        });
    }
    static updateShelf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserService_1.UserService.currentUser(req);
            if (user) {
                const shelf = (yield ShelfService_1.ShelfService.instance.getShelf({
                    id: req.params.id,
                    owner: user.id,
                }))[0];
                const body = req.body;
                if (shelf) {
                    const errors = ShelfService_1.ShelfService.validate(body);
                    if (0 === errors.length) {
                        const shelfRepository = index_1.getRepository(Shelf_1.Shelf);
                        shelf.name = body.name;
                        yield shelfRepository.save(shelf);
                        res.end(JSON.stringify({ message: "Zapisano" }));
                    }
                    else {
                        res.status(400);
                        res.end(JSON.stringify({ errors }));
                    }
                }
                else {
                    this.addShelf(req, res);
                }
            }
            else {
                throw new ForbiddenException_1.ForbiddenException();
            }
        });
    }
    static addShelf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserService_1.UserService.currentUser(req);
            if (user) {
                const body = req.body;
                const errors = ShelfService_1.ShelfService.validate(body);
                if (0 === errors.length) {
                    const shelfRepository = index_1.getRepository(Shelf_1.Shelf);
                    const shelf = shelfRepository.create();
                    shelf.name = body.name;
                    shelf.owner = user;
                    yield shelfRepository.save(shelf);
                    res.end(JSON.stringify({ message: "Zapisano" }));
                }
                else {
                    res.status(400);
                    res.end(JSON.stringify({ errors }));
                }
            }
            else {
                throw new ForbiddenException_1.ForbiddenException();
            }
        });
    }
}
exports.ShelfController = ShelfController;
