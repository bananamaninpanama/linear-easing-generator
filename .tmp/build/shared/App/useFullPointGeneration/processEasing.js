'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('../utils.js');

const [iframe, loaded] = (() => {
    return [null, null];
})();
let queue = Promise.resolve();
class ProcessScriptEasingError extends Error {
    fileName;
    lineNumber;
    columnNumber;
    functionName;
    constructor(postMessageError) {
        super(postMessageError.message);
        this.name = 'ProcessScriptEasingError';
        if ('fileName' in postMessageError) {
            this.fileName = postMessageError.fileName;
            this.lineNumber = postMessageError.lineNumber;
            this.columnNumber = postMessageError.columnNumber;
            this.functionName = postMessageError.functionName;
        }
    }
}
function processEasing(signal, script, type) {
    return (queue = queue
        .catch(() => { })
        .then(() => utils.doAbortable(signal, async (setAbortAction) => {
        // Check for validity of SVG on the main thread.
        // The parser in the worker is too permissive.
        if (type === 1 /* CodeType.SVG */) {
            if (!CSS.supports(`clip-path: path("${script.replaceAll('\n', ' ')}")`)) {
                throw new TypeError('Invalid SVG path');
            }
        }
        const { port1, port2 } = new MessageChannel();
        await loaded;
        const done = () => iframe.contentWindow.postMessage({ action: 'terminate-worker' }, '*');
        setAbortAction(done);
        const resultPromise = new Promise((resolve, reject) => {
            port1.onmessage = ({ data }) => {
                if (data.error)
                    reject(new ProcessScriptEasingError(data.error));
                else {
                    resolve(data.result);
                }
                done();
            };
        });
        iframe.contentWindow.postMessage({
            action: type === 0 /* CodeType.JS */ ? 'process-script' : 'process-svg',
            script,
            port: port2,
        }, '*', [port2]);
        return resultPromise;
    })));
}

exports.ProcessScriptEasingError = ProcessScriptEasingError;
exports.default = processEasing;
