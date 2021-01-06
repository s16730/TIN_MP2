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
exports.Author = void 0;
const index_1 = require("typeorm/index");
const Book_1 = require("./Book");
let Author = class Author {
    constructor(name, surname) {
        this.bio = '';
        this.name = name;
        this.surname = surname;
    }
};
__decorate([
    index_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Author.prototype, "id", void 0);
__decorate([
    index_1.Column({
        type: "text",
    }),
    __metadata("design:type", String)
], Author.prototype, "bio", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", String)
], Author.prototype, "surname", void 0);
__decorate([
    index_1.ManyToMany(type => Book_1.Book, book => book.authors),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
Author = __decorate([
    index_1.Entity(),
    __metadata("design:paramtypes", [String, String])
], Author);
exports.Author = Author;
