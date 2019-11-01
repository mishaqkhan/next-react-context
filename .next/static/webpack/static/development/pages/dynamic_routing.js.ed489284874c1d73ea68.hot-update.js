webpackHotUpdate("static\\development\\pages\\dynamic_routing.js",{

/***/ "./components/user/UserAvatar.js":
/*!***************************************!*\
  !*** ./components/user/UserAvatar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_user_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/user-context */ "./components/contexts/user-context.js");
var _jsxFileName = "C:\\Users\\Shahnawaz\\Desktop\\nextjs\\next-env\\components\\user\\UserAvatar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function UserAvatar() {
  return __jsx(_contexts_user_context__WEBPACK_IMPORTED_MODULE_2__["UserContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, function (stateData) {
    var username = stateData.state.username;
    if (username) return __jsx("button", {
      onClick: function onClick() {
        return stateData.actions.logout();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, username);else return __jsx("button", {
      onClick: function onClick() {
        return stateData.actions.login(getRandomString(5));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Login");
  });
}

/* harmony default export */ __webpack_exports__["default"] = (UserAvatar);

function getRandomString(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

/***/ })

})
//# sourceMappingURL=dynamic_routing.js.ed489284874c1d73ea68.hot-update.js.map