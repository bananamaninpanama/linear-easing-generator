'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var signals = require('@preact/signals');
var hooks = require('preact/hooks');
var demos = require('./demos.js');
var utils = require('./utils.js');

function getStateFromURL() {
    return {};
}
function useURLState() {
    const originalURLState = hooks.useMemo(getStateFromURL, []);
    const defaultCodeType = originalURLState.codeType || 0 /* CodeType.JS */;
    const codeType = signals.useSignal(defaultCodeType);
    const code = signals.useSignal(originalURLState.code ||
        (defaultCodeType === 0 /* CodeType.JS */ ? demos.defaultJS.code : demos.defaultSVG.code));
    const simplify = signals.useSignal(originalURLState.simplify ?? 0.0017);
    const round = signals.useSignal(originalURLState.round ?? 3);
    const urlChangeTimeout = hooks.useRef(null);
    const update = hooks.useCallback((newState) => {
        signals.batch(() => {
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
            newURL.search = utils.getURLParamsFromState({
                codeType: codeType.value,
                code: code.value,
                simplify: simplify.value,
                round: round.value,
            }).toString();
            history.replaceState(null, '', newURL.toString());
        }, 250);
    }, []);
    return hooks.useMemo(() => ({
        codeType,
        code,
        simplify,
        round,
        update,
    }), []);
}

exports.default = useURLState;
