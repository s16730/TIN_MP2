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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const UserRole_1 = require("./UserRole");
const index_1 = require("typeorm/index");
const Shelf_1 = require("./Shelf");
const bcrypt_1 = __importDefault(require("bcrypt"));
let User = class User {
    constructor(email, username, roles = []) {
        this.isSuspended = false;
        this.roles = [];
        this.password = '';
        this.username = username;
        this.email = email;
        this.roles = roles;
    }
    isPasswordValid(password) {
        return bcrypt_1.default.compareSync(password, this.password);
    }
    setPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                bcrypt_1.default.hash(password, 10, (err, hash) => {
                    this.password = hash;
                    resolve();
                });
            });
        });
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        default: false
    }),
    __metadata("design:type", Boolean)
], User.prototype, "isSuspended", void 0);
__decorate([
    typeorm_1.Column({
        type: "set",
        enum: UserRole_1.UserRole,
        default: [UserRole_1.UserRole.ANONYMOUS]
    }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    typeorm_1.Column({
        type: "text",
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    index_1.OneToMany(type => Shelf_1.Shelf, shelf => shelf.owner, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "shelves", void 0);
__decorate([
    index_1.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "createdOn", void 0);
User = __decorate([
    typeorm_1.Entity(),
    __metadata("design:paramtypes", [String, String, Array])
], User);
exports.User = User;
