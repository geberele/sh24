webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx ***!
  \**************************************************************************/
/*! exports provided: getOptionLabel, MultipleStepsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getOptionLabel\", function() { return getOptionLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MultipleStepsForm\", function() { return MultipleStepsForm; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Step1Form_Step1Form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Step1Form/Step1Form.component */ \"./src/components/Step1Form/Step1Form.component.tsx\");\n/* harmony import */ var _Step2Form_Step2Form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Step2Form/Step2Form.component */ \"./src/components/Step2Form/Step2Form.component.tsx\");\n/* harmony import */ var _Step3Form_Step3Form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Step3Form/Step3Form.component */ \"./src/components/Step3Form/Step3Form.component.tsx\");\n/* harmony import */ var _Preview_Preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Preview/Preview.component */ \"./src/components/Preview/Preview.component.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar getOptionLabel = function getOptionLabel(value, options) {\n  var selectedOption = options.filter(function (option) {\n    return value === option.value;\n  });\n  return selectedOption.length > 0 ? selectedOption[0].label : '';\n};\nvar MultipleStepsForm = function MultipleStepsForm(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      step = _useState2[0],\n      setStep = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      email = _useState6[0],\n      setEmail = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      service = _useState8[0],\n      setService = _useState8[1];\n\n  var i18n;\n\n  if (props.language === 'it') {\n    i18n = __webpack_require__(/*! ./i18n/i18n.ts */ \"./src/components/MultipleStepsForm/i18n/i18n.ts\").it;\n  } else {\n    i18n = __webpack_require__(/*! ./i18n/i18n.ts */ \"./src/components/MultipleStepsForm/i18n/i18n.ts\").en;\n  }\n\n  var options = [{\n    label: i18n.options1,\n    value: 'one'\n  }, {\n    label: i18n.options2,\n    value: 'two'\n  }, {\n    label: i18n.options3,\n    value: 'three'\n  }];\n  var qandas = [{\n    question: i18n.question1,\n    answer: name\n  }, {\n    question: i18n.question2,\n    answer: email\n  }, {\n    question: i18n.question3,\n    answer: service\n  }];\n\n  switch (step) {\n    default:\n    case 1:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step1Form_Step1Form_component__WEBPACK_IMPORTED_MODULE_2__[\"Step1Form\"], {\n        question: i18n.question1,\n        label: i18n.labelName,\n        next: i18n.next,\n        value: name,\n        nextStep: function nextStep() {\n          return setStep(2);\n        },\n        onChange: function onChange(value) {\n          return setName(value);\n        },\n        errorMessage: i18n.errorMessage1\n      });\n\n    case 2:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step2Form_Step2Form_component__WEBPACK_IMPORTED_MODULE_3__[\"Step2Form\"], {\n        question: i18n.question2,\n        label: i18n.labelEmail,\n        next: i18n.next,\n        prev: i18n.prev,\n        value: email,\n        nextStep: function nextStep() {\n          return setStep(3);\n        },\n        prevStep: function prevStep() {\n          return setStep(1);\n        },\n        onChange: function onChange(value) {\n          return setEmail(value);\n        },\n        errorMessage: i18n.errorMessage2\n      });\n\n    case 3:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step3Form_Step3Form_component__WEBPACK_IMPORTED_MODULE_4__[\"Step3Form\"], {\n        question: i18n.question3,\n        next: i18n.next,\n        prev: i18n.prev,\n        value: service,\n        options: options,\n        nextStep: function nextStep() {\n          return setStep(4);\n        },\n        prevStep: function prevStep() {\n          return setStep(2);\n        },\n        onChange: function onChange(value) {\n          return setService(getOptionLabel(value));\n        },\n        errorMessage: i18n.errorMessage3\n      });\n\n    case 4:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Preview_Preview_component__WEBPACK_IMPORTED_MODULE_5__[\"Preview\"], {\n        title: i18n.previewTitle,\n        prevStep: function prevStep() {\n          return setStep(3);\n        },\n        qandas: qandas,\n        prev: i18n.prev\n      });\n  }\n};\n\n_s(MultipleStepsForm, \"vYPMJoKbi1jUJvSe4hy11ivDH80=\");\n\n_c = MultipleStepsForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"MultipleStepsForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NdWx0aXBsZVN0ZXBzRm9ybS9NdWx0aXBsZVN0ZXBzRm9ybS5jb21wb25lbnQudHN4P2Y0NDIiXSwibmFtZXMiOlsiZ2V0T3B0aW9uTGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsImZpbHRlciIsIm9wdGlvbiIsImxlbmd0aCIsImxhYmVsIiwiTXVsdGlwbGVTdGVwc0Zvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwic3RlcCIsInNldFN0ZXAiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJzZXJ2aWNlIiwic2V0U2VydmljZSIsImkxOG4iLCJsYW5ndWFnZSIsInJlcXVpcmUiLCJpdCIsImVuIiwib3B0aW9uczEiLCJvcHRpb25zMiIsIm9wdGlvbnMzIiwicWFuZGFzIiwicXVlc3Rpb24iLCJxdWVzdGlvbjEiLCJhbnN3ZXIiLCJxdWVzdGlvbjIiLCJxdWVzdGlvbjMiLCJsYWJlbE5hbWUiLCJuZXh0IiwiZXJyb3JNZXNzYWdlMSIsImxhYmVsRW1haWwiLCJwcmV2IiwiZXJyb3JNZXNzYWdlMiIsImVycm9yTWVzc2FnZTMiLCJwcmV2aWV3VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBZ0JDLE9BQWhCLEVBQStDO0FBQzNFLE1BQU1DLGNBQXlCLEdBQUlELE9BQU8sQ0FBQ0UsTUFBUixDQUFlLFVBQUFDLE1BQU07QUFBQSxXQUFJSixLQUFLLEtBQUtJLE1BQU0sQ0FBQ0osS0FBckI7QUFBQSxHQUFyQixDQUFuQztBQUNBLFNBQU9FLGNBQWMsQ0FBQ0csTUFBZixHQUF3QixDQUF4QixHQUE0QkgsY0FBYyxDQUFDLENBQUQsQ0FBZCxDQUFrQkksS0FBOUMsR0FBc0QsRUFBN0Q7QUFDRCxDQUhNO0FBS0EsSUFBTUMs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QWFGLFNBQUssQ0FBTDtBQUNFLDBCQUNFLDJEQUFDLHdFQUFEO0FBQ0UsZ0JBQVEsRUFBRW5CLElBQUksQ0FBQ2EsU0FEakI7QUFFRSxZQUFJLEVBQUViLElBQUksQ0FBQ2UsSUFGYjtBQUdFLFlBQUksRUFBRWYsSUFBSSxDQUFDa0IsSUFIYjtBQUlFLGFBQUssRUFBRXBCLE9BSlQ7QUFLRSxlQUFPLEVBQUVmLE9BTFg7QUFNRSxnQkFBUSxFQUFFO0FBQUEsaUJBQU1VLE9BQU8sQ0FBQyxDQUFELENBQWI7QUFBQSxTQU5aO0FBT0UsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNQSxPQUFPLENBQUMsQ0FBRCxDQUFiO0FBQUEsU0FQWjtBQVFFLGdCQUFRLEVBQUUsa0JBQUNYLEtBQUQ7QUFBQSxpQkFBbUJpQixVQUFVLENBQUNsQixjQUFjLENBQUNDLEtBQUQsQ0FBZixDQUE3QjtBQUFBLFNBUlo7QUFTRSxvQkFBWSxFQUFFa0IsSUFBSSxDQUFDb0I7QUFUckIsUUFERjs7QUFhRixTQUFLLENBQUw7QUFDRSwwQkFDRSwyREFBQyxrRUFBRDtBQUNFLGFBQUssRUFBRXBCLElBQUksQ0FBQ3FCLFlBRGQ7QUFFRSxnQkFBUSxFQUFFO0FBQUEsaUJBQU01QixPQUFPLENBQUMsQ0FBRCxDQUFiO0FBQUEsU0FGWjtBQUdFLGNBQU0sRUFBRWUsTUFIVjtBQUlFLFlBQUksRUFBRVIsSUFBSSxDQUFDa0I7QUFKYixRQURGO0FBM0NKO0FBb0RELENBOUVNOztHQUFNN0IsaUI7O0tBQUFBLGlCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTXVsdGlwbGVTdGVwc0Zvcm0vTXVsdGlwbGVTdGVwc0Zvcm0uY29tcG9uZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3RlcDFGb3JtIH0gZnJvbSAnLi4vU3RlcDFGb3JtL1N0ZXAxRm9ybS5jb21wb25lbnQnXG5pbXBvcnQgeyBTdGVwMkZvcm0gfSBmcm9tICcuLi9TdGVwMkZvcm0vU3RlcDJGb3JtLmNvbXBvbmVudCdcbmltcG9ydCB7IE9wdGlvbnMsIFN0ZXAzRm9ybSB9IGZyb20gJy4uL1N0ZXAzRm9ybS9TdGVwM0Zvcm0uY29tcG9uZW50J1xuaW1wb3J0IHsgUHJldmlldywgUWFuZEEgfSBmcm9tICcuLi9QcmV2aWV3L1ByZXZpZXcuY29tcG9uZW50J1xuaW1wb3J0IHsgSTE4TiB9IGZyb20gJy4vaTE4bi9pMThuLnR5cGVzJ1xuXG5pbnRlcmZhY2UgTXVsdGlwbGVTdGVwc0Zvcm1Qcm9wcyB7XG4gIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGdldE9wdGlvbkxhYmVsID0gKHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNbXSk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uOiBPcHRpb25zW10gID0gb3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IHZhbHVlID09PSBvcHRpb24udmFsdWUpXG4gIHJldHVybiBzZWxlY3RlZE9wdGlvbi5sZW5ndGggPiAwID8gc2VsZWN0ZWRPcHRpb25bMF0ubGFiZWwgOiAnJ1xufVxuXG5leHBvcnQgY29uc3QgTXVsdGlwbGVTdGVwc0Zvcm0gPSAocHJvcHM6IE11bHRpcGxlU3RlcHNGb3JtUHJvcHMpID0+IHtcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSlcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtzZXJ2aWNlLCBzZXRTZXJ2aWNlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGxldCBpMThuOiBJMThOXG5cbiAgaWYgKHByb3BzLmxhbmd1YWdlID09PSAnaXQnKSB7XG4gICAgaTE4biA9IHJlcXVpcmUoJy4vaTE4bi9pMThuLnRzJykuaXRcbiAgfSBlbHNlIHtcbiAgICBpMThuID0gcmVxdWlyZSgnLi9pMThuL2kxOG4udHMnKS5lblxuICB9XG5cbiAgY29uc3Qgb3B0aW9uczogT3B0aW9uc1tdID0gW1xuICAgIHsgbGFiZWw6IGkxOG4ub3B0aW9uczEsIHZhbHVlOiAnb25lJyB9LFxuICAgIHsgbGFiZWw6IGkxOG4ub3B0aW9uczIsIHZhbHVlOiAndHdvJyB9LFxuICAgIHsgbGFiZWw6IGkxOG4ub3B0aW9uczMsIHZhbHVlOiAndGhyZWUnIH0sXG4gIF1cblxuICBjb25zdCBxYW5kYXM6IFFhbmRBW10gPSBbXG4gICAgeyBxdWVzdGlvbjogaTE4bi5xdWVzdGlvbjEsIGFuc3dlcjogbmFtZSB9LFxuICAgIHsgcXVlc3Rpb246IGkxOG4ucXVlc3Rpb24yLCBhbnN3ZXI6IGVtYWlsIH0sXG4gICAgeyBxdWVzdGlvbjogaTE4bi5xdWVzdGlvbjMsIGFuc3dlcjogc2VydmljZSB9LFxuICBdXG5cbiAgc3dpdGNoIChzdGVwKSB7XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3RlcDFGb3JtXG4gICAgICAgICAgcXVlc3Rpb249e2kxOG4ucXVlc3Rpb24xfVxuICAgICAgICAgIGxhYmVsPXtpMThuLmxhYmVsTmFtZX1cbiAgICAgICAgICBuZXh0PXtpMThuLm5leHR9XG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgbmV4dFN0ZXA9eygpID0+IHNldFN0ZXAoMil9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiBzZXROYW1lKHZhbHVlKX1cbiAgICAgICAgICBlcnJvck1lc3NhZ2U9e2kxOG4uZXJyb3JNZXNzYWdlMX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3RlcDJGb3JtXG4gICAgICAgICAgcXVlc3Rpb249e2kxOG4ucXVlc3Rpb24yfVxuICAgICAgICAgIGxhYmVsPXtpMThuLmxhYmVsRW1haWx9XG4gICAgICAgICAgbmV4dD17aTE4bi5uZXh0fVxuICAgICAgICAgIHByZXY9e2kxOG4ucHJldn1cbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgbmV4dFN0ZXA9eygpID0+IHNldFN0ZXAoMyl9XG4gICAgICAgICAgcHJldlN0ZXA9eygpID0+IHNldFN0ZXAoMSl9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiBzZXRFbWFpbCh2YWx1ZSl9XG4gICAgICAgICAgZXJyb3JNZXNzYWdlPXtpMThuLmVycm9yTWVzc2FnZTJ9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0ZXAzRm9ybVxuICAgICAgICAgIHF1ZXN0aW9uPXtpMThuLnF1ZXN0aW9uM31cbiAgICAgICAgICBuZXh0PXtpMThuLm5leHR9XG4gICAgICAgICAgcHJldj17aTE4bi5wcmV2fVxuICAgICAgICAgIHZhbHVlPXtzZXJ2aWNlfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgbmV4dFN0ZXA9eygpID0+IHNldFN0ZXAoNCl9XG4gICAgICAgICAgcHJldlN0ZXA9eygpID0+IHNldFN0ZXAoMil9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiBzZXRTZXJ2aWNlKGdldE9wdGlvbkxhYmVsKHZhbHVlKSl9XG4gICAgICAgICAgZXJyb3JNZXNzYWdlPXtpMThuLmVycm9yTWVzc2FnZTN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFByZXZpZXdcbiAgICAgICAgICB0aXRsZT17aTE4bi5wcmV2aWV3VGl0bGV9XG4gICAgICAgICAgcHJldlN0ZXA9eygpID0+IHNldFN0ZXAoMyl9XG4gICAgICAgICAgcWFuZGFzPXtxYW5kYXN9XG4gICAgICAgICAgcHJldj17aTE4bi5wcmV2fVxuICAgICAgICAvPlxuICAgICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx\n");

/***/ })

})