import { h, Fragment } from 'preact';
import { useComputed, useSignal, signal, useSignalEffect, } from '@preact/signals';
import Editor from './Editor';
import 'add-css:./styles.module.css';
import * as styles from './styles.module.css';
import Graph from './Graph';
import useFullPointGeneration from './useFullPointGeneration';
import Optim from './Optim';
import useOptimizedPoints from './useOptimizedPoints';
import useLinearSyntax from './useLinearSyntax';
import AnimatedDemos from './AnimatedDemos';
import useFriendlyLinearCode from './useFriendlyLinearCode';
import useURLState from './useURLState';
import CopyButton from './CopyButton';
import Input from './Input';
import Header from './Header';
import { hideFromPrerender } from './utils';
const initiallyPlay = __PRERENDER__
    ? true
    : matchMedia('(prefers-reduced-motion: no-preference)').matches;
const App = ({}) => {
    const { codeType, code, simplify, round, update } = useURLState();
    const playAnims = useSignal(initiallyPlay);
    const durationInputValue = useSignal('1.333');
    const duration = useComputed(() => (Number(durationInputValue.value) || 1.333) * 1000);
    const [fullPoints, codeError, name, idealDuration] = useFullPointGeneration(code, codeType);
    // Update the duration input if we get a valid ideal duration
    useSignalEffect(() => {
        if (idealDuration.value) {
            durationInputValue.value = (idealDuration.value / 1000).toFixed(3);
        }
    });
    const optimizedPoints = useOptimizedPoints(fullPoints, simplify, round);
    // Just pass through the original SVG for the graph, if the input is SVG
    const graphFullPoints = useComputed(() => codeType.value === 0 /* CodeType.JS */ ? fullPoints.value : code.value);
    const linear = useLinearSyntax(optimizedPoints, round);
    const friendlyExample = useFriendlyLinearCode(linear, name, idealDuration, {
        addLineBreaksWithinLinear: true,
    });
    // https://issues.chromium.org/issues/361652145
    // A Chrome regression causes linear() to fail if there's whitespace before the first value
    const friendlyExampleWithoutLinearBreaks = useFriendlyLinearCode(linear, name, idealDuration);
    // Create slightly optimized version for the demos
    const slightlyOptimizedPoints = useOptimizedPoints(fullPoints, useSignal(0.00001), useSignal(5));
    const slightlyOptimizedLinear = useLinearSyntax(slightlyOptimizedPoints, useSignal(5));
    const playToggleText = useComputed(() => playAnims.value ? 'Pause' : 'Play');
    const playToggleIconPath = useComputed(() => playAnims.value
        ? // Pause icon
            'M525 856V296h235v560H525Zm-325 0V296h235v560H200Zm385-60h115V356H585v440Zm-325 0h115V356H260v440Zm0-440v440-440Zm325 0v440-440Z'
        : // Play icon
            'M320 853V293l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z');
    return (h(Fragment, null,
        h(Header, { onPresetSelect: (newState) => update(newState) }),
        h("div", { class: styles.appGrid },
            h("div", { class: styles.appModule, style: { gridArea: 'input' } },
                h(Input, { code: code, codeType: codeType, error: codeError, onChange: (code, codeType) => update({ code, codeType }) })),
            h("div", { class: styles.previewOutput, style: { gridArea: 'preview-output' } },
                h("div", { class: styles.appModule, style: { gridArea: 'preview' } },
                    h("div", { class: styles.sectionHeader },
                        h("div", { class: styles.sectionHeaderTitle },
                            h("h2", null, "Preview"),
                            h("p", null, "Here's how it looks:")),
                        h("label", { class: styles.selectLabel, style: hideFromPrerender },
                            h("span", { class: styles.labelTextEnd }, "Duration"),
                            h("input", { class: [styles.input, styles.durationInput].join(' '), type: "number", value: durationInputValue, onInput: (event) => (durationInputValue.value = event.target.value) })),
                        h("button", { style: hideFromPrerender, class: styles.sectionHeaderIconButton, onClick: () => (playAnims.value = !playAnims.value) },
                            h("span", { class: styles.sectionHeaderIconButtonText }, playToggleText),
                            h("svg", { viewBox: "0 96 960 960" },
                                h("path", { d: playToggleIconPath })))),
                    h("div", { class: styles.previewContent },
                        h(Graph, { fullPoints: graphFullPoints, optimizedPoints: optimizedPoints }),
                        h("div", { class: styles.animatedDemos },
                            h(AnimatedDemos, { play: playAnims, duration: duration, linear: linear, slightlyOptimizedLinear: slightlyOptimizedLinear })))),
                h("div", { class: styles.appModule, style: { gridArea: 'output' } },
                    h("div", { class: styles.sectionHeader },
                        h("div", { class: styles.sectionHeaderTitle },
                            h("h2", null, "Output"),
                            h("p", null, "Some shiny new CSS!")),
                        h(CopyButton, { value: friendlyExampleWithoutLinearBreaks })),
                    h(Editor, { code: friendlyExample, language: signal(2 /* CodeHighlight.CSS */), readOnly: true })),
                h("div", { class: [styles.appModule, styles.simplifyModule].join(' '), style: { gridArea: 'simplify' } },
                    h(Optim, { onInput: (newSimplify, newRound) => update({
                            simplify: newSimplify,
                            round: newRound,
                        }), round: round, simplify: simplify }))))));
};
export { App as default };
