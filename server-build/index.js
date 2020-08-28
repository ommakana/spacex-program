/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/api/api */ \"./src/api/api.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_reducer_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/reducer/index */ \"./src/reducer/index.js\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_4___default()();\napp.get('/', (req, res) => {\n  const params = qs__WEBPACK_IMPORTED_MODULE_2___default.a.parse(req.query);\n  const data = Object(_src_api_api__WEBPACK_IMPORTED_MODULE_6__[\"fetchDataOnReload\"])(params);\n  console.log(data);\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"Provider\"], {\n    store: _src_reducer_index__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    name: \"SpaceX Launch Programs\"\n  })));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .outer_wrapper {\\n|   background: lightgrey;\\n|   border: 1px solid transparent;\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/home/home */ \"./src/component/home/home.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"outer_wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_home_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, FIRST_QUERY_PARAM, fetchData, loadData, firstQueryParam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_DATA\", function() { return FETCH_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_DATA_SUCCESS\", function() { return FETCH_DATA_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_DATA_FAIL\", function() { return FETCH_DATA_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FIRST_QUERY_PARAM\", function() { return FIRST_QUERY_PARAM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchData\", function() { return fetchData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadData\", function() { return loadData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstQueryParam\", function() { return firstQueryParam; });\nconst FETCH_DATA = \"FETCH_DATA\";\nconst FETCH_DATA_SUCCESS = \"FETCH_DATA_SUCCESS\";\nconst FETCH_DATA_FAIL = \"FETCH_DATA_FAIL\";\nconst FIRST_QUERY_PARAM = \"FIRST_QUERY_PARAM\";\nconst fetchData = () => ({\n  type: FETCH_DATA,\n  loading: true\n});\nconst loadData = data => ({\n  type: FETCH_DATA_SUCCESS,\n  payload: {\n    data\n  }\n});\nconst firstQueryParam = isFirstQueryParam => ({\n  type: FIRST_QUERY_PARAM,\n  payload: {\n    isFirstQueryParam\n  }\n});\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/*! exports provided: apiURL, generateApiUrl, fetchDataOnReload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"apiURL\", function() { return apiURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateApiUrl\", function() { return generateApiUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchDataOnReload\", function() { return fetchDataOnReload; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiURL = \"https://api.spacexdata.com/v3/launches?limit=100\";\nconst generateApiUrl = () => {\n  let params = window.location.search;\n  return apiURL + params.replace(\"?\", \"&\");\n};\nconst fetchDataOnReload = params => {\n  let stringParams = JSON.stringify(params);\n  stringParams = stringParams.replace(/[\"{}]+/g, \"\");\n  stringParams = stringParams.replace(/[:]+/g, \"=\");\n  stringParams = \"?\" + stringParams.replace(/[,]+/g, \"&\");\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiURL}+${stringParams}`).then(data => data);\n};\n\n//# sourceURL=webpack:///./src/api/api.js?");

/***/ }),

/***/ "./src/component/filterComponent/filterComponent.css":
/*!***********************************************************!*\
  !*** ./src/component/filterComponent/filterComponent.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .filter-button-container {\\n|     display: flex;\\n|     flex-wrap: wrap;\");\n\n//# sourceURL=webpack:///./src/component/filterComponent/filterComponent.css?");

/***/ }),

/***/ "./src/component/filterComponent/filterComponent.js":
/*!**********************************************************!*\
  !*** ./src/component/filterComponent/filterComponent.js ***!
  \**********************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilterComponent\", function() { return FilterComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _launchYearsStubData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../launchYearsStubData */ \"./src/launchYearsStubData.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ \"./src/constants.js\");\n/* harmony import */ var _filterComponent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterComponent.css */ \"./src/component/filterComponent/filterComponent.css\");\n/* harmony import */ var _filterComponent_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_filterComponent_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FilterComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(({\n  handleFilter\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    className: \"filter-header-text\"\n  }, \"Filters\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"filter-header\"\n  }, \"Launch Year\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, _launchYearsStubData__WEBPACK_IMPORTED_MODULE_1__[\"launchYear\"].map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: handleFilter,\n    className: \"filter-button\",\n    value: item,\n    name: _constants__WEBPACK_IMPORTED_MODULE_2__[\"LAUNCH_YEAR\"],\n    key: index\n  }, item))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"filter-header\"\n  }, \"Successful Launch\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, booleanButton(_constants__WEBPACK_IMPORTED_MODULE_2__[\"LAUNCH_SUCCESS\"], handleFilter)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"filter-header\"\n  }, \"Successful Landing\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-button-container\"\n  }, booleanButton(_constants__WEBPACK_IMPORTED_MODULE_2__[\"LAND_SUCCESS\"], handleFilter)));\n});\n\nfunction booleanButton(name, handleFilter) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"filter-button\",\n    name: name,\n    onClick: handleFilter,\n    value: \"true\"\n  }, \"True\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"filter-button\",\n    name: name,\n    onClick: handleFilter,\n    value: \"false\"\n  }, \"False\"));\n}\n\n//# sourceURL=webpack:///./src/component/filterComponent/filterComponent.js?");

/***/ }),

/***/ "./src/component/home/home.css":
/*!*************************************!*\
  !*** ./src/component/home/home.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .inner_container {\\n|     display: flex;\\n|     justify-content: space-between;\");\n\n//# sourceURL=webpack:///./src/component/home/home.css?");

/***/ }),

/***/ "./src/component/home/home.js":
/*!************************************!*\
  !*** ./src/component/home/home.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.css */ \"./src/component/home/home.css\");\n/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/api */ \"./src/api/api.js\");\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/index */ \"./src/actions/index.js\");\n/* harmony import */ var _spaceTileComponent_spaceTileComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../spaceTileComponent/spaceTileComponent */ \"./src/component/spaceTileComponent/spaceTileComponent.js\");\n/* harmony import */ var _filterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filterComponent/filterComponent */ \"./src/component/filterComponent/filterComponent.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"handleFilter\", event => {\n      let url = new URL(window.location.href);\n      let urlParams = new URLSearchParams(url.search);\n      let filterByValue = event.target.name;\n\n      if (urlParams.has(filterByValue)) {\n        let newUrl = window.location.href;\n        let replaceValue = window.location.search.split(/([?,&])/).find(item => item.includes(filterByValue));\n        window.history.pushState(null, null, newUrl.replace(replaceValue, `${filterByValue}=${event.target.value}`));\n      } else {\n        if (this.props.isFirstQueryParam) {\n          window.history.pushState(null, null, `${window.location.href}?${filterByValue}=${event.target.value}`);\n          this.props.firstQueryParam(false);\n        } else {\n          window.history.pushState(null, null, `${window.location.href}&${filterByValue}=${event.target.value}`);\n        }\n      }\n\n      this.props.fetchData();\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(Object(_api_api__WEBPACK_IMPORTED_MODULE_4__[\"generateApiUrl\"])()).then(res => {\n        this.props.loadData(res.data);\n      });\n    });\n\n    _defineProperty(this, \"clearAllFilters\", () => {\n      this.props.fetchData();\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_api_api__WEBPACK_IMPORTED_MODULE_4__[\"apiURL\"]}`).then(res => {\n        this.props.loadData(res.data);\n        this.props.firstQueryParam(true);\n        window.history.pushState(null, null, `${window.location.pathname}`);\n      });\n    });\n  }\n\n  componentDidMount() {\n    this.props.fetchData();\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_api_api__WEBPACK_IMPORTED_MODULE_4__[\"apiURL\"]}`).then(res => {\n      this.props.loadData(res.data);\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"inner_container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"filter_wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filterComponent_filterComponent__WEBPACK_IMPORTED_MODULE_7__[\"FilterComponent\"], {\n      handleFilter: this.handleFilter\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"filter-button\",\n      onClick: this.clearAllFilters\n    }, \"Clear all\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"spacex_tile_container\"\n    }, !this.props.loading ? this.props.data.length > 0 ? this.props.data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spaceTileComponent_spaceTileComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      item: item,\n      key: index\n    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"No results found . . .\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Loading. . . . .\")));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, {\n  fetchData: _actions_index__WEBPACK_IMPORTED_MODULE_5__[\"fetchData\"],\n  loadData: _actions_index__WEBPACK_IMPORTED_MODULE_5__[\"loadData\"],\n  firstQueryParam: _actions_index__WEBPACK_IMPORTED_MODULE_5__[\"firstQueryParam\"]\n})(Home));\n\n//# sourceURL=webpack:///./src/component/home/home.js?");

/***/ }),

/***/ "./src/component/spaceTileComponent/spaceTileComponent.css":
/*!*****************************************************************!*\
  !*** ./src/component/spaceTileComponent/spaceTileComponent.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .spacex_tile {\\n|     width: 23%;\\n|     border-radius: 2%;\");\n\n//# sourceURL=webpack:///./src/component/spaceTileComponent/spaceTileComponent.css?");

/***/ }),

/***/ "./src/component/spaceTileComponent/spaceTileComponent.js":
/*!****************************************************************!*\
  !*** ./src/component/spaceTileComponent/spaceTileComponent.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _spaceTileComponent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spaceTileComponent.css */ \"./src/component/spaceTileComponent/spaceTileComponent.css\");\n/* harmony import */ var _spaceTileComponent_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spaceTileComponent_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction SpaceTileComponent({\n  item\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    tabIndex: \"0\",\n    className: \"spacex_tile\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    alt: item.mission_name,\n    src: item.links.mission_patch_small\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tile_description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mission_name\"\n  }, item.mission_name), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"#\", item.flight_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"title mission_id\"\n  }, \"Mission Ids:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, item.mission_id.map((ids, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n    key: index\n  }, ids))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"launch_description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"title\"\n  }, \"Launch year:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.launch_year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"title\"\n  }, \"Successful Launch:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.launch_success ? \"Success\" : \"Fail\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    className: \"title\"\n  }, \"Successful Landing:\"), \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, item.rocket.first_stage.cores[0].land_success ? \"Success\" : \"Fail\"))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpaceTileComponent);\n\n//# sourceURL=webpack:///./src/component/spaceTileComponent/spaceTileComponent.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: LAUNCH_YEAR, LAUNCH_SUCCESS, LAND_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LAUNCH_YEAR\", function() { return LAUNCH_YEAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LAUNCH_SUCCESS\", function() { return LAUNCH_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LAND_SUCCESS\", function() { return LAND_SUCCESS; });\nconst LAUNCH_YEAR = \"launch_year\";\nconst LAUNCH_SUCCESS = \"launch_success\";\nconst LAND_SUCCESS = \"land_success\";\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/launchYearsStubData.js":
/*!************************************!*\
  !*** ./src/launchYearsStubData.js ***!
  \************************************/
/*! exports provided: launchYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"launchYear\", function() { return launchYear; });\nconst launchYear = [\"2006\", \"2007\", \"2008\", \"2009\", \"2010\", \"2011\", \"2012\", \"2013\", \"2014\", \"2015\", \"2016\", \"2017\", \"2018\", \"2019\", \"2020\"];\n\n//# sourceURL=webpack:///./src/launchYearsStubData.js?");

/***/ }),

/***/ "./src/reducer/index.js":
/*!******************************!*\
  !*** ./src/reducer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n  data: [],\n  loading: true,\n  isFirstQueryParam: true\n};\n\nconst store = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_DATA\"]:\n      {\n        return { ...state,\n          loading: true\n        };\n      }\n\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_DATA_SUCCESS\"]:\n      {\n        return { ...state,\n          data: action.payload.data,\n          loading: false\n        };\n      }\n\n    case _actions_index__WEBPACK_IMPORTED_MODULE_0__[\"FIRST_QUERY_PARAM\"]:\n      {\n        return { ...state,\n          isFirstQueryParam: action.payload.isFirstQueryParam\n        };\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(store));\n\n//# sourceURL=webpack:///./src/reducer/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qs\");\n\n//# sourceURL=webpack:///external_%22qs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });