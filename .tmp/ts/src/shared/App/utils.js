import { useSignal, useSignalEffect, } from '@preact/signals';
import { useCallback, useLayoutEffect } from 'preact/hooks';
export function doAbortable(signal, callback) {
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
export function logSignalUpdates(signals) {
    useSignalEffect(() => {
        console.log(Object.fromEntries(Object.entries(signals).map(([key, value]) => [key, value.value])));
    });
}
export function getURLParamsFromState(state) {
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
export function useElementSize() {
    const elSignal = useSignal(null);
    const sizeSignal = useSignal(null);
    const refCallback = useCallback((el) => {
        elSignal.value = el;
    }, []);
    useSignalEffect(() => {
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
export function useMatchMedia(query) {
    const matchSignal = useSignal(false);
    useLayoutEffect(() => {
        const queryMatch = matchMedia(query);
        const listener = () => (matchSignal.value = queryMatch.matches);
        queryMatch.addEventListener('change', listener);
        listener();
        return () => queryMatch.removeEventListener('change', listener);
    }, []);
    return matchSignal;
}
export function animateTo(element, to, options) {
    const anim = element.animate(to, { ...options, fill: 'both' });
    anim.addEventListener('finish', () => {
        try {
            anim.commitStyles();
            anim.cancel();
        }
        catch (e) { }
    });
    return anim;
}
export function animateFrom(element, from, options) {
    return element.animate({ ...from, offset: 0 }, { ...options, fill: 'backwards' });
}
export const hideFromPrerender = __PRERENDER__ ? 'visibility: hidden' : '';
