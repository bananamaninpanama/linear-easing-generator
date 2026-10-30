'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var preact = require('preact');
var index_ts = require('../../../_virtual/index.ts.js');
var utils = require('../../utils.js');

const ProcessScript = () => (preact.h(preact.Fragment, null,
    index_ts.imports.map((preload) => (preact.h("link", { rel: "preload", href: preload, as: "script" }))),
    preact.h("script", { dangerouslySetInnerHTML: {
            __html: utils.escapeStyleScriptContent(index_ts.allSrc),
        } })));

exports.default = ProcessScript;
