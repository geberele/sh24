webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Step2Form/Step2Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step2Form/Step2Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step2Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step2Form\", function() { return Step2Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gabrielemanna/Documents/Projects/gm/sh24/src/components/Step2Form/Step2Form.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Step2Form = function Step2Form(_ref) {\n  _s();\n\n  var label = _ref.label,\n      question = _ref.question,\n      next = _ref.next,\n      prev = _ref.prev,\n      value = _ref.value,\n      nextStep = _ref.nextStep,\n      prevStep = _ref.prevStep,\n      _onChange = _ref.onChange,\n      errorMessage = _ref.errorMessage;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(nextStep),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, question), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, label), __jsx(\"input\", {\n    name: \"email\",\n    ref: register({\n      required: true,\n      pattern: {\n        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/,\n        message: 'Invalid email address'\n      }\n    }),\n    defaultValue: value,\n    onChange: function onChange(e) {\n      return _onChange(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), errors.email && __jsx(\"div\", {\n    className: \"error\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, errorMessage), __jsx(\"div\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: prevStep,\n    className: \"navigationLeft\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, prev), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"navigationRight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, next)));\n};\n\n_s(Step2Form, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = Step2Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step2Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwMkZvcm0vU3RlcDJGb3JtLmNvbXBvbmVudC50c3g/OGM1NyJdLCJuYW1lcyI6WyJTdGVwMkZvcm0iLCJsYWJlbCIsInF1ZXN0aW9uIiwibmV4dCIsInByZXYiLCJ2YWx1ZSIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJvbkNoYW5nZSIsImVycm9yTWVzc2FnZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInJlcXVpcmVkIiwicGF0dGVybiIsIm1lc3NhZ2UiLCJlIiwidGFyZ2V0IiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBY08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FVSDtBQUFBOztBQUFBLE1BVHBCQyxLQVNvQixRQVRwQkEsS0FTb0I7QUFBQSxNQVJwQkMsUUFRb0IsUUFScEJBLFFBUW9CO0FBQUEsTUFQcEJDLElBT29CLFFBUHBCQSxJQU9vQjtBQUFBLE1BTnBCQyxJQU1vQixRQU5wQkEsSUFNb0I7QUFBQSxNQUxwQkMsS0FLb0IsUUFMcEJBLEtBS29CO0FBQUEsTUFKcEJDLFFBSW9CLFFBSnBCQSxRQUlvQjtBQUFBLE1BSHBCQyxRQUdvQixRQUhwQkEsUUFHb0I7QUFBQSxNQUZwQkMsU0FFb0IsUUFGcEJBLFFBRW9CO0FBQUEsTUFEcEJDLFlBQ29CLFFBRHBCQSxZQUNvQjs7QUFBQSxpQkFDdUJDLCtEQUFPLEVBRDlCO0FBQUEsTUFDWkMsUUFEWSxZQUNaQSxRQURZO0FBQUEsTUFDRkMsWUFERSxZQUNGQSxZQURFO0FBQUEsTUFDWUMsTUFEWixZQUNZQSxNQURaOztBQUdwQixTQUNFO0FBQU0sWUFBUSxFQUFFRCxZQUFZLENBQUNOLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0osUUFBTCxDQURGLEVBRUU7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCRCxLQUF4QixDQUZGLEVBR0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLE9BQUcsRUFBRVUsUUFBUSxDQUFDO0FBQ1pHLGNBQVEsRUFBRSxJQURFO0FBRVpDLGFBQU8sRUFBRTtBQUNQVixhQUFLLEVBQUUsc0VBREE7QUFFUFcsZUFBTyxFQUFFO0FBRkY7QUFGRyxLQUFELENBRmY7QUFTRSxnQkFBWSxFQUFFWCxLQVRoQjtBQVVFLFlBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGFBQU9ULFNBQVEsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNiLEtBQVYsQ0FBZjtBQUFBLEtBVlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBZ0JHUSxNQUFNLENBQUNNLEtBQVAsSUFDRDtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JWLFlBQXhCLENBakJGLEVBb0JFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRixRQUFqQjtBQUEyQixhQUFTLEVBQUMsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURILElBQXZELENBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtREQsSUFBbkQsQ0FGRixDQXBCRixDQURGO0FBMkJELENBeENNOztHQUFNSCxTO1VBV2dDVSx1RDs7O0tBWGhDVixTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3RlcDJGb3JtL1N0ZXAyRm9ybS5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuaW50ZXJmYWNlIFN0ZXAyRm9ybVByb3BzIHtcbiAgbGFiZWw6IHN0cmluZ1xuICBxdWVzdGlvbjogc3RyaW5nXG4gIG5leHQ6IHN0cmluZ1xuICBwcmV2OiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZ1xuICBuZXh0U3RlcDogKCkgPT4gdm9pZFxuICBwcmV2U3RlcDogKCkgPT4gdm9pZFxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFN0ZXAyRm9ybSA9ICh7XG4gIGxhYmVsLFxuICBxdWVzdGlvbixcbiAgbmV4dCxcbiAgcHJldixcbiAgdmFsdWUsXG4gIG5leHRTdGVwLFxuICBwcmV2U3RlcCxcbiAgb25DaGFuZ2UsXG4gIGVycm9yTWVzc2FnZVxufTogU3RlcDJGb3JtUHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChuZXh0U3RlcCl9PlxuICAgICAgPGgxPntxdWVzdGlvbn08L2gxPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPntsYWJlbH08L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIHJlZj17cmVnaXN0ZXIoe1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgICAgIHZhbHVlOiAvXlthLXpBLVowLTkuISMkJSbigJkqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycsXG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuXG4gICAgICB7ZXJyb3JzLmVtYWlsICYmXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yTWVzc2FnZX08L2Rpdj5cbiAgICAgIH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJldlN0ZXB9IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25MZWZ0XCI+e3ByZXZ9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25SaWdodFwiPntuZXh0fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Step2Form/Step2Form.component.tsx\n");

/***/ })

})