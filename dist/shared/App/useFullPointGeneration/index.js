'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var signals = require('@preact/signals');
var hooks = require('preact/hooks');
var processEasing = require('./processEasing.js');

const processingDebounce = 300;
function useFullPointGeneration(code, type) {
    const fullPoints = signals.useSignal(null);
    const codeError = signals.useSignal('');
    const name = signals.useSignal('');
    const duration = signals.useSignal(0);
    const currentProcessingControllerRef = hooks.useRef(null);
    const processingTimeoutRef = hooks.useRef(0);
    const firstProcessRef = hooks.useRef(true);
    const lastCodeTypeRef = hooks.useRef(null);
    signals.useSignalEffect(() => {
        const lastCodeType = lastCodeTypeRef.current;
        lastCodeTypeRef.current = type.value;
        const currentCode = code.value;
        currentProcessingControllerRef.current?.abort();
        clearTimeout(processingTimeoutRef.current);
        async function process() {
            firstProcessRef.current = false;
            currentProcessingControllerRef.current = new AbortController();
            try {
                const result = await processEasing.default(currentProcessingControllerRef.current.signal, currentCode, type.value);
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
                if (error instanceof processEasing.ProcessScriptEasingError) {
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

exports.default = useFullPointGeneration;
