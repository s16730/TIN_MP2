"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayHelper = void 0;
class ArrayHelper {
    static intersect(a, b) {
        return a.filter(entry => b.find((elem) => elem == entry));
    }
}
exports.ArrayHelper = ArrayHelper;
