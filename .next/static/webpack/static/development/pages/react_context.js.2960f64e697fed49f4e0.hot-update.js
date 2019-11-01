webpackHotUpdate("static\\development\\pages\\react_context.js",{

/***/ "./pages/react_context/index.js":
/*!**************************************!*\
  !*** ./pages/react_context/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contexts_user_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/contexts/user-context */ "./components/contexts/user-context.js");
/* harmony import */ var _components_contexts_programs_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/contexts/programs-context */ "./components/contexts/programs-context.js");
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/navbar/Navbar */ "./components/navbar/Navbar.js");
/* harmony import */ var _components_user_UserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user/UserInfo */ "./components/user/UserInfo.js");
var _jsxFileName = "C:\\Users\\Shahnawaz\\Desktop\\nextjs\\next-env\\pages\\react_context\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ReactContext() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_components_user_UserInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_components_contexts_programs_context__WEBPACK_IMPORTED_MODULE_2__["ProgramsContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (stateData) {
    var title = stateData.state.title;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("em", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Program title: ", title));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ReactContext);

/***/ })

})
//# sourceMappingURL=react_context.js.2960f64e697fed49f4e0.hot-update.js.map