import { useComputed, useSignalEffect } from '@preact/signals';
import { h, Fragment } from 'preact';
import { useRef } from 'preact/hooks';
import Editor from '../Editor';
import * as sharedStyles from '../styles.module.css';
import { defaultJS, defaultSVG } from '../demos';
import Select from '../Select';
import { hideFromPrerender } from '../utils';
function useCachedFormatCodes(code, codeType) {
    const lastJSCode = useRef(defaultJS.code);
    const lastSVGCode = useRef(defaultSVG.code);
    useSignalEffect(() => {
        if (codeType.value === 0 /* CodeType.JS */) {
            lastJSCode.current = code.value;
        }
        else {
            lastSVGCode.current = code.value;
        }
    });
    return { [0 /* CodeType.JS */]: lastJSCode, [1 /* CodeType.SVG */]: lastSVGCode };
}
const Input = ({ code, codeType, error, onChange, }) => {
    const editorHighlight = useComputed(() => codeType.value == 0 /* CodeType.JS */ ? 0 /* CodeHighlight.JS */ : 1 /* CodeHighlight.SVG */);
    const codeTypeString = useComputed(() => String(codeType.value));
    const lastCodes = useCachedFormatCodes(code, codeType);
    function onSelectChange(newVal) {
        const newValNum = Number(newVal);
        onChange(lastCodes[newValNum].current, newValNum);
    }
    return (h(Fragment, null,
        h("div", { class: sharedStyles.sectionHeader },
            h("div", { class: sharedStyles.sectionHeaderTitle },
                h("h2", null, "Input"),
                h("p", null, "Provide easing as JavaScript or SVG")),
            h("label", { class: sharedStyles.selectLabel, style: hideFromPrerender },
                h("span", { class: sharedStyles.labelTextEnd }, "Format"),
                h(Select, { value: codeTypeString, onChange: onSelectChange },
                    h("option", { value: 0 /* CodeType.JS */ }, "JS"),
                    h("option", { value: 1 /* CodeType.SVG */ }, "SVG")))),
        h(Editor, { error: error, code: code, onInput: (val) => onChange(val, codeType.value), language: editorHighlight })));
};
export { Input as default };
