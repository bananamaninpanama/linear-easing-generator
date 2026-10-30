import { Signal } from '@preact/signals';
import { FunctionComponent } from 'preact';
import 'add-css:./styles.module.css';
interface Props {
    value: Signal<number>;
    min: number;
    max: number;
    step: number | 'any';
    onInput: (value: number) => void;
}
declare const Range: FunctionComponent<Props>;
export { Range as default };
//# sourceMappingURL=index.d.ts.map