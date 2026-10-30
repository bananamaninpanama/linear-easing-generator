import { useComputed } from '@preact/signals';
import { h } from 'preact';
import { useRef } from 'preact/hooks';
import 'add-css:./styles.module.css';
import * as styles from './styles.module.css';
const Select = ({ value, onChange, children, displayedValue, }) => {
    const selectedOptionText = useComputed(() => {
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
    const selectEl = useRef(null);
    function onSelectChange() {
        const el = selectEl.current;
        const selectedOption = el.options[el.selectedIndex];
        onChange(selectedOption.value);
    }
    return (h("div", { class: styles.select },
        h("div", { class: styles.selectCurrent, "aria-hidden": "true" },
            h("span", null, selectedOptionText),
            h("svg", { viewBox: "0 0 8.65 3.02" },
                h("path", { d: "M8.57.33 4.54 2.96a.42.42 0 0 1-.43 0L.08.33a.15.15 0 0 1 0-.27.43.43 0 0 1 .43 0l3.82 2.48L8.14.05a.43.43 0 0 1 .42 0 .15.15 0 0 1 0 .28Z" }))),
        h("select", { class: styles.realSelect, ref: selectEl, value: value, onChange: onSelectChange }, children)));
};
export { Select as default };
