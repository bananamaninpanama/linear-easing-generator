'use strict';

var preact = require('preact');
var utils = require('./utils.js');
var index = require('./pages/index/index.js');
var index$1 = require('./pages/process-script/index.js');

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
const toOutput = {
    'index.html': utils.renderPage(preact.h(index.default, null)),
    '/process-script/index.html': utils.renderPage(preact.h(index$1.default, null)),
    /*'manifest.json': JSON.stringify({
      name: 'linear() easing generator',
      short_name: 'linear()',
      start_url: '/',
      display: 'standalone',
      orientation: 'any',
      background_color: '#fff',
      theme_color: '#009dff',
      icons: [
        {
          src: maskableIconURL.default,
          type: lookupMime(maskableIconURL.default),
          sizes: manifestSize(maskableIconURL),
          purpose: 'maskable',
        },
        {
          src: socialIconURL.default,
          type: lookupMime(socialIconURL.default),
          sizes: manifestSize(socialIconURL),
        },
      ],
      description: 'Generate linear() easings from JavaScript and SVG',
      lang: 'en',
    }),
  */
};
utils.writeFiles(toOutput);
