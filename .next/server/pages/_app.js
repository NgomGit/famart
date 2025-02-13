(function() {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "redux-persist/integration/react"
var react_namespaceObject = require("redux-persist/integration/react");;
;// CONCATENATED MODULE: external "redux"
var external_redux_namespaceObject = require("redux");;
;// CONCATENATED MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");;
;// CONCATENATED MODULE: external "redux-saga"
var external_redux_saga_namespaceObject = require("redux-saga");;
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(5060);
// EXTERNAL MODULE: ./store/cart.js + 1 modules
var cart = __webpack_require__(8040);
// EXTERNAL MODULE: ./store/wishlist.js
var wishlist = __webpack_require__(5708);
;// CONCATENATED MODULE: ./store/root-saga.js


 // notice how we now only export the rootSaga
// single entry point to start all Sagas at once

function* rootSaga() {
  yield (0,effects_.all)([(0,cart/* cartSaga */.xT)(), (0,wishlist/* wishlistSaga */.OP)()]);
}
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(3643);
// EXTERNAL MODULE: ./store/modal.js
var modal = __webpack_require__(6723);
// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(584);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);
;// CONCATENATED MODULE: ./store/demo.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const actionTypes = {
  RefreshStore: "REFRESH_STORE"
};
let initialState = {
  current: 0
};

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RefreshStore:
      return _objectSpread(_objectSpread({}, state), {}, {
        current: action.payload.current
      });

    default:
      return state;
  }
};

const actions = {
  refreshStore: current => ({
    type: actionTypes.RefreshStore,
    payload: {
      current
    }
  })
};
const persistConfig = {
  keyPrefix: "porto-",
  key: "demo",
  storage: (storage_default())
};
/* harmony default export */ var demo = ((0,external_redux_persist_.persistReducer)(persistConfig, demoReducer));
;// CONCATENATED MODULE: ./store/index.js




 // Import Custom Component





const sagaMiddleware = external_redux_saga_default()();
const rootReducers = (0,external_redux_namespaceObject.combineReducers)({
  cartlist: cart/* default */.ZP,
  wishlist: wishlist/* default */.ZP,
  modal: modal/* default */.ZP,
  demo: demo
});
const makeStore = context => {
  const store = (0,external_redux_namespaceObject.createStore)(rootReducers, (0,external_redux_namespaceObject.applyMiddleware)(sagaMiddleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  store.__persistor = (0,external_redux_persist_.persistStore)(store);
  return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
  debug: false
});
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.min.css
var ReactToastify_min = __webpack_require__(3326);
// EXTERNAL MODULE: ./components/common/ALink.jsx
var ALink = __webpack_require__(8974);
;// CONCATENATED MODULE: ./components/common/partials/sticky-navbar.jsx

var __jsx = (external_react_default()).createElement;
 // Import Custom Component



function StickyNavbar({
  cartItems
}) {
  function getQtyTotal(items) {
    let total = 0;

    if (items) {
      for (let i = 0; i < items.length; i++) {
        total += parseInt(items[i].qty, 10);
      }
    }

    return total;
  }

  return __jsx("div", {
    className: "sticky-navbar"
  }, __jsx("div", {
    className: "sticky-info"
  }, __jsx(ALink/* default */.Z, {
    href: "/"
  }, __jsx("i", {
    className: "icon-home"
  }), "Home")), __jsx("div", {
    className: "sticky-info"
  }, __jsx(ALink/* default */.Z, {
    href: "/shop",
    className: ""
  }, __jsx("i", {
    className: "icon-bars"
  }), "Categories")), __jsx("div", {
    className: "sticky-info"
  }, __jsx(ALink/* default */.Z, {
    href: "/pages/wishlist",
    className: ""
  }, __jsx("i", {
    className: "icon-wishlist-2"
  }), "Wishlist")), __jsx("div", {
    className: "sticky-info"
  }, __jsx(ALink/* default */.Z, {
    href: "/pages/login",
    className: ""
  }, __jsx("i", {
    className: "icon-user-2"
  }), "Account")), __jsx("div", {
    className: "sticky-info"
  }, __jsx(ALink/* default */.Z, {
    href: "/pages/cart",
    className: ""
  }, __jsx("i", {
    className: "icon-shopping-cart position-relative"
  }, __jsx("span", {
    className: "cart-count badge-circle"
  }, getQtyTotal(cartItems))), "Cart")));
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartlist.cart ? state.cartlist.cart : []
  };
}

/* harmony default export */ var sticky_navbar = ((0,external_react_redux_.connect)(mapStateToProps, null)(StickyNavbar));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6442);
;// CONCATENATED MODULE: ./components/common/partials/cart-menu.jsx
var cart_menu_jsx = (external_react_default()).createElement;


 // Import Actions

 // Import Custom Component

 // Import Utils



function CartMenu(props) {
  const {
    cartItems
  } = props;
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    router.events.on('routeChangeStart', cartClose);
    return () => {
      router.events.off('routeChangeStart', cartClose);
    };
  }, []);

  function toggleCart(e) {
    e.preventDefault();
    document.querySelector('body').classList.toggle('cart-opened');
  }

  function cartClose() {
    document.querySelector('body').classList.contains('cart-opened') && document.querySelector('body').classList.remove('cart-opened');
  }

  function getQtyTotal(items) {
    let total = 0;

    if (items) {
      for (let i = 0; i < items.length; i++) {
        total += parseInt(items[i].qty, 10);
      }
    }

    return total;
  }

  function removeFromCart(e, cart) {
    e.preventDefault();
    props.removeFromCart(cart);
  }

  return cart_menu_jsx("div", {
    className: "dropdown cart-dropdown"
  }, cart_menu_jsx("a", {
    href: "#",
    title: "Cart",
    className: "dropdown-toggle dropdown-arrow cart-toggle d-flex align-items-center",
    onClick: toggleCart
  }, cart_menu_jsx("i", {
    className: "minicart-icon"
  }), cart_menu_jsx("span", {
    className: "cart-count badge-circle"
  }, getQtyTotal(cartItems))), cart_menu_jsx("div", {
    className: "cart-overlay",
    onClick: cartClose
  }), cart_menu_jsx("div", {
    className: "dropdown-menu mobile-cart"
  }, cart_menu_jsx("a", {
    href: "#",
    title: "Close (Esc)",
    className: "btn-close",
    onClick: e => {
      cartClose();
      e.preventDefault();
    }
  }, "\xD7"), cart_menu_jsx("div", {
    className: "dropdownmenu-wrapper"
  }, cart_menu_jsx("div", {
    className: "dropdown-cart-header"
  }, "Shopping Cart"), cartItems.length > 0 ? cart_menu_jsx((external_react_default()).Fragment, null, cart_menu_jsx("div", {
    className: "dropdown-cart-products"
  }, cartItems.map((cart, index) => cart_menu_jsx("div", {
    className: "product",
    key: "cartItems" + index
  }, cart_menu_jsx("div", {
    className: "product-details"
  }, cart_menu_jsx("h2", {
    className: "product-title"
  }, cart.index > -1 ? !cart.variants[cart.index].color ? cart_menu_jsx(ALink/* default */.Z, {
    href: `/product/default/${cart.slug}`
  }, cart.name + ' - ' + cart.variants[cart.index].size.name) : !cart.variants[cart.index].size ? cart_menu_jsx(ALink/* default */.Z, {
    href: `/product/default/${cart.slug}`
  }, cart.name + ' - ' + cart.variants[cart.index].color.name) : cart_menu_jsx(ALink/* default */.Z, {
    href: `/product/default/${cart.slug}`
  }, cart.name + ' - ' + cart.variants[cart.index].color.name + ', ' + cart.variants[cart.index].size.name) : cart_menu_jsx(ALink/* default */.Z, {
    href: `/product/default/${cart.slug}`
  }, cart.name)), cart_menu_jsx("span", {
    className: "cart-product-info"
  }, cart_menu_jsx("span", {
    className: "cart-product-qty"
  }, cart.qty), " \xD7 $", cart.price.toFixed(2))), cart_menu_jsx("figure", {
    className: "product-image-container"
  }, cart_menu_jsx(ALink/* default */.Z, {
    href: `/product/default/${cart.slug}`,
    className: "product-image"
  }, cart_menu_jsx("img", {
    src: "https://d-themes.com/react_asset_api/porto" + cart.small_pictures[0].url,
    width: "78",
    height: "78",
    alt: "product"
  })), cart_menu_jsx("a", {
    href: "#",
    className: "btn-remove icon-cancel",
    title: "Remove Product",
    onClick: e => {
      removeFromCart(e, cart);
    }
  }))))), cart_menu_jsx("div", {
    className: "dropdown-cart-total"
  }, cart_menu_jsx("span", null, "SUBTOTAL:"), cart_menu_jsx("span", {
    className: "cart-total-price float-right"
  }, "$", (0,utils/* getCartTotal */.I3)(cartItems).toFixed(2))), cart_menu_jsx("div", {
    className: "dropdown-cart-action"
  }, cart_menu_jsx(ALink/* default */.Z, {
    href: "/pages/cart",
    className: "btn btn-gray btn-block view-cart"
  }, "View Cart"), cart_menu_jsx(ALink/* default */.Z, {
    href: "/pages/checkout",
    className: "btn btn-dark btn-block text-white"
  }, "Checkout"))) : cart_menu_jsx("p", {
    className: "pt-3 mt-2"
  }, "No products in the cart."))));
}

function cart_menu_mapStateToProps(state) {
  return {
    cartItems: state.cartlist.cart ? state.cartlist.cart : []
  };
}

/* harmony default export */ var cart_menu = ((0,external_react_redux_.connect)(cart_menu_mapStateToProps, cart/* actions */.Nw)(CartMenu));
;// CONCATENATED MODULE: ./utils/data/menu.js
const mainMenu = {
  "shop": {
    "variation1": [{
      "title": "Fullwidth Banner",
      "url": "/shop"
    }, {
      "title": "Boxed Slider Banner",
      "url": "/shop/boxed-slider"
    }, {
      "title": "Boxed Image Banner",
      "url": "/shop/boxed-image"
    }, {
      "title": "Left Sidebar",
      "url": "/shop"
    }, {
      "title": "Right Sidebar",
      "url": "/shop/right-sidebar",
      "hot": true
    }, {
      "title": "Off-Canvas Filter",
      "url": "/shop/off-canvas"
    }, {
      "title": "Horizontal Filter1",
      "url": "/shop/horizontal-filter-1"
    }, {
      "title": "Horizontal Filter2",
      "url": "/shop/horizontal-filter-2"
    }],
    "variation2": [{
      "title": "List Types",
      "url": "/shop/list"
    }, {
      "title": "Ajax Infinite Scroll",
      "url": "/shop/infinite-scroll"
    }, {
      "title": "3 Columns Products",
      "url": "/shop/3cols",
      "new": true
    }, {
      "title": "4 Columns Products",
      "url": "/shop/4cols"
    }, {
      "title": "5 Columns Products",
      "url": "/shop/5cols"
    }, {
      "title": "6 Columns Products",
      "url": "/shop/6cols"
    }, {
      "title": "7 Columns Products",
      "url": "/shop/7cols"
    }, {
      "title": "8 Columns Products",
      "url": "/shop/8cols"
    }]
  },
  "product": {
    "pages": [{
      "title": "Simple Product",
      "url": "/product/default/women-black-dress"
    }, {
      "title": "Variable Product",
      "url": "/product/default/product-brown-bag"
    }, {
      "title": "Sale Product",
      "url": "/product/default/men-glasses"
    }, {
      "title": "Feature & On Sale",
      "url": "/product/default/men-glasses"
    }, {
      "title": "With Custom Tab",
      "url": "/product/custom-tab/men-glasses"
    }, {
      "title": "With Left Sidebar",
      "url": "/product/left-sidebar/product-brown-bag"
    }, {
      "title": "With Right Sidebar",
      "url": "/product/right-sidebar/product-brown-bag"
    }, {
      "title": "Add Cart Sticky",
      "url": "/product/sticky-cart/men-glasses",
      "hot": true
    }],
    "layout": [{
      "title": "Extended Layout",
      "url": "/product/extended/women-dress",
      "new": true
    }, {
      "title": "Grid Image",
      "url": "/product/grid/women-dress"
    }, {
      "title": "Full Width Layout",
      "url": "/product/full-width/women-dress"
    }, {
      "title": "Sticky Info",
      "url": "/product/sticky-info/women-dress"
    }, {
      "title": "Left & Right Sticky",
      "url": "/product/sticky-both/women-dress"
    }, {
      "title": "Transparent Image",
      "url": "/product/transparent/product-brown-bag"
    }, {
      "title": "Center Vertical",
      "url": "/product/center/women-dress"
    }]
  },
  "other": [{
    "title": "Wishlist",
    "url": "/pages/wishlist"
  }, {
    "title": "Shopping Cart",
    "url": "/pages/cart"
  }, {
    "title": "Checkout",
    "url": "/pages/checkout"
  }, {
    "title": "Dashboard",
    "url": "/pages/account"
  }, {
    "title": "About Us",
    "url": "/pages/about-us"
  }, {
    "title": "Contact Us",
    "url": "/pages/contact-us"
  }, {
    "title": "Login",
    "url": "/pages/login"
  }, {
    "title": "Forgot Password",
    "url": "/pages/forgot-password"
  }]
};
;// CONCATENATED MODULE: ./components/common/partials/main-menu.jsx

var main_menu_jsx = (external_react_default()).createElement;
 // Import Custom Component

 // Import Utils



function MainMenu({
  router
}) {
  const pathname = router.pathname;

  function isOtherPage() {
    return mainMenu.other.find(variation => variation.url === pathname);
  }

  return main_menu_jsx((external_react_default()).Fragment, null, main_menu_jsx("nav", {
    className: "main-nav w-100 d-xl-block d-none"
  }, main_menu_jsx("ul", {
    className: "menu sf-js-enabled sf-arrows"
  }, main_menu_jsx("li", {
    className: `${pathname === '/' ? 'active' : ''} home-menu`
  }, main_menu_jsx(ALink/* default */.Z, {
    href: "/"
  }, "Home")), main_menu_jsx("li", {
    className: pathname.startsWith('/shop') ? 'active' : ''
  }, main_menu_jsx(ALink/* default */.Z, {
    href: "/shop",
    className: "sf-with-ul"
  }, "Categories"), main_menu_jsx("div", {
    className: "megamenu megamenu-fixed-width megamenu-3cols"
  }, main_menu_jsx("div", {
    className: "row"
  }, main_menu_jsx("div", {
    className: "col-lg-4"
  }, main_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: "nolink"
  }, "VARIATION 1"), main_menu_jsx("ul", {
    className: "submenu"
  }, mainMenu.shop.variation1.map((variations, index) => main_menu_jsx("li", {
    key: "menu-item" + index
  }, main_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))))), main_menu_jsx("div", {
    className: "col-lg-4"
  }, main_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: "nolink"
  }, "VARIATION 2"), main_menu_jsx("ul", {
    className: "submenu"
  }, mainMenu.shop.variation2.map((variations, index) => main_menu_jsx("li", {
    key: "menu-item" + index
  }, main_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))))), main_menu_jsx("div", {
    className: "col-lg-4 p-0"
  }, main_menu_jsx("div", {
    className: "menu-banner"
  }, main_menu_jsx("figure", null, main_menu_jsx("img", {
    src: "images/menu-banner.jpg",
    alt: "Menu banner",
    width: "300",
    height: "300"
  })), main_menu_jsx("div", {
    className: "banner-content"
  }, main_menu_jsx("h4", null, main_menu_jsx("span", {
    className: ""
  }, "UP TO"), main_menu_jsx("br", null), main_menu_jsx("b", {
    className: ""
  }, "50%"), main_menu_jsx("i", null, "OFF")), main_menu_jsx(ALink/* default */.Z, {
    href: "/shop",
    className: "btn btn-sm btn-dark"
  }, "SHOP NOW"))))))), main_menu_jsx("li", {
    className: pathname.startsWith('/product') ? 'active' : ''
  }, main_menu_jsx(ALink/* default */.Z, {
    href: "/product/default/men-glasses",
    className: "sf-with-ul"
  }, "Products"), main_menu_jsx("div", {
    className: "megamenu megamenu-fixed-width"
  }, main_menu_jsx("div", {
    className: "row"
  }, main_menu_jsx("div", {
    className: "col-lg-4"
  }, main_menu_jsx("span", {
    className: "nolink"
  }, "PRODUCT PAGES"), main_menu_jsx("ul", {
    className: "submenu"
  }, mainMenu.product.pages.map((variations, index) => main_menu_jsx("li", {
    key: "menu-item" + index
  }, main_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))))), main_menu_jsx("div", {
    className: "col-lg-4"
  }, main_menu_jsx("span", {
    className: "nolink"
  }, "PRODUCT LAYOUTS"), main_menu_jsx("ul", {
    className: "submenu"
  }, mainMenu.product.layout.map((variations, index) => main_menu_jsx("li", {
    key: "menu-item" + index
  }, main_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))), main_menu_jsx("li", null, main_menu_jsx(ALink/* default */.Z, {
    href: "#"
  }, "BUILD YOUR OWN")))), main_menu_jsx("div", {
    className: "col-lg-4 p-0"
  }, main_menu_jsx("div", {
    className: "menu-banner menu-banner-2"
  }, main_menu_jsx("figure", null, main_menu_jsx("img", {
    src: "images/menu-banner-1.jpg",
    alt: "Menu banner",
    width: "380",
    height: "790",
    className: "product-promo"
  })), main_menu_jsx("i", null, "OFF"), main_menu_jsx("div", {
    className: "banner-content"
  }, main_menu_jsx("h4", null, main_menu_jsx("span", {
    className: ""
  }, "UP TO"), main_menu_jsx("br", null), main_menu_jsx("b", {
    className: ""
  }, "50%"))), main_menu_jsx(ALink/* default */.Z, {
    href: "/shop",
    className: "btn btn-sm btn-dark"
  }, "SHOP NOW")))))), main_menu_jsx("li", {
    className: isOtherPage() ? 'active' : ''
  }, main_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: "sf-with-ul"
  }, "Pages"), main_menu_jsx("ul", null, mainMenu.other.map((variations, index) => main_menu_jsx("li", {
    key: "menu-item" + index
  }, main_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))))), main_menu_jsx("li", {
    className: `${pathname === '/pages/blog' ? 'active' : ''} blog-menu`
  }, main_menu_jsx(ALink/* default */.Z, {
    href: "/pages/blog"
  }, "Blog")))));
}

/* harmony default export */ var main_menu = ((0,router_.withRouter)(MainMenu));
;// CONCATENATED MODULE: external "@apollo/client"
var client_namespaceObject = require("@apollo/client");;
// EXTERNAL MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_ = __webpack_require__(9290);
// EXTERNAL MODULE: ./server/queries.js
var queries = __webpack_require__(4733);
// EXTERNAL MODULE: ./server/apollo.js
var apollo = __webpack_require__(5438);
;// CONCATENATED MODULE: ./components/common/partials/search-form.jsx
var search_form_jsx = (external_react_default()).createElement;

 // import { useLazyQuery } from '@apollo/react-hooks';


 // Import Custom Component

 // Import Apollo Server and Query




function SearchForm() {
  const router = (0,router_.useRouter)();
  const {
    0: cat,
    1: setCat
  } = (0,external_react_.useState)("");
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)("");
  const [searchProducts, {
    data
  }] = (0,client_namespaceObject.useLazyQuery)(queries/* GET_PRODUCTS */.tT);
  const {
    0: timer,
    1: setTimer
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    document.querySelector("body").addEventListener("click", onBodyClick);
    return () => {
      document.querySelector("body").removeEventListener("click", onBodyClick);
    };
  }, []);
  (0,external_react_.useEffect)(() => {
    if (search.length > 2) {
      if (timer) clearTimeout(timer);
      let timerId = setTimeout(() => {
        searchProducts({
          variables: {
            search: search,
            category: cat
          }
        });
        setTimer(null);
      }, 500);
      setTimer(timerId);
    }
  }, [search, cat]);
  (0,external_react_.useEffect)(() => {
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }, [router.pathname]);
  (0,external_react_.useEffect)(() => {
    setSearch("");
    setCat("");
  }, [router.query.slug]);

  function removeXSSAttacks(html) {
    const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi; // Removing the <script> tags

    while (SCRIPT_REGEX.test(html)) {
      html = html.replace(SCRIPT_REGEX, "");
    } // Removing all events from tags...


    html = html.replace(/ on\w+="[^"]*"/g, "");
    return {
      __html: html
    };
  }

  function matchEmphasize(name) {
    let regExp = new RegExp(search, "i");
    return name.replace(regExp, match => "<strong>" + match + "</strong>");
  }

  function onSearchClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.parentNode.classList.toggle('show');
  }

  function onBodyClick(e) {
    if (e.target.closest('.header-search')) return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');
    document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
    document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
  }

  function onCatSelect(e) {
    setCat(e.target.value);
  }

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function onSubmitSearchForm(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop',
      query: {
        search: search,
        category: cat
      }
    });
  }

  return search_form_jsx("div", {
    className: "header-icon header-search header-search-inline header-search-category d-none d-sm-block border-left-0 mb-0"
  }, search_form_jsx("a", {
    href: "#",
    className: "search-toggle",
    role: "button",
    onClick: onSearchClick
  }, search_form_jsx("i", {
    className: "icon-magnifier"
  })), search_form_jsx("form", {
    action: "#",
    method: "get",
    onSubmit: e => onSubmitSearchForm(e)
  }, search_form_jsx("div", {
    className: "header-search-wrapper"
  }, search_form_jsx("input", {
    type: "search",
    className: "form-control bg-transparent",
    placeholder: "Search Products...",
    value: search,
    required: true,
    onChange: e => onSearchChange(e)
  }), search_form_jsx("button", {
    className: "btn icon-magnifier bg-transparent border-left-0",
    title: "search",
    type: "submit"
  }), search_form_jsx("div", {
    className: "live-search-list"
  }, search.length > 2 && data && data.products.data.map((product, index) => search_form_jsx(ALink/* default */.Z, {
    href: `/product/default/${product.slug}`,
    className: "autocomplete-suggestion",
    key: `search-result-${index}`
  }, search_form_jsx(external_react_lazy_load_image_component_.LazyLoadImage, {
    src: "https://d-themes.com/react_asset_api/porto" + product.small_pictures[0].url,
    width: 40,
    height: 40,
    alt: "product"
  }), search_form_jsx("div", {
    className: "search-name",
    dangerouslySetInnerHTML: removeXSSAttacks(matchEmphasize(product.name))
  }), search_form_jsx("span", {
    className: "search-price"
  }, product.price[0] == product.price[1] ? search_form_jsx("span", {
    className: "product-price"
  }, '$' + product.price[0].toFixed(2)) : product.variants.length > 0 ? search_form_jsx("span", {
    className: "product-price"
  }, '$' + product.price[0].toFixed(2), " \u2013 ", '$' + product.price[1].toFixed(2)) : search_form_jsx((external_react_default()).Fragment, null, search_form_jsx("span", {
    className: "old-price"
  }, '$' + product.price[1].toFixed(2)), search_form_jsx("span", {
    className: "product-price"
  }, '$' + product.price[0].toFixed(2))))))))));
}

/* harmony default export */ var search_form = ((0,apollo/* default */.Z)({
  ssr: true
})(SearchForm));
;// CONCATENATED MODULE: ./components/common/header.jsx

var header_jsx = (external_react_default()).createElement;
 // Import Custom Component





function Header({
  adClass = ''
}) {
  const router = (0,router_.useRouter)().pathname;

  function openMobileMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mmenu-active");
    e.currentTarget.classList.toggle("active");
  }

  return header_jsx("header", {
    className: `header ${adClass}`
  }, header_jsx("div", {
    className: "header-top bg-dark text-white"
  }, header_jsx("div", {
    className: "container justify-content-center"
  }, header_jsx("div", {
    className: "header-left"
  }, header_jsx("h5", {
    className: "top-notice mb-0 pl-0"
  }, "Get 10% OFF at the Porto Fashion Selection - ", header_jsx(ALink/* default */.Z, {
    href: "/shop"
  }, "Shop Now!"))), header_jsx("div", {
    className: "header-right d-none d-sm-flex"
  }, header_jsx(main_menu, null), header_jsx("div", {
    className: "header-dropdowns text-upper"
  }, header_jsx("div", {
    className: "header-dropdown pl-2"
  }, header_jsx(ALink/* default */.Z, {
    href: "#"
  }, "USD"), header_jsx("div", {
    className: "header-menu"
  }, header_jsx("ul", null, header_jsx("li", null, header_jsx(ALink/* default */.Z, {
    href: "#"
  }, "EUR")), header_jsx("li", null, header_jsx(ALink/* default */.Z, {
    href: "#"
  }, "USD"))))), header_jsx("div", {
    className: "header-dropdown pl-2"
  }, header_jsx(ALink/* default */.Z, {
    href: "#"
  }, header_jsx("i", {
    className: "flag-us flag"
  }), "ENG"), header_jsx("div", {
    className: "header-menu"
  }, header_jsx("ul", null, header_jsx("li", null, header_jsx(ALink/* default */.Z, {
    href: "#"
  }, header_jsx("i", {
    className: "flag-us flag mr-2"
  }), "ENG")), header_jsx("li", null, header_jsx(ALink/* default */.Z, {
    href: "#"
  }, header_jsx("i", {
    className: "flag-fr flag mr-2"
  }), "FRA"))))))))), header_jsx("div", {
    className: router === '/' ? 'header-transparent' : ''
  }, header_jsx("div", {
    className: "header-middle sticky-header"
  }, header_jsx("div", {
    className: "container"
  }, header_jsx("div", {
    className: "header-left"
  }, header_jsx("button", {
    className: "mobile-menu-toggler",
    type: "button",
    onClick: openMobileMenu
  }, header_jsx("i", {
    className: "fas fa-bars"
  })), header_jsx(ALink/* default */.Z, {
    href: "/",
    className: "logo"
  }, header_jsx("img", {
    src: "images/logo-white.png",
    alt: "Porto Logo"
  }))), header_jsx("div", {
    className: "header-right"
  }, header_jsx(search_form, null), header_jsx(ALink/* default */.Z, {
    href: "/pages/login",
    className: "header-icon header-icon-user"
  }, header_jsx("i", {
    className: "icon-user-2"
  })), header_jsx(ALink/* default */.Z, {
    href: "/pages/wishlist",
    className: "header-icon"
  }, header_jsx("i", {
    className: "icon-wishlist-2"
  })), header_jsx(cart_menu, null))))));
}
;// CONCATENATED MODULE: ./components/common/footer.jsx
var footer_jsx = (external_react_default()).createElement;



function Footer() {
  return footer_jsx("footer", {
    className: "footer bg-dark"
  }, footer_jsx("div", {
    className: "container"
  }, footer_jsx("div", {
    className: "footer-middle"
  }, footer_jsx("div", {
    className: "row"
  }, footer_jsx("div", {
    className: "col-md-5 col-lg-3"
  }, footer_jsx("div", {
    className: "widget widget-contact-info"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "Contact Info"), footer_jsx("ul", {
    className: "contact-info"
  }, footer_jsx("li", null, footer_jsx("i", {
    className: "icon-direction"
  }), footer_jsx("span", {
    className: "contact-info-label"
  }, "Address"), "123 Street Name, City, England"), footer_jsx("li", null, footer_jsx("i", {
    className: "icon-phone-1"
  }), footer_jsx("span", {
    className: "contact-info-label"
  }, "Phone"), "Toll Free ", footer_jsx("a", {
    href: "tel:"
  }, "(123) 456-7890")), footer_jsx("li", null, footer_jsx("i", {
    className: "icon-envolope"
  }), footer_jsx("span", {
    className: "contact-info-label"
  }, "Email"), " ", footer_jsx("a", {
    href: "mailto:mail@example.com"
  }, "mail@example.com"))))), footer_jsx("div", {
    className: "col-md-7 offset-lg-1 col-lg-8"
  }, footer_jsx("div", {
    className: "row"
  }, footer_jsx("div", {
    className: "col-sm-5 col-md-5 col-lg-3"
  }, footer_jsx("div", {
    className: "widget"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "Account"), footer_jsx("ul", {
    className: "links"
  }, footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "/pages/about-us"
  }, "About us")), footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "/pages/contact-us"
  }, "Contact us")), footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "/pages/account"
  }, "My Account")), footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "#"
  }, "Order history")), footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "#"
  }, "Advanced search"))))), footer_jsx("div", {
    className: "col-sm-7 col-md-7 col-lg-4"
  }, footer_jsx("div", {
    className: "widget"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "MAIN FEATURES"), footer_jsx("ul", {
    className: "links"
  }, footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "#"
  }, "Supper Fast React Template")), footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "#"
  }, "1st Fully working Ajax Theme")), footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "#"
  }, "36 Unique Shop Layouts")), footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "#"
  }, "Powerful Admin Panel")), footer_jsx("li", null, footer_jsx(ALink/* default */.Z, {
    href: "#"
  }, "Mobile & Retina Optimized"))))), footer_jsx("div", {
    className: "col-md-12 col-lg-5"
  }, footer_jsx("div", {
    className: "widget widget-newsletter"
  }, footer_jsx("h4", {
    className: "widget-title"
  }, "Newsletter"), footer_jsx("p", {
    className: "mb-2 mr-3"
  }, "Get all the latest information on Events, Sales and Offers. Sign up for newsletter today."), footer_jsx("form", {
    action: "#"
  }, footer_jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "Email address...",
    required: true
  }), footer_jsx("input", {
    type: "submit",
    className: "btn",
    value: "GO"
  })))))))), footer_jsx("div", {
    className: "footer-bottom d-flex flex-column flex-lg-row align-items-sm-center"
  }, footer_jsx("p", {
    className: "footer-copyright mb-lg-0"
  }, "\xA9 Porto eCommerce. 2021. All Rights Reserved"), footer_jsx("div", {
    className: "social-icons ml-lg-auto mr-1"
  }, footer_jsx(ALink/* default */.Z, {
    href: "#",
    className: "social-icon social-facebook icon-facebook",
    title: "Facebook"
  }), footer_jsx(ALink/* default */.Z, {
    href: "#",
    className: "social-icon social-twitter icon-twitter",
    title: "Twitter"
  }), footer_jsx(ALink/* default */.Z, {
    href: "#",
    className: "social-icon social-linkedin fab fa-linkedin-in",
    title: "Linkedin"
  })))));
}

/* harmony default export */ var footer = (/*#__PURE__*/external_react_default().memo(Footer));
// EXTERNAL MODULE: external "react-slide-toggle"
var external_react_slide_toggle_ = __webpack_require__(3920);
var external_react_slide_toggle_default = /*#__PURE__*/__webpack_require__.n(external_react_slide_toggle_);
;// CONCATENATED MODULE: ./components/common/partials/mobile-menu.jsx
var mobile_menu_jsx = (external_react_default()).createElement;


 // Import Custom Component




function MobileMenu({
  router
}) {
  const pathname = router.pathname;
  const {
    0: searchText,
    1: setSearchText
  } = (0,external_react_.useState)('');
  (0,external_react_.useEffect)(() => {
    router.events.on('routeChangeStart', closeMobileMenu);
    return () => {
      router.events.off('routeChangeStart', closeMobileMenu);
    };
  }, []);

  function isOtherPage() {
    return mainMenu.other.find(variation => variation.url === pathname);
  }

  function closeMobileMenu() {
    document.querySelector("body").classList.remove("mmenu-active");

    if (document.querySelector(".menu-toggler")) {
      document.querySelector(".menu-toggler").classList.remove("active");
    }
  }

  function searchProducts(e) {
    e.preventDefault();
    router.push({
      pathname: '/shop',
      query: {
        search: searchText
      }
    });
  }

  function onChangeSearchText(e) {
    setSearchText(e.target.value);
  }

  return mobile_menu_jsx((external_react_default()).Fragment, null, mobile_menu_jsx("div", {
    className: "mobile-menu-overlay",
    onClick: closeMobileMenu
  }), mobile_menu_jsx("div", {
    className: "mobile-menu-container"
  }, mobile_menu_jsx("div", {
    className: "mobile-menu-wrapper"
  }, mobile_menu_jsx("span", {
    className: "mobile-menu-close",
    onClick: closeMobileMenu
  }, mobile_menu_jsx("i", {
    className: "fa fa-times"
  })), mobile_menu_jsx("nav", {
    className: "mobile-nav"
  }, mobile_menu_jsx("ul", {
    className: "mobile-menu"
  }, mobile_menu_jsx("li", {
    className: pathname === '/' ? 'active' : ''
  }, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/"
  }, "Home")), mobile_menu_jsx("li", {
    className: pathname.startsWith('/shop') ? 'active' : ''
  }, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx((external_react_default()).Fragment, null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/shop",
    className: `${toggleState.toLowerCase()}`
  }, "Categories", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      e.preventDefault();
      onToggle();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx((external_react_default()).Fragment, null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: `${toggleState.toLowerCase()}`
  }, "VARIATION 1", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      e.preventDefault();
      onToggle();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mainMenu.shop.variation1.map((variations, index) => mobile_menu_jsx("li", {
    key: "menu-item" + index
  }, mobile_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))))))), mobile_menu_jsx("li", null, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx((external_react_default()).Fragment, null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: `${toggleState.toLowerCase()}`
  }, "VARIATION 2", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      e.preventDefault();
      onToggle();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mainMenu.shop.variation2.map((variations, index) => mobile_menu_jsx("li", {
    key: "menu-item" + index
  }, mobile_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))))))))))), mobile_menu_jsx("li", {
    className: pathname.startsWith('/product') ? 'active' : ''
  }, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx((external_react_default()).Fragment, null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/product/default/porto-brown-bag",
    className: `${toggleState.toLowerCase()}`
  }, "Products", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      e.preventDefault();
      onToggle();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx((external_react_default()).Fragment, null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: `${toggleState.toLowerCase()}`
  }, "PRODUCT PAGES", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      e.preventDefault();
      onToggle();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mainMenu.product.pages.map((variations, index) => mobile_menu_jsx("li", {
    key: "menu-item" + index
  }, mobile_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))))))), mobile_menu_jsx("li", null, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx((external_react_default()).Fragment, null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: `${toggleState.toLowerCase()}`
  }, "PRODUCT LAYOUTS", mobile_menu_jsx("span", {
    className: "mmenu-btn",
    onClick: e => {
      e.preventDefault();
      onToggle();
    }
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mainMenu.product.layout.map((variations, index) => mobile_menu_jsx("li", {
    key: "menu-item" + index
  }, mobile_menu_jsx(ALink/* default */.Z, {
    href: `${variations.url}`
  }, variations.title))))))))))), mobile_menu_jsx("li", {
    className: isOtherPage() ? 'active' : ''
  }, mobile_menu_jsx((external_react_slide_toggle_default()), {
    collapsed: true
  }, ({
    onToggle,
    setCollapsibleElement,
    toggleState
  }) => mobile_menu_jsx((external_react_default()).Fragment, null, mobile_menu_jsx("a", {
    href: "#",
    className: `${toggleState.toLowerCase()}`,
    onClick: e => {
      e.preventDefault();
      onToggle();
    }
  }, "Pages", mobile_menu_jsx("span", {
    className: "mmenu-btn"
  })), mobile_menu_jsx("ul", {
    ref: setCollapsibleElement
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/wishlist"
  }, "Wishlist")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/cart"
  }, "Shopping Cart")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/checkout"
  }, "Checkout")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/account"
  }, "Dashboard")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/login"
  }, "Login")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/forgot-password"
  }, "Forgot Password")))))), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/blog"
  }, "Blog")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/about-us"
  }, "About Us"))), mobile_menu_jsx("ul", {
    className: "mobile-menu mt-2 mb-2"
  }, mobile_menu_jsx("li", {
    className: "border-0"
  }, mobile_menu_jsx(ALink/* default */.Z, {
    href: "#"
  }, "Special Offer!")), mobile_menu_jsx("li", {
    className: "border-0"
  }, mobile_menu_jsx("a", {
    href: "https://1.envato.market/DdLk5",
    target: "_blank"
  }, "Buy Porto!", mobile_menu_jsx("span", {
    className: "tip tip-hot"
  }, "Hot")))), mobile_menu_jsx("ul", {
    className: "mobile-menu"
  }, mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/account"
  }, "My Account")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/contact-us"
  }, "Contact Us")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/blog"
  }, "Blog")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/wishlist"
  }, "My Wishlist")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/cart"
  }, "Cart")), mobile_menu_jsx("li", null, mobile_menu_jsx(ALink/* default */.Z, {
    href: "/pages/login",
    className: "login-link"
  }, "Log In")))), mobile_menu_jsx("form", {
    className: "search-wrapper mb-2",
    action: "#",
    onSubmit: searchProducts
  }, mobile_menu_jsx("input", {
    type: "text",
    className: "form-control mb-0",
    placeholder: "Search...",
    required: true,
    onChange: onChangeSearchText
  }), mobile_menu_jsx("button", {
    className: "btn icon-search text-white bg-transparent p-0",
    type: "submit"
  })), mobile_menu_jsx("div", {
    className: "social-icons"
  }, mobile_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: "social-icon social-facebook icon-facebook"
  }), mobile_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: "social-icon social-twitter icon-twitter"
  }), mobile_menu_jsx(ALink/* default */.Z, {
    href: "#",
    className: "social-icon social-instagram icon-instagram"
  })))));
}

/* harmony default export */ var mobile_menu = ((0,router_.withRouter)(MobileMenu));
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__(7530);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: ./components/partials/product/media/product-media-one.jsx
var product_media_one = __webpack_require__(6775);
// EXTERNAL MODULE: ./components/partials/product/details/product-detail-one.jsx
var product_detail_one = __webpack_require__(2915);
;// CONCATENATED MODULE: ./components/features/modals/quickview.jsx
var quickview_jsx = (external_react_default()).createElement;




 // Import Apollo Server and Query


 // Import Action

 // Import Custom Component



external_react_modal_default().setAppElement('#__next');
const customStyles = {
  content: {
    position: 'relative',
    maxWidth: '930px',
    width: '100%',
    padding: '3rem',
    marginLeft: '2rem',
    marginRight: '2rem',
    overflow: 'hidden auto',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    maxHeight: 'calc( 100vh - 4rem )'
  }
};

function QuickModal(props) {
  const {
    slug
  } = props;
  if (!slug) return quickview_jsx("div", null);
  const {
    data,
    loading,
    error
  } = (0,react_hooks_.useQuery)(queries/* GET_PRODUCT */.N4, {
    variables: {
      demo: 4,
      slug,
      onlyData: true
    }
  });
  const router = (0,router_.useRouter)();
  const product = data && data.product.data;
  (0,external_react_.useEffect)(() => {
    router.events.on('routeChangeStart', closeModal);
    return () => {
      router.events.off('routeChangeStart', closeModal);
    };
  }, []);

  if (error) {
    return quickview_jsx("div", null, error.message);
  }

  function closeModal() {
    if (!document.querySelector('.open-modal')) return;
    document.querySelector('.open-modal').classList.add("close-modal");
    setTimeout(() => {
      props.hideQuickView();
    }, 350);
  }

  return quickview_jsx((external_react_default()).Fragment, null, quickview_jsx((external_react_modal_default()), {
    isOpen: props.modalShow,
    onRequestClose: closeModal,
    className: "product-single-container product-single-default product-quick-view custom-scrollbar mb-0",
    overlayClassName: "ajax-overlay open-modal",
    closeTimeoutMS: 100,
    style: customStyles
  }, quickview_jsx("div", {
    className: `row skeleton-body skel-shop-products ${loading ? '' : 'loaded'}`
  }, quickview_jsx(product_media_one/* default */.Z, {
    product: product,
    parent: ".product-quick-view",
    adClass: "col-md-6 mb-md-0"
  }), quickview_jsx("div", {
    className: "col-md-6"
  }, quickview_jsx(product_detail_one/* default */.Z, {
    product: product,
    parent: ".product-quick-view",
    isNav: false,
    adClass: "mb-0"
  }))), quickview_jsx("button", {
    title: "Close (Esc)",
    type: "button",
    className: "mfp-close",
    onClick: closeModal
  }, "\xD7")));
}

const quickview_mapStateToProps = state => {
  return {
    slug: state.modal.single,
    modalShow: state.modal.quickShow
  };
};

/* harmony default export */ var quickview = ((0,apollo/* default */.Z)({
  ssr: true
})((0,external_react_redux_.connect)(quickview_mapStateToProps, modal/* actions */.Nw)(QuickModal)));
;// CONCATENATED MODULE: ./components/features/modals/video-modal.jsx
var video_modal_jsx = (external_react_default()).createElement;


 // Import Action


const video_modal_customStyles = {
  content: {
    top: '50%',
    transform: 'translateY(-50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: '10000'
  }
};
external_react_modal_default().setAppElement('#__next');

function VideoModal(props) {
  const {
    showModal
  } = props;

  function closeHandler() {
    document.querySelector('.ReactModal__Overlay').classList.add("close-modal");
    setTimeout(() => {
      props.hideVideo();
    }, 350);
  }

  return video_modal_jsx((external_react_modal_default()), {
    isOpen: showModal,
    onRequestClose: closeHandler,
    style: video_modal_customStyles,
    contentLabel: "Video Modal",
    className: "video-modal",
    id: "video-modal"
  }, video_modal_jsx("button", {
    type: "button",
    className: "modal-close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: closeHandler
  }, "\xD7"), video_modal_jsx("iframe", {
    className: "mfp-iframe",
    src: "//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1",
    frameBorder: "0",
    allowFullScreen: "",
    title: "youtube"
  }));
}

const video_modal_mapStateToProps = state => {
  return {
    showModal: state.modal.videoShow
  };
};
/* harmony default export */ var video_modal = ((0,external_react_redux_.connect)(video_modal_mapStateToProps, modal/* actions */.Nw)(VideoModal));
;// CONCATENATED MODULE: ./components/layout.jsx

var layout_jsx = (external_react_default()).createElement;

















function Layout({
  children,
  hideQuickView,
  hideVideo
}) {
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", utils/* stickyInit */.ad, {
      passive: true
    });
    window.addEventListener("scroll", utils/* scrollTopInit */.jV, {
      passive: true
    });
    window.addEventListener("resize", utils/* stickyInit */.ad);
    hideQuickView();
    hideVideo();
    return () => {
      window.removeEventListener("scroll", utils/* stickyInit */.ad, {
        passive: true
      });
      window.removeEventListener("scroll", utils/* scrollTopInit */.jV, {
        passive: true
      });
      window.removeEventListener("resize", utils/* stickyInit */.ad);
    };
  }, []);
  return layout_jsx((external_react_default()).Fragment, null, layout_jsx("div", {
    className: "page-wrapper"
  }, layout_jsx(Header, null), children, layout_jsx(footer, null), layout_jsx(external_react_toastify_.ToastContainer, {
    autoClose: 3000,
    duration: 300,
    newestOnTo: true,
    className: "toast-container",
    position: "bottom-right",
    closeButton: false,
    hideProgressBar: true,
    newestOnTop: true,
    draggable: false
  }), layout_jsx(quickview, null), layout_jsx(video_modal, null), layout_jsx("div", {
    className: "wishlist-popup"
  }, layout_jsx("div", {
    className: "wishlist-popup-msg"
  }, "Product added!"))), layout_jsx(mobile_menu, null), layout_jsx(sticky_navbar, null), layout_jsx("a", {
    id: "scroll-top",
    href: "#",
    title: "Top",
    role: "button",
    className: "btn-scroll",
    onClick: utils/* scrollTopHandlder */.F8
  }, layout_jsx("i", {
    className: "icon-angle-up"
  })));
}

/* harmony default export */ var layout = ((0,external_react_redux_.connect)(null, modal/* actions */.Nw)(Layout));
;// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = (external_react_default()).createElement;









const client = new client_namespaceObject.ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new client_namespaceObject.InMemoryCache()
});

const App = ({
  Component,
  pageProps
}) => {
  const store = (0,external_react_redux_.useStore)();
  (0,external_react_.useEffect)(() => {
    if (store.getState().demo.current !== 11) {
      store.dispatch(actions.refreshStore(11));
    }
  }, []);
  return _app_jsx(external_react_redux_.Provider, {
    store: store
  }, _app_jsx(client_namespaceObject.ApolloProvider, {
    client: client
  }, _app_jsx(react_namespaceObject.PersistGate, {
    persistor: store.__persistor,
    loading: _app_jsx("div", {
      className: "loading-overlay"
    }, _app_jsx("div", {
      className: "bounce-loader"
    }, _app_jsx("div", {
      className: "bounce1"
    }), _app_jsx("div", {
      className: "bounce2"
    }), _app_jsx("div", {
      className: "bounce3"
    })))
  }, _app_jsx((external_react_helmet_default()), null, _app_jsx("meta", {
    charSet: "UTF-8"
  }), _app_jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge"
  }), _app_jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), _app_jsx("title", null, "Porto - React eCommerce Template"), _app_jsx("meta", {
    name: "keywords",
    content: "HTML5 Template"
  }), _app_jsx("meta", {
    name: "description",
    content: "Porto - Bootstrap eCommerce Template"
  }), _app_jsx("meta", {
    name: "author",
    content: "SW-THEMES"
  })), _app_jsx(layout, null, _app_jsx(Component, pageProps)))));
};

App.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ var _app = (wrapper.withRedux(App));

/***/ }),

/***/ 3326:
/***/ (function() {



/***/ }),

/***/ 7530:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/react-hooks");;

/***/ }),

/***/ 806:
/***/ (function(module) {

"use strict";
module.exports = require("apollo-boost");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 5766:
/***/ (function(module) {

"use strict";
module.exports = require("next-apollo");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6481:
/***/ (function(module) {

"use strict";
module.exports = require("react-helmet");;

/***/ }),

/***/ 6302:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-lightbox");;

/***/ }),

/***/ 7773:
/***/ (function(module) {

"use strict";
module.exports = require("react-image-magnifiers");;

/***/ }),

/***/ 9290:
/***/ (function(module) {

"use strict";
module.exports = require("react-lazy-load-image-component");;

/***/ }),

/***/ 9997:
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ 7033:
/***/ (function(module) {

"use strict";
module.exports = require("react-owl-carousel2");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 3920:
/***/ (function(module) {

"use strict";
module.exports = require("react-slide-toggle");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 3643:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ 584:
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,6285,6723,5961,8040,1062,5708,6442,7845,7029,7684,2915,6775], function() { return __webpack_exec__(6394); });
module.exports = __webpack_exports__;

})();