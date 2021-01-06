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
exports.ShelfService = void 0;
const index_1 = require("typeorm/index");
const Shelf_1 = require("@entities/Shelf");
const BookData_1 = require("@entities/DataEntities/BookData");
const Validator_1 = require("@/utils/Validator");
class ShelfService {
    constructor() {
        this.shelfRepository = index_1.getRepository(Shelf_1.Shelf);
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new ShelfService();
        }
        return this._instance;
    }
    getShelf(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shelfRepository.find(params);
        });
    }
    getBooksDataByShelf(shelf) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            for (const bookOnShelf of shelf.books) {
                const bookData = new BookData_1.BookData(bookOnShelf.book);
                bookData.addedToShelf = bookOnShelf.added;
                result.push(bookData);
            }
            return result;
        });
    }
    static validate(body) {
        const errors = [];
        errors.push(Validator_1.Validator.isFilled("name", body.name));
        return errors.filter(e => e);
    }
}
exports.ShelfService = ShelfService;
