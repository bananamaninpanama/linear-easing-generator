'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var signals = require('@preact/signals');
var preact = require('preact');
var hooks = require('preact/hooks');
var styles_module = require('./styles.module.css.js');

const Select = ({ value, onChange, children, displayedValue, }) => {
    const selectedOptionText = signals.useComputed(() => {
        if (displayedValue)
            return displayedValue.value;
        const childrenArray = (Array.isArray(children) ? children.flat() : [children]);
        const options = childrenArray.filter((child) => child &&
            typeof child === 'object' &&
            'type' in child &&
            child.type === 'option');
        const selectedOption = options.find((option) => String(option.props.value) === value.value);
        const selectedOptionText = selectedOption
            ? selectedOption.props.children
            : '';
        return selectedOptionText;
    });
    const selectEl = hooks.useRef(null);
    function onSelectChange() {
        const el = selectEl.current;
        const selectedOption = el.options[el.selectedIndex];
        onChange(selectedOption.value);
    }
    return (preact.h("div", { class: styles_module.select },
        preact.h("div", { class: styles_module.selectCurrent, "aria-hidden": "true" },
            preact.h("span", null, selectedOptionText),
            preact.h("svg", { viewBox: "0 0 8.65 3.02" },
                preact.h("path", { d: "M8.57.33 4.54 2.96a.42.42 0 0 1-.43 0L.08.33a.15.15 0 0 1 0-.27.43.43 0 0 1 .43 0l3.82 2.48L8.14.05a.43.43 0 0 1 .42 0 .15.15 0 0 1 0 .28Z" }))),
        preact.h("select", { class: styles_module.realSelect, ref: selectEl, value: value, onChange: onSelectChange }, children)));
};

exports.default = Select;
