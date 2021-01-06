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
exports.Book = void 0;
const index_1 = require("typeorm/index");
const Author_1 = require("./Author");
const BookOnShelf_1 = require("@entities/BookOnShelf");
let Book = class Book {
    constructor() {
        this.description = '';
        this.isbn = '';
    }
};
__decorate([
    index_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    index_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    index_1.Column({
        type: "varchar",
        length: 13
    }),
    __metadata("design:type", String)
], Book.prototype, "isbn", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", Date)
], Book.prototype, "publicationDate", void 0);
__decorate([
    index_1.OneToMany(type => BookOnShelf_1.BookOnShelf, bookOnShelf => bookOnShelf.book),
    __metadata("design:type", Array)
], Book.prototype, "onShelves", void 0);
__decorate([
    index_1.ManyToMany(type => Author_1.Author, author => author.books, {
        eager: true,
    }),
    index_1.JoinTable(),
    __metadata("design:type", Array)
], Book.prototype, "authors", void 0);
Book = __decorate([
    index_1.Entity(),
    __metadata("design:paramtypes", [])
], Book);
exports.Book = Book;
