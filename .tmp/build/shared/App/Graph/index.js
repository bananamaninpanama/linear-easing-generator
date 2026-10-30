'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var signals = require('@preact/signals');
var preact = require('preact');
var styles_module = require('./styles.module.css.js');
var utils = require('../utils.js');

function useToPath(pointsSignal) {
    return signals.useComputed(() => {
        // We never render with null data here, but:
        // https://github.com/preactjs/signals/issues/315
        if (!pointsSignal.value)
            return '';
        if (typeof pointsSignal.value === 'string')
            return pointsSignal.value;
        return 'M ' + pointsSignal.value.map(([x, y]) => `${x} ${1 - y}`).join();
    });
}
function useCanvasBounds(points) {
    const [containerRef, containerSize] = utils.useElementSize();
    const valueBounds = signals.useComputed(() => {
        const bounds = { x1: 0, y1: 0, x2: 1, y2: 1 };
        if (points.value === null)
            return bounds;
        for (const point of points.value) {
            if (point[0] < bounds.x1) {
                bounds.x1 = point[0];
            }
            else if (point[0] > bounds.x2) {
                bounds.x2 = point[0];
            }
            const val = 1 - point[1];
            if (val < bounds.y1) {
                bounds.y1 = val;
            }
            else if (val > bounds.y2) {
                bounds.y2 = val;
            }
        }
        return bounds;
    });
    const horizontalDemos = utils.useMatchMedia('(min-width: 1820px), (max-width: 1159px)');
    const canvasBounds = signals.useComputed(() => {
        const padding = 30;
        const extraPadding = 250;
        const paddingRight = horizontalDemos.value ? padding : extraPadding;
        const paddingBottom = horizontalDemos.value ? extraPadding : padding;
        if (!containerSize.value)
            return { scale: 1, x1: 0, x2: 1, y1: 0, y2: 1 };
        const canvasUsableWidth = containerSize.value.width - (padding + paddingRight);
        const canvasUsableHeight = containerSize.value.height - (padding + paddingBottom);
        const boundsWidth = valueBounds.value.x2 - valueBounds.value.x1;
        const boundsHeight = valueBounds.value.y2 - valueBounds.value.y1;
        let scale;
        if (boundsWidth / boundsHeight < canvasUsableWidth / canvasUsableHeight) {
            scale = canvasUsableHeight / boundsHeight;
        }
        else {
            scale = canvasUsableWidth / boundsWidth;
        }
        const canvasWidthToScale = containerSize.value.width / scale;
        const canvasHeightToScale = containerSize.value.height / scale;
        const x1 = valueBounds.value.x1 -
            (horizontalDemos.value
                ? (canvasWidthToScale - boundsWidth) / 2
                : padding / scale);
        const x2 = x1 + canvasWidthToScale;
        const y1 = valueBounds.value.y1 -
            (horizontalDemos.value
                ? padding / scale
                : (canvasHeightToScale - boundsHeight) / 2);
        const y2 = y1 + canvasHeightToScale;
        return { scale, x1, x2, y1, y2 };
    });
    return [containerRef, canvasBounds];
}
const Graph = ({ fullPoints, optimizedPoints, }) => {
    useToPath(fullPoints);
    useToPath(optimizedPoints);
    const [containerRef, canvasBounds] = useCanvasBounds(optimizedPoints);
    signals.useComputed(() => canvasBounds.value.scale);
    signals.useComputed(() => `${canvasBounds.value.x1 * canvasBounds.value.scale} ${canvasBounds.value.y1 * canvasBounds.value.scale} ${(canvasBounds.value.x2 - canvasBounds.value.x1) *
        canvasBounds.value.scale} ${(canvasBounds.value.y2 - canvasBounds.value.y1) *
        canvasBounds.value.scale}`);
    signals.useComputed(() => `M 0 0 V ${canvasBounds.value.scale} H ${canvasBounds.value.scale}`);
    signals.useComputed(() => {
        let line = '';
        const { scale, x1, x2, y1, y2 } = canvasBounds.value;
        // Negative horizontal lines
        for (let x = 0; x > x1; x -= 0.25) {
            line += `M ${x * scale} ${y1 * scale} V ${y2 * scale}`;
        }
        // Positive horizontal lines
        for (let x = 0; x < x2; x += 0.25) {
            line += `M ${x * scale} ${y1 * scale} V ${y2 * scale}`;
        }
        // Negative vertical lines
        for (let y = 0; y > y1; y -= 0.25) {
            line += `M ${x1 * scale} ${y * scale} H ${x2 * scale}`;
        }
        // Positive vertical lines
        for (let y = 0; y < y2; y += 0.25) {
            line += `M ${x1 * scale} ${y * scale} H ${x2 * scale}`;
        }
        return line;
    });
    // A bit hacky, but if the fullPoints is a string, it's an SVG path
    // but we need to flip it so the origin is in the bottom left.
    signals.useComputed(() => typeof fullPoints.value === 'string'
        ? 'transform: scaleY(-1); transform-origin: 50% 50%;'
        : '');
    signals.useComputed(() => fullPoints.value === null ? 'visibility: hidden;' : '');
    return (preact.h("div", { ref: containerRef, class: styles_module.graphComponent }, !true ));
};

exports.default = Graph;
