import { Signal } from '@preact/signals';
import { FunctionComponent } from 'preact';
import { CodeType } from '../types';
interface Props {
    code: Signal<string>;
    codeType: Signal<CodeType>;
    error: Signal<string>;
    onChange: (code: string, codeType: CodeType) => void;
}
declare const Input: FunctionComponent<Props>;
export { Input as default };
//# sourceMappingURL=index.d.ts.map