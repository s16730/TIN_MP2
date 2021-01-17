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
exports.Form = void 0;
const FormValidator_1 = require("./FormValidator");
class Form {
    constructor(element) {
        this.formErrors = [];
        this.element = element;
        this.url = this.element.getAttribute("data-url");
        this.validator = FormValidator_1.FormValidator.instance;
        this.element.addEventListener('submit', e => e.preventDefault());
        this.element.addEventListener(FormValidator_1.FormValidator.EVENT, (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            this.formErrors.forEach(error => error.remove());
            const data = {};
            const formData = new FormData(this.element);
            formData.forEach(((value, key) => data[key] = value));
            if (this.url) {
                const response = yield fetch(this.url, {
                    method: "POST",
                    cache: "no-cache",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const responseData = yield response.json();
                if (responseData.errors) {
                    this.handleErrors(responseData.errors);
                }
                if (responseData.redirect) {
                    location.href = responseData.redirect;
                }
                if (responseData.message) {
                    this.displayMessage(responseData.message);
                }
            }
        }));
    }
    displayMessage(message) {
        const element = document.createElement('div');
        element.classList.add('message');
        element.innerText = message;
        const close = document.createElement('div');
        close.classList.add('close');
        close.addEventListener('click', () => {
            element.remove();
        });
        element.append(close);
        this.element.prepend(element);
    }
    handleErrors(errors) {
        errors.forEach(error => {
            var _a;
            const elem = this.element.querySelector(`[name="${error.name}"]`);
            (_a = elem === null || elem === void 0 ? void 0 : elem.parentElement) === null || _a === void 0 ? void 0 : _a.append(this.createError(error.message));
        });
    }
    createError(message) {
        const error = document.createElement("div");
        error.classList.add("error");
        error.innerText = message;
        error.addEventListener('click', () => error.remove());
        this.formErrors.push(error);
        return error;
    }
}
exports.Form = Form;
