webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz85NTIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/defineProperty.js\n");

/***/ }),

/***/ "./src/components/Step3Form/Step3Form.component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Step3Form/Step3Form.component.tsx ***!
  \**********************************************************/
/*! exports provided: Step3Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Step3Form\", function() { return Step3Form; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/react-hook-form.es.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Step3Form = function Step3Form(_ref) {\n  _s();\n\n  var question = _ref.question,\n      next = _ref.next,\n      prev = _ref.prev,\n      options = _ref.options,\n      nextStep = _ref.nextStep,\n      prevStep = _ref.prevStep,\n      _onChange = _ref.onChange,\n      value = _ref.value,\n      errorMessage = _ref.errorMessage;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit(nextStep)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, question), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"radio-buttons\"\n  }, options.map(function (option, key) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      key: key,\n      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('radio-button', {\n        'selected': value === option.value\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n      htmlFor: option.value,\n      \"data-testid\": \"label-service\"\n    }, option.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n      type: \"radio\",\n      name: \"service\",\n      value: option.value,\n      id: option.value,\n      onChange: function onChange(e) {\n        return _onChange(e.target.value);\n      },\n      checked: value === option.value,\n      ref: register({\n        required: true\n      }),\n      className: \"hidden\",\n      \"data-testid\": \"input-service\"\n    }, \"className\", classnames__WEBPACK_IMPORTED_MODULE_3___default()({\n      'checked': value === option.value\n    }))));\n  })), errors.service && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"error\",\n    \"data-testid\": \"input-error\"\n  }, errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"navigation\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: prevStep,\n    className: \"navigationLeft\",\n    \"data-testid\": \"button-prev\"\n  }, prev), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"navigationRight\",\n    \"data-testid\": \"button-next\"\n  }, next)));\n};\n\n_s(Step3Form, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"]];\n});\n\n_c = Step3Form;\n\nvar _c;\n\n$RefreshReg$(_c, \"Step3Form\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwM0Zvcm0vU3RlcDNGb3JtLmNvbXBvbmVudC50c3g/OGZlNSJdLCJuYW1lcyI6WyJTdGVwM0Zvcm0iLCJxdWVzdGlvbiIsIm5leHQiLCJwcmV2Iiwib3B0aW9ucyIsIm5leHRTdGVwIiwicHJldlN0ZXAiLCJvbkNoYW5nZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwibWFwIiwib3B0aW9uIiwia2V5IiwiY24iLCJsYWJlbCIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFtQk8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FVSDtBQUFBOztBQUFBLE1BVHBCQyxRQVNvQixRQVRwQkEsUUFTb0I7QUFBQSxNQVJwQkMsSUFRb0IsUUFScEJBLElBUW9CO0FBQUEsTUFQcEJDLElBT29CLFFBUHBCQSxJQU9vQjtBQUFBLE1BTnBCQyxPQU1vQixRQU5wQkEsT0FNb0I7QUFBQSxNQUxwQkMsUUFLb0IsUUFMcEJBLFFBS29CO0FBQUEsTUFKcEJDLFFBSW9CLFFBSnBCQSxRQUlvQjtBQUFBLE1BSHBCQyxTQUdvQixRQUhwQkEsUUFHb0I7QUFBQSxNQUZwQkMsS0FFb0IsUUFGcEJBLEtBRW9CO0FBQUEsTUFEcEJDLFlBQ29CLFFBRHBCQSxZQUNvQjs7QUFBQSxpQkFDdUJDLCtEQUFPLEVBRDlCO0FBQUEsTUFDWkMsUUFEWSxZQUNaQSxRQURZO0FBQUEsTUFDRkMsWUFERSxZQUNGQSxZQURFO0FBQUEsTUFDWUMsTUFEWixZQUNZQSxNQURaOztBQUdwQixzQkFDRTtBQUFNLFlBQVEsRUFBRUQsWUFBWSxDQUFDUCxRQUFEO0FBQTVCLGtCQUNFLHVFQUFLSixRQUFMLENBREYsZUFFRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dHLE9BQU8sQ0FBQ1UsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsR0FBVDtBQUFBLHdCQUNYO0FBQ0UsU0FBRyxFQUFFQSxHQURQO0FBRUUsZUFBUyxFQUFFQyxpREFBRSxDQUFDLGNBQUQsRUFBaUI7QUFBRSxvQkFBWVQsS0FBSyxLQUFLTyxNQUFNLENBQUNQO0FBQS9CLE9BQWpCO0FBRmYsb0JBSUU7QUFBTyxhQUFPLEVBQUVPLE1BQU0sQ0FBQ1AsS0FBdkI7QUFBOEIscUJBQVk7QUFBMUMsT0FBMkRPLE1BQU0sQ0FBQ0csS0FBbEUsQ0FKRixlQUtFO0FBQ0UsVUFBSSxFQUFDLE9BRFA7QUFFRSxVQUFJLEVBQUMsU0FGUDtBQUdFLFdBQUssRUFBRUgsTUFBTSxDQUFDUCxLQUhoQjtBQUlFLFFBQUUsRUFBRU8sTUFBTSxDQUFDUCxLQUpiO0FBS0UsY0FBUSxFQUFFLGtCQUFBVyxDQUFDO0FBQUEsZUFBSVosU0FBUSxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU1osS0FBVixDQUFaO0FBQUEsT0FMYjtBQU1FLGFBQU8sRUFBRUEsS0FBSyxLQUFLTyxNQUFNLENBQUNQLEtBTjVCO0FBT0UsU0FBRyxFQUFFRyxRQUFRLENBQUM7QUFBRVUsZ0JBQVEsRUFBRTtBQUFaLE9BQUQsQ0FQZjtBQVFFLGVBQVMsRUFBQyxRQVJaO0FBU0UscUJBQVk7QUFUZCxvQkFVYUosaURBQUUsQ0FBQztBQUFFLGlCQUFXVCxLQUFLLEtBQUtPLE1BQU0sQ0FBQ1A7QUFBOUIsS0FBRCxDQVZmLEVBTEYsQ0FEVztBQUFBLEdBQVosQ0FESCxDQUZGLEVBeUJHSyxNQUFNLENBQUNTLE9BQVAsaUJBQ0M7QUFDRSxhQUFTLEVBQUMsT0FEWjtBQUVFLG1CQUFZO0FBRmQsS0FJR2IsWUFKSCxDQTFCSixlQWtDRTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNFO0FBQ0UsV0FBTyxFQUFFSCxRQURYO0FBRUUsYUFBUyxFQUFDLGdCQUZaO0FBR0UsbUJBQVk7QUFIZCxLQUtHSCxJQUxILENBREYsZUFRRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLGlCQUZaO0FBR0UsbUJBQVk7QUFIZCxLQUtHRCxJQUxILENBUkYsQ0FsQ0YsQ0FERjtBQXFERCxDQWxFTTs7R0FBTUYsUztVQVdnQ1UsdUQ7OztLQVhoQ1YsUyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1N0ZXAzRm9ybS9TdGVwM0Zvcm0uY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcblxuZXhwb3J0IGludGVyZmFjZSBTdGVwM0Zvcm1Qcm9wcyB7XG4gIHF1ZXN0aW9uOiBzdHJpbmdcbiAgbmV4dDogc3RyaW5nXG4gIHByZXY6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nXG4gIG9wdGlvbnM6IE9wdGlvbnNbXVxuICBuZXh0U3RlcDogKCkgPT4gdm9pZFxuICBwcmV2U3RlcDogKCkgPT4gdm9pZFxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIHtcbiAgbGFiZWw6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBTdGVwM0Zvcm0gPSAoe1xuICBxdWVzdGlvbixcbiAgbmV4dCxcbiAgcHJldixcbiAgb3B0aW9ucyxcbiAgbmV4dFN0ZXAsXG4gIHByZXZTdGVwLFxuICBvbkNoYW5nZSxcbiAgdmFsdWUsXG4gIGVycm9yTWVzc2FnZSxcbn06IFN0ZXAzRm9ybVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKClcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQobmV4dFN0ZXApfT5cbiAgICAgIDxoMT57cXVlc3Rpb259PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaW8tYnV0dG9uc1wiPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwga2V5KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NuKCdyYWRpby1idXR0b24nLCB7ICdzZWxlY3RlZCc6IHZhbHVlID09PSBvcHRpb24udmFsdWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e29wdGlvbi52YWx1ZX0gZGF0YS10ZXN0aWQ9XCJsYWJlbC1zZXJ2aWNlXCI+e29wdGlvbi5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJzZXJ2aWNlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgaWQ9e29wdGlvbi52YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaW5wdXQtc2VydmljZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oeyAnY2hlY2tlZCc6IHZhbHVlID09PSBvcHRpb24udmFsdWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7ZXJyb3JzLnNlcnZpY2UgJiZcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImVycm9yXCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImlucHV0LWVycm9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3ByZXZTdGVwfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25MZWZ0XCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImJ1dHRvbi1wcmV2XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtwcmV2fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmlnYXRpb25SaWdodFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJidXR0b24tbmV4dFwiXG4gICAgICAgID5cbiAgICAgICAgICB7bmV4dH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Step3Form/Step3Form.component.tsx\n");

/***/ })

})