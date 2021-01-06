/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _script_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/Form */ "./src/script/Form.ts");


window.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('form').forEach(function (form) { return new _script_Form__WEBPACK_IMPORTED_MODULE_1__["Form"](form); });
});


/***/ }),

/***/ "./src/script/Form.ts":
/*!****************************!*\
  !*** ./src/script/Form.ts ***!
  \****************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _FormValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidator */ "./src/script/FormValidator.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Form = /** @class */ (function () {
    function Form(element) {
        var _this = this;
        this.formErrors = [];
        this.element = element;
        this.url = this.element.getAttribute("data-url");
        this.validator = _FormValidator__WEBPACK_IMPORTED_MODULE_0__["FormValidator"].instance;
        this.element.addEventListener('submit', function (e) { return e.preventDefault(); });
        this.element.addEventListener(_FormValidator__WEBPACK_IMPORTED_MODULE_0__["FormValidator"].EVENT, function (e) { return __awaiter(_this, void 0, void 0, function () {
            var data, formData, response, responseData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        this.formErrors.forEach(function (error) { return error.remove(); });
                        data = {};
                        formData = new FormData(this.element);
                        formData.forEach((function (value, key) { return data[key] = value; }));
                        if (!this.url) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(this.url, {
                                method: "POST",
                                cache: "no-cache",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseData = _a.sent();
                        if (responseData.errors) {
                            this.handleErrors(responseData.errors);
                        }
                        if (responseData.redirect) {
                            location.href = responseData.redirect;
                        }
                        if (responseData.message) {
                            this.displayMessage(responseData.message);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    Form.prototype.displayMessage = function (message) {
        var element = document.createElement('div');
        element.classList.add('message');
        element.innerText = message;
        var close = document.createElement('div');
        close.classList.add('close');
        close.addEventListener('click', function () {
            element.remove();
        });
        element.append(close);
        this.element.prepend(element);
    };
    Form.prototype.handleErrors = function (errors) {
        var _this = this;
        errors.forEach(function (error) {
            var _a;
            var elem = _this.element.querySelector("[name=\"" + error.name + "\"]");
            (_a = elem === null || elem === void 0 ? void 0 : elem.parentElement) === null || _a === void 0 ? void 0 : _a.append(_this.createError(error.message));
        });
    };
    Form.prototype.createError = function (message) {
        var error = document.createElement("div");
        error.classList.add("error");
        error.innerText = message;
        error.addEventListener('click', function () { return error.remove(); });
        this.formErrors.push(error);
        return error;
    };
    return Form;
}());



/***/ }),

/***/ "./src/script/FormValidator.ts":
/*!*************************************!*\
  !*** ./src/script/FormValidator.ts ***!
  \*************************************/
/*! exports provided: FormValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidator", function() { return FormValidator; });
var FormValidator = /** @class */ (function () {
    function FormValidator() {
        var _this = this;
        this._errors = [];
        document.querySelectorAll('form').forEach(function (form) {
            form.addEventListener('submit', function (evt) {
                evt.preventDefault();
                _this.validateAll();
                form.dispatchEvent(new CustomEvent(FormValidator.EVENT, { detail: form.querySelectorAll('.error').length > 0 }));
            });
        });
    }
    Object.defineProperty(FormValidator, "instance", {
        get: function () {
            if (!FormValidator._instance) {
                FormValidator._instance = new FormValidator();
            }
            return FormValidator._instance;
        },
        enumerable: false,
        configurable: true
    });
    FormValidator.prototype.validate = function (elem) {
        var _this = this;
        var _a;
        var validations = (_a = elem.getAttribute("data-validate")) === null || _a === void 0 ? void 0 : _a.split(" ");
        var errors = [];
        if (validations) {
            validations.forEach(function (validation) {
                switch (validation) {
                    case 'required':
                        _this.checkRequired(elem, errors);
                        break;
                    case 'length':
                        _this.checkLength(elem, errors);
                        break;
                    case 'email':
                        _this.checkEmail(elem, errors);
                        break;
                }
            });
        }
        return errors;
    };
    FormValidator.prototype.checkRequired = function (elem, errors) {
        if (elem instanceof HTMLInputElement) {
            if (elem.value.length === 0 && !elem.checked) {
                errors.push("Pole wymagane");
            }
        }
    };
    FormValidator.prototype.addError = function (elem, errors) {
        var _a;
        var error = document.createElement('div');
        error.classList.add("error");
        errors.forEach(function (message) {
            error.innerHTML += message + "<br/>";
        });
        error.addEventListener('click', function () {
            error.remove();
        });
        (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.append(error);
        this._errors.push(error);
    };
    FormValidator.prototype.validateAll = function () {
        var _this = this;
        this._errors.forEach(function (error) { return error.remove(); });
        var elements = document.querySelectorAll('[data-validate]');
        elements.forEach(function (elem) {
            var result = _this.validate(elem);
            if (result.length > 0) {
                _this.addError(elem, result);
            }
        });
    };
    FormValidator.prototype.checkLength = function (elem, errors) {
        if (elem instanceof HTMLInputElement) {
            if (elem.value.length < 2 || elem.value.length > 60) {
                errors.push("Pole musi zawierać pomiędzy 2 i 60 znaków");
            }
        }
    };
    FormValidator.prototype.checkEmail = function (elem, errors) {
        if (elem instanceof HTMLInputElement) {
            var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regex.test(elem.value)) {
                errors.push("Pole musi zawierać adres email");
            }
        }
    };
    FormValidator.EVENT = "VALIDATED";
    return FormValidator;
}());



/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L0Zvcm1WYWxpZGF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUVTO0FBR3JDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUMxQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQUksSUFBSSxXQUFJLGlEQUFJLENBQUMsSUFBSSxDQUFDLEVBQWQsQ0FBYyxDQUFDO0FBQ25FLENBQUMsQ0FB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QyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLElBQWlCLEVBQUUsTUFBZ0I7UUFDckQsSUFBSSxJQUFJLFlBQVksZ0JBQWdCLEVBQUU7WUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO2dCQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sa0NBQVUsR0FBbEIsVUFBbUIsSUFBaUIsRUFBRSxNQUFnQjtRQUNwRCxJQUFJLElBQUksWUFBWSxnQkFBZ0IsRUFBRTtZQUNwQyxJQUFNLEtBQUssR0FBRyx3SEFBd0gsQ0FBQztZQUN2SSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7U0FDRjtJQUNILENBQUM7SUFyR3NCLG1CQUFLLEdBQUcsV0FBVyxDQUFDO0lBc0c3QyxvQkFBQztDQUFBO0FBdkd5Qjs7Ozs7Ozs7Ozs7O0FDQTFCLHVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0ICdAL3Njc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuL3NjcmlwdC9Gb3JtVmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vc2NyaXB0L0Zvcm1cIjtcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJykuZm9yRWFjaChmb3JtID0+IG5ldyBGb3JtKGZvcm0pKVxufSk7XG4iLCJpbXBvcnQgeyBEYXRhT2JqZWN0LCBFcnJvck9iamVjdCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuL0Zvcm1WYWxpZGF0b3JcIjtcblxuZXhwb3J0IGNsYXNzIEZvcm0ge1xuICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudDtcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZyB8IG51bGw7XG4gIHByaXZhdGUgdmFsaWRhdG9yOiBGb3JtVmFsaWRhdG9yO1xuXG4gIHByaXZhdGUgZm9ybUVycm9yczogSFRNTERpdkVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxGb3JtRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy51cmwgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS11cmxcIik7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBGb3JtVmFsaWRhdG9yLmluc3RhbmNlO1xuXG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcblxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEZvcm1WYWxpZGF0b3IuRVZFTlQsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmZvcm1FcnJvcnMuZm9yRWFjaChlcnJvciA9PiBlcnJvci5yZW1vdmUoKSk7XG5cbiAgICAgIGNvbnN0IGRhdGE6IERhdGFPYmplY3QgPSB7fTtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgIGZvcm1EYXRhLmZvckVhY2goKCh2YWx1ZSwga2V5KSA9PiBkYXRhW2tleV0gPSB2YWx1ZSkpXG5cbiAgICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMudXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycyhyZXNwb25zZURhdGEuZXJyb3JzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSByZXNwb25zZURhdGEucmVkaXJlY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzcG9uc2VEYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKHJlc3BvbnNlRGF0YS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGRpc3BsYXlNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcblxuICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gbWVzc2FnZTtcblxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxuICAgIGVsZW1lbnQuYXBwZW5kKGNsb3NlKVxuXG4gICAgdGhpcy5lbGVtZW50LnByZXBlbmQoZWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcnM6IEVycm9yT2JqZWN0W10pIHtcbiAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICBjb25zdCBlbGVtID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtlcnJvci5uYW1lfVwiXWApXG5cbiAgICAgIGVsZW0/LnBhcmVudEVsZW1lbnQ/LmFwcGVuZCh0aGlzLmNyZWF0ZUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcbiAgICB9KVxuXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgIGVycm9yLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG5cbiAgICBlcnJvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVycm9yLnJlbW92ZSgpKVxuXG4gICAgdGhpcy5mb3JtRXJyb3JzLnB1c2goZXJyb3IpXG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBFVkVOVCA9IFwiVkFMSURBVEVEXCI7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRm9ybVZhbGlkYXRvcjtcblxuICBwcml2YXRlIF9lcnJvcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEZvcm1WYWxpZGF0b3Ige1xuICAgIGlmICghRm9ybVZhbGlkYXRvci5faW5zdGFuY2UpIHtcbiAgICAgIEZvcm1WYWxpZGF0b3IuX2luc3RhbmNlID0gbmV3IEZvcm1WYWxpZGF0b3IoKVxuICAgIH1cblxuICAgIHJldHVybiBGb3JtVmFsaWRhdG9yLl9pbnN0YW5jZTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRm9ybUVsZW1lbnQ+KCdmb3JtJykuZm9yRWFjaChmb3JtID0+IHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUFsbCgpO1xuXG4gICAgICAgIGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoRm9ybVZhbGlkYXRvci5FVkVOVCwgeyBkZXRhaWw6IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJykubGVuZ3RoID4gMCB9KSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGUoZWxlbTogSFRNTEVsZW1lbnQpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbnMgPSBlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsaWRhdGVcIik/LnNwbGl0KFwiIFwiKTtcbiAgICBjb25zdCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAodmFsaWRhdGlvbnMpIHtcbiAgICAgIHZhbGlkYXRpb25zLmZvckVhY2goKHZhbGlkYXRpb246IHN0cmluZykgPT4ge1xuICAgICAgICBzd2l0Y2ggKHZhbGlkYXRpb24pIHtcbiAgICAgICAgICBjYXNlICdyZXF1aXJlZCc6XG4gICAgICAgICAgICB0aGlzLmNoZWNrUmVxdWlyZWQoZWxlbSwgZXJyb3JzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICB0aGlzLmNoZWNrTGVuZ3RoKGVsZW0sIGVycm9ycyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICB0aGlzLmNoZWNrRW1haWwoZWxlbSwgZXJyb3JzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrUmVxdWlyZWQoZWxlbTogSFRNTEVsZW1lbnQsIGVycm9yczogc3RyaW5nW10pIHtcbiAgICBpZiAoZWxlbSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmIChlbGVtLnZhbHVlLmxlbmd0aCA9PT0gMCAmJiAhZWxlbS5jaGVja2VkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKFwiUG9sZSB3eW1hZ2FuZVwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRXJyb3IoZWxlbTogSFRNTEVsZW1lbnQsIGVycm9yczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZXJyb3IuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpXG5cbiAgICBlcnJvcnMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgIGVycm9yLmlubmVySFRNTCArPSBtZXNzYWdlICsgXCI8YnIvPlwiO1xuICAgIH0pXG5cbiAgICBlcnJvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGVycm9yLnJlbW92ZSgpO1xuICAgIH0pXG5cbiAgICBlbGVtLnBhcmVudEVsZW1lbnQ/LmFwcGVuZChlcnJvcilcbiAgICB0aGlzLl9lcnJvcnMucHVzaChlcnJvcilcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVBbGwoKSB7XG4gICAgdGhpcy5fZXJyb3JzLmZvckVhY2goZXJyb3IgPT4gZXJyb3IucmVtb3ZlKCkpXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignW2RhdGEtdmFsaWRhdGVdJylcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmFsaWRhdGUoZWxlbSk7XG5cbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmFkZEVycm9yKGVsZW0sIHJlc3VsdClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0xlbmd0aChlbGVtOiBIVE1MRWxlbWVudCwgZXJyb3JzOiBzdHJpbmdbXSkge1xuICAgIGlmIChlbGVtIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgaWYgKGVsZW0udmFsdWUubGVuZ3RoIDwgMiB8fCBlbGVtLnZhbHVlLmxlbmd0aCA+IDYwKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKFwiUG9sZSBtdXNpIHphd2llcmHEhyBwb21pxJlkenkgMiBpIDYwIHpuYWvDs3dcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRW1haWwoZWxlbTogSFRNTEVsZW1lbnQsIGVycm9yczogc3RyaW5nW10pIHtcbiAgICBpZiAoZWxlbSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gL14oKFtePD4oKVxcW1xcXVxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaTtcbiAgICAgIGlmICghcmVnZXgudGVzdChlbGVtLnZhbHVlKSkge1xuICAgICAgICBlcnJvcnMucHVzaChcIlBvbGUgbXVzaSB6YXdpZXJhxIcgYWRyZXMgZW1haWxcIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=