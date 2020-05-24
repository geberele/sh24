webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _src_components_MultipleStepsForm_MultipleStepsForm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/MultipleStepsForm/MultipleStepsForm.component */ \"./src/components/MultipleStepsForm/MultipleStepsForm.component.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/gabrielemanna/Documents/Projects/gm/sh24/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('en'),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&family=Playfair+Display:wght@700&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(_src_components_MultipleStepsForm_MultipleStepsForm_component__WEBPACK_IMPORTED_MODULE_0__[\"MultipleStepsForm\"], {\n    language: language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  })), __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, \"Choose a language\"), __jsx(\"div\", {\n    className: \"radio-buttons\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, ['en', 'it'].map(function (ln, key) {\n    return __jsx(\"div\", {\n      key: key,\n      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"radio-button\", {\n        \"selected\": ln === language\n      }),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, __jsx(\"label\", {\n      htmlFor: option.value,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    }, option.label), __jsx(\"input\", {\n      type: \"radio\",\n      name: \"language\",\n      value: ln,\n      id: ln,\n      onChange: function onChange(e) {\n        return setLanguage(e.target.value);\n      },\n      checked: ln === language,\n      className: \"hidden\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }\n    }));\n  })), __jsx(\"div\", {\n    className: \"language\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"radio\",\n    name: \"language\",\n    value: 'en',\n    id: \"en\",\n    onChange: function onChange(e) {\n      return setLanguage(e.target.value);\n    },\n    checked: 'en' === language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"en\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"EN\")), __jsx(\"div\", {\n    className: \"language\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"radio\",\n    name: \"language\",\n    value: 'it',\n    id: \"it\",\n    onChange: function onChange(e) {\n      return setLanguage(e.target.value);\n    },\n    checked: 'it' === language,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"it\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, \"IT\")))));\n}\n\n_s(Home, \"fVUtOCD1O58HgvMjnE8lxRQa0QA=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwibWFwIiwibG4iLCJrZXkiLCJjbiIsIm9wdGlvbiIsInZhbHVlIiwibGFiZWwiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsSUFBRCxDQURYO0FBQUEsTUFDdEJDLFFBRHNCO0FBQUEsTUFDWkMsV0FEWTs7QUFHN0IsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxtSEFEUDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0dBQUQ7QUFBbUIsWUFBUSxFQUFFRCxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhRSxHQUFiLENBQWlCLFVBQUNDLEVBQUQsRUFBS0MsR0FBTDtBQUFBLFdBQ2hCO0FBQ0UsU0FBRyxFQUFFQSxHQURQO0FBRUUsZUFBUyxFQUFFQyxpREFBRSxDQUFDLGNBQUQsRUFBaUI7QUFBQyxvQkFBWUYsRUFBRSxLQUFLSDtBQUFwQixPQUFqQixDQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJRTtBQUFPLGFBQU8sRUFBRU0sTUFBTSxDQUFDQyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCRCxNQUFNLENBQUNFLEtBQXRDLENBSkYsRUFLRTtBQUNFLFVBQUksRUFBQyxPQURQO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxXQUFLLEVBQUVMLEVBSFQ7QUFJRSxRQUFFLEVBQUVBLEVBSk47QUFLRSxjQUFRLEVBQUUsa0JBQUFNLENBQUM7QUFBQSxlQUFJUixXQUFXLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTSCxLQUFWLENBQWY7QUFBQSxPQUxiO0FBTUUsYUFBTyxFQUFFSixFQUFFLEtBQUtILFFBTmxCO0FBT0UsZUFBUyxFQUFDLFFBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLENBRGdCO0FBQUEsR0FBakIsQ0FESCxDQUZGLEVBcUJFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFNBQUssRUFBRSxJQUhUO0FBSUUsTUFBRSxFQUFDLElBSkw7QUFLRSxZQUFRLEVBQUUsa0JBQUFTLENBQUM7QUFBQSxhQUFJUixXQUFXLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTSCxLQUFWLENBQWY7QUFBQSxLQUxiO0FBTUUsV0FBTyxFQUFFLFNBQVNQLFFBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFO0FBQU8sV0FBTyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRGLENBckJGLEVBZ0NFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE9BRFA7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLFNBQUssRUFBRSxJQUhUO0FBSUUsTUFBRSxFQUFDLElBSkw7QUFLRSxZQUFRLEVBQUUsa0JBQUFTLENBQUM7QUFBQSxhQUFJUixXQUFXLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTSCxLQUFWLENBQWY7QUFBQSxLQUxiO0FBTUUsV0FBTyxFQUFFLFNBQVNQLFFBTnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFO0FBQU8sV0FBTyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRGLENBaENGLENBSkYsQ0FQRixDQURGO0FBMkREOztHQTlEdUJGLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdWx0aXBsZVN0ZXBzRm9ybSB9IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL011bHRpcGxlU3RlcHNGb3JtL011bHRpcGxlU3RlcHNGb3JtLmNvbXBvbmVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoJ2VuJylcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JQk0rUGxleCtTYW5zOndnaHRANDAwOzUwMCZmYW1pbHk9UGxheWZhaXIrRGlzcGxheTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPE11bHRpcGxlU3RlcHNGb3JtIGxhbmd1YWdlPXtsYW5ndWFnZX0vPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgPGg0PkNob29zZSBhIGxhbmd1YWdlPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhZGlvLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIHtbJ2VuJywgJ2l0J10ubWFwKChsbiwga2V5KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFwicmFkaW8tYnV0dG9uXCIsIHtcInNlbGVjdGVkXCI6IGxuID09PSBsYW5ndWFnZX0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e29wdGlvbi52YWx1ZX0+e29wdGlvbi5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bG59XG4gICAgICAgICAgICAgICAgICBpZD17bG59XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRMYW5ndWFnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtsbiA9PT0gbGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYW5ndWFnZVwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJsYW5ndWFnZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXsnZW4nfVxuICAgICAgICAgICAgICBpZD1cImVuXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TGFuZ3VhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjaGVja2VkPXsnZW4nID09PSBsYW5ndWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVuXCI+RU48L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICBuYW1lPVwibGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICB2YWx1ZT17J2l0J31cbiAgICAgICAgICAgICAgaWQ9XCJpdFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldExhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2hlY2tlZD17J2l0JyA9PT0gbGFuZ3VhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpdFwiPklUPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})