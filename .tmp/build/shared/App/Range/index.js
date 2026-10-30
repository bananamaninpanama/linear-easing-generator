'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var signals = require('@preact/signals');
var preact = require('preact');
var styles_module = require('./styles.module.css.js');

const Range = ({ value, max, min, step, onInput, }) => {
    const fakeRangeStyle = signals.useComputed(() => `--pos: ${(value.value - min) / (max - min)}`);
    return (preact.h("div", { class: styles_module.rangeComponent },
        preact.h("div", { "aria-hidden": "true", class: styles_module.fakeRange, style: fakeRangeStyle },
            preact.h("div", { class: styles_module.activeLine }),
            preact.h("div", { class: styles_module.inactiveLine }),
            preact.h("div", { class: styles_module.track },
                preact.h("div", { class: styles_module.control }))),
        preact.h("input", { class: styles_module.rangeInput, type: "range", min: min, max: max, step: step, value: value, onInput: (event) => onInput(event.currentTarget.valueAsNumber) })));
};

exports.default = Range;
