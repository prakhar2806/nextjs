"use strict";
(() => {
var exports = {};
exports.id = 438;
exports.ids = [438];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fuser_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fuser_2F_5Bid_5D_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/user/[id].ts
var _id_namespaceObject = {};
__webpack_require__.r(_id_namespaceObject);
__webpack_require__.d(_id_namespaceObject, {
  "default": () => (_id_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
;// CONCATENATED MODULE: ./lib/data.json
const data_namespaceObject = JSON.parse('[{"id":1,"name":"Gerda","email":"gschowenburg0@seattletimes.com"},{"id":2,"name":"Georgy","email":"ghaddy1@census.gov"},{"id":3,"name":"Loydie","email":"lmccomb2@unicef.org"},{"id":4,"name":"Idalina","email":"iwarren3@who.int"},{"id":5,"name":"Valdemar","email":"vpittway4@miitbeian.gov.cn"},{"id":6,"name":"Abram","email":"afonteyne5@domainmarket.com"},{"id":7,"name":"Betta","email":"bcorkell6@ca.gov"},{"id":8,"name":"Raynard","email":"rbraxay7@senate.gov"},{"id":9,"name":"Boyce","email":"bhallen8@smh.com.au"},{"id":10,"name":"Webb","email":"wcaseri9@blogger.com"},{"id":11,"name":"Merola","email":"mbarriea@ebay.co.uk"},{"id":12,"name":"Anderson","email":"amckennyb@jigsy.com"},{"id":13,"name":"Jelene","email":"jclarkec@unicef.org"},{"id":14,"name":"Lindsey","email":"ltidderd@statcounter.com"},{"id":15,"name":"Melodee","email":"mdaneve@simplemachines.org"},{"id":16,"name":"Billy","email":"bosboldstonef@desdev.cn"},{"id":17,"name":"Pauly","email":"pkleinschmidtg@bbc.co.uk"},{"id":18,"name":"Ashlen","email":"awinteringhamh@amazon.de"},{"id":19,"name":"Geraldine","email":"gstaplesi@hc360.com"},{"id":20,"name":"Nowell","email":"ncammishj@wsj.com"},{"id":21,"name":"Kendal","email":"kbrydiek@yahoo.com"},{"id":22,"name":"Nolie","email":"nschoenrockl@miitbeian.gov.cn"},{"id":23,"name":"Fannie","email":"fdormonm@wordpress.org"},{"id":24,"name":"Paolina","email":"pbroomern@xing.com"},{"id":25,"name":"Monro","email":"mdillando@nature.com"},{"id":26,"name":"Vinnie","email":"vblazejp@cargocollective.com"},{"id":27,"name":"Bank","email":"bmertgenq@squidoo.com"},{"id":28,"name":"Ebeneser","email":"eskeelr@yandex.ru"},{"id":29,"name":"Donna","email":"dgwillims@simplemachines.org"},{"id":30,"name":"Jareb","email":"jbrackstonet@google.com.br"}]');
;// CONCATENATED MODULE: ./pages/api/user/[id].ts

const user = (req, res)=>{
    const { id } = req.query;
    const userData = data_namespaceObject.find((x)=>String(x.id) === String(id));
    if (userData) {
        res.status(200).json(userData);
    } else {
        res.status(404).end();
    }
};
/* harmony default export */ const _id_ = (user);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser%2F%5Bid%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fuser%2F%5Bid%5D.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fuser_2F_5Bid_5D_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fuser_2F_5Bid_5D_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_id_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(_id_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/user/[id]",
        pathname: "/api/user/[id]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: _id_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(6698)));
module.exports = __webpack_exports__;

})();