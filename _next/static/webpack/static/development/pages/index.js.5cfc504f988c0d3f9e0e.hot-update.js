webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./src/components/Step3Form/Step3Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step3Form/Step3Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step3Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step3Form\", function() { return Step3Form; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\n\nvar Step3Form = function Step3Form(_ref) {\n  _s();\n\n  var question = _ref.question,\n      next = _ref.next,\n      prev = _ref.prev,\n      options = _ref.options,\n      nextStep = _ref.nextStep,\n      prevStep = _ref.prevStep,\n      _onChange = _ref.onChange,\n      value = _ref.value,\n      errorMessage = _ref.errorMessage;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit(nextStep)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"radio-buttons\"\n  }, options.map(function (option, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: key,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('radio-button', {\n        'selected': value === option.value\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: option.value,\n      \"data-testid\": \"label-service\"\n    }, option.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"radio\",\n      name: \"service\",\n      value: option.value,\n      id: option.value,\n      onChange: function onChange(e) {\n        return _onChange(e.target.value);\n      },\n      checked: value === option.value,\n      ref: register({\n        required: true\n      }),\n      \"data-testid\": \"input-service\",\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"hidden\", {\n        'checked': value === option.value\n      })\n    }));\n  })), errors.service && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"error\",\n    \"data-testid\": \"input-error\"\n  }, errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"navigation\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: prevStep,\n    className: \"navigationLeft\",\n    \"data-testid\": \"button-prev\"\n  }, prev), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"navigationRight\",\n    \"data-testid\": \"button-next\"\n  }, next)));\n};\n\n_s(Step3Form, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = Step3Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step3Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwM0Zvcm0vU3RlcDNGb3JtLmNvbXBvbmVudC50c3g/OGZlNSJdLCJuYW1lcyI6WyJTdGVwM0Zvcm0iLCJxdWVzdGlvbiIsIm5leHQiLCJwcmV2Iiwib3B0aW9ucyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJvbkNoYW5nZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwibWFwIiwib3B0aW9uIiwia2V5IiwiY24iLCJsYWJlbCIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQW1CTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVVIO0FBQUE7O0FBQUEsTUFUcEJDLFFBU29CLFFBVHBCQSxRQVNvQjtBQUFBLE1BUnBCQyxJQVFvQixRQVJwQkEsSUFRb0I7QUFBQSxNQVBwQkMsSUFPb0IsUUFQcEJBLElBT29CO0FBQUEsTUFOcEJDLE9BTW9CLFFBTnBCQSxPQU1vQjtBQUFBLE1BTHBCQyxRQUtvQixRQUxwQkEsUUFLb0I7QUFBQSxNQUpwQkMsUUFJb0IsUUFKcEJBLFFBSW9CO0FBQUEsTUFIcEJDLFNBR29CLFFBSHBCQSxRQUdvQjtBQUFBLE1BRnBCQyxLQUVvQixRQUZwQkEsS0FFb0I7QUFBQSxNQURwQkMsWUFDb0IsUUFEcEJBLFlBQ29COztBQUFBLGlCQUN1QkMsK0RBQU8sRUFEOUI7QUFBQSxNQUNaQyxRQURZLFlBQ1pBLFFBRFk7QUFBQSxNQUNGQyxZQURFLFlBQ0ZBLFlBREU7QUFBQSxNQUNZQyxNQURaLFlBQ1lBLE1BRFo7O0FBR3BCLHNCQUNFO0FBQU0sWUFBUSxFQUFFRCxZQUFZLENBQUNQLFFBQUQ7QUFBNUIsa0JBQ0UsdUVBQUtKLFFBQUwsQ0FERixlQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0csT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxHQUFUO0FBQUEsd0JBQ1g7QUFDRSxTQUFHLEVBQUVBLEdBRFA7QUFFRSxlQUFTLEVBQUVDLGlEQUFFLENBQUMsY0FBRCxFQUFpQjtBQUFFLG9CQUFZVCxLQUFLLEtBQUtPLE1BQU0sQ0FBQ1A7QUFBL0IsT0FBakI7QUFGZixvQkFJRTtBQUFPLGFBQU8sRUFBRU8sTUFBTSxDQUFDUCxLQUF2QjtBQUE4QixxQkFBWTtBQUExQyxPQUEyRE8sTUFBTSxDQUFDRyxLQUFsRSxDQUpGLGVBS0U7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFVBQUksRUFBQyxTQUZQO0FBR0UsV0FBSyxFQUFFSCxNQUFNLENBQUNQLEtBSGhCO0FBSUUsUUFBRSxFQUFFTyxNQUFNLENBQUNQLEtBSmI7QUFLRSxjQUFRLEVBQUUsa0JBQUFXLENBQUM7QUFBQSxlQUFJWixTQUFRLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTWixLQUFWLENBQVo7QUFBQSxPQUxiO0FBTUUsYUFBTyxFQUFFQSxLQUFLLEtBQUtPLE1BQU0sQ0FBQ1AsS0FONUI7QUFPRSxTQUFHLEVBQUVHLFFBQVEsQ0FBQztBQUFFVSxnQkFBUSxFQUFFO0FBQVosT0FBRCxDQVBmO0FBUUUscUJBQVksZUFSZDtBQVNFLGVBQVMsRUFBRUosaURBQUUsQ0FBQyxRQUFELEVBQVc7QUFBQyxtQkFBV1QsS0FBSyxLQUFLTyxNQUFNLENBQUNQO0FBQTdCLE9BQVg7QUFUZixNQUxGLENBRFc7QUFBQSxHQUFaLENBREgsQ0FGRixFQXdCR0ssTUFBTSxDQUFDUyxPQUFQLGlCQUNDO0FBQ0UsYUFBUyxFQUFDLE9BRFo7QUFFRSxtQkFBWTtBQUZkLEtBSUdiLFlBSkgsQ0F6QkosZUFpQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDRTtBQUNFLFdBQU8sRUFBRUgsUUFEWDtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUdFLG1CQUFZO0FBSGQsS0FLR0gsSUFMSCxDQURGLGVBUUU7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQyxpQkFGWjtBQUdFLG1CQUFZO0FBSGQsS0FLR0QsSUFMSCxDQVJGLENBakNGLENBREY7QUFvREQsQ0FqRU07O0dBQU1GLFM7VUFXZ0NVLHVEOzs7S0FYaENWLFMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGVwM0Zvcm0vU3RlcDNGb3JtLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcDNGb3JtUHJvcHMge1xuICBxdWVzdGlvbjogc3RyaW5nXG4gIG5leHQ6IHN0cmluZ1xuICBwcmV2OiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZ1xuICBvcHRpb25zOiBPcHRpb25zW11cbiAgbmV4dFN0ZXA6ICgpID0+IHZvaWRcbiAgcHJldlN0ZXA6ICgpID0+IHZvaWRcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9ucyB7XG4gIGxhYmVsOiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgU3RlcDNGb3JtID0gKHtcbiAgcXVlc3Rpb24sXG4gIG5leHQsXG4gIHByZXYsXG4gIG9wdGlvbnMsXG4gIG5leHRTdGVwLFxuICBwcmV2U3RlcCxcbiAgb25DaGFuZ2UsXG4gIHZhbHVlLFxuICBlcnJvck1lc3NhZ2UsXG59OiBTdGVwM0Zvcm1Qcm9wcykgPT4ge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGVycm9ycyB9ID0gdXNlRm9ybSgpXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG5leHRTdGVwKX0+XG4gICAgICA8aDE+e3F1ZXN0aW9ufTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWJ1dHRvbnNcIj5cbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGtleSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbigncmFkaW8tYnV0dG9uJywgeyAnc2VsZWN0ZWQnOiB2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtvcHRpb24udmFsdWV9IGRhdGEtdGVzdGlkPVwibGFiZWwtc2VydmljZVwiPntvcHRpb24ubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPVwic2VydmljZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgIGlkPXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWUgPT09IG9wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImlucHV0LXNlcnZpY2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFwiaGlkZGVuXCIsIHsnY2hlY2tlZCc6IHZhbHVlID09PSBvcHRpb24udmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZXJyb3JzLnNlcnZpY2UgJiZcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImlucHV0LWVycm9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3ByZXZTdGVwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25MZWZ0XCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImJ1dHRvbi1wcmV2XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcmV2fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25SaWdodFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJidXR0b24tbmV4dFwiXG4gICAgICAgID5cbiAgICAgICAgICB7bmV4dH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Step3Form/Step3Form.component.tsx\n");

/***/ })

})