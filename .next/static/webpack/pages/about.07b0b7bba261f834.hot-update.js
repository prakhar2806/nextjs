"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about/index.tsx":
/*!*******************************!*\
  !*** ./pages/about/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n\n\n\nconst AboutPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                as: \"h1\",\n                size: \"2xl\",\n                children: \"This is about page\"\n            }, void 0, false, {\n                fileName: \"/Users/prakharnigam/vscode/NextJS/nextjs-tutorial/pages/about/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                passHref: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                    children: \"Go to home page\"\n                }, void 0, false, {\n                    fileName: \"/Users/prakharnigam/vscode/NextJS/nextjs-tutorial/pages/about/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/prakharnigam/vscode/NextJS/nextjs-tutorial/pages/about/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/about/me\",\n                children: \"Go to About Me page\"\n            }, void 0, false, {\n                fileName: \"/Users/prakharnigam/vscode/NextJS/nextjs-tutorial/pages/about/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = AboutPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutPage);\nvar _c;\n$RefreshReg$(_c, \"AboutPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNpQztBQUNlO0FBRWhELE1BQU1HLFlBQVk7SUFDaEIscUJBQ0U7OzBCQUNFLDhEQUFDRixvREFBT0E7Z0JBQUNHLElBQUc7Z0JBQUtDLE1BQUs7MEJBQU07Ozs7OzswQkFHNUIsOERBQUNMLGtEQUFRQTtnQkFBQ00sTUFBSztnQkFBSUMsUUFBUTswQkFFekIsNEVBQUNMLGlEQUFJQTs4QkFBQzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNGLGtEQUFRQTtnQkFBQ00sTUFBSzswQkFBWTs7Ozs7Ozs7QUFHakM7S0FiTUg7QUFlTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hYm91dC9pbmRleC50c3g/NjIwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgSGVhZGluZywgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcblxuY29uc3QgQWJvdXRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cIjJ4bFwiPlxuICAgICAgICBUaGlzIGlzIGFib3V0IHBhZ2VcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPiBcbiAgICAgICAgey8qICAqL31cbiAgICAgICAgPExpbms+R28gdG8gaG9tZSBwYWdlPC9MaW5rPlxuICAgICAgPC9OZXh0TGluaz5cbiAgICAgIDxOZXh0TGluayBocmVmPVwiL2Fib3V0L21lXCI+R28gdG8gQWJvdXQgTWUgcGFnZTwvTmV4dExpbms+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dFBhZ2U7XG4iXSwibmFtZXMiOlsiTmV4dExpbmsiLCJIZWFkaW5nIiwiTGluayIsIkFib3V0UGFnZSIsImFzIiwic2l6ZSIsImhyZWYiLCJwYXNzSHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about/index.tsx\n"));

/***/ })

});