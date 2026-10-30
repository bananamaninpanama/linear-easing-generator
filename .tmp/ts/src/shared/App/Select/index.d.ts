import { Signal } from '@preact/signals';
import { FunctionComponent } from 'preact';
import 'add-css:./styles.module.css';
interface Props {
    value: Signal<string>;
    displayedValue?: Signal<string>;
    onChange: (value: string) => void;
}
declare const Select: FunctionComponent<Props>;
export { Select as default };
//# sourceMappingURL=index.d.ts.map