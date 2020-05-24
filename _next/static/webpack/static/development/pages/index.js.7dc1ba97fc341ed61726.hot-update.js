webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Step3Form/Step3Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step3Form/Step3Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step3Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step3Form\", function() { return Step3Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gabrielemanna/Documents/Projects/gm/sh24/src/components/Step3Form/Step3Form.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Step3Form = function Step3Form(_ref) {\n  _s();\n\n  var question = _ref.question,\n      next = _ref.next,\n      prev = _ref.prev,\n      options = _ref.options,\n      nextStep = _ref.nextStep,\n      prevStep = _ref.prevStep,\n      _onChange = _ref.onChange,\n      value = _ref.value,\n      errorMessage = _ref.errorMessage;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(nextStep),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, question), __jsx(\"div\", {\n    className: \"radio-buttons\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, options.map(function (option, key) {\n    return __jsx(\"div\", {\n      key: key,\n      className: \"radio-button\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }\n    }, __jsx(\"label\", {\n      htmlFor: option.value,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, option.label), __jsx(\"input\", {\n      type: \"radio\",\n      name: \"service\",\n      value: option.label,\n      id: option.value,\n      onChange: function onChange(e) {\n        return _onChange(e.target.value);\n      },\n      checked: value === option.label,\n      ref: register({\n        required: true\n      }),\n      className: \"hidden\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 13\n      }\n    }));\n  })), errors.service && __jsx(\"div\", {\n    className: \"error\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, errorMessage), __jsx(\"div\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: prevStep,\n    className: \"navigationLeft\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, prev), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"navigationRight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, next)));\n};\n\n_s(Step3Form, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = Step3Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step3Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwM0Zvcm0vU3RlcDNGb3JtLmNvbXBvbmVudC50c3g/OGZlNSJdLCJuYW1lcyI6WyJTdGVwM0Zvcm0iLCJxdWVzdGlvbiIsIm5leHQiLCJwcmV2Iiwib3B0aW9ucyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJvbkNoYW5nZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwibWFwIiwib3B0aW9uIiwia2V5IiwibGFiZWwiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQW1CTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVVIO0FBQUE7O0FBQUEsTUFUcEJDLFFBU29CLFFBVHBCQSxRQVNvQjtBQUFBLE1BUnBCQyxJQVFvQixRQVJwQkEsSUFRb0I7QUFBQSxNQVBwQkMsSUFPb0IsUUFQcEJBLElBT29CO0FBQUEsTUFOcEJDLE9BTW9CLFFBTnBCQSxPQU1vQjtBQUFBLE1BTHBCQyxRQUtvQixRQUxwQkEsUUFLb0I7QUFBQSxNQUpwQkMsUUFJb0IsUUFKcEJBLFFBSW9CO0FBQUEsTUFIcEJDLFNBR29CLFFBSHBCQSxRQUdvQjtBQUFBLE1BRnBCQyxLQUVvQixRQUZwQkEsS0FFb0I7QUFBQSxNQURwQkMsWUFDb0IsUUFEcEJBLFlBQ29COztBQUFBLGlCQUN1QkMsK0RBQU8sRUFEOUI7QUFBQSxNQUNaQyxRQURZLFlBQ1pBLFFBRFk7QUFBQSxNQUNGQyxZQURFLFlBQ0ZBLFlBREU7QUFBQSxNQUNZQyxNQURaLFlBQ1lBLE1BRFo7O0FBR3BCLFNBQ0U7QUFBTSxZQUFRLEVBQUVELFlBQVksQ0FBQ1AsUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixRQUFMLENBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0csT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxHQUFUO0FBQUEsV0FDWDtBQUNFLFNBQUcsRUFBRUEsR0FEUDtBQUVFLGVBQVMsRUFBQyxjQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUFPLGFBQU8sRUFBRUQsTUFBTSxDQUFDUCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCTyxNQUFNLENBQUNFLEtBQXRDLENBSkYsRUFLRTtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFDLFNBRlA7QUFHRSxXQUFLLEVBQUVGLE1BQU0sQ0FBQ0UsS0FIaEI7QUFJRSxRQUFFLEVBQUVGLE1BQU0sQ0FBQ1AsS0FKYjtBQUtFLGNBQVEsRUFBRSxrQkFBQVUsQ0FBQztBQUFBLGVBQUlYLFNBQVEsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNYLEtBQVYsQ0FBWjtBQUFBLE9BTGI7QUFNRSxhQUFPLEVBQUVBLEtBQUssS0FBS08sTUFBTSxDQUFDRSxLQU41QjtBQU9FLFNBQUcsRUFBRU4sUUFBUSxDQUFDO0FBQUVTLGdCQUFRLEVBQUU7QUFBWixPQUFELENBUGY7QUFRRSxlQUFTLEVBQUMsUUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsQ0FEVztBQUFBLEdBQVosQ0FESCxDQUZGLEVBdUJHUCxNQUFNLENBQUNRLE9BQVAsSUFDQztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JaLFlBQXhCLENBeEJKLEVBMkJFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFSCxRQUFqQjtBQUEyQixhQUFTLEVBQUMsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURILElBQXZELENBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtREQsSUFBbkQsQ0FGRixDQTNCRixDQURGO0FBa0NELENBL0NNOztHQUFNRixTO1VBV2dDVSx1RDs7O0tBWGhDVixTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3RlcDNGb3JtL1N0ZXAzRm9ybS5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuaW50ZXJmYWNlIFN0ZXAzRm9ybVByb3BzIHtcbiAgcXVlc3Rpb246IHN0cmluZ1xuICBuZXh0OiBzdHJpbmdcbiAgcHJldjogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmdcbiAgb3B0aW9uczogT3B0aW9uc1tdXG4gIG5leHRTdGVwOiAoKSA9PiB2b2lkXG4gIHByZXZTdGVwOiAoKSA9PiB2b2lkXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xuICBsYWJlbDogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0ZXAzRm9ybSA9ICh7XG4gIHF1ZXN0aW9uLFxuICBuZXh0LFxuICBwcmV2LFxuICBvcHRpb25zLFxuICBuZXh0U3RlcCxcbiAgcHJldlN0ZXAsXG4gIG9uQ2hhbmdlLFxuICB2YWx1ZSxcbiAgZXJyb3JNZXNzYWdlLFxufTogU3RlcDNGb3JtUHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChuZXh0U3RlcCl9PlxuICAgICAgPGgxPntxdWVzdGlvbn08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYWRpby1idXR0b25zXCI+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBrZXkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhZGlvLWJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e29wdGlvbi52YWx1ZX0+e29wdGlvbi5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJzZXJ2aWNlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgICAgaWQ9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gb3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZXJyb3JzLnNlcnZpY2UgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvck1lc3NhZ2V9PC9kaXY+XG4gICAgICB9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTdGVwfSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uTGVmdFwiPntwcmV2fTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uUmlnaHRcIj57bmV4dH08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Step3Form/Step3Form.component.tsx\n");

/***/ })

})