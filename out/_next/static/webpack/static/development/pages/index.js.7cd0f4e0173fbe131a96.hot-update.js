webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx":
/*!**************************************************************************!*\
  !*** ./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx ***!
  \**************************************************************************/
/*! exports provided: MultipleStepsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MultipleStepsForm\", function() { return MultipleStepsForm; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Step1Form_Step1Form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Step1Form/Step1Form.component */ \"./src/components/Step1Form/Step1Form.component.tsx\");\n/* harmony import */ var _Step2Form_Step2Form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Step2Form/Step2Form.component */ \"./src/components/Step2Form/Step2Form.component.tsx\");\n/* harmony import */ var _Step3Form_Step3Form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Step3Form/Step3Form.component */ \"./src/components/Step3Form/Step3Form.component.tsx\");\n/* harmony import */ var _Preview_Preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Preview/Preview.component */ \"./src/components/Preview/Preview.component.tsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar MultipleStepsForm = function MultipleStepsForm(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      step = _useState2[0],\n      setStep = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      email = _useState6[0],\n      setEmail = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      service = _useState8[0],\n      setService = _useState8[1];\n\n  var i18n;\n\n  if (props.language === 'it') {\n    i18n = __webpack_require__(/*! ./i18n/i18n.ts */ \"./src/components/MultipleStepsForm/i18n/i18n.ts\").it;\n  } else {\n    i18n = __webpack_require__(/*! ./i18n/i18n.ts */ \"./src/components/MultipleStepsForm/i18n/i18n.ts\").en;\n  }\n\n  var options = [{\n    label: i18n.options1,\n    value: 'one'\n  }, {\n    label: i18n.options2,\n    value: 'two'\n  }, {\n    label: i18n.options3,\n    value: 'three'\n  }];\n  var qandas = [{\n    question: i18n.question1,\n    answer: name\n  }, {\n    question: i18n.question2,\n    answer: email\n  }, {\n    question: i18n.question3,\n    answer: service\n  }];\n\n  var getOptionValue = function getOptionValue(label) {\n    var selectedOption = options.filter(function (option) {\n      return label === option.label;\n    });\n    return selectedOption ? selectedOption[0].value : '';\n  };\n\n  switch (step) {\n    default:\n    case 1:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step1Form_Step1Form_component__WEBPACK_IMPORTED_MODULE_2__[\"Step1Form\"], {\n        question: i18n.question1,\n        label: i18n.labelName,\n        next: i18n.next,\n        value: name,\n        nextStep: function nextStep() {\n          return setStep(2);\n        },\n        onChange: function onChange(value) {\n          return setName(value);\n        },\n        errorMessage: i18n.errorMessage1\n      });\n\n    case 2:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step2Form_Step2Form_component__WEBPACK_IMPORTED_MODULE_3__[\"Step2Form\"], {\n        question: i18n.question2,\n        label: i18n.labelEmail,\n        next: i18n.next,\n        prev: i18n.prev,\n        value: email,\n        nextStep: function nextStep() {\n          return setStep(3);\n        },\n        prevStep: function prevStep() {\n          return setStep(1);\n        },\n        onChange: function onChange(value) {\n          return setEmail(value);\n        },\n        errorMessage: i18n.errorMessage2\n      });\n\n    case 3:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Step3Form_Step3Form_component__WEBPACK_IMPORTED_MODULE_4__[\"Step3Form\"], {\n        question: i18n.question3,\n        next: i18n.next,\n        prev: i18n.prev,\n        value: getOptionValue(service),\n        options: options,\n        nextStep: function nextStep() {\n          return setStep(4);\n        },\n        prevStep: function prevStep() {\n          return setStep(2);\n        },\n        onChange: function onChange(value) {\n          return setService(value);\n        },\n        errorMessage: i18n.errorMessage3\n      });\n\n    case 4:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Preview_Preview_component__WEBPACK_IMPORTED_MODULE_5__[\"Preview\"], {\n        title: i18n.previewTitle,\n        prevStep: function prevStep() {\n          return setStep(3);\n        },\n        qandas: qandas,\n        prev: i18n.prev\n      });\n  }\n};\n\n_s(MultipleStepsForm, \"vYPMJoKbi1jUJvSe4hy11ivDH80=\");\n\n_c = MultipleStepsForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"MultipleStepsForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NdWx0aXBsZVN0ZXBzRm9ybS9NdWx0aXBsZVN0ZXBzRm9ybS5jb21wb25lbnQudHN4P2Y0NDIiXSwibmFtZXMiOlsiTXVsdGlwbGVTdGVwc0Zvcm0iLCJwcm9wcyIsInVzZVN0YXRlIiwic3RlcCIsInNldFN0ZXAiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJzZXJ2aWNlIiwic2V0U2VydmljZSIsImkxOG4iLCJsYW5ndWFnZSIsInJlcXVpcmUiLCJpdCIsImVuIiwib3B0aW9ucyIsImxhYmVsIiwib3B0aW9uczEiLCJ2YWx1ZSIsIm9wdGlvbnMyIiwib3B0aW9uczMiLCJxYW5kYXMiLCJxdWVzdGlvbiIsInF1ZXN0aW9uMSIsImFuc3dlciIsInF1ZXN0aW9uMiIsInF1ZXN0aW9uMyIsImdldE9wdGlvblZhbHVlIiwic2VsZWN0ZWRPcHRpb24iLCJmaWx0ZXIiLCJvcHRpb24iLCJsYWJlbE5hbWUiLCJuZXh0IiwiZXJyb3JNZXNzYWdlMSIsImxhYmVsRW1haWwiLCJwcmV2IiwiZXJyb3JNZXNzYWdlMiIsImVycm9yTWVzc2FnZTMiLCJwcmV2aWV3VGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFtQztBQUFBOztBQUFBLGtCQUMxQ0Msc0RBQVEsQ0FBQyxDQUFELENBRGtDO0FBQUE7QUFBQSxNQUMzREMsSUFEMkQ7QUFBQSxNQUNyREMsT0FEcUQ7O0FBQUEsbUJBRTFDRixzREFBUSxDQUFDLEVBQUQsQ0FGa0M7QUFBQTtBQUFBLE1BRTNERyxJQUYyRDtBQUFBLE1BRXJEQyxPQUZxRDs7QUFBQSxtQkFHeENKLHNEQUFRLENBQUMsRUFBRCxDQUhnQztBQUFBO0FBQUEsTUFHM0RLLEtBSDJEO0FBQUEsTUFHcERDLFFBSG9EOztBQUFBLG1C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LGdCQUFRLEVBQUUxQixJQUFJLENBQUNnQixTQURqQjtBQUVFLFlBQUksRUFBRWhCLElBQUksQ0FBQ3NCLElBRmI7QUFHRSxZQUFJLEVBQUV0QixJQUFJLENBQUN5QixJQUhiO0FBSUUsYUFBSyxFQUFFUixjQUFjLENBQUNuQixPQUFELENBSnZCO0FBS0UsZUFBTyxFQUFFTyxPQUxYO0FBTUUsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNWixPQUFPLENBQUMsQ0FBRCxDQUFiO0FBQUEsU0FOWjtBQU9FLGdCQUFRLEVBQUU7QUFBQSxpQkFBTUEsT0FBTyxDQUFDLENBQUQsQ0FBYjtBQUFBLFNBUFo7QUFRRSxnQkFBUSxFQUFFLGtCQUFDZSxLQUFEO0FBQUEsaUJBQW1CVCxVQUFVLENBQUNTLEtBQUQsQ0FBN0I7QUFBQSxTQVJaO0FBU0Usb0JBQVksRUFBRVIsSUFBSSxDQUFDMkI7QUFUckIsUUFERjs7QUFhRixTQUFLLENBQUw7QUFDRSwwQkFDRSwyREFBQyxrRUFBRDtBQUNFLGFBQUssRUFBRTNCLElBQUksQ0FBQzRCLFlBRGQ7QUFFRSxnQkFBUSxFQUFFO0FBQUEsaUJBQU1uQyxPQUFPLENBQUMsQ0FBRCxDQUFiO0FBQUEsU0FGWjtBQUdFLGNBQU0sRUFBRWtCLE1BSFY7QUFJRSxZQUFJLEVBQUVYLElBQUksQ0FBQ3lCO0FBSmIsUUFERjtBQTNDSjtBQW9ERCxDQW5GTTs7R0FBTXBDLGlCOztLQUFBQSxpQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL011bHRpcGxlU3RlcHNGb3JtL011bHRpcGxlU3RlcHNGb3JtLmNvbXBvbmVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFN0ZXAxRm9ybSB9IGZyb20gJy4uL1N0ZXAxRm9ybS9TdGVwMUZvcm0uY29tcG9uZW50J1xuaW1wb3J0IHsgU3RlcDJGb3JtIH0gZnJvbSAnLi4vU3RlcDJGb3JtL1N0ZXAyRm9ybS5jb21wb25lbnQnXG5pbXBvcnQgeyBPcHRpb25zLCBTdGVwM0Zvcm0gfSBmcm9tICcuLi9TdGVwM0Zvcm0vU3RlcDNGb3JtLmNvbXBvbmVudCdcbmltcG9ydCB7IFByZXZpZXcsIFFhbmRBIH0gZnJvbSAnLi4vUHJldmlldy9QcmV2aWV3LmNvbXBvbmVudCdcbmltcG9ydCB7IEkxOE4gfSBmcm9tICcuL2kxOG4vaTE4bi50eXBlcydcblxuaW50ZXJmYWNlIE11bHRpcGxlU3RlcHNGb3JtUHJvcHMge1xuICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBNdWx0aXBsZVN0ZXBzRm9ybSA9IChwcm9wczogTXVsdGlwbGVTdGVwc0Zvcm1Qcm9wcykgPT4ge1xuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3NlcnZpY2UsIHNldFNlcnZpY2VdID0gdXNlU3RhdGUoJycpXG5cbiAgbGV0IGkxOG46IEkxOE5cblxuICBpZiAocHJvcHMubGFuZ3VhZ2UgPT09ICdpdCcpIHtcbiAgICBpMThuID0gcmVxdWlyZSgnLi9pMThuL2kxOG4udHMnKS5pdFxuICB9IGVsc2Uge1xuICAgIGkxOG4gPSByZXF1aXJlKCcuL2kxOG4vaTE4bi50cycpLmVuXG4gIH1cblxuICBjb25zdCBvcHRpb25zOiBPcHRpb25zW10gPSBbXG4gICAgeyBsYWJlbDogaTE4bi5vcHRpb25zMSwgdmFsdWU6ICdvbmUnIH0sXG4gICAgeyBsYWJlbDogaTE4bi5vcHRpb25zMiwgdmFsdWU6ICd0d28nIH0sXG4gICAgeyBsYWJlbDogaTE4bi5vcHRpb25zMywgdmFsdWU6ICd0aHJlZScgfSxcbiAgXVxuXG4gIGNvbnN0IHFhbmRhczogUWFuZEFbXSA9IFtcbiAgICB7IHF1ZXN0aW9uOiBpMThuLnF1ZXN0aW9uMSwgYW5zd2VyOiBuYW1lIH0sXG4gICAgeyBxdWVzdGlvbjogaTE4bi5xdWVzdGlvbjIsIGFuc3dlcjogZW1haWwgfSxcbiAgICB7IHF1ZXN0aW9uOiBpMThuLnF1ZXN0aW9uMywgYW5zd2VyOiBzZXJ2aWNlIH0sXG4gIF1cblxuICBjb25zdCBnZXRPcHRpb25WYWx1ZSA9IChsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb246IE9wdGlvbnNbXSAgPSBvcHRpb25zLmZpbHRlcihvcHRpb24gPT4gbGFiZWwgPT09IG9wdGlvbi5sYWJlbClcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb24gPyBzZWxlY3RlZE9wdGlvblswXS52YWx1ZSA6ICcnXG4gIH1cblxuICBzd2l0Y2ggKHN0ZXApIHtcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdGVwMUZvcm1cbiAgICAgICAgICBxdWVzdGlvbj17aTE4bi5xdWVzdGlvbjF9XG4gICAgICAgICAgbGFiZWw9e2kxOG4ubGFiZWxOYW1lfVxuICAgICAgICAgIG5leHQ9e2kxOG4ubmV4dH1cbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBuZXh0U3RlcD17KCkgPT4gc2V0U3RlcCgyKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHNldE5hbWUodmFsdWUpfVxuICAgICAgICAgIGVycm9yTWVzc2FnZT17aTE4bi5lcnJvck1lc3NhZ2UxfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdGVwMkZvcm1cbiAgICAgICAgICBxdWVzdGlvbj17aTE4bi5xdWVzdGlvbjJ9XG4gICAgICAgICAgbGFiZWw9e2kxOG4ubGFiZWxFbWFpbH1cbiAgICAgICAgICBuZXh0PXtpMThuLm5leHR9XG4gICAgICAgICAgcHJldj17aTE4bi5wcmV2fVxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBuZXh0U3RlcD17KCkgPT4gc2V0U3RlcCgzKX1cbiAgICAgICAgICBwcmV2U3RlcD17KCkgPT4gc2V0U3RlcCgxKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBzdHJpbmcpID0+IHNldEVtYWlsKHZhbHVlKX1cbiAgICAgICAgICBlcnJvck1lc3NhZ2U9e2kxOG4uZXJyb3JNZXNzYWdlMn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3RlcDNGb3JtXG4gICAgICAgICAgcXVlc3Rpb249e2kxOG4ucXVlc3Rpb24zfVxuICAgICAgICAgIG5leHQ9e2kxOG4ubmV4dH1cbiAgICAgICAgICBwcmV2PXtpMThuLnByZXZ9XG4gICAgICAgICAgdmFsdWU9e2dldE9wdGlvblZhbHVlKHNlcnZpY2UpfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgbmV4dFN0ZXA9eygpID0+IHNldFN0ZXAoNCl9XG4gICAgICAgICAgcHJldlN0ZXA9eygpID0+IHNldFN0ZXAoMil9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogc3RyaW5nKSA9PiBzZXRTZXJ2aWNlKHZhbHVlKX1cbiAgICAgICAgICBlcnJvck1lc3NhZ2U9e2kxOG4uZXJyb3JNZXNzYWdlM31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UHJldmlld1xuICAgICAgICAgIHRpdGxlPXtpMThuLnByZXZpZXdUaXRsZX1cbiAgICAgICAgICBwcmV2U3RlcD17KCkgPT4gc2V0U3RlcCgzKX1cbiAgICAgICAgICBxYW5kYXM9e3FhbmRhc31cbiAgICAgICAgICBwcmV2PXtpMThuLnByZXZ9XG4gICAgICAgIC8+XG4gICAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx\n");

/***/ })

})