import { useSignal, useSignalEffect } from '@preact/signals';
import { useRef } from 'preact/hooks';
import { default as processEasing, ProcessScriptEasingError, } from './processEasing';
const processingDebounce = 300;
export default function useFullPointGeneration(code, type) {
    const fullPoints = useSignal(null);
    const codeError = useSignal('');
    const name = useSignal('');
    const duration = useSignal(0);
    const currentProcessingControllerRef = useRef(null);
    const processingTimeoutRef = useRef(0);
    const firstProcessRef = useRef(true);
    const lastCodeTypeRef = useRef(null);
    useSignalEffect(() => {
        const lastCodeType = lastCodeTypeRef.current;
        lastCodeTypeRef.current = type.value;
        const currentCode = code.value;
        currentProcessingControllerRef.current?.abort();
        clearTimeout(processingTimeoutRef.current);
        async function process() {
            firstProcessRef.current = false;
            currentProcessingControllerRef.current = new AbortController();
            try {
                const result = await processEasing(currentProcessingControllerRef.current.signal, currentCode, type.value);
                fullPoints.value = result.points;
                codeError.value = '';
                name.value = result.name;
                duration.value = result.duration || 0;
            }
            catch (error) {
                if (error.name === 'AbortError')
                    return;
                fullPoints.value = null;
                name.value = '';
                if (error instanceof ProcessScriptEasingError) {
                    let errorString = error.message;
                    if (error.fileName &&
                        error.fileName.startsWith('data:') &&
                        error.lineNumber &&
                        error.columnNumber) {
                        errorString += ` at line ${error.lineNumber}, column ${error.columnNumber}`;
                    }
                    codeError.value = errorString;
                }
                else {
                    codeError.value = error.message;
                }
            }
        }
        // Don't debounce the first call, or if code type changes
        if (firstProcessRef.current || type.value !== lastCodeType) {
            fullPoints.value = null;
            codeError.value = '';
            process();
        }
        else {
            processingTimeoutRef.current = setTimeout(process, processingDebounce);
        }
    });
    return [fullPoints, codeError, name, duration];
}
