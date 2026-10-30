'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var preact = require('preact');
var signals = require('@preact/signals');
var index$6 = require('./Editor/index.js');
var styles_module = require('./styles.module.css.js');
var index$3 = require('./Graph/index.js');
var index = require('./useFullPointGeneration/index.js');
var index$7 = require('./Optim/index.js');
var useOptimizedPoints = require('./useOptimizedPoints.js');
var useLinearSyntax = require('./useLinearSyntax.js');
var index$4 = require('./AnimatedDemos/index.js');
var useFriendlyLinearCode = require('./useFriendlyLinearCode.js');
var useURLState = require('./useURLState.js');
var index$5 = require('./CopyButton/index.js');
var index$2 = require('./Input/index.js');
var index$1 = require('./Header/index.js');
var utils = require('./utils.js');

const initiallyPlay = true
    ;
const App = ({}) => {
    const { codeType, code, simplify, round, update } = useURLState.default();
    const playAnims = signals.useSignal(initiallyPlay);
    const durationInputValue = signals.useSignal('1.333');
    const duration = signals.useComputed(() => (Number(durationInputValue.value) || 1.333) * 1000);
    const [fullPoints, codeError, name, idealDuration] = index.default(code, codeType);
    // Update the duration input if we get a valid ideal duration
    signals.useSignalEffect(() => {
        if (idealDuration.value) {
            durationInputValue.value = (idealDuration.value / 1000).toFixed(3);
        }
    });
    const optimizedPoints = useOptimizedPoints.default(fullPoints, simplify, round);
    // Just pass through the original SVG for the graph, if the input is SVG
    const graphFullPoints = signals.useComputed(() => codeType.value === 0 /* CodeType.JS */ ? fullPoints.value : code.value);
    const linear = useLinearSyntax.default(optimizedPoints, round);
    const friendlyExample = useFriendlyLinearCode.default(linear, name, idealDuration, {
        addLineBreaksWithinLinear: true,
    });
    // https://issues.chromium.org/issues/361652145
    // A Chrome regression causes linear() to fail if there's whitespace before the first value
    const friendlyExampleWithoutLinearBreaks = useFriendlyLinearCode.default(linear, name, idealDuration);
    // Create slightly optimized version for the demos
    const slightlyOptimizedPoints = useOptimizedPoints.default(fullPoints, signals.useSignal(0.00001), signals.useSignal(5));
    const slightlyOptimizedLinear = useLinearSyntax.default(slightlyOptimizedPoints, signals.useSignal(5));
    const playToggleText = signals.useComputed(() => playAnims.value ? 'Pause' : 'Play');
    const playToggleIconPath = signals.useComputed(() => playAnims.value
        ? // Pause icon
            'M525 856V296h235v560H525Zm-325 0V296h235v560H200Zm385-60h115V356H585v440Zm-325 0h115V356H260v440Zm0-440v440-440Zm325 0v440-440Z'
        : // Play icon
            'M320 853V293l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z');
    return (preact.h(preact.Fragment, null,
        preact.h(index$1.default, { onPresetSelect: (newState) => update(newState) }),
        preact.h("div", { class: styles_module.appGrid },
            preact.h("div", { class: styles_module.appModule, style: { gridArea: 'input' } },
                preact.h(index$2.default, { code: code, codeType: codeType, error: codeError, onChange: (code, codeType) => update({ code, codeType }) })),
            preact.h("div", { class: styles_module.previewOutput, style: { gridArea: 'preview-output' } },
                preact.h("div", { class: styles_module.appModule, style: { gridArea: 'preview' } },
                    preact.h("div", { class: styles_module.sectionHeader },
                        preact.h("div", { class: styles_module.sectionHeaderTitle },
                            preact.h("h2", null, "Preview"),
                            preact.h("p", null, "Here's how it looks:")),
                        preact.h("label", { class: styles_module.selectLabel, style: utils.hideFromPrerender },
                            preact.h("span", { class: styles_module.labelTextEnd }, "Duration"),
                            preact.h("input", { class: [styles_module.input, styles_module.durationInput].join(' '), type: "number", value: durationInputValue, onInput: (event) => (durationInputValue.value = event.target.value) })),
                        preact.h("button", { style: utils.hideFromPrerender, class: styles_module.sectionHeaderIconButton, onClick: () => (playAnims.value = !playAnims.value) },
                            preact.h("span", { class: styles_module.sectionHeaderIconButtonText }, playToggleText),
                            preact.h("svg", { viewBox: "0 96 960 960" },
                                preact.h("path", { d: playToggleIconPath })))),
                    preact.h("div", { class: styles_module.previewContent },
                        preact.h(index$3.default, { fullPoints: graphFullPoints, optimizedPoints: optimizedPoints }),
                        preact.h("div", { class: styles_module.animatedDemos },
                            preact.h(index$4.default, { play: playAnims, duration: duration, linear: linear, slightlyOptimizedLinear: slightlyOptimizedLinear })))),
                preact.h("div", { class: styles_module.appModule, style: { gridArea: 'output' } },
                    preact.h("div", { class: styles_module.sectionHeader },
                        preact.h("div", { class: styles_module.sectionHeaderTitle },
                            preact.h("h2", null, "Output"),
                            preact.h("p", null, "Some shiny new CSS!")),
                        preact.h(index$5.default, { value: friendlyExampleWithoutLinearBreaks })),
                    preact.h(index$6.default, { code: friendlyExample, language: signals.signal(2 /* CodeHighlight.CSS */), readOnly: true })),
                preact.h("div", { class: [styles_module.appModule, styles_module.simplifyModule].join(' '), style: { gridArea: 'simplify' } },
                    preact.h(index$7.default, { onInput: (newSimplify, newRound) => update({
                            simplify: newSimplify,
                            round: newRound,
                        }), round: round, simplify: simplify }))))));
};

exports.default = App;
