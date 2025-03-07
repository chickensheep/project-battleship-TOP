/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n\tbackground-color: hsl(0, 0%, 90%);\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\nhr {\n\twidth: 100%;\n}\n\n/* Page one */\n\n.headerWelcome {\n\tfont-size: 50px;\n\tmargin: 30px 0px;\n}\n\n#nameInput {\n\tfont-size: 20px;\n}\n\n/* Page two */\n\n.hello {\n\tfont-size: 50px;\n\tmargin: 30px 0px;\n}\n\nselect,\noption {\n\tfont-size: 100px;\n}\n\n.selectDialog {\n\tfont-size: 50px;\n}\n\n.selectContainer {\n\tdisplay: flex;\n}\n\n.selectContainers {\n\tdisplay: flex;\n\tgap: 20px;\n}\n\n.board {\n\tdisplay: grid;\n\tgrid-template: repeat(10, 30px) / repeat(10, 30px);\n\tborder: 1px black solid;\n\tmargin-bottom: 20px;\n\twidth: 300px;\n}\n\n.cell {\n\tborder: 1px black solid;\n\theight: 30px;\n\twidth: 30px;\n}\n\n.cellBoat {\n\tborder: 1px black solid;\n\theight: 30px;\n\twidth: 30px;\n\tbackground-color: hsl(0, 0%, 30%);\n}\n\nbutton {\n\tfont-size: 30px;\n\tbackground-color: white;\n\tborder-radius: 10px;\n\tborder: black 1px solid;\n\tpadding: 5px 10px;\n}\n\n.startGameDiv {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.startGameButton {\n\theight: 50px;\n\tmargin-left: 20px;\n}\n\n.content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n/* Page Three */\n\n.humanHeader,\n.computerHeader {\n\tfont-size: 40px;\n\ttext-align: center;\n\tmargin: 20px;\n}\n\n.humanBoard,\n.computerBoard {\n\twidth: 300px;\n\tborder: 1px black solid;\n\tdisplay: grid;\n\tgrid-template: repeat(10, 30px) / repeat(10, 30px);\n}\n\n.cellHit {\n\tborder: 1px black solid;\n\theight: 30px;\n\twidth: 30px;\n\tbackground-color: red;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 40px;\n}\n\n.cellMiss {\n\tborder: 1px black solid;\n\theight: 30px;\n\twidth: 30px;\n\tbackground-color: rgb(255, 122, 122);\n}\n\n.boardDiv {\n\tdisplay: flex;\n\tgap: 200px;\n}\n\n.instruction {\n\tfont-size: 50px;\n\tmargin: 30px 0px;\n}\n\n.result {\n\tfont-size: 30px;\n\tmargin-top: 50px;\n\tmargin-bottom: 10px;\n}\n\n/* Page Four */\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-battleship-top/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-battleship-top/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-battleship-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-battleship-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-battleship-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-battleship-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-battleship-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-battleship-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-battleship-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ComputerGameboard/Gameboard2.js":
/*!*********************************************!*\
  !*** ./src/ComputerGameboard/Gameboard2.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship2 = __webpack_require__(/*! ./Ship2 */ \"./src/ComputerGameboard/Ship2.js\");\n\nclass Gameboard2 {\n\tconstructor(size = 10) {\n\t\tthis.size = size;\n\t\tthis.board = Array.from({ length: this.size }, () =>\n\t\t\tArray.from({ length: this.size }, () => null)\n\t\t);\n\t\tthis.ships = [];\n\t\tthis.missedShots = [];\n\t}\n\n\tplaceShip(ship, x, y, direction) {\n\t\tif (direction === \"Horizontal\") {\n\t\t\tif (x + parseInt(ship.length) > this.size) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < parseInt(ship.length); i++) {\n\t\t\t\tif (this.board[y][x + i] !== null) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < parseInt(ship.length); i++) {\n\t\t\t\tthis.board[y][x + i] = ship;\n\t\t\t}\n\n\t\t\tthis.ships.push(ship);\n\t\t\treturn true;\n\t\t} else if (direction === \"Vertical\") {\n\t\t\tif (y + parseInt(ship.length) > this.size) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < parseInt(ship.length); i++) {\n\t\t\t\tif (this.board[y + i][x] !== null) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < parseInt(ship.length); i++) {\n\t\t\t\tthis.board[y + i][x] = ship;\n\t\t\t}\n\n\t\t\tthis.ships.push(ship);\n\t\t\treturn true;\n\t\t}\n\n\t\treturn false;\n\t}\n\n\treceiveAttack(x, y) {\n\t\tif (this.board[y][x] !== null) {\n\t\t\tthis.board[y][x].hit();\n\t\t\tthis.board[y][x] = \"hit\";\n\t\t} else {\n\t\t\tthis.missedShots.push([x, y]);\n\t\t\tthis.board[y][x] = \"miss\";\n\t\t}\n\t}\n\n\tallShipSunk() {\n\t\treturn this.ships.every((ship) => ship.isSunk());\n\t}\n}\n\nmodule.exports = Gameboard2;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/ComputerGameboard/Gameboard2.js?");

/***/ }),

/***/ "./src/ComputerGameboard/Ship2.js":
/*!****************************************!*\
  !*** ./src/ComputerGameboard/Ship2.js ***!
  \****************************************/
/***/ ((module) => {

eval("class Ship2 {\n\tconstructor(length) {\n\t\tthis.length = length;\n\t\tthis.hits = 0;\n\t\tthis.sunk = false;\n\t}\n\n\thit() {\n\t\tthis.hits++;\n\t\tthis.sunk = this.isSunk();\n\t}\n\n\tisSunk() {\n\t\treturn this.hits >= this.length;\n\t}\n}\n\nmodule.exports = Ship2;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/ComputerGameboard/Ship2.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\nconst showBoard = __webpack_require__(/*! ../src/pageTwo/showBoard */ \"./src/pageTwo/showBoard.js\");\n\nclass Gameboard {\n\tconstructor(size = 10) {\n\t\tthis.size = size;\n\t\tthis.board = Array.from({ length: this.size }, () =>\n\t\t\tArray.from({ length: this.size }, () => null)\n\t\t);\n\t\tthis.ships = [];\n\t\tthis.missedShots = [];\n\t}\n\n\tplaceShip(ship, x, y, direction) {\n\t\tif (direction === \"Horizontal\") {\n\t\t\tif (x + parseInt(ship.length) > this.size) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < parseInt(ship.length); i++) {\n\t\t\t\tif (this.board[y][x + i] !== null) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < parseInt(ship.length); i++) {\n\t\t\t\tthis.board[y][x + i] = ship;\n\t\t\t}\n\n\t\t\tthis.ships.push(ship);\n\t\t\treturn true;\n\t\t} else if (direction === \"Vertical\") {\n\t\t\tif (y + parseInt(ship.length) > this.size) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < parseInt(ship.length); i++) {\n\t\t\t\tif (this.board[y + i][x] !== null) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfor (let i = 0; i < parseInt(ship.length); i++) {\n\t\t\t\tthis.board[y + i][x] = ship;\n\t\t\t}\n\n\t\t\tthis.ships.push(ship);\n\t\t\treturn true;\n\t\t}\n\n\t\treturn false;\n\t}\n\n\treceiveAttack(x, y) {\n\t\tif (this.board[y][x] !== null) {\n\t\t\tthis.board[y][x].hit();\n\t\t\tthis.board[y][x] = \"hit\";\n\t\t} else {\n\t\t\tthis.missedShots.push([x, y]);\n\t\t\tthis.board[y][x] = \"miss\";\n\t\t}\n\t}\n\n\tallShipSunk() {\n\t\treturn this.ships.every((ship) => ship.isSunk());\n\t}\n}\n\nmodule.exports = Gameboard;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module) => {

eval("class Player {\n\tconstructor(name) {\n\t\tthis.name = name;\n\t}\n\n\tattack(enemyBoard, x, y) {\n\t\treturn enemyBoard.receiveAttack(x, y);\n\t}\n}\n\nclass ComputerPlayer extends Player {\n\tconstructor() {\n\t\tsuper(\"Computer\");\n\t\tthis.previousMoves = new Set();\n\t}\n\n\trandomAttack(enemyBoard) {\n\t\tlet x;\n\t\tlet y;\n\n\t\tx = Math.floor(Math.random() * 10);\n\t\ty = Math.floor(Math.random() * 10);\n\n\t\tif (this.previousMoves.has(`${x},${y}`)) {\n\t\t\treturn this.randomAttack(enemyBoard);\n\t\t} else {\n\t\t\tthis.previousMoves.add(`${x},${y}`);\n\t\t\treturn super.attack(enemyBoard, x, y);\n\t\t}\n\t}\n}\n\nmodule.exports = { Player, ComputerPlayer };\n\n\n//# sourceURL=webpack://project-battleship-top/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((module) => {

eval("class Ship {\n\tconstructor(length) {\n\t\tthis.length = length;\n\t\tthis.hits = 0;\n\t\tthis.sunk = false;\n\t}\n\n\thit() {\n\t\tthis.hits++;\n\t\tthis.sunk = this.isSunk();\n\t}\n\n\tisSunk() {\n\t\treturn this.hits >= this.length;\n\t}\n}\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst Gameboard = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\nconst Player = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\nconst ComputerPlayer = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\nconst Ship = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\nconst pageOneFunction = __webpack_require__(/*! ./pageOne/pageOneFunction */ \"./src/pageOne/pageOneFunction.js\");\n\npageOneFunction();\n\n\n//# sourceURL=webpack://project-battleship-top/./src/index.js?");

/***/ }),

/***/ "./src/pageFour/showPageFour.js":
/*!**************************************!*\
  !*** ./src/pageFour/showPageFour.js ***!
  \**************************************/
/***/ ((module) => {

eval("const showPageFour = (winner) => {\n\tconst header = document.querySelector(\".header\");\n\tconst content = document.querySelector(\".content\");\n\n\theader.innerHTML = \"\";\n\tcontent.innerHTML = \"\";\n\n\tif (winner == \"draw\") {\n\t\theader.textContent = \"It's a draw\";\n\t\theader.style.fontSize = \"50px\";\n\t} else if (winner == \"human\") {\n\t\theader.textContent = \"You won!!\";\n\t\theader.style.fontSize = \"50px\";\n\t} else if (winner == \"computer\") {\n\t\theader.textContent = \"You lost\";\n\t\theader.style.fontSize = \"50px\";\n\t}\n};\n\nmodule.exports = showPageFour;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageFour/showPageFour.js?");

/***/ }),

/***/ "./src/pageOne/pageOneFunction.js":
/*!****************************************!*\
  !*** ./src/pageOne/pageOneFunction.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const showPageTwo = __webpack_require__(/*! ../pageTwo/showPageTwo */ \"./src/pageTwo/showPageTwo.js\");\n\nconst pageOneFunction = () => {\n\tconst nameInput = document.querySelector(\"#nameInput\");\n\n\tnameInput.addEventListener(\"keydown\", (event) => {\n\t\tif (event.key == \"Enter\" && nameInput.value) {\n\t\t\tshowPageTwo(nameInput.value);\n\t\t}\n\t});\n};\n\nmodule.exports = pageOneFunction;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageOne/pageOneFunction.js?");

/***/ }),

/***/ "./src/pageThree/createComputerPlayerBoard.js":
/*!****************************************************!*\
  !*** ./src/pageThree/createComputerPlayerBoard.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ../Gameboard */ \"./src/Gameboard.js\");\nconst Player = (__webpack_require__(/*! ../Player */ \"./src/Player.js\").Player);\nconst ComputerPlayer = (__webpack_require__(/*! ../Player */ \"./src/Player.js\").ComputerPlayer);\nconst Ship = __webpack_require__(/*! ../Ship */ \"./src/Ship.js\");\n\nconst Gameboard2 = __webpack_require__(/*! ../ComputerGameboard/Gameboard2 */ \"./src/ComputerGameboard/Gameboard2.js\");\n\nconst createComputerPlayerBoard = () => {\n\tconst computerPlayerBoard = new Gameboard2();\n\n\twhile (\n\t\tcomputerPlayerBoard.ships.filter((obj) => obj.length == 2).length < 1\n\t) {\n\t\tconst x = Math.floor(Math.random() * 10);\n\t\tconst y = Math.floor(Math.random() * 10);\n\n\t\tconst directionNumber = Math.floor(Math.random() * 2);\n\n\t\tif (directionNumber == 0) {\n\t\t\tconst ship = new Ship(2);\n\t\t\tcomputerPlayerBoard.placeShip(ship, x, y, \"Horizontal\");\n\t\t} else if (directionNumber == 1) {\n\t\t\tconst ship = new Ship(2);\n\t\t\tcomputerPlayerBoard.placeShip(ship, x, y, \"Vertical\");\n\t\t}\n\t}\n\n\twhile (\n\t\tcomputerPlayerBoard.ships.filter((obj) => obj.length == 3).length < 2\n\t) {\n\t\tconst x = Math.floor(Math.random() * 10);\n\t\tconst y = Math.floor(Math.random() * 10);\n\n\t\tconst directionNumber = Math.floor(Math.random() * 2);\n\n\t\tif (directionNumber == 0) {\n\t\t\tconst ship = new Ship(3);\n\t\t\tcomputerPlayerBoard.placeShip(ship, x, y, \"Horizontal\");\n\t\t} else if (directionNumber == 1) {\n\t\t\tconst ship = new Ship(3);\n\t\t\tcomputerPlayerBoard.placeShip(ship, x, y, \"Vertical\");\n\t\t}\n\t}\n\n\twhile (\n\t\tcomputerPlayerBoard.ships.filter((obj) => obj.length == 4).length < 1\n\t) {\n\t\tconst x = Math.floor(Math.random() * 10);\n\t\tconst y = Math.floor(Math.random() * 10);\n\n\t\tconst directionNumber = Math.floor(Math.random() * 2);\n\n\t\tif (directionNumber == 0) {\n\t\t\tconst ship = new Ship(4);\n\t\t\tcomputerPlayerBoard.placeShip(ship, x, y, \"Horizontal\");\n\t\t} else if (directionNumber == 1) {\n\t\t\tconst ship = new Ship(4);\n\t\t\tcomputerPlayerBoard.placeShip(ship, x, y, \"Vertical\");\n\t\t}\n\t}\n\n\twhile (\n\t\tcomputerPlayerBoard.ships.filter((obj) => obj.length == 5).length < 1\n\t) {\n\t\tconst x = Math.floor(Math.random() * 10);\n\t\tconst y = Math.floor(Math.random() * 10);\n\n\t\tconst directionNumber = Math.floor(Math.random() * 2);\n\n\t\tif (directionNumber == 0) {\n\t\t\tconst ship = new Ship(5);\n\t\t\tcomputerPlayerBoard.placeShip(ship, x, y, \"Horizontal\");\n\t\t} else if (directionNumber == 1) {\n\t\t\tconst ship = new Ship(5);\n\t\t\tcomputerPlayerBoard.placeShip(ship, x, y, \"Vertical\");\n\t\t}\n\t}\n\n\treturn computerPlayerBoard;\n};\n\nmodule.exports = createComputerPlayerBoard;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageThree/createComputerPlayerBoard.js?");

/***/ }),

/***/ "./src/pageThree/showPageThree.js":
/*!****************************************!*\
  !*** ./src/pageThree/showPageThree.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const players = __webpack_require__(/*! ../Player */ \"./src/Player.js\");\n\nconst createComputerPlayerBoard = __webpack_require__(/*! ./createComputerPlayerBoard */ \"./src/pageThree/createComputerPlayerBoard.js\");\nconst showTwoBoards = __webpack_require__(/*! ./showTwoBoards */ \"./src/pageThree/showTwoBoards.js\");\n\nconst showPageThree = (humanPlayerBoard) => {\n\tconst header = document.querySelector(\".header\");\n\tconst content = document.querySelector(\".content\");\n\n\theader.innerHTML = \"\";\n\tcontent.innerHTML = \"\";\n\n\t//header\n\n\tconst instruction = document.createElement(\"p\");\n\tinstruction.textContent = \"Attack enemy (computer) by clicking on his board\";\n\tinstruction.classList.add(\"instruction\");\n\theader.appendChild(instruction);\n\n\t//create computers board and player\n\tconst computerPlayerBoard = createComputerPlayerBoard();\n\tlet computerPlayer = new players.ComputerPlayer();\n\n\tconsole.log(computerPlayerBoard);\n\n\t// show human and computer board\n\tshowTwoBoards(humanPlayerBoard, computerPlayerBoard, computerPlayer);\n};\n\nmodule.exports = showPageThree;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageThree/showPageThree.js?");

/***/ }),

/***/ "./src/pageThree/showTwoBoards.js":
/*!****************************************!*\
  !*** ./src/pageThree/showTwoBoards.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const showPageFour = __webpack_require__(/*! ../pageFour/showPageFour */ \"./src/pageFour/showPageFour.js\");\n\nconst showTwoBoards = (\n\thumanPlayerBoard,\n\tcomputerPlayerBoard,\n\tcomputerPlayer\n) => {\n\tconst content = document.querySelector(\".content\");\n\tcontent.innerHTML = \"\";\n\n\tconst boardDiv = document.createElement(\"div\");\n\tboardDiv.classList.add(\"boardDiv\");\n\tcontent.appendChild(boardDiv);\n\n\tconst humanDiv = document.createElement(\"div\");\n\tconst computerDiv = document.createElement(\"div\");\n\n\tconst humanHeader = document.createElement(\"div\");\n\thumanHeader.classList.add(\"humanHeader\");\n\tconst computerHeader = document.createElement(\"div\");\n\tcomputerHeader.classList.add(\"computerHeader\");\n\thumanHeader.textContent = \"Your board\";\n\tcomputerHeader.textContent = \"Computer's board\";\n\n\tconst humanBoard = document.createElement(\"div\");\n\thumanBoard.classList.add(\"humanBoard\");\n\tconst computerBoard = document.createElement(\"div\");\n\tcomputerBoard.classList.add(\"computerBoard\");\n\n\thumanDiv.appendChild(humanHeader);\n\tcomputerDiv.appendChild(computerHeader);\n\n\thumanDiv.appendChild(humanBoard);\n\tcomputerDiv.appendChild(computerBoard);\n\n\tboardDiv.appendChild(humanDiv);\n\tboardDiv.appendChild(computerDiv);\n\n\tfor (let i = 0; i < humanPlayerBoard.size; i++) {\n\t\tfor (let j = 0; j < humanPlayerBoard.size; j++) {\n\t\t\tif (humanPlayerBoard.board[i][j] == null) {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\thumanBoard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cell\");\n\t\t\t} else if (humanPlayerBoard.board[i][j] == \"hit\") {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\thumanBoard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cellHit\");\n\t\t\t\tcell.textContent = \"X\";\n\t\t\t} else if (humanPlayerBoard.board[i][j] == \"miss\") {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\thumanBoard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cellMiss\");\n\t\t\t} else {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\thumanBoard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cellBoat\");\n\t\t\t}\n\t\t}\n\t}\n\n\tfor (let i = 0; i < computerPlayerBoard.size; i++) {\n\t\tfor (let j = 0; j < computerPlayerBoard.size; j++) {\n\t\t\tif (computerPlayerBoard.board[i][j] == \"hit\") {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\tcomputerBoard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cellHit\");\n\t\t\t\tcell.textContent = \"X\";\n\t\t\t} else if (computerPlayerBoard.board[i][j] == \"miss\") {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\tcomputerBoard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cellMiss\");\n\t\t\t} else {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\tcomputerBoard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cell\");\n\n\t\t\t\tif (\n\t\t\t\t\t!(humanPlayerBoard.allShipSunk() || computerPlayerBoard.allShipSunk())\n\t\t\t\t)\n\t\t\t\t\tcell.addEventListener(\"click\", () => {\n\t\t\t\t\t\tcomputerPlayerBoard.receiveAttack(j, i);\n\t\t\t\t\t\tcomputerPlayer.randomAttack(humanPlayerBoard);\n\t\t\t\t\t\tshowTwoBoards(\n\t\t\t\t\t\t\thumanPlayerBoard,\n\t\t\t\t\t\t\tcomputerPlayerBoard,\n\t\t\t\t\t\t\tcomputerPlayer\n\t\t\t\t\t\t);\n\n\t\t\t\t\t\tif (\n\t\t\t\t\t\t\thumanPlayerBoard.allShipSunk() &&\n\t\t\t\t\t\t\tcomputerPlayerBoard.allShipSunk()\n\t\t\t\t\t\t) {\n\t\t\t\t\t\t\tconst result = document.createElement(\"div\");\n\t\t\t\t\t\t\tresult.classList.add(\"result\");\n\t\t\t\t\t\t\tresult.textContent = \"Game has ended\";\n\t\t\t\t\t\t\tcontent.appendChild(result);\n\t\t\t\t\t\t\tconst resultButton = document.createElement(\"button\");\n\t\t\t\t\t\t\tresultButton.textContent = \"Result\";\n\t\t\t\t\t\t\tcontent.appendChild(resultButton);\n\t\t\t\t\t\t\tresultButton.addEventListener(\"click\", () => {\n\t\t\t\t\t\t\t\tshowPageFour(\"draw\");\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tcell.addEventListener(\"click\", () => {});\n\t\t\t\t\t\t} else if (humanPlayerBoard.allShipSunk()) {\n\t\t\t\t\t\t\tconst result = document.createElement(\"div\");\n\t\t\t\t\t\t\tresult.classList.add(\"result\");\n\t\t\t\t\t\t\tresult.textContent = \"Game has ended\";\n\t\t\t\t\t\t\tcontent.appendChild(result);\n\t\t\t\t\t\t\tconst resultButton = document.createElement(\"button\");\n\t\t\t\t\t\t\tresultButton.textContent = \"Result\";\n\t\t\t\t\t\t\tcontent.appendChild(resultButton);\n\t\t\t\t\t\t\tresultButton.addEventListener(\"click\", () => {\n\t\t\t\t\t\t\t\tshowPageFour(\"computer\");\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tcell.addEventListener(\"click\", () => {});\n\t\t\t\t\t\t} else if (computerPlayerBoard.allShipSunk()) {\n\t\t\t\t\t\t\tconst result = document.createElement(\"div\");\n\t\t\t\t\t\t\tresult.classList.add(\"result\");\n\t\t\t\t\t\t\tresult.textContent = \"Game has ended\";\n\t\t\t\t\t\t\tcontent.appendChild(result);\n\t\t\t\t\t\t\tconst resultButton = document.createElement(\"button\");\n\t\t\t\t\t\t\tresultButton.textContent = \"Result\";\n\t\t\t\t\t\t\tcontent.appendChild(resultButton);\n\t\t\t\t\t\t\tresultButton.addEventListener(\"click\", () => {\n\t\t\t\t\t\t\t\tshowPageFour(\"human\");\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}\n};\n\nmodule.exports = showTwoBoards;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageThree/showTwoBoards.js?");

/***/ }),

/***/ "./src/pageTwo/gameController.js":
/*!***************************************!*\
  !*** ./src/pageTwo/gameController.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const showOptions = __webpack_require__(/*! ./showOptions.js */ \"./src/pageTwo/showOptions.js\");\nconst showPlaceShip = __webpack_require__(/*! ./showPlaceShip */ \"./src/pageTwo/showPlaceShip.js\");\nconst showBoard = __webpack_require__(/*! ./showBoard */ \"./src/pageTwo/showBoard.js\");\n\nfunction options(board) {\n\tshowOptions(board);\n}\n\nfunction placeShipButton(board) {\n\tshowPlaceShip(board);\n}\n\nfunction renderBoard(BOARD, length, direction) {\n\tshowBoard(BOARD, length, direction);\n}\n\nmodule.exports = { options, placeShipButton, renderBoard };\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageTwo/gameController.js?");

/***/ }),

/***/ "./src/pageTwo/showBoard.js":
/*!**********************************!*\
  !*** ./src/pageTwo/showBoard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ../Gameboard */ \"./src/Gameboard.js\");\nconst Player = (__webpack_require__(/*! ../Player */ \"./src/Player.js\").Player);\nconst ComputerPlayer = (__webpack_require__(/*! ../Player */ \"./src/Player.js\").ComputerPlayer);\nconst Ship = __webpack_require__(/*! ../Ship */ \"./src/Ship.js\");\n\nconst startGame = __webpack_require__(/*! ./startGame */ \"./src/pageTwo/startGame.js\");\n// const humanPlayer = new Player(nameInputValue);\n\nconst showBoard = (BOARD, length, direction) => {\n\tconst content = document.querySelector(\".content\");\n\tcontent.innerHTML = \"\";\n\n\tconst board = document.createElement(\"div\");\n\tboard.classList.add(\"board\");\n\tcontent.appendChild(board);\n\n\tfor (let i = 0; i < BOARD.size; i++) {\n\t\tfor (let j = 0; j < BOARD.size; j++) {\n\t\t\tif (BOARD.board[i][j] == null) {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\tboard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cell\");\n\n\t\t\t\tcell.addEventListener(\"click\", () => {\n\t\t\t\t\tconst ship = new Ship(length);\n\t\t\t\t\tif (ship.length) {\n\t\t\t\t\t\tif (BOARD.placeShip(ship, j, i, direction)) {\n\t\t\t\t\t\t\tshowBoard(BOARD);\n\t\t\t\t\t\t\tconsole.log(BOARD);\n\t\t\t\t\t\t\tif (\n\t\t\t\t\t\t\t\tBOARD.ships.filter((obj) => obj.length == 2).length == 1 &&\n\t\t\t\t\t\t\t\tBOARD.ships.filter((obj) => obj.length == 3).length == 2 &&\n\t\t\t\t\t\t\t\tBOARD.ships.filter((obj) => obj.length == 4).length == 1 &&\n\t\t\t\t\t\t\t\tBOARD.ships.filter((obj) => obj.length == 5).length == 1\n\t\t\t\t\t\t\t) {\n\t\t\t\t\t\t\t\t// console.log(\"you are ready for war\");\n\t\t\t\t\t\t\t\tstartGame(BOARD);\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t(__webpack_require__(/*! ./gameController */ \"./src/pageTwo/gameController.js\").placeShipButton)(BOARD);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\talert(\n\t\t\t\t\t\t\t\t\"Ship are overlapping or out-of-bounds. \\nPlease place your ship again\"\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tshowBoard(BOARD, length, direction);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tconst cell = document.createElement(\"div\");\n\t\t\t\tboard.appendChild(cell);\n\t\t\t\tcell.classList.add(\"cellBoat\");\n\t\t\t}\n\t\t}\n\t}\n};\n\nmodule.exports = showBoard;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageTwo/showBoard.js?");

/***/ }),

/***/ "./src/pageTwo/showHello.js":
/*!**********************************!*\
  !*** ./src/pageTwo/showHello.js ***!
  \**********************************/
/***/ ((module) => {

eval("const showHello = (name) => {\n\tconst header = document.querySelector(\".header\");\n\tconst hello = document.createElement(\"p\");\n\thello.textContent = `Hello ${name},  place your ships in the grid below by clicking`;\n\thello.classList.add(\"hello\");\n\n\theader.appendChild(hello);\n};\n\nmodule.exports = showHello;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageTwo/showHello.js?");

/***/ }),

/***/ "./src/pageTwo/showOptions.js":
/*!************************************!*\
  !*** ./src/pageTwo/showOptions.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ../Gameboard */ \"./src/Gameboard.js\");\nconst Player = (__webpack_require__(/*! ../Player */ \"./src/Player.js\").Player);\nconst ComputerPlayer = (__webpack_require__(/*! ../Player */ \"./src/Player.js\").ComputerPlayer);\nconst Ship = __webpack_require__(/*! ../Ship */ \"./src/Ship.js\");\n\nconst showOptions = (board) => {\n\tconst container = document.querySelector(\".container\");\n\n\tconst selectDialog = document.createElement(\"dialog\");\n\tselectDialog.classList.add(\"selectDialog\");\n\n\tcontainer.appendChild(selectDialog);\n\n\t// question\n\n\tconst question = document.createElement(\"div\");\n\tquestion.textContent = \"Choose your ship:\";\n\n\tselectDialog.appendChild(question);\n\n\t// length\n\n\tconst lengthDiv = document.createElement(\"div\");\n\tlengthDiv.classList.add(\"selectContainer\");\n\n\tconst lengthLabel = document.createElement(\"label\");\n\tlengthLabel.textContent = \"Ship length: \";\n\tlengthLabel.htmlFor = \"lengthSelect\";\n\n\tconst lengthSelect = document.createElement(\"select\");\n\tlengthSelect.id = \"lengthSelect\";\n\n\tconst lengthTwoOption = document.createElement(\"option\");\n\tlengthTwoOption.textContent = \"2\";\n\n\tconst lengthThreeOption = document.createElement(\"option\");\n\tlengthThreeOption.textContent = \"3\";\n\n\tconst lengthFourOption = document.createElement(\"option\");\n\tlengthFourOption.textContent = \"4\";\n\n\tconst lengthFiveOption = document.createElement(\"option\");\n\tlengthFiveOption.textContent = \"5\";\n\n\tlengthSelect.appendChild(lengthTwoOption);\n\tlengthSelect.appendChild(lengthThreeOption);\n\tlengthSelect.appendChild(lengthFourOption);\n\tlengthSelect.appendChild(lengthFiveOption);\n\n\tlengthDiv.appendChild(lengthLabel);\n\tlengthDiv.appendChild(lengthSelect);\n\n\tselectDialog.appendChild(lengthDiv);\n\n\t//ship length check\n\n\tif (board.ships.filter((obj) => obj.length == 2).length == 1) {\n\t\tlengthTwoOption.remove();\n\t}\n\n\tif (board.ships.filter((obj) => obj.length == 3).length == 2) {\n\t\tlengthThreeOption.remove();\n\t}\n\n\tif (board.ships.filter((obj) => obj.length == 4).length == 1) {\n\t\tlengthFourOption.remove();\n\t}\n\n\tif (board.ships.filter((obj) => obj.length == 5).length == 1) {\n\t\tlengthFiveOption.remove();\n\t}\n\n\t// direction\n\n\tconst directionDiv = document.createElement(\"div\");\n\tlengthDiv.classList.add(\"selectContainer\");\n\n\tconst directionLabel = document.createElement(\"label\");\n\tdirectionLabel.textContent = \"Direction: \";\n\tdirectionLabel.htmlFor = \"directionSelect\";\n\n\tconst directionSelect = document.createElement(\"select\");\n\tdirectionSelect.id = \"lengthSelect\";\n\n\tconst directionHorizontalOption = document.createElement(\"option\");\n\tdirectionHorizontalOption.textContent = \"Horizontal\";\n\n\tconst directionVerticalOption = document.createElement(\"option\");\n\tdirectionVerticalOption.textContent = \"Vertical\";\n\n\tdirectionSelect.appendChild(directionHorizontalOption);\n\tdirectionSelect.appendChild(directionVerticalOption);\n\n\tdirectionDiv.appendChild(directionLabel);\n\tdirectionDiv.appendChild(directionSelect);\n\n\tselectDialog.appendChild(directionDiv);\n\n\t//confirm\n\n\tconst confirmButton = document.createElement(\"button\");\n\tconfirmButton.textContent = \"Confirm\";\n\tselectDialog.appendChild(confirmButton);\n\n\tconfirmButton.addEventListener(\"click\", () => {\n\t\tselectDialog.close();\n\t\tconst length = lengthSelect.value;\n\t\tconst direction = directionSelect.value;\n\t\tconsole.log(length, direction);\n\t\t(__webpack_require__(/*! ./gameController */ \"./src/pageTwo/gameController.js\").renderBoard)(board, length, direction);\n\t});\n\n\tselectDialog.addEventListener(\"keydown\", (event) => {\n\t\tif (event.key == \"Enter\") {\n\t\t\tselectDialog.close();\n\t\t\tconst length = lengthSelect.value;\n\t\t\tconst direction = directionSelect.value;\n\t\t\tconsole.log(length, direction);\n\t\t\t(__webpack_require__(/*! ./gameController */ \"./src/pageTwo/gameController.js\").renderBoard)(board, length, direction);\n\t\t}\n\t});\n\n\t// show dialog\n\n\tselectDialog.showModal();\n};\n\nmodule.exports = showOptions;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageTwo/showOptions.js?");

/***/ }),

/***/ "./src/pageTwo/showPageTwo.js":
/*!************************************!*\
  !*** ./src/pageTwo/showPageTwo.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ../Gameboard */ \"./src/Gameboard.js\");\nconst Player = (__webpack_require__(/*! ../Player */ \"./src/Player.js\").Player);\nconst ComputerPlayer = (__webpack_require__(/*! ../Player */ \"./src/Player.js\").ComputerPlayer);\nconst Ship = __webpack_require__(/*! ../Ship */ \"./src/Ship.js\");\n\nconst showHello = __webpack_require__(/*! ./showHello */ \"./src/pageTwo/showHello.js\");\nconst showBoard = __webpack_require__(/*! ./showBoard */ \"./src/pageTwo/showBoard.js\");\nconst showPlaceShip = __webpack_require__(/*! ./showPlaceShip */ \"./src/pageTwo/showPlaceShip.js\");\n\nconst humanPlayerBoard = new Gameboard();\n\nconst showPageTwo = (nameInputValue) => {\n\tconst header = document.querySelector(\".header\");\n\theader.innerHTML = \"\";\n\n\tshowHello(nameInputValue);\n\tshowBoard(humanPlayerBoard);\n\tshowPlaceShip(humanPlayerBoard);\n};\n\nmodule.exports = showPageTwo;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageTwo/showPageTwo.js?");

/***/ }),

/***/ "./src/pageTwo/showPlaceShip.js":
/*!**************************************!*\
  !*** ./src/pageTwo/showPlaceShip.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// const controllers = ;\n\nconst showPlaceShip = (board) => {\n\tconst content = document.querySelector(\".content\");\n\n\tconst placeShipButton = document.createElement(\"button\");\n\tplaceShipButton.textContent = \"Place ship\";\n\tcontent.appendChild(placeShipButton);\n\n\tplaceShipButton.addEventListener(\"click\", () => {\n\t\t(__webpack_require__(/*! ./gameController */ \"./src/pageTwo/gameController.js\").options)(board);\n\t});\n};\n\nmodule.exports = showPlaceShip;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageTwo/showPlaceShip.js?");

/***/ }),

/***/ "./src/pageTwo/startGame.js":
/*!**********************************!*\
  !*** ./src/pageTwo/startGame.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const showPageThree = __webpack_require__(/*! ../pageThree/showPageThree */ \"./src/pageThree/showPageThree.js\");\n\nconst startGame = (humanPlayerBoard) => {\n\tconst content = document.querySelector(\".content\");\n\n\tconst startGameDiv = document.createElement(\"div\");\n\tstartGameDiv.classList.add(\"startGameDiv\");\n\tconst readyForWar = document.createElement(\"p\");\n\tconst startGameButton = document.createElement(\"button\");\n\tstartGameButton.classList.add(\"startGameButton\");\n\n\tcontent.appendChild(startGameDiv);\n\tstartGameDiv.appendChild(readyForWar);\n\tstartGameDiv.appendChild(startGameButton);\n\n\treadyForWar.textContent = \"You are ready for war...\";\n\treadyForWar.style.fontSize = \"50px\";\n\tstartGameButton.textContent = \"Start game\";\n\n\tstartGameButton.addEventListener(\"click\", () => {\n\t\tshowPageThree(humanPlayerBoard);\n\t});\n};\n\nmodule.exports = startGame;\n\n\n//# sourceURL=webpack://project-battleship-top/./src/pageTwo/startGame.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-battleship-top/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;