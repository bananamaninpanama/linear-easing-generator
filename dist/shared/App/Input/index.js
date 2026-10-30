'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var signals = require('@preact/signals');
var preact = require('preact');
var hooks = require('preact/hooks');
var index$1 = require('../Editor/index.js');
var styles_module = require('../styles.module.css.js');
var demos = require('../demos.js');
var index = require('../Select/index.js');
var utils = require('../utils.js');

function useCachedFormatCodes(code, codeType) {
    const lastJSCode = hooks.useRef(demos.defaultJS.code);
    const lastSVGCode = hooks.useRef(demos.defaultSVG.code);
    signals.useSignalEffect(() => {
        if (codeType.value === 0 /* CodeType.JS */) {
            lastJSCode.current = code.value;
        }
        else {
            lastSVGCode.current = code.value;
        }
    });
    return { [0 /* CodeType.JS */]: lastJSCode, [1 /* CodeType.SVG */]: lastSVGCode };
}
const Input = ({ code, codeType, error, onChange, }) => {
    const editorHighlight = signals.useComputed(() => codeType.value == 0 /* CodeType.JS */ ? 0 /* CodeHighlight.JS */ : 1 /* CodeHighlight.SVG */);
    const codeTypeString = signals.useComputed(() => String(codeType.value));
    const lastCodes = useCachedFormatCodes(code, codeType);
    function onSelectChange(newVal) {
        const newValNum = Number(newVal);
        onChange(lastCodes[newValNum].current, newValNum);
    }
    return (preact.h(preact.Fragment, null,
        preact.h("div", { class: styles_module.sectionHeader },
            preact.h("div", { class: styles_module.sectionHeaderTitle },
                preact.h("h2", null, "Input"),
                preact.h("p", null, "Provide easing as JavaScript or SVG")),
            preact.h("label", { class: styles_module.selectLabel, style: utils.hideFromPrerender },
                preact.h("span", { class: styles_module.labelTextEnd }, "Format"),
                preact.h(index.default, { value: codeTypeString, onChange: onSelectChange },
                    preact.h("option", { value: 0 /* CodeType.JS */ }, "JS"),
                    preact.h("option", { value: 1 /* CodeType.SVG */ }, "SVG")))),
        preact.h(index$1.default, { error: error, code: code, onInput: (val) => onChange(val, codeType.value), language: editorHighlight })));
};

exports.default = Input;
