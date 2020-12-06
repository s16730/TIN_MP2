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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _script_FormValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/FormValidator */ \"./src/script/FormValidator.ts\");\n\n\nvar formValidator = _script_FormValidator__WEBPACK_IMPORTED_MODULE_1__[\"FormValidator\"].instance;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc2Nzcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSBcIi4vc2NyaXB0L0Zvcm1WYWxpZGF0b3JcIjtcblxuXG5jb25zdCBmb3JtVmFsaWRhdG9yID0gRm9ybVZhbGlkYXRvci5pbnN0YW5jZTtcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/script/FormValidator.ts":
/*!*************************************!*\
  !*** ./src/script/FormValidator.ts ***!
  \*************************************/
/*! exports provided: FormValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormValidator\", function() { return FormValidator; });\nvar FormValidator = /** @class */ (function () {\n    function FormValidator() {\n        var _this = this;\n        this._errors = [];\n        document.querySelectorAll('form').forEach(function (form) {\n            form.addEventListener('submit', function (evt) {\n                _this.validateAll();\n                if (form.querySelectorAll('.error').length > 0) {\n                    evt.preventDefault();\n                }\n                evt.preventDefault();\n            });\n        });\n    }\n    Object.defineProperty(FormValidator, \"instance\", {\n        get: function () {\n            if (!FormValidator._instance) {\n                FormValidator._instance = new FormValidator();\n            }\n            return FormValidator._instance;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    FormValidator.prototype.validate = function (elem) {\n        var _this = this;\n        var _a;\n        var validations = (_a = elem.getAttribute(\"data-validate\")) === null || _a === void 0 ? void 0 : _a.split(\" \");\n        var errors = [];\n        if (validations) {\n            validations.forEach(function (validation) {\n                switch (validation) {\n                    case 'required':\n                        _this.checkRequired(elem, errors);\n                        break;\n                    case 'length':\n                        _this.checkLength(elem, errors);\n                        break;\n                    case 'email':\n                        _this.checkEmail(elem, errors);\n                        break;\n                }\n            });\n        }\n        return errors;\n    };\n    FormValidator.prototype.checkRequired = function (elem, errors) {\n        if (elem instanceof HTMLInputElement) {\n            if (elem.value.length === 0 && !elem.checked) {\n                errors.push(\"Pole wymagane\");\n            }\n        }\n    };\n    FormValidator.prototype.addError = function (elem, errors) {\n        var _a;\n        var error = document.createElement('div');\n        error.classList.add(\"error\");\n        errors.forEach(function (message) {\n            error.innerHTML += message + \"<br/>\";\n        });\n        error.addEventListener('click', function () {\n            error.remove();\n        });\n        (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.append(error);\n        this._errors.push(error);\n    };\n    FormValidator.prototype.validateAll = function () {\n        var _this = this;\n        this._errors.forEach(function (error) { return error.remove(); });\n        var elements = document.querySelectorAll('[data-validate]');\n        elements.forEach(function (elem) {\n            var result = _this.validate(elem);\n            if (result.length > 0) {\n                _this.addError(elem, result);\n            }\n        });\n    };\n    FormValidator.prototype.checkLength = function (elem, errors) {\n        if (elem instanceof HTMLInputElement) {\n            if (elem.value.length < 2 || elem.value.length > 60) {\n                errors.push(\"Pole musi zawierać pomiędzy 2 i 60 znaków\");\n            }\n        }\n    };\n    FormValidator.prototype.checkEmail = function (elem, errors) {\n        if (elem instanceof HTMLInputElement) {\n            var regex = /^(([^<>()\\[\\]\\.,;:\\s@\\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$/i;\n            if (!regex.test(elem.value)) {\n                errors.push(\"Pole musi zawierać adres email\");\n            }\n        }\n    };\n    return FormValidator;\n}());\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0L0Zvcm1WYWxpZGF0b3IudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L0Zvcm1WYWxpZGF0b3IudHM/ZGMwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRm9ybVZhbGlkYXRvcjtcblxuICBwcml2YXRlIF9lcnJvcnM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEZvcm1WYWxpZGF0b3Ige1xuICAgIGlmICghRm9ybVZhbGlkYXRvci5faW5zdGFuY2UpIHtcbiAgICAgIEZvcm1WYWxpZGF0b3IuX2luc3RhbmNlID0gbmV3IEZvcm1WYWxpZGF0b3IoKVxuICAgIH1cblxuICAgIHJldHVybiBGb3JtVmFsaWRhdG9yLl9pbnN0YW5jZTtcbiAgfVxuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRm9ybUVsZW1lbnQ+KCdmb3JtJykuZm9yRWFjaChmb3JtID0+IHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICB0aGlzLnZhbGlkYXRlQWxsKCk7XG5cbiAgICAgICAgaWYgKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZShlbGVtOiBIVE1MRWxlbWVudCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB2YWxpZGF0aW9ucyA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWxpZGF0ZVwiKT8uc3BsaXQoXCIgXCIpO1xuICAgIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmICh2YWxpZGF0aW9ucykge1xuICAgICAgdmFsaWRhdGlvbnMuZm9yRWFjaCgodmFsaWRhdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodmFsaWRhdGlvbikge1xuICAgICAgICAgIGNhc2UgJ3JlcXVpcmVkJzpcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSZXF1aXJlZChlbGVtLCBlcnJvcnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIHRoaXMuY2hlY2tMZW5ndGgoZWxlbSwgZXJyb3JzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFbWFpbChlbGVtLCBlcnJvcnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tSZXF1aXJlZChlbGVtOiBIVE1MRWxlbWVudCwgZXJyb3JzOiBzdHJpbmdbXSkge1xuICAgIGlmIChlbGVtIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgaWYgKGVsZW0udmFsdWUubGVuZ3RoID09PSAwICYmICFlbGVtLmNoZWNrZWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goXCJQb2xlIHd5bWFnYW5lXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFcnJvcihlbGVtOiBIVE1MRWxlbWVudCwgZXJyb3JzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIilcblxuICAgIGVycm9ycy5mb3JFYWNoKG1lc3NhZ2UgPT4ge1xuICAgICAgZXJyb3IuaW5uZXJIVE1MICs9IG1lc3NhZ2UgKyBcIjxici8+XCI7XG4gICAgfSlcblxuICAgIGVycm9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZXJyb3IucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIGVsZW0ucGFyZW50RWxlbWVudD8uYXBwZW5kKGVycm9yKVxuICAgIHRoaXMuX2Vycm9ycy5wdXNoKGVycm9yKVxuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUFsbCgpIHtcbiAgICB0aGlzLl9lcnJvcnMuZm9yRWFjaChlcnJvciA9PiBlcnJvci5yZW1vdmUoKSlcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbZGF0YS12YWxpZGF0ZV0nKVxuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy52YWxpZGF0ZShlbGVtKTtcblxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYWRkRXJyb3IoZWxlbSwgcmVzdWx0KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGNoZWNrTGVuZ3RoKGVsZW06IEhUTUxFbGVtZW50LCBlcnJvcnM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKGVsZW0gaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAoZWxlbS52YWx1ZS5sZW5ndGggPCAyIHx8IGVsZW0udmFsdWUubGVuZ3RoID4gNjApIHtcbiAgICAgICAgZXJyb3JzLnB1c2goXCJQb2xlIG11c2kgemF3aWVyYcSHIHBvbWnEmWR6eSAyIGkgNjAgem5ha8Ozd1wiKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tFbWFpbChlbGVtOiBIVE1MRWxlbWVudCwgZXJyb3JzOiBzdHJpbmdbXSkge1xuICAgIGlmIChlbGVtIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgY29uc3QgcmVnZXggPSAvXigoW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pO1xuICAgICAgaWYgKCFyZWdleC50ZXN0KGVsZW0udmFsdWUpKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKFwiUG9sZSBtdXNpIHphd2llcmHEhyBhZHJlcyBlbWFpbFwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFjQTtBQUFBO0FBWEE7QUFZQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQUE7QUFnQkE7QUFBQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script/FormValidator.ts\n");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzU3ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/styles.scss\n");

/***/ })

/******/ });