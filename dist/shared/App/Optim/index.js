'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var preact = require('preact');
var styles_module = require('./styles.module.css.js');
var styles_module$1 = require('../styles.module.css.js');
var index = require('../Range/index.js');
var utils = require('../utils.js');

const Optim = ({ round, simplify, onInput, }) => {
    return (preact.h("form", { class: styles_module.form },
        preact.h("label", { style: utils.hideFromPrerender },
            preact.h("span", { class: styles_module$1.labelText }, "Simplify"),
            preact.h(index.default, { min: 0.00001, max: 0.025, step: "any", onInput: (newVal) => onInput(newVal, round.value), value: simplify })),
        preact.h("label", { style: utils.hideFromPrerender },
            preact.h("span", { class: styles_module$1.labelText }, "Round"),
            preact.h(index.default, { min: 2, max: 5, step: 1, onInput: (newVal) => onInput(simplify.value, newVal), value: round }))));
};

exports.default = Optim;
