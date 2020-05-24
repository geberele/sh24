webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Step2Form/Step2Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step2Form/Step2Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step2Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step2Form\", function() { return Step2Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gabrielemanna/Documents/Projects/gm/sh24/src/components/Step2Form/Step2Form.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Step2Form = function Step2Form(_ref) {\n  _s();\n\n  var label = _ref.label,\n      question = _ref.question,\n      next = _ref.next,\n      prev = _ref.prev,\n      value = _ref.value,\n      nextStep = _ref.nextStep,\n      prevStep = _ref.prevStep,\n      _onChange = _ref.onChange,\n      errorMessage = _ref.errorMessage;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(nextStep),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, question), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, label), __jsx(\"input\", {\n    name: \"email\",\n    ref: register({\n      required: true\n    }),\n    defaultValue: value,\n    onChange: function onChange(e) {\n      return _onChange(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), errors.email && __jsx(\"div\", {\n    className: \"error\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, errorMessage), __jsx(\"div\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: prevStep,\n    className: \"navigationLeft\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, prev), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"navigationRight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, next)));\n};\n\n_s(Step2Form, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = Step2Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step2Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwMkZvcm0vU3RlcDJGb3JtLmNvbXBvbmVudC50c3g/OGM1NyJdLCJuYW1lcyI6WyJTdGVwMkZvcm0iLCJsYWJlbCIsInF1ZXN0aW9uIiwibmV4dCIsInByZXYiLCJ2YWx1ZSIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJvbkNoYW5nZSIsImVycm9yTWVzc2FnZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsInJlcXVpcmVkIiwiZSIsInRhcmdldCIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQWNPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BVUg7QUFBQTs7QUFBQSxNQVRwQkMsS0FTb0IsUUFUcEJBLEtBU29CO0FBQUEsTUFScEJDLFFBUW9CLFFBUnBCQSxRQVFvQjtBQUFBLE1BUHBCQyxJQU9vQixRQVBwQkEsSUFPb0I7QUFBQSxNQU5wQkMsSUFNb0IsUUFOcEJBLElBTW9CO0FBQUEsTUFMcEJDLEtBS29CLFFBTHBCQSxLQUtvQjtBQUFBLE1BSnBCQyxRQUlvQixRQUpwQkEsUUFJb0I7QUFBQSxNQUhwQkMsUUFHb0IsUUFIcEJBLFFBR29CO0FBQUEsTUFGcEJDLFNBRW9CLFFBRnBCQSxRQUVvQjtBQUFBLE1BRHBCQyxZQUNvQixRQURwQkEsWUFDb0I7O0FBQUEsaUJBQ3VCQywrREFBTyxFQUQ5QjtBQUFBLE1BQ1pDLFFBRFksWUFDWkEsUUFEWTtBQUFBLE1BQ0ZDLFlBREUsWUFDRkEsWUFERTtBQUFBLE1BQ1lDLE1BRFosWUFDWUEsTUFEWjs7QUFHcEIsU0FDRTtBQUFNLFlBQVEsRUFBRUQsWUFBWSxDQUFDTixRQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtKLFFBQUwsQ0FERixFQUVFO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QkQsS0FBeEIsQ0FGRixFQUdFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxPQUFHLEVBQUVVLFFBQVEsQ0FBQztBQUFFRyxjQUFRLEVBQUU7QUFBWixLQUFELENBRmY7QUFHRSxnQkFBWSxFQUFFVCxLQUhoQjtBQUlFLFlBQVEsRUFBRSxrQkFBQ1UsQ0FBRDtBQUFBLGFBQU9QLFNBQVEsQ0FBQ08sQ0FBQyxDQUFDQyxNQUFGLENBQVNYLEtBQVYsQ0FBZjtBQUFBLEtBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBVUdRLE1BQU0sQ0FBQ0ksS0FBUCxJQUNEO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QlIsWUFBeEIsQ0FYRixFQWNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRixRQUFqQjtBQUEyQixhQUFTLEVBQUMsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURILElBQXZELENBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtREQsSUFBbkQsQ0FGRixDQWRGLENBREY7QUFxQkQsQ0FsQ007O0dBQU1ILFM7VUFXZ0NVLHVEOzs7S0FYaENWLFMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGVwMkZvcm0vU3RlcDJGb3JtLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuXG5pbnRlcmZhY2UgU3RlcDJGb3JtUHJvcHMge1xuICBsYWJlbDogc3RyaW5nXG4gIHF1ZXN0aW9uOiBzdHJpbmdcbiAgbmV4dDogc3RyaW5nXG4gIHByZXY6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nXG4gIG5leHRTdGVwOiAoKSA9PiB2b2lkXG4gIHByZXZTdGVwOiAoKSA9PiB2b2lkXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgU3RlcDJGb3JtID0gKHtcbiAgbGFiZWwsXG4gIHF1ZXN0aW9uLFxuICBuZXh0LFxuICBwcmV2LFxuICB2YWx1ZSxcbiAgbmV4dFN0ZXAsXG4gIHByZXZTdGVwLFxuICBvbkNoYW5nZSxcbiAgZXJyb3JNZXNzYWdlXG59OiBTdGVwMkZvcm1Qcm9wcykgPT4ge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG5leHRTdGVwKX0+XG4gICAgICA8aDE+e3F1ZXN0aW9ufTwvaDE+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG5cbiAgICAgIHtlcnJvcnMuZW1haWwgJiZcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3JNZXNzYWdlfTwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2U3RlcH0gY2xhc3NOYW1lPVwibmF2aWdhdGlvbkxlZnRcIj57cHJldn08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwibmF2aWdhdGlvblJpZ2h0XCI+e25leHR9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Step2Form/Step2Form.component.tsx\n");

/***/ })

})