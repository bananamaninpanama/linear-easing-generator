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
import { h } from 'preact';
import 'add-css:./styles.module.css';
import initialCss from 'prerender-css:';
import url, { imports } from 'client-bundle:client/main';
import analyticsUrl from 'client-bundle:client/analytics/index.js';
import faviconURL from 'url:static-build/assets/favicon.png';
import socialImageURL from 'url:static-build/assets/social-icon.png';
// import ogImage from 'url:static-build/assets/icon-large-maskable.png';
import { escapeStyleScriptContent, siteOrigin } from 'static-build/utils';
import App from 'shared/App';
const Index = () => (h("html", { lang: "en" },
    h("head", null,
        h("title", null, "Linear easing generator"),
        h("meta", { name: "theme-color", content: "#009dff" }),
        h("meta", { name: "viewport", content: "width=device-width, minimum-scale=1.0" }),
        h("link", { rel: "icon", type: "image/png", href: faviconURL }),
        h("meta", { name: "twitter:card", content: "summary" }),
        h("meta", { property: "twitter:image", content: `${siteOrigin}${socialImageURL}` }),
        h("meta", { property: "og:image", content: `${siteOrigin}${socialImageURL}` }),
        h("meta", { name: "twitter:site", content: "@jaffathecake" }),
        h("meta", { property: "og:url", content: `${siteOrigin}/` }),
        h("meta", { property: "og:title", content: "Linear easing generator" }),
        h("meta", { property: "og:description", content: "Generate linear() easings from JavaScript and SVG" }),
        h("link", { rel: "manifest", href: "/manifest.json" }),
        h("style", { dangerouslySetInnerHTML: {
                __html: escapeStyleScriptContent(initialCss),
            } }),
        imports.map((preload) => (h("link", { rel: "preload", href: preload, as: "script" }))),
        h("script", { src: url, type: "module" }),
        h("script", { src: analyticsUrl, async: true })),
    h("body", null,
        h("div", { id: "app" },
            h(App, null)))));
export default Index;
