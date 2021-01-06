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
exports.Shelf = void 0;
const index_1 = require("typeorm/index");
const User_1 = require("./User");
const BookOnShelf_1 = require("@entities/BookOnShelf");
let Shelf = class Shelf {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
    }
};
__decorate([
    index_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Shelf.prototype, "id", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", String)
], Shelf.prototype, "name", void 0);
__decorate([
    index_1.ManyToOne(type => User_1.User),
    index_1.JoinColumn({
        name: "ownerId"
    }),
    __metadata("design:type", User_1.User)
], Shelf.prototype, "owner", void 0);
__decorate([
    index_1.OneToMany(type => BookOnShelf_1.BookOnShelf, bookOnShelf => bookOnShelf.shelf, {
        eager: true,
    }),
    __metadata("design:type", Array)
], Shelf.prototype, "books", void 0);
Shelf = __decorate([
    index_1.Entity(),
    __metadata("design:paramtypes", [String, User_1.User])
], Shelf);
exports.Shelf = Shelf;
