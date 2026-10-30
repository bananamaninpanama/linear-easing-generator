import { Signal } from '@preact/signals';
import { LinearData } from 'shared-types/index';
import { CodeType } from '../types';
export default function useFullPointGeneration(code: Signal<string>, type: Signal<CodeType>): [
    linearData: Signal<LinearData | null>,
    codeError: Signal<string>,
    name: Signal<string>,
    duration: Signal<number>
];
//# sourceMappingURL=index.d.ts.map