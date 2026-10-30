'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var preact = require('preact');
var hooks = require('preact/hooks');
var codemirror = require('codemirror');
var langJavascript = require('@codemirror/lang-javascript');
var langCss = require('@codemirror/lang-css');
var themeOneDark = require('@codemirror/theme-one-dark');
var state = require('@codemirror/state');
var signals = require('@preact/signals');
var styles_module = require('./styles.module.css.js');
var view = require('@codemirror/view');
var language = require('@codemirror/language');
var commands = require('@codemirror/commands');
var autocomplete = require('@codemirror/autocomplete');

const extensions = () => [
    view.lineNumbers(),
    view.highlightActiveLineGutter(),
    view.highlightSpecialChars(),
    commands.history(),
    state.EditorState.allowMultipleSelections.of(true),
    language.indentOnInput(),
    language.bracketMatching(),
    autocomplete.closeBrackets(),
    autocomplete.autocompletion(),
    view.highlightActiveLine(),
    view.drawSelection(),
    view.keymap.of([
        ...autocomplete.closeBracketsKeymap,
        ...commands.defaultKeymap,
        ...commands.historyKeymap,
        ...autocomplete.completionKeymap,
        commands.indentWithTab,
    ]),
    themeOneDark.oneDark,
];
const highlighting = {
    [0 /* CodeHighlight.JS */]: langJavascript.javascript,
    [2 /* CodeHighlight.CSS */]: () => langCss.cssLanguage,
    [1 /* CodeHighlight.SVG */]: () => [],
};
const Editor = ({ code, onInput, error = signals.signal(''), language, readOnly, }) => {
    const editorContainerRef = hooks.useRef(null);
    const editorViewRef = hooks.useRef(null);
    const lastPropValueRef = hooks.useRef('');
    const onInputRef = hooks.useRef(undefined);
    const languageCompartment = hooks.useRef(null);
    const readOnlyCompartment = hooks.useRef(null);
    hooks.useEffect(() => {
        onInputRef.current = onInput;
    }, [onInput]);
    // Initial setup of the editor
    hooks.useLayoutEffect(() => {
        // Handle updates to the editor
        const updateListener = codemirror.EditorView.updateListener.of((update) => {
            if (!update.docChanged)
                return;
            const newValue = update.state.doc.toString();
            if (newValue === lastPropValueRef.current)
                return;
            lastPropValueRef.current = newValue;
            onInputRef.current?.(newValue);
        });
        languageCompartment.current = new state.Compartment();
        readOnlyCompartment.current = new state.Compartment();
        editorViewRef.current = new codemirror.EditorView({
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
    signals.useSignalEffect(() => {
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
    signals.useSignalEffect(() => {
        editorViewRef.current.dispatch({
            effects: languageCompartment.current.reconfigure(highlighting[language.value]()),
        });
    });
    hooks.useEffect(() => {
        editorViewRef.current.dispatch({
            effects: readOnlyCompartment.current.reconfigure(state.EditorState.readOnly.of(readOnly || false)),
        });
    }, [readOnly]);
    const errorStyle = signals.useComputed(() => (error.value ? '' : 'display: none'));
    return (preact.h("div", { class: styles_module.component },
        preact.h("div", { class: styles_module.editorContainer, ref: editorContainerRef }),
        preact.h("div", { style: errorStyle, class: styles_module.error, "aria-live": "polite" }, error)));
};

exports.default = Editor;
