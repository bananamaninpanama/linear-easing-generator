import { Signal } from '@preact/signals';
import { FunctionComponent } from 'preact';
import 'add-css:./styles.module.css';
interface Props {
    linear: Signal<string[]>;
    play: Signal<boolean>;
    slightlyOptimizedLinear: Signal<string[]>;
    duration: Signal<number>;
}
declare const Demos: FunctionComponent<Props>;
export { Demos as default };
//# sourceMappingURL=index.d.ts.map