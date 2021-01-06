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
exports.UserService = void 0;
const index_1 = require("typeorm/index");
const User_1 = require("@entities/User");
const Validator_1 = require("@/utils/Validator");
class UserService {
    constructor() {
        this.userRepository = index_1.getRepository(User_1.User);
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new UserService();
        }
        return this._instance;
    }
    getUsers(params) {
        return this.userRepository.find(params);
    }
    userExists(username, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const usernameUsers = yield this.userRepository.find({ username });
            const emailUsers = yield this.userRepository.find({ email });
            return usernameUsers.length !== 0 || emailUsers.length !== 0;
        });
    }
    static validate(body) {
        const errors = [];
        errors.push(Validator_1.Validator.isFilled("username", body.username), Validator_1.Validator.isFilled("password", body.password), Validator_1.Validator.isFilled("repeatPassword", body.repeatPassword), Validator_1.Validator.isFilled("email", body.email), Validator_1.Validator.isEmail("email", body.email), Validator_1.Validator.isSame("repeatPassword", body.repeatPassword, body.password), Validator_1.Validator.isPasswordComplexEnough('password', body.password));
        return errors.filter(e => e);
    }
    static currentUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.instance.getUsers({ id: req.user.id });
            const user = users[0];
            return user ? user : null;
        });
    }
}
exports.UserService = UserService;
