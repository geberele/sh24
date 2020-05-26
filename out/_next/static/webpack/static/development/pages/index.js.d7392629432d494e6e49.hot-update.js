webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx ***!
  \**************************************************************************/
/*! exports provided: getOptionLabel, getOptionValue, MultipleStepsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOptionLabel\", function() { return getOptionLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOptionValue\", function() { return getOptionValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MultipleStepsForm\", function() { return MultipleStepsForm; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Step1Form_Step1Form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Step1Form/Step1Form.component */ \"./src/components/Step1Form/Step1Form.component.tsx\");\n/* harmony import */ var _Step2Form_Step2Form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Step2Form/Step2Form.component */ \"./src/components/Step2Form/Step2Form.component.tsx\");\n/* harmony import */ var _Step3Form_Step3Form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Step3Form/Step3Form.component */ \"./src/components/Step3Form/Step3Form.component.tsx\");\n/* harmony import */ var _Preview_Preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Preview/Preview.component */ \"./src/components/Preview/Preview.component.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar getOptionLabel = function getOptionLabel(value, options) {\n  var selectedOption = options.filter(function (option) {\n    return value === option.value;\n  });\n  return selectedOption.length > 0 ? selectedOption[0].label : '';\n};\nvar getOptionValue = function getOptionValue(label, options) {\n  var selectedOption = options.filter(function (option) {\n    return label === option.label;\n  });\n  return selectedOption.length > 0 ? selectedOption[0].value : '';\n};\nvar MultipleStepsForm = function MultipleStepsForm(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      step = _useState2[0],\n      setStep = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      email = _useState6[0],\n      setEmail = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      service = _useState8[0],\n      setService = _useState8[1];\n\n  var i18n;\n\n  if (props.language === 'it') {\n    i18n = __webpack_require__(/*! ./i18n/i18n.ts */ \"./src/components/MultipleStepsForm/i18n/i18n.ts\").it;\n  } else {\n    i18n = __webpack_require__(/*! ./i18n/i18n.ts */ \"./src/components/MultipleStepsForm/i18n/i18n.ts\").en;\n  }\n\n  var options = [{\n    label: i18n.options1,\n    value: 'one'\n  }, {\n    label: i18n.options2,\n    value: 'two'\n  }, {\n    label: i18n.options3,\n    value: 'three'\n  }];\n  var qandas = [{\n    question: i18n.question1,\n    answer: name\n  }, {\n    question: i18n.question2,\n    answer: email\n  }, {\n    question: i18n.question3,\n    answer: service\n  }];\n\n  switch (step) {\n    default:\n    case 1:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step1Form_Step1Form_component__WEBPACK_IMPORTED_MODULE_2__[\"Step1Form\"], {\n        question: i18n.question1,\n        label: i18n.labelName,\n        next: i18n.next,\n        value: name,\n        nextStep: function nextStep() {\n          return setStep(2);\n        },\n        onChange: function onChange(value) {\n          return setName(value);\n        },\n        errorMessage: i18n.errorMessage1\n      });\n\n    case 2:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step2Form_Step2Form_component__WEBPACK_IMPORTED_MODULE_3__[\"Step2Form\"], {\n        question: i18n.question2,\n        label: i18n.labelEmail,\n        next: i18n.next,\n        prev: i18n.prev,\n        value: email,\n        nextStep: function nextStep() {\n          return setStep(3);\n        },\n        prevStep: function prevStep() {\n          return setStep(1);\n        },\n        onChange: function onChange(value) {\n          return setEmail(value);\n        },\n        errorMessage: i18n.errorMessage2\n      });\n\n    case 3:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step3Form_Step3Form_component__WEBPACK_IMPORTED_MODULE_4__[\"Step3Form\"], {\n        question: i18n.question3,\n        next: i18n.next,\n        prev: i18n.prev,\n        value: getOptionValue(service, options),\n        options: options,\n        nextStep: function nextStep() {\n          return setStep(4);\n        },\n        prevStep: function prevStep() {\n          return setStep(2);\n        },\n        onChange: function onChange(value) {\n          return setService(getOptionLabel(value, options));\n        },\n        errorMessage: i18n.errorMessage3\n      });\n\n    case 4:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Preview_Preview_component__WEBPACK_IMPORTED_MODULE_5__[\"Preview\"], {\n        title: i18n.previewTitle,\n        prevStep: function prevStep() {\n          return setStep(3);\n        },\n        qandas: qandas,\n        prev: i18n.prev\n      });\n  }\n};\n\n_s(MultipleStepsForm, \"vYPMJoKbi1jUJvSe4hy11ivDH80=\");\n\n_c = MultipleStepsForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"MultipleStepsForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NdWx0aXBsZVN0ZXBzRm9ybS9NdWx0aXBsZVN0ZXBzRm9ybS5jb21wb25lbnQudHN4P2Y0NDIiXSwibmFtZXMiOlsiZ2V0T3B0aW9uTGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsImZpbHRlciIsIm9wdGlvbiIsImxlbmd0aCIsImxhYmVsIiwiZ2V0T3B0aW9uVmFsdWUiLCJNdWx0aXBsZVN0ZXBzRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJzdGVwIiwic2V0U3RlcCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInNlcnZpY2UiLCJzZXRTZXJ2aWNlIiwiaTE4biIsImxhbmd1YWdlIiwicmVxdWlyZSIsIml0IiwiZW4iLCJvcHRpb25zMSIsIm9wdGlvbnMyIiwib3B0aW9uczMiLCJxYW5kYXMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uMSIsImFuc3dlciIsInF1ZXN0aW9uMiIsInF1ZXN0aW9uMyIsImxhYmVsTmFtZSIsIm5leHQiLCJlcnJvck1lc3NhZ2UxIiwibGFiZWxFbWFpbCIsInByZXYiLCJlcnJvck1lc3NhZ2UyIiwiZXJyb3JNZXNzYWdlMyIsInByZXZpZXdUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBZ0JDLE9BQWhCLEVBQStDO0FBQzNFLE1BQU1DLGNBQXlCLEdBQUlELE9BQU8sQ0FBQ0UsTUFBUixDQUFlLFVBQUFDLE1BQU07QUFBQSxXQUFJSixLQUFLLEtBQUtJLE1BQU0sQ0FBQ0osS0FBckI7QUFBQSxHQUFyQixDQUFuQztBQUNBLFNBQU9FLGNBQWMsQ0FBQ0csTUFBZixHQUF3QixDQUF4QixHQUE0QkgsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQkksS0FBOUMsR0FBc0QsRUFBN0Q7QUFD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RSxjQUFNLEVBQUVlLE1BSFY7QUFJRSxZQUFJLEVBQUVSLElBQUksQ0FBQ2tCO0FBSmIsUUFERjtBQTNDSjtBQW9ERCxDQTlFTTs7R0FBTTdCLGlCOztLQUFBQSxpQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL011bHRpcGxlU3RlcHNGb3JtL011bHRpcGxlU3RlcHNGb3JtLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN0ZXAxRm9ybSB9IGZyb20gJy4uL1N0ZXAxRm9ybS9TdGVwMUZvcm0uY29tcG9uZW50J1xuaW1wb3J0IHsgU3RlcDJGb3JtIH0gZnJvbSAnLi4vU3RlcDJGb3JtL1N0ZXAyRm9ybS5jb21wb25lbnQnXG5pbXBvcnQgeyBPcHRpb25zLCBTdGVwM0Zvcm0gfSBmcm9tICcuLi9TdGVwM0Zvcm0vU3RlcDNGb3JtLmNvbXBvbmVudCdcbmltcG9ydCB7IFByZXZpZXcsIFFhbmRBIH0gZnJvbSAnLi4vUHJldmlldy9QcmV2aWV3LmNvbXBvbmVudCdcbmltcG9ydCB7IEkxOE4gfSBmcm9tICcuL2kxOG4vaTE4bi50eXBlcydcblxuaW50ZXJmYWNlIE11bHRpcGxlU3RlcHNGb3JtUHJvcHMge1xuICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXRPcHRpb25MYWJlbCA9ICh2YWx1ZTogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zW10pOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzZWxlY3RlZE9wdGlvbjogT3B0aW9uc1tdICA9IG9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlKVxuICByZXR1cm4gc2VsZWN0ZWRPcHRpb24ubGVuZ3RoID4gMCA/IHNlbGVjdGVkT3B0aW9uWzBdLmxhYmVsIDogJydcbn1cblxuZXhwb3J0IGNvbnN0IGdldE9wdGlvblZhbHVlID0gKGxhYmVsOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNbXSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uOiBPcHRpb25zW10gID0gb3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IGxhYmVsID09PSBvcHRpb24ubGFiZWwpXG4gIHJldHVybiBzZWxlY3RlZE9wdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0ZWRPcHRpb25bMF0udmFsdWUgOiAnJ1xufVxuXG5leHBvcnQgY29uc3QgTXVsdGlwbGVTdGVwc0Zvcm0gPSAocHJvcHM6IE11bHRpcGxlU3RlcHNGb3JtUHJvcHMpID0+IHtcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzZXJ2aWNlLCBzZXRTZXJ2aWNlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGxldCBpMThuOiBJMThOXG5cbiAgaWYgKHByb3BzLmxhbmd1YWdlID09PSAnaXQnKSB7XG4gICAgaTE4biA9IHJlcXVpcmUoJy4vaTE4bi9pMThuLnRzJykuaXRcbiAgfSBlbHNlIHtcbiAgICBpMThuID0gcmVxdWlyZSgnLi9pMThuL2kxOG4udHMnKS5lblxuICB9XG5cbiAgY29uc3Qgb3B0aW9uczogT3B0aW9uc1tdID0gW1xuICAgIHsgbGFiZWw6IGkxOG4ub3B0aW9uczEsIHZhbHVlOiAnb25lJyB9LFxuICAgIHsgbGFiZWw6IGkxOG4ub3B0aW9uczIsIHZhbHVlOiAndHdvJyB9LFxuICAgIHsgbGFiZWw6IGkxOG4ub3B0aW9uczMsIHZhbHVlOiAndGhyZWUnIH0sXG4gIF1cblxuICBjb25zdCBxYW5kYXM6IFFhbmRBW10gPSBbXG4gICAgeyBxdWVzdGlvbjogaTE4bi5xdWVzdGlvbjEsIGFuc3dlcjogbmFtZSB9LFxuICAgIHsgcXVlc3Rpb246IGkxOG4ucXVlc3Rpb24yLCBhbnN3ZXI6IGVtYWlsIH0sXG4gICAgeyBxdWVzdGlvbjogaTE4bi5xdWVzdGlvbjMsIGFuc3dlcjogc2VydmljZSB9LFxuICBdXG5cbiAgc3dpdGNoIChzdGVwKSB7XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3RlcDFGb3JtXG4gICAgICAgICAgcXVlc3Rpb249e2kxOG4ucXVlc3Rpb24xfVxuICAgICAgICAgIGxhYmVsPXtpMThuLmxhYmVsTmFtZX1cbiAgICAgICAgICBuZXh0PXtpMThuLm5leHR9XG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgbmV4dFN0ZXA9eygpID0+IHNldFN0ZXAoMil9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiBzZXROYW1lKHZhbHVlKX1cbiAgICAgICAgICBlcnJvck1lc3NhZ2U9e2kxOG4uZXJyb3JNZXNzYWdlMX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3RlcDJGb3JtXG4gICAgICAgICAgcXVlc3Rpb249e2kxOG4ucXVlc3Rpb24yfVxuICAgICAgICAgIGxhYmVsPXtpMThuLmxhYmVsRW1haWx9XG4gICAgICAgICAgbmV4dD17aTE4bi5uZXh0fVxuICAgICAgICAgIHByZXY9e2kxOG4ucHJldn1cbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgbmV4dFN0ZXA9eygpID0+IHNldFN0ZXAoMyl9XG4gICAgICAgICAgcHJldlN0ZXA9eygpID0+IHNldFN0ZXAoMSl9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiBzZXRFbWFpbCh2YWx1ZSl9XG4gICAgICAgICAgZXJyb3JNZXNzYWdlPXtpMThuLmVycm9yTWVzc2FnZTJ9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0ZXAzRm9ybVxuICAgICAgICAgIHF1ZXN0aW9uPXtpMThuLnF1ZXN0aW9uM31cbiAgICAgICAgICBuZXh0PXtpMThuLm5leHR9XG4gICAgICAgICAgcHJldj17aTE4bi5wcmV2fVxuICAgICAgICAgIHZhbHVlPXtnZXRPcHRpb25WYWx1ZShzZXJ2aWNlLCBvcHRpb25zKX1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIG5leHRTdGVwPXsoKSA9PiBzZXRTdGVwKDQpfVxuICAgICAgICAgIHByZXZTdGVwPXsoKSA9PiBzZXRTdGVwKDIpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWU6IHN0cmluZykgPT4gc2V0U2VydmljZShnZXRPcHRpb25MYWJlbCh2YWx1ZSwgb3B0aW9ucykpfVxuICAgICAgICAgIGVycm9yTWVzc2FnZT17aTE4bi5lcnJvck1lc3NhZ2UzfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQcmV2aWV3XG4gICAgICAgICAgdGl0bGU9e2kxOG4ucHJldmlld1RpdGxlfVxuICAgICAgICAgIHByZXZTdGVwPXsoKSA9PiBzZXRTdGVwKDMpfVxuICAgICAgICAgIHFhbmRhcz17cWFuZGFzfVxuICAgICAgICAgIHByZXY9e2kxOG4ucHJldn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx\n");

/***/ })

})