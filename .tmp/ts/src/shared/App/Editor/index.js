import { h } from 'preact';
import { useRef, useLayoutEffect, useEffect } from 'preact/hooks';
import { EditorView } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { cssLanguage } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorState, Compartment } from '@codemirror/state';
import { signal, useComputed, useSignalEffect, } from '@preact/signals';
import 'add-css:./styles.module.css';
import * as styles from './styles.module.css';
import { lineNumbers, highlightActiveLineGutter, highlightSpecialChars, highlightActiveLine, keymap, drawSelection, } from '@codemirror/view';
import { indentOnInput, bracketMatching } from '@codemirror/language';
import { history, defaultKeymap, historyKeymap, indentWithTab, } from '@codemirror/commands';
import { closeBrackets, autocompletion, closeBracketsKeymap, completionKeymap, } from '@codemirror/autocomplete';
const extensions = () => [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    bracketMatching(),
    closeBrackets(),
    autocompletion(),
    highlightActiveLine(),
    drawSelection(),
    keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...historyKeymap,
        ...completionKeymap,
        indentWithTab,
    ]),
    oneDark,
];
const highlighting = {
    [0 /* CodeHighlight.JS */]: javascript,
    [2 /* CodeHighlight.CSS */]: () => cssLanguage,
    [1 /* CodeHighlight.SVG */]: () => [],
};
const Editor = ({ code, onInput, error = signal(''), language, readOnly, }) => {
    const editorContainerRef = useRef(null);
    const editorViewRef = useRef(null);
    const lastPropValueRef = useRef('');
    const onInputRef = useRef(undefined);
    const languageCompartment = useRef(null);
    const readOnlyCompartment = useRef(null);
    useEffect(() => {
        onInputRef.current = onInput;
    }, [onInput]);
    // Initial setup of the editor
    useLayoutEffect(() => {
        // Handle updates to the editor
        const updateListener = EditorView.updateListener.of((update) => {
            if (!update.docChanged)
                return;
            const newValue = update.state.doc.toString();
            if (newValue === lastPropValueRef.current)
                return;
            lastPropValueRef.current = newValue;
            onInputRef.current?.(newValue);
        });
        languageCompartment.current = new Compartment();
        readOnlyCompartment.current = new Compartment();
        editorViewRef.current = new EditorView({
            extensions: [
                ...extensions(),
                languageCompartment.current.of([]),
                readOnlyCompartment.current.of([]),
                updateListener,
            ],
            parent: editorContainerRef.current,
        });
        return () => {
            editorViewRef.current.destroy();
        };
    }, []);
    // Handle changes to the value prop
    useSignalEffect(() => {
        if (code.value === lastPropValueRef.current)
            return;
        const currentLength = lastPropValueRef.current.length;
        lastPropValueRef.current = code.value;
        editorViewRef.current.dispatch({
            changes: {
                from: 0,
                to: currentLength,
                insert: code.value,
            },
        });
    });
    useSignalEffect(() => {
        editorViewRef.current.dispatch({
            effects: languageCompartment.current.reconfigure(highlighting[language.value]()),
        });
    });
    useEffect(() => {
        editorViewRef.current.dispatch({
            effects: readOnlyCompartment.current.reconfigure(EditorState.readOnly.of(readOnly || false)),
        });
    }, [readOnly]);
    const errorStyle = useComputed(() => (error.value ? '' : 'display: none'));
    return (h("div", { class: styles.component },
        h("div", { class: styles.editorContainer, ref: editorContainerRef }),
        h("div", { style: errorStyle, class: styles.error, "aria-live": "polite" }, error)));
};
export { Editor as default };
