(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9817:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer___O5Nl",
	"logo": "Footer_logo__AdUui",
	"LinkedInlogo": "Footer_LinkedInlogo__aBD8K",
	"logoContainer": "Footer_logoContainer__v4ATW",
	"linkedinContainer": "Footer_linkedinContainer__JW6K5"
};


/***/ }),

/***/ 484:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__l1qoc",
	"logo": "Header_logo__DFVkO",
	"menu": "Header_menu__UAvA6",
	"menu-link-button": "Header_menu-link-button__fjx7b"
};


/***/ }),

/***/ 2460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Header.module.css
var Header_module = __webpack_require__(484);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/Header.js


 // Import your CSS module for header styles

const Header = ()=>{
    const { 0: isMenuVisible , 1: setMenuVisible  } = (0,external_react_.useState)(true);
    const toggleMenu = ()=>{
        setMenuVisible(!isMenuVisible);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "REALM HR SERVICES"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/logo-realm.png",
                alt: "Netlify Logo",
                className: (Header_module_default()).logo
            }),
            isMenuVisible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (Header_module_default()).menu,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "menu-link-button",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        href: "/who-we-are",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "menu-link-button",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "Who we are"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        href: "/clients-testimonials",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "menu-link-button",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "Clients Testimonials"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                        href: "/Talk-to-us",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "menu-link-button",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "Talk to us"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./components/Footer.module.css
var Footer_module = __webpack_require__(9817);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (Footer_module_default()).footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).logoContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/logo-realm.png",
                        alt: "Netlify Logo",
                        className: (Footer_module_default()).logo
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).linkedinContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "https://www.linkedin.com/company/realmhrservices",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/LinkedIn.png",
                        alt: "LinkedIn Logo",
                        className: (Footer_module_default()).LinkedInlogo
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js





 // Import your global styles
function MyApp({ Component , pageProps  }) {
    // Add any global JavaScript or effects here
    (0,external_react_.useEffect)(()=>{
    // Global JavaScript or effects can go here
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "RealmHRServices"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/logo-realm.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "logoContainer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/logo-realm.png",
                            alt: "RealmHR Services Logo",
                            className: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "title",
                            children: "Welcome to RealmHR Services"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2460));
module.exports = __webpack_exports__;

})();