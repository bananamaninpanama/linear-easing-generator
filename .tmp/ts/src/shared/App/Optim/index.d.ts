import { Signal } from '@preact/signals';
import { FunctionComponent } from 'preact';
import 'add-css:./styles.module.css';
interface Props {
    simplify: Signal<number>;
    round: Signal<number>;
    onInput: (simplify: number, round: number) => void;
}
declare const Optim: FunctionComponent<Props>;
export { Optim as default };
//# sourceMappingURL=index.d.ts.map