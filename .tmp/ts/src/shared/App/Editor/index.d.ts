import { FunctionComponent } from 'preact';
import { ReadonlySignal } from '@preact/signals';
import { CodeHighlight } from '../types';
import 'add-css:./styles.module.css';
interface Props {
    code: ReadonlySignal<string>;
    onInput?: (value: string) => void;
    error?: ReadonlySignal<string>;
    language: ReadonlySignal<CodeHighlight>;
    readOnly?: boolean;
}
declare const Editor: FunctionComponent<Props>;
export { Editor as default };
//# sourceMappingURL=index.d.ts.map