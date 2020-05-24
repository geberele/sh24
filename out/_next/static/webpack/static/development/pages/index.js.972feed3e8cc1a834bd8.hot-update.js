webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Step3Form/Step3Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step3Form/Step3Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step3Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step3Form\", function() { return Step3Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/gabrielemanna/Documents/Projects/gm/sh24/src/components/Step3Form/Step3Form.component.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Step3Form = function Step3Form(_ref) {\n  _s();\n\n  var question = _ref.question,\n      next = _ref.next,\n      prev = _ref.prev,\n      options = _ref.options,\n      nextStep = _ref.nextStep,\n      prevStep = _ref.prevStep,\n      _onChange = _ref.onChange,\n      value = _ref.value;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(nextStep),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, question), options.map(function (option, key) {\n    return __jsx(\"div\", {\n      key: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }\n    }, __jsx(\"label\", {\n      htmlFor: option.value,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, option.label), __jsx(\"input\", {\n      type: \"radio\",\n      name: \"service\",\n      value: option.label,\n      onChange: function onChange(e) {\n        return _onChange(e.target.value);\n      },\n      checked: value === option.label // ref={register({ required: true })}\n      ,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 11\n      }\n    }));\n  }), errors.service && __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 26\n    }\n  }, \"Please select an option\"), __jsx(\"div\", {\n    className: \"navigation\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: prevStep,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, prev), __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, next)));\n};\n\n_s(Step3Form, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = Step3Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step3Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwM0Zvcm0vU3RlcDNGb3JtLmNvbXBvbmVudC50c3g/OGZlNSJdLCJuYW1lcyI6WyJTdGVwM0Zvcm0iLCJxdWVzdGlvbiIsIm5leHQiLCJwcmV2Iiwib3B0aW9ucyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJvbkNoYW5nZSIsInZhbHVlIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwibWFwIiwib3B0aW9uIiwia2V5IiwibGFiZWwiLCJlIiwidGFyZ2V0Iiwic2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFrQk8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FTSDtBQUFBOztBQUFBLE1BUnBCQyxRQVFvQixRQVJwQkEsUUFRb0I7QUFBQSxNQVBwQkMsSUFPb0IsUUFQcEJBLElBT29CO0FBQUEsTUFOcEJDLElBTW9CLFFBTnBCQSxJQU1vQjtBQUFBLE1BTHBCQyxPQUtvQixRQUxwQkEsT0FLb0I7QUFBQSxNQUpwQkMsUUFJb0IsUUFKcEJBLFFBSW9CO0FBQUEsTUFIcEJDLFFBR29CLFFBSHBCQSxRQUdvQjtBQUFBLE1BRnBCQyxTQUVvQixRQUZwQkEsUUFFb0I7QUFBQSxNQURwQkMsS0FDb0IsUUFEcEJBLEtBQ29COztBQUFBLGlCQUN1QkMsK0RBQU8sRUFEOUI7QUFBQSxNQUNaQyxRQURZLFlBQ1pBLFFBRFk7QUFBQSxNQUNGQyxZQURFLFlBQ0ZBLFlBREU7QUFBQSxNQUNZQyxNQURaLFlBQ1lBLE1BRFo7O0FBR3BCLFNBQ0U7QUFBTSxZQUFRLEVBQUVELFlBQVksQ0FBQ04sUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixRQUFMLENBREYsRUFFR0csT0FBTyxDQUFDUyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxHQUFUO0FBQUEsV0FDWDtBQUFLLFNBQUcsRUFBRUEsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxhQUFPLEVBQUVELE1BQU0sQ0FBQ04sS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUErQk0sTUFBTSxDQUFDRSxLQUF0QyxDQURGLEVBRUU7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBQyxTQUZQO0FBR0UsV0FBSyxFQUFFRixNQUFNLENBQUNFLEtBSGhCO0FBSUUsY0FBUSxFQUFFLGtCQUFBQyxDQUFDO0FBQUEsZUFBSVYsU0FBUSxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU1YsS0FBVixDQUFaO0FBQUEsT0FKYjtBQUtFLGFBQU8sRUFBRUEsS0FBSyxLQUFLTSxNQUFNLENBQUNFLEtBTDVCLENBTUU7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FEVztBQUFBLEdBQVosQ0FGSCxFQWdCR0osTUFBTSxDQUFDTyxPQUFQLElBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBaEJyQixFQWtCRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRWIsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QkgsSUFBNUIsQ0FERixFQUVFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkQsSUFBdEIsQ0FGRixDQWxCRixDQURGO0FBeUJELENBckNNOztHQUFNRixTO1VBVWdDUyx1RDs7O0tBVmhDVCxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3RlcDNGb3JtL1N0ZXAzRm9ybS5jb21wb25lbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuaW50ZXJmYWNlIFN0ZXAzRm9ybVByb3BzIHtcbiAgcXVlc3Rpb246IHN0cmluZ1xuICBuZXh0OiBzdHJpbmdcbiAgcHJldjogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbiAgb3B0aW9uczogT3B0aW9uc1tdXG4gIG5leHRTdGVwOiAoKSA9PiB2b2lkXG4gIHByZXZTdGVwOiAoKSA9PiB2b2lkXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbnMge1xuICBsYWJlbDogc3RyaW5nXG4gIHZhbHVlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IFN0ZXAzRm9ybSA9ICh7XG4gIHF1ZXN0aW9uLFxuICBuZXh0LFxuICBwcmV2LFxuICBvcHRpb25zLFxuICBuZXh0U3RlcCxcbiAgcHJldlN0ZXAsXG4gIG9uQ2hhbmdlLFxuICB2YWx1ZSxcbn06IFN0ZXAzRm9ybVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKClcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQobmV4dFN0ZXApfT5cbiAgICAgIDxoMT57cXVlc3Rpb259PC9oMT5cbiAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBrZXkpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2tleX0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e29wdGlvbi52YWx1ZX0+e29wdGlvbi5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIG5hbWU9XCJzZXJ2aWNlXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gb3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgLy8gcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIHtlcnJvcnMuc2VydmljZSAmJiA8cD5QbGVhc2Ugc2VsZWN0IGFuIG9wdGlvbjwvcD59XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTdGVwfT57cHJldn08L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIj57bmV4dH08L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Step3Form/Step3Form.component.tsx\n");

/***/ })

})