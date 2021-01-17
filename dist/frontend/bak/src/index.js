"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@/scss/styles.scss");
const Form_1 = require("./script/Form");
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('form').forEach(form => new Form_1.Form(form));
});
