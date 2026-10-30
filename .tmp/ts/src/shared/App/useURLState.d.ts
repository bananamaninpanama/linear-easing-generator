import { ReadonlySignal } from '@preact/signals';
import { CodeType, State } from './types';
interface UseURLStateReturn {
    codeType: ReadonlySignal<CodeType>;
    code: ReadonlySignal<string>;
    simplify: ReadonlySignal<number>;
    round: ReadonlySignal<number>;
    update: (state: Partial<State>) => void;
}
export default function useURLState(): UseURLStateReturn;
export {};
//# sourceMappingURL=useURLState.d.ts.map