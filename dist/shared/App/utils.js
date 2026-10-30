'use strict';

var signals = require('@preact/signals');
var hooks = require('preact/hooks');

function doAbortable(signal, callback) {
    if (signal.aborted)
        throw new DOMException('', 'AbortError');
    let onAbort;
    let listener;
    let onAbortReturn;
    const setAbortAction = (c) => {
        onAbort = c;
    };
    const promise = callback(setAbortAction);
    return Promise.race([
        new Promise((_, reject) => {
            listener = () => {
                reject(new DOMException('', 'AbortError'));
                onAbortReturn = onAbort?.();
            };
            signal.addEventListener('abort', listener);
        }),
        promise,
    ]).finally(() => {
        signal.removeEventListener('abort', listener);
        return onAbortReturn;
    });
}
function getURLParamsFromState(state) {
    const params = new URLSearchParams();
    if (state.codeType === 0 /* CodeType.JS */) {
        params.set('codeType', 'js');
    }
    else if (state.codeType === 1 /* CodeType.SVG */) {
        params.set('codeType', 'svg');
    }
    if (state.code)
        params.set('code', state.code);
    if (state.simplify !== undefined) {
        params.set('simplify', state.simplify.toString());
    }
    if (state.round !== undefined)
        params.set('round', state.round.toString());
    return params;
}
function useElementSize() {
    const elSignal = signals.useSignal(null);
    const sizeSignal = signals.useSignal(null);
    const refCallback = hooks.useCallback((el) => {
        elSignal.value = el;
    }, []);
    signals.useSignalEffect(() => {
        if (!elSignal.value)
            return;
        const observer = new ResizeObserver((entries) => {
            const size = entries[0].contentBoxSize[0];
            sizeSignal.value = { width: size.inlineSize, height: size.blockSize };
        });
        observer.observe(elSignal.value);
        return () => observer.disconnect();
    });
    return [refCallback, sizeSignal];
}
function useMatchMedia(query) {
    const matchSignal = signals.useSignal(false);
    hooks.useLayoutEffect(() => {
        const queryMatch = matchMedia(query);
        const listener = () => (matchSignal.value = queryMatch.matches);
        queryMatch.addEventListener('change', listener);
        listener();
        return () => queryMatch.removeEventListener('change', listener);
    }, []);
    return matchSignal;
}
function animateFrom(element, from, options) {
    return element.animate({ ...from, offset: 0 }, { ...options, fill: 'backwards' });
}
const hideFromPrerender = 'visibility: hidden' ;

exports.animateFrom = animateFrom;
exports.doAbortable = doAbortable;
exports.getURLParamsFromState = getURLParamsFromState;
exports.hideFromPrerender = hideFromPrerender;
exports.useElementSize = useElementSize;
exports.useMatchMedia = useMatchMedia;
