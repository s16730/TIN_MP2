"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    static getISBN() {
        let isbn = '';
        while (isbn.length < 13) {
            isbn += Random.getRandomInt(0, 9);
        }
        return isbn;
    }
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    static getPublicationDate() {
        return Random.randomDate(new Date("01-01-1980"), new Date());
    }
    static randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    /**
     * Returns and removes random entry from set
     * @param set
     */
    static fromSet(set) {
        const temp = Array.from(set);
        const id = Random.getRandomInt(0, temp.length - 1);
        const result = temp[id];
        set.delete(result);
        return result;
    }
}
exports.Random = Random;
