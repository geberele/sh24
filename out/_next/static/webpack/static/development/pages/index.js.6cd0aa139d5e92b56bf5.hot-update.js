webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Step1Form/Step1Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step1Form/Step1Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step1Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step1Form\", function() { return Step1Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gabrielemanna/Documents/Projects/gm/sh24/src/components/Step1Form/Step1Form.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Step1Form = function Step1Form(_ref) {\n  _s();\n\n  var label = _ref.label,\n      question = _ref.question,\n      next = _ref.next,\n      value = _ref.value,\n      nextStep = _ref.nextStep,\n      _onChange = _ref.onChange;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit;\n\n  var onSubmit = function onSubmit(data) {\n    return console.log(data);\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, question), __jsx(\"label\", {\n    htmlFor: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, label), __jsx(\"input\", {\n    name: \"name\",\n    ref: register({\n      required: true\n    }),\n    defaultValue: value,\n    onChange: function onChange(e) {\n      return _onChange(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: nextStep,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, next)));\n};\n\n_s(Step1Form, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = Step1Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step1Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwMUZvcm0vU3RlcDFGb3JtLmNvbXBvbmVudC50c3g/MjUyZSJdLCJuYW1lcyI6WyJTdGVwMUZvcm0iLCJsYWJlbCIsInF1ZXN0aW9uIiwibmV4dCIsInZhbHVlIiwibmV4dFN0ZXAiLCJvbkNoYW5nZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlZCIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV08sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FPSDtBQUFBOztBQUFBLE1BTnBCQyxLQU1vQixRQU5wQkEsS0FNb0I7QUFBQSxNQUxwQkMsUUFLb0IsUUFMcEJBLFFBS29CO0FBQUEsTUFKcEJDLElBSW9CLFFBSnBCQSxJQUlvQjtBQUFBLE1BSHBCQyxLQUdvQixRQUhwQkEsS0FHb0I7QUFBQSxNQUZwQkMsUUFFb0IsUUFGcEJBLFFBRW9CO0FBQUEsTUFEcEJDLFNBQ29CLFFBRHBCQSxRQUNvQjs7QUFBQSxpQkFDZUMsK0RBQU8sRUFEdEI7QUFBQSxNQUNaQyxRQURZLFlBQ1pBLFFBRFk7QUFBQSxNQUNGQyxZQURFLFlBQ0ZBLFlBREU7O0FBRXBCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLElBQUk7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixDQUFKO0FBQUEsR0FBckI7O0FBRUEsU0FDRTtBQUFNLFlBQVEsRUFBRUYsWUFBWSxDQUFDQyxRQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLFFBQUwsQ0FERixFQUVFO0FBQU8sV0FBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkQsS0FBdkIsQ0FGRixFQUdFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxPQUFHLEVBQUVPLFFBQVEsQ0FBQztBQUFFTSxjQUFRLEVBQUU7QUFBWixLQUFELENBRmY7QUFHRSxnQkFBWSxFQUFFVixLQUhoQjtBQUlFLFlBQVEsRUFBRSxrQkFBQ1csQ0FBRDtBQUFBLGFBQU9ULFNBQVEsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNaLEtBQVYsQ0FBZjtBQUFBLEtBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBU0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUVDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJGLElBQTVCLENBREYsQ0FURixDQURGO0FBZUQsQ0ExQk07O0dBQU1ILFM7VUFRd0JPLHVEOzs7S0FSeEJQLFMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGVwMUZvcm0vU3RlcDFGb3JtLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuXG5pbnRlcmZhY2UgU3RlcDFGb3JtUHJvcHMge1xuICBsYWJlbDogc3RyaW5nXG4gIHF1ZXN0aW9uOiBzdHJpbmdcbiAgbmV4dDogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbiAgbmV4dFN0ZXA6ICgpID0+IHZvaWRcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBTdGVwMUZvcm0gPSAoe1xuICBsYWJlbCxcbiAgcXVlc3Rpb24sXG4gIG5leHQsXG4gIHZhbHVlLFxuICBuZXh0U3RlcCxcbiAgb25DaGFuZ2UsXG59OiBTdGVwMUZvcm1Qcm9wcykgPT4ge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKVxuICBjb25zdCBvblN1Ym1pdCA9IGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxoMT57cXVlc3Rpb259PC9oMT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPntsYWJlbH08L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0U3RlcH0+e25leHR9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Step1Form/Step1Form.component.tsx\n");

/***/ })

})