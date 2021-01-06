"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
class FormValidator {
    constructor() {
        this._errors = [];
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this.validateAll();
                form.dispatchEvent(new CustomEvent(FormValidator.EVENT, { detail: form.querySelectorAll('.error').length > 0 }));
            });
        });
    }
    static get instance() {
        if (!FormValidator._instance) {
            FormValidator._instance = new FormValidator();
        }
        return FormValidator._instance;
    }
    validate(elem) {
        var _a;
        const validations = (_a = elem.getAttribute("data-validate")) === null || _a === void 0 ? void 0 : _a.split(" ");
        const errors = [];
        if (validations) {
            validations.forEach((validation) => {
                switch (validation) {
                    case 'required':
                        this.checkRequired(elem, errors);
                        break;
                    case 'length':
                        this.checkLength(elem, errors);
                        break;
                    case 'email':
                        this.checkEmail(elem, errors);
                        break;
                }
            });
        }
        return errors;
    }
    checkRequired(elem, errors) {
        if (elem instanceof HTMLInputElement) {
            if (elem.value.length === 0 && !elem.checked) {
                errors.push("Pole wymagane");
            }
        }
    }
    addError(elem, errors) {
        var _a;
        const error = document.createElement('div');
        error.classList.add("error");
        errors.forEach(message => {
            error.innerHTML += message + "<br/>";
        });
        error.addEventListener('click', () => {
            error.remove();
        });
        (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.append(error);
        this._errors.push(error);
    }
    validateAll() {
        this._errors.forEach(error => error.remove());
        const elements = document.querySelectorAll('[data-validate]');
        elements.forEach((elem) => {
            const result = this.validate(elem);
            if (result.length > 0) {
                this.addError(elem, result);
            }
        });
    }
    checkLength(elem, errors) {
        if (elem instanceof HTMLInputElement) {
            if (elem.value.length < 2 || elem.value.length > 60) {
                errors.push("Pole musi zawierać pomiędzy 2 i 60 znaków");
            }
        }
    }
    checkEmail(elem, errors) {
        if (elem instanceof HTMLInputElement) {
            const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regex.test(elem.value)) {
                errors.push("Pole musi zawierać adres email");
            }
        }
    }
}
exports.FormValidator = FormValidator;
FormValidator.EVENT = "VALIDATED";
