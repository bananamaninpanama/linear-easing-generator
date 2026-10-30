import { h, Fragment } from 'preact';
import { allSrc, imports } from 'client-bundle:client/frame';
import { escapeStyleScriptContent } from 'static-build/utils';
const ProcessScript = () => (h(Fragment, null,
    imports.map((preload) => (h("link", { rel: "preload", href: preload, as: "script" }))),
    h("script", { dangerouslySetInnerHTML: {
            __html: escapeStyleScriptContent(allSrc),
        } })));
export default ProcessScript;
