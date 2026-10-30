import { h } from 'preact';
import 'add-css:./styles.module.css';
import * as styles from './styles.module.css';
import * as sharedStyles from '../styles.module.css';
import Range from '../Range';
import { hideFromPrerender } from '../utils';
const Optim = ({ round, simplify, onInput, }) => {
    return (h("form", { class: styles.form },
        h("label", { style: hideFromPrerender },
            h("span", { class: sharedStyles.labelText }, "Simplify"),
            h(Range, { min: 0.00001, max: 0.025, step: "any", onInput: (newVal) => onInput(newVal, round.value), value: simplify })),
        h("label", { style: hideFromPrerender },
            h("span", { class: sharedStyles.labelText }, "Round"),
            h(Range, { min: 2, max: 5, step: 1, onInput: (newVal) => onInput(simplify.value, newVal), value: round }))));
};
export { Optim as default };
