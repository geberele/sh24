webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Step1Form/Step1Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step1Form/Step1Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step1Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step1Form\", function() { return Step1Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gabrielemanna/Documents/Projects/gm/sh24/src/components/Step1Form/Step1Form.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Step1Form = function Step1Form(_ref) {\n  _s();\n\n  var label = _ref.label,\n      question = _ref.question,\n      next = _ref.next,\n      value = _ref.value,\n      nextStep = _ref.nextStep,\n      _onChange = _ref.onChange,\n      errorMessage = _ref.errorMessage;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit;\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(nextStep),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, question), __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, label), __jsx(\"input\", {\n    name: \"name\",\n    ref: register({\n      required: true\n    }),\n    defaultValue: value,\n    onChange: function onChange(e) {\n      return _onChange(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), errors.service && __jsx(\"div\", {\n    className: \"error\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, errorMessage), __jsx(\"div\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"navigationRight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, next)));\n};\n\n_s(Step1Form, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = Step1Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step1Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwMUZvcm0vU3RlcDFGb3JtLmNvbXBvbmVudC50c3g/MjUyZSJdLCJuYW1lcyI6WyJTdGVwMUZvcm0iLCJsYWJlbCIsInF1ZXN0aW9uIiwibmV4dCIsInZhbHVlIiwibmV4dFN0ZXAiLCJvbkNoYW5nZSIsImVycm9yTWVzc2FnZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInJlcXVpcmVkIiwiZSIsInRhcmdldCIsImVycm9ycyIsInNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBWU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FRSDtBQUFBOztBQUFBLE1BUHBCQyxLQU9vQixRQVBwQkEsS0FPb0I7QUFBQSxNQU5wQkMsUUFNb0IsUUFOcEJBLFFBTW9CO0FBQUEsTUFMcEJDLElBS29CLFFBTHBCQSxJQUtvQjtBQUFBLE1BSnBCQyxLQUlvQixRQUpwQkEsS0FJb0I7QUFBQSxNQUhwQkMsUUFHb0IsUUFIcEJBLFFBR29CO0FBQUEsTUFGcEJDLFNBRW9CLFFBRnBCQSxRQUVvQjtBQUFBLE1BRHBCQyxZQUNvQixRQURwQkEsWUFDb0I7O0FBQUEsaUJBQ2VDLCtEQUFPLEVBRHRCO0FBQUEsTUFDWkMsUUFEWSxZQUNaQSxRQURZO0FBQUEsTUFDRkMsWUFERSxZQUNGQSxZQURFOztBQUdwQixTQUNFO0FBQU0sWUFBUSxFQUFFQSxZQUFZLENBQUNMLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0gsUUFBTCxDQURGLEVBRUU7QUFBTyxXQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCRCxLQUF2QixDQUZGLEVBR0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLE9BQUcsRUFBRVEsUUFBUSxDQUFDO0FBQUVFLGNBQVEsRUFBRTtBQUFaLEtBQUQsQ0FGZjtBQUdFLGdCQUFZLEVBQUVQLEtBSGhCO0FBSUUsWUFBUSxFQUFFLGtCQUFDUSxDQUFEO0FBQUEsYUFBT04sU0FBUSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU1QsS0FBVixDQUFmO0FBQUEsS0FKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFVR1UsTUFBTSxDQUFDQyxPQUFQLElBQ0Q7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCUixZQUF4QixDQVhGLEVBY0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbURKLElBQW5ELENBREYsQ0FkRixDQURGO0FBb0JELENBL0JNOztHQUFNSCxTO1VBU3dCUSx1RDs7O0tBVHhCUixTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3RlcDFGb3JtL1N0ZXAxRm9ybS5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuaW50ZXJmYWNlIFN0ZXAxRm9ybVByb3BzIHtcbiAgbGFiZWw6IHN0cmluZ1xuICBxdWVzdGlvbjogc3RyaW5nXG4gIG5leHQ6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nXG4gIG5leHRTdGVwOiAoKSA9PiB2b2lkXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgU3RlcDFGb3JtID0gKHtcbiAgbGFiZWwsXG4gIHF1ZXN0aW9uLFxuICBuZXh0LFxuICB2YWx1ZSxcbiAgbmV4dFN0ZXAsXG4gIG9uQ2hhbmdlLFxuICBlcnJvck1lc3NhZ2UsXG59OiBTdGVwMUZvcm1Qcm9wcykgPT4ge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChuZXh0U3RlcCl9PlxuICAgICAgPGgxPntxdWVzdGlvbn08L2gxPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cblxuICAgICAge2Vycm9ycy5zZXJ2aWNlICYmXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yTWVzc2FnZX08L2Rpdj5cbiAgICAgIH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25SaWdodFwiPntuZXh0fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Step1Form/Step1Form.component.tsx\n");

/***/ })

})