"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
class NotFoundException {
    constructor(message = "", name = "404 Not Found") {
        this.message = message;
        this.name = message;
    }
}
exports.NotFoundException = NotFoundException;
