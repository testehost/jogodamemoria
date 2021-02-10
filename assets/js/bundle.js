/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/components/distribuirCartas.js":
/*!******************************************************!*\
  !*** ./src/assets/js/components/distribuirCartas.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ distribuirCartas)
/* harmony export */ });
/* harmony import */ var _tabuleiro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabuleiro */ "./src/assets/js/components/tabuleiro.js");

var facilContainer = document.querySelector('.cardsWrapper-facil');
var normalContainer = document.querySelector('.cardsWrapper-normal');
var dificilContainer = document.querySelector('.cardsWrapper-dificil');
var nivelFacil = new _tabuleiro__WEBPACK_IMPORTED_MODULE_0__.default(2, facilContainer);
var nivelNormal = new _tabuleiro__WEBPACK_IMPORTED_MODULE_0__.default(4, normalContainer);
var nivelDificil = new _tabuleiro__WEBPACK_IMPORTED_MODULE_0__.default(8, dificilContainer);
function distribuirCartas() {
  nivelFacil.criarTabuleiro(facilContainer);
  nivelNormal.criarTabuleiro(normalContainer);
  nivelDificil.criarTabuleiro(dificilContainer);
}

/***/ }),

/***/ "./src/assets/js/components/emojis.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/emojis.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ emojis)
/* harmony export */ });
var emojis = ["⏰", "⚡", "⚽", "⛄", "⭐", "🌚", "🌞", "🌟", "🌵", "🌸", "🌼", "🍉", "🍍", "🍌", "🍒", "🍞", "🍦", "🍬", "🍫", "🍼",, "🎃", "🎅", "🎈", "🎉", "🎒", "🎹", "🏀", "🏐", "🏠", "🐁", "🐈", "🐒", "🐊", "🐖", "🐛", "🐜", "🐝", "🐧", "🐷", "🐸", "🐻", "🐿", "👻", "💚", "💙", "💜", "🔥", "😀", "😎", "🚀", "🚗", "🚲", "🤖", "🥕", "🥦", "🦁", "🦋", "🧙", "🦖", "🦄"];


/***/ }),

/***/ "./src/assets/js/components/escolheDificuldade.js":
/*!********************************************************!*\
  !*** ./src/assets/js/components/escolheDificuldade.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EscolherDificuldade)
/* harmony export */ });
/* harmony import */ var _previewCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./previewCards */ "./src/assets/js/components/previewCards.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ "./src/assets/js/components/slider.js");


function EscolherDificuldade() {
  document.querySelector('.telaInicial').addEventListener('click', function (e) {
    if (e.target.classList.contains('facilBtn')) {
      (0,_slider__WEBPACK_IMPORTED_MODULE_1__.default)(1);
      (0,_previewCards__WEBPACK_IMPORTED_MODULE_0__.default)(400, 700);
    }

    ;

    if (e.target.classList.contains('normalBtn')) {
      (0,_slider__WEBPACK_IMPORTED_MODULE_1__.default)(2);
      (0,_previewCards__WEBPACK_IMPORTED_MODULE_0__.default)(2000, 500);
    }

    ;

    if (e.target.classList.contains('dificilBtn')) {
      (0,_slider__WEBPACK_IMPORTED_MODULE_1__.default)(3);
      (0,_previewCards__WEBPACK_IMPORTED_MODULE_0__.default)(5000, 400);
    }

    ;
  }, false);
}

/***/ }),

/***/ "./src/assets/js/components/play.js":
/*!******************************************!*\
  !*** ./src/assets/js/components/play.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ play)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/assets/js/components/slider.js");
/* harmony import */ var _distribuirCartas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distribuirCartas */ "./src/assets/js/components/distribuirCartas.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function play() {
  var contadora = 0;
  var acertos = 0;
  var comparador = [];
  document.querySelector('.gameArea').addEventListener('click', function (e) {
    if (e.target.classList.contains('reiniciarBtn')) {
      restartGame();
    }

    ;

    if (e.target.classList.contains('card')) {
      contadora += 1;
      var placar = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
      var verso = e.target.firstElementChild.firstElementChild;
      var frente = e.target.firstElementChild.lastElementChild;
      virarCarta(verso, '0deg', '180deg');
      virarCarta(frente, '180deg', '0deg');
      e.target.style.pointerEvents = 'none';
      comparador.push([e.target.firstElementChild.lastElementChild.firstElementChild.textContent, e.target.firstElementChild.lastElementChild]);

      if (comparador.length === 2) {
        if (comparador[0][0] === comparador[1][0]) {
          comparaCor('var(--green');
          comparador[0][1].parentElement.parentElement.style.pointerEvents = 'none';
          comparador[1][1].parentElement.parentElement.style.pointerEvents = 'none';
          acertos += 1;
          verificaVencedor(e.target.parentElement.childElementCount);
        } else {
          comparaCor('var(--red');
          setTimeout(function () {
            var cartasRetornadas = [comparador[0][1].parentElement.firstElementChild, comparador[0][1], comparador[1][1].parentElement.firstElementChild, comparador[1][1]];
            comparador[0][1].parentElement.parentElement.style.pointerEvents = 'all';
            comparador[1][1].parentElement.parentElement.style.pointerEvents = 'all';
            virarCarta(cartasRetornadas[0], '180deg', '0deg');
            virarCarta(cartasRetornadas[1], '0deg', '180deg');
            virarCarta(cartasRetornadas[2], '180deg', '0deg');
            virarCarta(cartasRetornadas[3], '0deg', '180deg');
            comparaCor('var(--blue');
          }, 550);
        }
      } else if (comparador.length === 3) {
        comparador.splice(0, 2);
      }

      preenchePlacar(contadora, placar);
    }

    ;

    function comparaCor(cor) {
      setTimeout(function () {
        comparador[0][1].style.backgroundColor = cor;
        comparador[1][1].style.backgroundColor = cor;
      }, 400);
    }

    function verificaVencedor(tabuleiro) {
      if (acertos === tabuleiro / 2) venceuJogo(contadora);
    }

    function venceuJogo() {
      document.querySelector('.telaFinal').classList.add('telaFinalVisivel');
      document.querySelector('.placarFinal').textContent = "Com ".concat(contadora, " movimentos");
    }
  }, false);

  function restartGame() {
    contadora = 0;
    acertos = 0;

    var cards = _toConsumableArray(document.querySelectorAll('.card'));

    document.querySelector('.telaFinal').classList.remove('telaFinalVisivel');

    _toConsumableArray(document.querySelectorAll('.placar')).forEach(function (placar) {
      return preenchePlacar(0, placar);
    });

    cards.forEach(function (card) {
      var verso = card.firstElementChild.firstElementChild;
      var frente = card.firstElementChild.lastElementChild;
      virarCarta(verso, '0deg', '180deg');
      virarCarta(frente, '180deg', '0deg');
    });
    setTimeout(function () {
      cards.map(function (card) {
        return card.remove();
      });
      (0,_distribuirCartas__WEBPACK_IMPORTED_MODULE_1__.default)();
      cards.forEach(function (el) {
        el.style.pointerEvents = 'all';
      });
    }, 600);
    _slider__WEBPACK_IMPORTED_MODULE_0__.telas.forEach(function (el, index) {
      el.style.transform = "translateX(0)";

      if (index >= 1) {
        fadeOut(el.firstElementChild, 50);
        fadeOut(el.firstElementChild.nextElementSibling, 90);
        fadeOut(el.firstElementChild.nextElementSibling.nextElementSibling, 40);
      }
    });

    function fadeOut(element, atraso) {
      element.animate([{
        opacity: 1
      }, {
        opacity: 0
      }], {
        fill: 'both',
        easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
        duration: 100,
        delay: atraso
      });
    }

    ;
  }

  function preenchePlacar(num, local) {
    var text = '';

    switch (num) {
      case num === 1:
        text = 'movimento';

      default:
        text = 'movimentos';
    }

    local.textContent = num + ' ' + text;
  }

  function virarCarta(card, angle1, angle2) {
    card.animate([{
      transform: "rotateY(".concat(angle1, ")")
    }, {
      transform: "rotateY(".concat(angle2, ")")
    }], {
      fill: 'both',
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      duration: 500
    });
  }

  ;
  document.querySelector('.voltarBtn ').addEventListener('click', restartGame);
}

/***/ }),

/***/ "./src/assets/js/components/previewCards.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/previewCards.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PreviewCards)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PreviewCards(tempo, atraso) {
  var cards = _toConsumableArray(document.querySelectorAll('.card'));

  cards.forEach(function (card) {
    var verso = card.firstElementChild.firstElementChild;
    var frente = card.firstElementChild.lastElementChild;
    cardFlip(verso, '0deg', '180deg');
    cardFlip(frente, '180deg', '0deg');
    card.getAnimations().forEach(function (animation) {
      return animation.finish();
    });
  });

  function cardFlip(card, angle1, angle2) {
    card.animate([{
      transform: "rotateY(".concat(angle1, ")"),
      offset: 0
    }, {
      transform: "rotateY(".concat(angle2, ")"),
      offset: 0.03
    }, {
      transform: "rotateY(".concat(angle2, ")"),
      offset: 0.95
    }, {
      transform: "rotateY(".concat(angle1, ")"),
      offset: 1.0
    }], {
      fill: 'both',
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      duration: tempo,
      delay: atraso
    });
  }

  ;
}

/***/ }),

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider),
/* harmony export */   "telas": () => (/* binding */ telas)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var telas = _toConsumableArray(document.querySelectorAll('.areaJogo'));

function Slider(unit) {
  telas.forEach(function (el, index) {
    el.style.transform = "translateX(-".concat(unit, "00%)");

    if (index >= 1) {
      fadeIn(el.firstElementChild, 400);
      fadeIn(el.firstElementChild.nextElementSibling, 300);
      fadeIn(el.firstElementChild.nextElementSibling.nextElementSibling, 500);
    }
  });

  function fadeIn(element, atraso) {
    element.animate([{
      transform: 'translateX(80px)',
      opacity: 0
    }, {
      transform: 'translateX(0)',
      opacity: 1
    }], {
      fill: 'both',
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      duration: 400,
      delay: atraso
    });
  }

  ;
}


/***/ }),

/***/ "./src/assets/js/components/tabuleiro.js":
/*!***********************************************!*\
  !*** ./src/assets/js/components/tabuleiro.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tabuleiro)
/* harmony export */ });
/* harmony import */ var _emojis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emojis */ "./src/assets/js/components/emojis.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Tabuleiro = /*#__PURE__*/function () {
  function Tabuleiro(quant, cont) {
    _classCallCheck(this, Tabuleiro);

    this.quant = quant;
    this.cont = cont;
  }

  _createClass(Tabuleiro, [{
    key: "randomizar",
    value: function randomizar() {
      var randArr = _toConsumableArray(new Set(_emojis__WEBPACK_IMPORTED_MODULE_0__.default.sort(function () {
        return Math.random() - 0.5;
      })));

      return randArr.slice(0, this.quant).map(function (el) {
        return [el, el];
      }).flat().sort(function () {
        return Math.random() - 0.5;
      });
    }
  }, {
    key: "criarCard",
    value: function criarCard(card) {
      var div1 = document.createElement('div');
      div1.className = 'card';
      var div2 = document.createElement('div');
      div2.className = 'cardSides';
      var back = document.createElement('div');
      back.className = 'back';
      var front = document.createElement('div');
      var emojiWrapper = document.createElement('div');
      emojiWrapper.textContent = card;
      front.appendChild(emojiWrapper);
      front.className = 'front';
      div2.appendChild(back);
      div2.appendChild(front);
      div1.appendChild(div2);
      this.cont.appendChild(div1);
    }
  }, {
    key: "criarTabuleiro",
    value: function criarTabuleiro(container) {
      var grade = this.randomizar();

      var _iterator = _createForOfIteratorHelper(grade),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;
          var ell = this.criarCard(el);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return Tabuleiro;
}();



/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _components_distribuirCartas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/distribuirCartas */ "./src/assets/js/components/distribuirCartas.js");
/* harmony import */ var _components_escolheDificuldade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/escolheDificuldade */ "./src/assets/js/components/escolheDificuldade.js");
/* harmony import */ var _components_play__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/play */ "./src/assets/js/components/play.js");




(0,_components_distribuirCartas__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_components_escolheDificuldade__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_components_play__WEBPACK_IMPORTED_MODULE_3__.default)();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/style.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --shadow: 0 1px 4px rgba(0,0,0,.25);\r\n    --gradient: linear-gradient(-45deg, #ff1c1c, #ff5656);\r\n    --c1: #fff;\r\n    --c2: #000;\r\n    --green: #00b335;\r\n    --red: #ff424e;\r\n    --dark: #333333;\r\n    --blue: #00b1f4;\r\n    --hover: #efefef;\r\n    --cinza: #d8d8d8;\r\n}\r\n\r\nbody, html {\r\nmargin: 0;\r\npadding: 0;\r\noutline: none;\r\n}\r\n\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    background: transparent;\r\n}\r\n\r\n\r\nspan {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 400;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    display: block;\r\n}\r\n\r\ndiv {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n}\r\n\r\n\r\nspan {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n#main {\r\n    background-image: var(--gradient);\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.wrapper {\r\n    flex-direction: column;\r\n    width: 100vw;\r\n    max-height: 600px;\r\n}\r\n\r\n\r\n.telaInicial {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: calc(100% - 43px);\r\n}\r\n\r\n.telaInicial button,\r\n.voltarBtn {\r\n    background-color: var(--c1);\r\n    padding: 18px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 15px 0;\r\n    max-width: 300px;\r\n    width: 100%;\r\n    border-radius: 7px;\r\n    box-shadow: 4px 4px 0 rgba(0,0,0,.6);\r\n    transition: .2s ease all;\r\n    font-size: 20px;\r\n    line-height: 1;\r\n}\r\n\r\n.telaInicial button:hover,\r\n.voltarBtn:hover {\r\n    transform: translate(4px, 4px);\r\n    box-shadow: 0px 0px 0 rgba(0,0,0,.6);\r\n    background-color: var(--hover);\r\n}\r\n\r\n\r\n.telaInicial button span {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-left: 5px;\r\n    pointer-events: none;\r\n}\r\n\r\n.voltarBtn {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: var(--dark);   \r\n}\r\n\r\n\r\n.facilBtn span {\r\n    color: var(--green);\r\n}\r\n\r\n.dificilBtn span {\r\n    color: var(--red);\r\n}\r\n\r\n.normalBtn span {\r\n    color: var(--dark);\r\n}\r\n\r\n\r\n.header * {\r\n    margin: 0 auto;\r\n    display: block;\r\n    position: relative;\r\n}\r\n\r\n\r\n.gameArea {\r\n    margin-top: 40px;\r\n    flex-grow: 1;\r\n    grid-template-columns: repeat(4, 100%);\r\n    overflow: hidden;\r\n    align-items: start;\r\n}\r\n\r\n\r\n.headerTelaJogo {\r\n    flex-grow: 1;\r\n    width: 100%;\r\n    max-width: 300px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.placar {\r\n    font-size: 20px;\r\n    color: var(--c1);\r\n    font-weight: 600;\r\n}\r\n\r\n.headerTelaJogo button {\r\n    font-size: 37px;\r\n}\r\n\r\n.areaJogo {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);\r\n}\r\n\r\n\r\n\r\n.cardsWrapper {\r\n    padding: 20px;\r\n    background-color: var(--c1);\r\n    border-radius: 7px;\r\n    box-shadow: 4px 4px 0 rgba(0,0,0,.6);\r\n    transition: .2s ease all;\r\n    font-size: 20px;\r\n    line-height: 1;\r\n}\r\n\r\n\r\n.areaJogoFacil .card {\r\n    width: 120px;\r\n    height: 120px;\r\n}\r\n.areaJogoNormal .card {\r\n    width: 90px;\r\n    height: 90px;\r\n}\r\n.areaJogoDificil .card {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n\r\n.cardsWrapper {\r\n    grid-gap: 20px;\r\n}\r\n\r\n.areaJogoFacil .cardsWrapper {\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.areaJogoNormal .cardsWrapper {\r\n    grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.areaJogoDificil .cardsWrapper {\r\n    grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.cardSides {\r\n    border-radius: 5px;\r\n    pointer-events: none;\r\n    transform-style: preserve-3d;\r\n    perspective: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.cardsWrapper-facil .front div {\r\n    font-size: 2.3em;\r\n}\r\n\r\n\r\n.card {\r\n    display: inline-block;\r\n    perspective: 1000px;\r\n    cursor: pointer;\r\n    pointer-events: all;\r\n    transition: .5s ease all;\r\n}  \r\n\r\n\r\n.front, .back {\r\n    position: absolute;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transition: .3s ease-in transform;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    display: block;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.front {\r\n    background: var(--blue);\r\n    transform: rotateY(180deg);\r\n    font-size: 1.2em;\r\n}\r\n\r\n.front div {\r\n    position: absolute;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 1.5em;\r\n}\r\n\r\n.back {\r\n    background: linear-gradient(135deg, #eceddc 25%, transparent 25%),\r\n    linear-gradient(225deg, #eceddc 25%, transparent 25%),\r\n    linear-gradient(315deg, #eceddc 25%, transparent 25%),\r\n    linear-gradient(45deg, #eceddc 25%, transparent 25%); \r\n    background-size: 30px 30px;\r\n    background-color: var(--cinza);\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.footerTelaJogo {\r\n    margin-top: 40px;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.footerTelaJogo span {\r\n    font-size: 20px;\r\n    color: var(--c1);\r\n}\r\n\r\n.footerTelaJogo span:last-child {\r\n    background-color: var(--c1);\r\n    margin-left: 5px;\r\n    border-radius: 4px;\r\n    padding: 4px 8px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.areaJogoFacil .footerTelaJogo span:last-child {\r\n    color: var(--green);\r\n}\r\n\r\n.areaJogoNormal .footerTelaJogo span:last-child {\r\n    color: var(--dark);\r\n}\r\n\r\n.areaJogoDificil .footerTelaJogo span:last-child {\r\n    color: var(--red);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.telaFinal {\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-image: var(--gradient);\r\n    top: 110%;\r\n    left: 0;\r\n    transition: all 1s cubic-bezier(0.76, 0, 0.24, 1);\r\n    transition-delay: 0.3s;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.telaFinalVisivel {\r\n    top: 0;\r\n}\r\n\r\n\r\n.contentTelaFinal {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.contentTelaFinal span:nth-of-type(1) {\r\n    font-size: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contentTelaFinal span:nth-of-type(2) {\r\n    font-size: 25px;\r\n    margin-bottom: 10px;\r\n    font-weight: 600;\r\n    color: var(--c1);\r\n}\r\n\r\n\r\n.contentTelaFinal span:nth-of-type(3) {\r\n    font-size: 16px;\r\n    margin-bottom: 10px;\r\n    font-weight: 400;\r\n    color: var(--c1);\r\n}\r\n\r\n.contentTelaFinal img {\r\n    margin-top: 60px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width: 320px) and (max-width: 499px) {\r\n    .gameArea {\r\n        margin-top: 15px;\r\n    }\r\n    .telaInicial button, .voltarBtn {\r\n        margin: 6px 0;\r\n    }\r\n    .footerTelaJogo {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .areaJogoDificil .card {\r\n        width: 46px;\r\n        height: 46px;\r\n    }\r\n\r\n    .areaJogoNormal .card {\r\n        width: 69px;\r\n        height: 69px;\r\n    }\r\n\r\n    .areaJogoFacil .card {\r\n        width: 92px;\r\n        height: 92px;\r\n    }\r\n\r\n    .back {\r\n        background-size: 23px 23px;\r\n    }\r\n\r\n    .contentTelaFinal img {\r\n        margin-top: 30px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --shadow: 0 1px 4px rgba(0,0,0,.25);\r\n    --gradient: linear-gradient(-45deg, #ff1c1c, #ff5656);\r\n    --c1: #fff;\r\n    --c2: #000;\r\n    --green: #00b335;\r\n    --red: #ff424e;\r\n    --dark: #333333;\r\n    --blue: #00b1f4;\r\n    --hover: #efefef;\r\n    --cinza: #d8d8d8;\r\n}\r\n\r\nbody, html {\r\nmargin: 0;\r\npadding: 0;\r\noutline: none;\r\n}\r\n\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    background: transparent;\r\n}\r\n\r\n\r\nspan {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 400;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    display: block;\r\n}\r\n\r\ndiv {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n}\r\n\r\n\r\nspan {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    display: block;\r\n}\r\n\r\n\r\n\r\n#main {\r\n    background-image: var(--gradient);\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.wrapper {\r\n    flex-direction: column;\r\n    width: 100vw;\r\n    max-height: 600px;\r\n}\r\n\r\n\r\n.telaInicial {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: calc(100% - 43px);\r\n}\r\n\r\n.telaInicial button,\r\n.voltarBtn {\r\n    background-color: var(--c1);\r\n    padding: 18px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 15px 0;\r\n    max-width: 300px;\r\n    width: 100%;\r\n    border-radius: 7px;\r\n    box-shadow: 4px 4px 0 rgba(0,0,0,.6);\r\n    transition: .2s ease all;\r\n    font-size: 20px;\r\n    line-height: 1;\r\n}\r\n\r\n.telaInicial button:hover,\r\n.voltarBtn:hover {\r\n    transform: translate(4px, 4px);\r\n    box-shadow: 0px 0px 0 rgba(0,0,0,.6);\r\n    background-color: var(--hover);\r\n}\r\n\r\n\r\n.telaInicial button span {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-left: 5px;\r\n    pointer-events: none;\r\n}\r\n\r\n.voltarBtn {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    color: var(--dark);   \r\n}\r\n\r\n\r\n.facilBtn span {\r\n    color: var(--green);\r\n}\r\n\r\n.dificilBtn span {\r\n    color: var(--red);\r\n}\r\n\r\n.normalBtn span {\r\n    color: var(--dark);\r\n}\r\n\r\n\r\n.header * {\r\n    margin: 0 auto;\r\n    display: block;\r\n    position: relative;\r\n}\r\n\r\n\r\n.gameArea {\r\n    margin-top: 40px;\r\n    flex-grow: 1;\r\n    grid-template-columns: repeat(4, 100%);\r\n    overflow: hidden;\r\n    align-items: start;\r\n}\r\n\r\n\r\n.headerTelaJogo {\r\n    flex-grow: 1;\r\n    width: 100%;\r\n    max-width: 300px;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.placar {\r\n    font-size: 20px;\r\n    color: var(--c1);\r\n    font-weight: 600;\r\n}\r\n\r\n.headerTelaJogo button {\r\n    font-size: 37px;\r\n}\r\n\r\n.areaJogo {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1);\r\n}\r\n\r\n\r\n\r\n.cardsWrapper {\r\n    padding: 20px;\r\n    background-color: var(--c1);\r\n    border-radius: 7px;\r\n    box-shadow: 4px 4px 0 rgba(0,0,0,.6);\r\n    transition: .2s ease all;\r\n    font-size: 20px;\r\n    line-height: 1;\r\n}\r\n\r\n\r\n.areaJogoFacil .card {\r\n    width: 120px;\r\n    height: 120px;\r\n}\r\n.areaJogoNormal .card {\r\n    width: 90px;\r\n    height: 90px;\r\n}\r\n.areaJogoDificil .card {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n\r\n.cardsWrapper {\r\n    grid-gap: 20px;\r\n}\r\n\r\n.areaJogoFacil .cardsWrapper {\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.areaJogoNormal .cardsWrapper {\r\n    grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.areaJogoDificil .cardsWrapper {\r\n    grid-template-columns: repeat(4, 1fr);\r\n}\r\n\r\n.cardSides {\r\n    border-radius: 5px;\r\n    pointer-events: none;\r\n    transform-style: preserve-3d;\r\n    perspective: 1000;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n.cardsWrapper-facil .front div {\r\n    font-size: 2.3em;\r\n}\r\n\r\n\r\n.card {\r\n    display: inline-block;\r\n    perspective: 1000px;\r\n    cursor: pointer;\r\n    pointer-events: all;\r\n    transition: .5s ease all;\r\n}  \r\n\r\n\r\n.front, .back {\r\n    position: absolute;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transition: .3s ease-in transform;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n    display: block;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.front {\r\n    background: var(--blue);\r\n    transform: rotateY(180deg);\r\n    font-size: 1.2em;\r\n}\r\n\r\n.front div {\r\n    position: absolute;\r\n    display: block;\r\n    box-sizing: border-box;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 1.5em;\r\n}\r\n\r\n.back {\r\n    background: linear-gradient(135deg, #eceddc 25%, transparent 25%),\r\n    linear-gradient(225deg, #eceddc 25%, transparent 25%),\r\n    linear-gradient(315deg, #eceddc 25%, transparent 25%),\r\n    linear-gradient(45deg, #eceddc 25%, transparent 25%); \r\n    background-size: 30px 30px;\r\n    background-color: var(--cinza);\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.footerTelaJogo {\r\n    margin-top: 40px;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.footerTelaJogo span {\r\n    font-size: 20px;\r\n    color: var(--c1);\r\n}\r\n\r\n.footerTelaJogo span:last-child {\r\n    background-color: var(--c1);\r\n    margin-left: 5px;\r\n    border-radius: 4px;\r\n    padding: 4px 8px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.areaJogoFacil .footerTelaJogo span:last-child {\r\n    color: var(--green);\r\n}\r\n\r\n.areaJogoNormal .footerTelaJogo span:last-child {\r\n    color: var(--dark);\r\n}\r\n\r\n.areaJogoDificil .footerTelaJogo span:last-child {\r\n    color: var(--red);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.telaFinal {\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-image: var(--gradient);\r\n    top: 110%;\r\n    left: 0;\r\n    transition: all 1s cubic-bezier(0.76, 0, 0.24, 1);\r\n    transition-delay: 0.3s;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.telaFinalVisivel {\r\n    top: 0;\r\n}\r\n\r\n\r\n.contentTelaFinal {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.contentTelaFinal span:nth-of-type(1) {\r\n    font-size: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contentTelaFinal span:nth-of-type(2) {\r\n    font-size: 25px;\r\n    margin-bottom: 10px;\r\n    font-weight: 600;\r\n    color: var(--c1);\r\n}\r\n\r\n\r\n.contentTelaFinal span:nth-of-type(3) {\r\n    font-size: 16px;\r\n    margin-bottom: 10px;\r\n    font-weight: 400;\r\n    color: var(--c1);\r\n}\r\n\r\n.contentTelaFinal img {\r\n    margin-top: 60px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (min-width: 320px) and (max-width: 499px) {\r\n    .gameArea {\r\n        margin-top: 15px;\r\n    }\r\n    .telaInicial button, .voltarBtn {\r\n        margin: 6px 0;\r\n    }\r\n    .footerTelaJogo {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .areaJogoDificil .card {\r\n        width: 46px;\r\n        height: 46px;\r\n    }\r\n\r\n    .areaJogoNormal .card {\r\n        width: 69px;\r\n        height: 69px;\r\n    }\r\n\r\n    .areaJogoFacil .card {\r\n        width: 92px;\r\n        height: 92px;\r\n    }\r\n\r\n    .back {\r\n        background-size: 23px 23px;\r\n    }\r\n\r\n    .contentTelaFinal img {\r\n        margin-top: 30px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/assets/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map