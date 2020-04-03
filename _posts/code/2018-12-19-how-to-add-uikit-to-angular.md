---
layout: post
categories: code
author: Colin Stodd
tags:
  - Angular,
  - UIKIT,
  - Tutorial
title: How to add UIKit to Angular
date: 2019-02-19 15:30:12 -0500
last_modified_at: 2020-04-01 12:30:12 -0500
pinned: false
featured: true
image: ../images/posts/uikit.png
description: How to install UIKit in Angular 6+ using CSS or SASS/SCSS.
permalink: /posts/code/how-to-add-uikit-to-angular.html
comments: true
redirect_from:
  - /posts/how-to-add-uikit-to-angular.html
  - /posts/how-to-add-uikit-to-angular/
  - /posts/how-to-add-uikit-to-angular
---

I heard about <a href="https://getuikit.com" target="_blank" rel="noopener">UIKit</a> from a friend and really liked it! If you do a little digging on their website you'll see that they have a <a href="https://www.npmjs.com/package/uikit" target="_blank" rel="noopener">NPM package</a>. <br/>This post shows you how to install <a href="https://getuikit.com" target="_blank" rel="noopener">UIKit</a> in <a href="https://angular.io/" target="_blank" rel="noopener">Angular</a> using either CSS or <a href="#scss">SCSS/SASS <i class="fad fa-level-down-alt"></i></a>.

<i class="fab fa-css3 text-pink header-icon" title="CSS 3"></i>

#### _If you're using CSS:_

1. From the root of your project you need to install <a href="https://jquery.com/" target="_blank" rel="noopener">jQuery</a> and <a href="https://getuikit.com/" target="_blank" rel="noopener">UIKit</a>:

    ```bash
    npm install jquery uikit --S
    ```


2. Update your `angular.json` file with the same code snippet below in two places: Underneath `"build"` and `"test"`:

    ```json
    "styles": [
            "src/styles.css",
            "./node_modules/uikit/dist/css/uikit.min.css",
            "./node_modules/uikit/dist/css/uikit-core.min.css"
        ],
        "scripts": [
            "./node_modules/jquery/dist/jquery.min.js",
            "./node_modules/uikit/dist/js/uikit.min.js",
            "./node_modules/uikit/dist/js/uikit-icons.min.js"
        ]
    ```

    <div id="scss" name="scss"></div>

3. Since we updated `angular.json` you'll have to restart your server.

---

<i class="fab fa-sass text-pink header-icon" title="SASS"></i>

#### _If you're using SCSS or SASS:_

1. From the root of your project you need to install <a href="https://jquery.com/" target="_blank" rel="noopener">jQuery</a> and <a href="https://getuikit.com/" target="_blank" rel="noopener">UIKit</a>:

    ```bash
    npm install jquery uikit --S
    ```

2. Update your `angular.json` file with the same code snippet below in two places. Underneath `"build"` and `"test"`:

    ```json
    "styles": [
        "src/styles/styles.scss"
      ],
      // See blurb (link) below regarding this (And delete this comment).
      "stylePreprocessorOptions": {
        "includePaths": [
          "src/styles",
          "./node_modules/uikit/src/scss"
        ]
      },
      "scripts": [
        "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/uikit/dist/js/uikit.min.js",
        "./node_modules/uikit/dist/js/uikit-icons.min.js"
      ]
    ```

    <div class="blurb"><i class="fad fa-books fa-lg"></i>&nbsp;&nbsp;&nbsp;  To read more about  <code>stylePreprocessorOptions</code> go to  &nbsp;<a href="https://github.com/angular/angular-cli/wiki/stories-global-styles" target="_blank" rel="noopener"> Angular/CLI README  <i class="fad fa-external-link-alt"></i></a>. &nbsp;It's a quick (3 min) read and definitely a good thing to be aware of if you're working with SASS, LESS, etc in Angular.
    </div>


3. Create a `styles` directory/folder in `/src`. So it should be `src/styles`.

4. Now move your `styles.scss` file into that directory and create your variables, mixins and custom files to that `src/styles` directory using the following naming convention: `_variables.scss`, `_mixins.scss` and `_custom.scss`.

5. Now open your `styles.scss` file and import <a href="https://getuikit.com/" target="_blank" rel="noopener">UIKit</a> and your custom/mixin/variable files:

    ```scss
    /* Custom Variables */
    @import 'variables';
    @import 'mixins';
    @import 'custom';
    /* UIKit */
    @import "variables-theme.scss";
    @import "mixins-theme.scss";
    @import "uikit-theme.scss";
    ```

6. To use your variables in other components, you'll have to import them into every
`component-name.component.scss` file like so. But because we added the `src/styles` and the `"./node_modules/uikit/src/scss"` to `"stylePreprocessorOptions"` in our `angular.json` file, we can leave off the path in our style files because they are compiled globally (read the blurb above) which makes things much cleaner:

    ```scss
    /* component-name.component.scss */
    @import 'variables';
    ```

7. Since we updated `angular.json` you'll have to restart your server.
