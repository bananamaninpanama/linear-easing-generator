import { useSignal, batch } from '@preact/signals';
import { useCallback, useMemo, useRef } from 'preact/hooks';
import { defaultJS, defaultSVG } from './demos';
import { getURLParamsFromState } from './utils';
function getStateFromURL() {
    if (__PRERENDER__)
        return {};
    const params = new URLSearchParams(location.search);
    const output = {};
    if (params.has('codeType')) {
        const codeType = params.get('codeType');
        output.codeType = codeType === 'js' ? 0 /* CodeType.JS */ : 1 /* CodeType.SVG */;
        if (params.has('code')) {
            output.code = params.get('code');
        }
    }
    if (params.has('simplify')) {
        const simplify = Number(params.get('simplify'));
        if (!isNaN(simplify))
            output.simplify = simplify;
    }
    if (params.has('round')) {
        const round = Number(params.get('round'));
        if (!isNaN(round))
            output.round = round;
    }
    return output;
}
export default function useURLState() {
    const originalURLState = useMemo(getStateFromURL, []);
    const defaultCodeType = originalURLState.codeType || 0 /* CodeType.JS */;
    const codeType = useSignal(defaultCodeType);
    const code = useSignal(originalURLState.code ||
        (defaultCodeType === 0 /* CodeType.JS */ ? defaultJS.code : defaultSVG.code));
    const simplify = useSignal(originalURLState.simplify ?? 0.0017);
    const round = useSignal(originalURLState.round ?? 3);
    const urlChangeTimeout = useRef(null);
    const update = useCallback((newState) => {
        batch(() => {
            if (newState.codeType !== undefined)
                codeType.value = newState.codeType;
            if (newState.code !== undefined)
                code.value = newState.code;
            if (newState.simplify !== undefined)
                simplify.value = newState.simplify;
            if (newState.round !== undefined)
                round.value = newState.round;
        });
        if (urlChangeTimeout.current !== null) {
            clearTimeout(urlChangeTimeout.current);
        }
        urlChangeTimeout.current = setTimeout(() => {
            const newURL = new URL(location.href);
            newURL.search = getURLParamsFromState({
                codeType: codeType.value,
                code: code.value,
                simplify: simplify.value,
                round: round.value,
            }).toString();
            history.replaceState(null, '', newURL.toString());
        }, 250);
    }, []);
    return useMemo(() => ({
        codeType,
        code,
        simplify,
        round,
        update,
    }), []);
}
