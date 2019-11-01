webpackHotUpdate("static\\development\\pages\\dynamic_routing.js",{

/***/ "./components/user/UserInfo.js":
/*!*************************************!*\
  !*** ./components/user/UserInfo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_user_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/user-context */ "./components/contexts/user-context.js");
var _jsxFileName = "C:\\Users\\Shahnawaz\\Desktop\\nextjs\\next-env\\components\\user\\UserInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function UserInfo() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_contexts_user_context__WEBPACK_IMPORTED_MODULE_1__["UserContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, function (stateData) {
    var _stateData$state = stateData.state,
        id = _stateData$state.id,
        username = _stateData$state.username,
        age = _stateData$state.age;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("text", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "ID: ", id), __jsx("text", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Username: ", username), __jsx("text", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Age: ", age));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ })

})
//# sourceMappingURL=dynamic_routing.js.b91d9a1510ede79bfcbc.hot-update.js.map