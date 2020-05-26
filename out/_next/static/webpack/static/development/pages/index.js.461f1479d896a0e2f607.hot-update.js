webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Step3Form/Step3Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step3Form/Step3Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step3Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step3Form\", function() { return Step3Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gabrielemanna/Documents/Projects/gm/sh24/src/components/Step3Form/Step3Form.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Step3Form = function Step3Form(_ref) {\n  _s();\n\n  var question = _ref.question,\n      next = _ref.next,\n      prev = _ref.prev,\n      options = _ref.options,\n      nextStep = _ref.nextStep,\n      prevStep = _ref.prevStep,\n      _onChange = _ref.onChange,\n      value = _ref.value,\n      errorMessage = _ref.errorMessage;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(nextStep),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, question), options.map(function (option, key) {\n    return __jsx(\"div\", {\n      key: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }\n    }, __jsx(\"label\", {\n      htmlFor: option.value,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }\n    }, option.label), __jsx(\"input\", {\n      type: \"radio\",\n      name: \"service\",\n      value: option.label,\n      id: option.value,\n      onChange: function onChange(e) {\n        return _onChange(e.target.value);\n      },\n      checked: value === option.label,\n      ref: register({\n        required: true\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }\n    }));\n  }), errors.service && __jsx(\"div\", {\n    className: \"error\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, errorMessage), __jsx(\"div\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: prevStep,\n    className: \"navigationLeft\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, prev), __jsx(\"button\", {\n    type: \"submit\",\n    className: \"navigationRight\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, next)));\n};\n\n_s(Step3Form, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = Step3Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step3Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwM0Zvcm0vU3RlcDNGb3JtLmNvbXBvbmVudC50c3g/OGZlNSJdLCJuYW1lcyI6WyJTdGVwM0Zvcm0iLCJxdWVzdGlvbiIsIm5leHQiLCJwcmV2Iiwib3B0aW9ucyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJvbkNoYW5nZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwibWFwIiwib3B0aW9uIiwia2V5IiwibGFiZWwiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQW1CTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVVIO0FBQUE7O0FBQUEsTUFUcEJDLFFBU29CLFFBVHBCQSxRQVNvQjtBQUFBLE1BUnBCQyxJQVFvQixRQVJwQkEsSUFRb0I7QUFBQSxNQVBwQkMsSUFPb0IsUUFQcEJBLElBT29CO0FBQUEsTUFOcEJDLE9BTW9CLFFBTnBCQSxPQU1vQjtBQUFBLE1BTHBCQyxRQUtvQixRQUxwQkEsUUFLb0I7QUFBQSxNQUpwQkMsUUFJb0IsUUFKcEJBLFFBSW9CO0FBQUEsTUFIcEJDLFNBR29CLFFBSHBCQSxRQUdvQjtBQUFBLE1BRnBCQyxLQUVvQixRQUZwQkEsS0FFb0I7QUFBQSxNQURwQkMsWUFDb0IsUUFEcEJBLFlBQ29COztBQUFBLGlCQUN1QkMsK0RBQU8sRUFEOUI7QUFBQSxNQUNaQyxRQURZLFlBQ1pBLFFBRFk7QUFBQSxNQUNGQyxZQURFLFlBQ0ZBLFlBREU7QUFBQSxNQUNZQyxNQURaLFlBQ1lBLE1BRFo7O0FBR3BCLFNBQ0U7QUFBTSxZQUFRLEVBQUVELFlBQVksQ0FBQ1AsUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixRQUFMLENBREYsRUFFR0csT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxHQUFUO0FBQUEsV0FDWDtBQUFLLFNBQUcsRUFBRUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxhQUFPLEVBQUVELE1BQU0sQ0FBQ1AsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQk8sTUFBTSxDQUFDRSxLQUF0QyxDQURGLEVBRUU7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBQyxTQUZQO0FBR0UsV0FBSyxFQUFFRixNQUFNLENBQUNFLEtBSGhCO0FBSUUsUUFBRSxFQUFFRixNQUFNLENBQUNQLEtBSmI7QUFLRSxjQUFRLEVBQUUsa0JBQUFVLENBQUM7QUFBQSxlQUFJWCxTQUFRLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTWCxLQUFWLENBQVo7QUFBQSxPQUxiO0FBTUUsYUFBTyxFQUFFQSxLQUFLLEtBQUtPLE1BQU0sQ0FBQ0UsS0FONUI7QUFPRSxTQUFHLEVBQUVOLFFBQVEsQ0FBQztBQUFFUyxnQkFBUSxFQUFFO0FBQVosT0FBRCxDQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQURXO0FBQUEsR0FBWixDQUZILEVBaUJHUCxNQUFNLENBQUNRLE9BQVAsSUFDQztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JaLFlBQXhCLENBbEJKLEVBcUJFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFSCxRQUFqQjtBQUEyQixhQUFTLEVBQUMsZ0JBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURILElBQXZELENBREYsRUFFRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxpQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtREQsSUFBbkQsQ0FGRixDQXJCRixDQURGO0FBNEJELENBekNNOztHQUFNRixTO1VBV2dDVSx1RDs7O0tBWGhDVixTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3RlcDNGb3JtL1N0ZXAzRm9ybS5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuaW50ZXJmYWNlIFN0ZXAzRm9ybVByb3BzIHtcbiAgcXVlc3Rpb246IHN0cmluZ1xuICBuZXh0OiBzdHJpbmdcbiAgcHJldjogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmdcbiAgb3B0aW9uczogT3B0aW9uc1tdXG4gIG5leHRTdGVwOiAoKSA9PiB2b2lkXG4gIHByZXZTdGVwOiAoKSA9PiB2b2lkXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xuICBsYWJlbDogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0ZXAzRm9ybSA9ICh7XG4gIHF1ZXN0aW9uLFxuICBuZXh0LFxuICBwcmV2LFxuICBvcHRpb25zLFxuICBuZXh0U3RlcCxcbiAgcHJldlN0ZXAsXG4gIG9uQ2hhbmdlLFxuICB2YWx1ZSxcbiAgZXJyb3JNZXNzYWdlLFxufTogU3RlcDNGb3JtUHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChuZXh0U3RlcCl9PlxuICAgICAgPGgxPntxdWVzdGlvbn08L2gxPlxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGtleSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17a2V5fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17b3B0aW9uLnZhbHVlfT57b3B0aW9uLmxhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgbmFtZT1cInNlcnZpY2VcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbi5sYWJlbH1cbiAgICAgICAgICAgIGlkPXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gb3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIHtlcnJvcnMuc2VydmljZSAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yTWVzc2FnZX08L2Rpdj5cbiAgICAgIH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJldlN0ZXB9IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25MZWZ0XCI+e3ByZXZ9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25SaWdodFwiPntuZXh0fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Step3Form/Step3Form.component.tsx\n");

/***/ })

})