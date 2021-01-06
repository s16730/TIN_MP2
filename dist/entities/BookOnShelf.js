"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOnShelf = void 0;
const index_1 = require("typeorm/index");
const Shelf_1 = require("@entities/Shelf");
const Book_1 = require("@entities/Book");
let BookOnShelf = class BookOnShelf {
};
__decorate([
    index_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BookOnShelf.prototype, "id", void 0);
__decorate([
    index_1.CreateDateColumn(),
    __metadata("design:type", Date)
], BookOnShelf.prototype, "added", void 0);
__decorate([
    index_1.ManyToOne(type => Shelf_1.Shelf, shelf => shelf.id),
    index_1.JoinColumn({
        name: "shelfId"
    }),
    __metadata("design:type", Shelf_1.Shelf)
], BookOnShelf.prototype, "shelf", void 0);
__decorate([
    index_1.ManyToOne(type => Book_1.Book, book => book.id, { eager: true, }),
    index_1.JoinColumn({ name: "bookId" }),
    __metadata("design:type", Book_1.Book)
], BookOnShelf.prototype, "book", void 0);
BookOnShelf = __decorate([
    index_1.Entity()
], BookOnShelf);
exports.BookOnShelf = BookOnShelf;
