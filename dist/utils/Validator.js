"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    static isEmail(field, value) {
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regex.test(value)) {
            return {
                name: field,
                message: "Pole musi zawierać adres email",
            };
        }
        return null;
    }
    static isFilled(field, value) {
        if (!value || 0 === value.length) {
            return {
                name: field,
                message: "Pole jest wymagane",
            };
        }
        return null;
    }
    static isInCharacterRange(field, value, min, max) {
        if (value.length < min || value.length > max) {
            return {
                name: field,
                message: `Pole musi zawierać więcej niż ${min} oraz mniej niż ${max} znaków`,
            };
        }
        return null;
    }
    static isDate(field, value) {
        if (Number.isNaN(Date.parse(value))) {
            return {
                name: field,
                message: "Pole musi zawierać datę",
            };
        }
        return null;
    }
    static isSame(field, fieldValue, comparedValue) {
        if (fieldValue !== comparedValue) {
            return {
                name: field,
                message: "Wartości pól nie są takie same",
            };
        }
        return null;
    }
    static isPasswordComplexEnough(field, value) {
        const hasNumber = /\d+/;
        const hasUppercaseLetter = /[a-z]+/;
        const hasLowercaseLetter = /[A-Z]+/;
        if (value.length < 8 || !hasNumber.test(value) || !hasLowercaseLetter.test(value) || !hasUppercaseLetter.test(value)) {
            return {
                name: field,
                message: "Hasło musi mieć co najmniej 8 znaków oraz zawierać co najmniej jedną dużą i małą literę oraz co najmniej jedną cyfrę",
            };
        }
        return null;
    }
}
exports.Validator = Validator;
