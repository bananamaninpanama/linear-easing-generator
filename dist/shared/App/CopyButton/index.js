'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var preact = require('preact');
var styles_module = require('../styles.module.css.js');
var hooks = require('preact/hooks');
var utils = require('../utils.js');

const CopyButton = ({ value, }) => {
    const buttonRef = hooks.useRef(null);
    return (preact.h("button", { style: utils.hideFromPrerender, ref: buttonRef, class: styles_module.sectionHeaderIconButton, onClick: () => {
            navigator.clipboard.writeText(value.value);
            utils.animateFrom(buttonRef.current, { scale: 1.3 }, { duration: 200, easing: 'ease-out' });
        } },
        preact.h("span", { class: styles_module.sectionHeaderIconButtonText }, "Copy"),
        preact.h("svg", { viewBox: "0 96 960 960" },
            preact.h("path", { d: "M180 975q-24 0-42-18t-18-42V312h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42V235q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440V235H300v560Zm0 0V235v560Z" }))));
};

exports.default = CopyButton;
