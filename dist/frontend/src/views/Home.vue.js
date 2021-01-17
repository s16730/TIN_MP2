"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ is an alias to /src
const HelloWorld_vue_1 = __importDefault(require("@/components/HelloWorld.vue"));
exports.default = {
    name: 'Home',
    components: {
        HelloWorld: HelloWorld_vue_1.default
    }
};
