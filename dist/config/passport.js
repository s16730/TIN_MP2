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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = __importDefault(require("passport-local"));
const UserService_1 = require("@services/UserService");
const passportSetup = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
        const user = (yield UserService_1.UserService.instance.getUsers({ id }))[0];
        done(null, user);
    }));
    passport.use("local", new passport_local_1.default.Strategy({
        usernameField: "login",
        passwordField: "password",
    }, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
        let user = (yield UserService_1.UserService.instance.getUsers({
            email
        }))[0];
        if (!user || !user.isPasswordValid(password)) {
            return done(null, false, { message: "Nieprawidłowa nazwa użytkownika lub hasło." });
        }
        else {
            return done(null, user);
        }
    })));
};
exports.default = passportSetup;
