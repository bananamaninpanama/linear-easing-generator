'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var signals = require('@preact/signals');

const durationFormat = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 3,
});
function useFriendlyLinearCode(parts, name, idealDuration, { addLineBreaksWithinLinear = false } = {}) {
    return signals.useComputed(() => {
        if (parts.value.length === 0)
            return '';
        const lineLength = addLineBreaksWithinLinear ? 80 : Infinity;
        let outputStart = ':root {\n';
        let linearStart = `  --${name}-easing: linear(`;
        let linearEnd = ');';
        let outputEnd = '\n}';
        let lines = [];
        let line = '';
        const lineIndentSize = 4;
        for (const part of parts.value) {
            // 1 for comma
            if (line.length + part.length + lineIndentSize + 1 > lineLength) {
                lines.push(line + ',');
                line = '';
            }
            if (line)
                line += ', ';
            line += part;
        }
        if (line)
            lines.push(line);
        let linearLines = '';
        if (lines.length === 1 &&
            linearStart.length + lines[0].length + linearEnd.length < lineLength) {
            linearLines = linearStart + lines[0] + linearEnd;
        }
        else {
            linearLines =
                linearStart + '\n    ' + lines.join('\n    ') + '\n  ' + linearEnd;
        }
        let idealDurationLine = '';
        if (idealDuration.value !== 0) {
            idealDurationLine = `\n  --${name}-duration: ${durationFormat.format(idealDuration.value / 1000)}s;`;
        }
        return outputStart + linearLines + idealDurationLine + outputEnd;
    });
}

exports.default = useFriendlyLinearCode;
