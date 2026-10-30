import { useComputed } from '@preact/signals';
import { h } from 'preact';
import 'add-css:./styles.module.css';
import * as styles from './styles.module.css';
const Range = ({ value, max, min, step, onInput, }) => {
    const fakeRangeStyle = useComputed(() => `--pos: ${(value.value - min) / (max - min)}`);
    return (h("div", { class: styles.rangeComponent },
        h("div", { "aria-hidden": "true", class: styles.fakeRange, style: fakeRangeStyle },
            h("div", { class: styles.activeLine }),
            h("div", { class: styles.inactiveLine }),
            h("div", { class: styles.track },
                h("div", { class: styles.control }))),
        h("input", { class: styles.rangeInput, type: "range", min: min, max: max, step: step, value: value, onInput: (event) => onInput(event.currentTarget.valueAsNumber) })));
};
export { Range as default };
