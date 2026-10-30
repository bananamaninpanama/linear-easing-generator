'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var preact = require('preact');
var prerenderCss_ = require('../../../_virtual/prerender-css_.js');
var index_tsx = require('../../../_virtual/index.tsx.js');
var index_js = require('../../../_virtual/index.js.js');
var favicon_png = require('../../../_virtual/favicon.png.js');
var socialIcon_png = require('../../../_virtual/social-icon.png.js');
var utils = require('../../utils.js');
var index = require('../../../shared/App/index.js');

/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Index = () => (preact.h("html", { lang: "en" },
    preact.h("head", null,
        preact.h("title", null, "Linear easing generator"),
        preact.h("meta", { name: "theme-color", content: "#009dff" }),
        preact.h("meta", { name: "viewport", content: "width=device-width, minimum-scale=1.0" }),
        preact.h("link", { rel: "icon", type: "image/png", href: favicon_png.default }),
        preact.h("meta", { name: "twitter:card", content: "summary" }),
        preact.h("meta", { property: "twitter:image", content: `${utils.siteOrigin}${socialIcon_png.default}` }),
        preact.h("meta", { property: "og:image", content: `${utils.siteOrigin}${socialIcon_png.default}` }),
        preact.h("meta", { name: "twitter:site", content: "@jaffathecake" }),
        preact.h("meta", { property: "og:url", content: `${utils.siteOrigin}/` }),
        preact.h("meta", { property: "og:title", content: "Linear easing generator" }),
        preact.h("meta", { property: "og:description", content: "Generate linear() easings from JavaScript and SVG" }),
        preact.h("link", { rel: "manifest", href: "/manifest.json" }),
        preact.h("style", { dangerouslySetInnerHTML: {
                __html: utils.escapeStyleScriptContent(prerenderCss_.default),
            } }),
        index_tsx.imports.map((preload) => (preact.h("link", { rel: "preload", href: preload, as: "script" }))),
        preact.h("script", { src: index_tsx.default, type: "module" }),
        preact.h("script", { src: index_js.default, async: true })),
    preact.h("body", null,
        preact.h("div", { id: "app" },
            preact.h(index.default, null)))));

exports.default = Index;
