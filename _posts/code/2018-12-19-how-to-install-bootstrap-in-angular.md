---
layout: post
categories: code
author: Colin Stodd
tags:
  - Angular,
  - Bootstrap 4,
  - Tutorial
title: How to install Bootstrap in Angular
date: 2018-12-19 00:00:10 -0500
last_modified_at: 2020-03-28 00:10:00 -0500
pinned: true
featured: false
image: images/posts/bootstrap.png
description: A tutorial on how to install Bootstrap 4 in Angular 6+ (works with the latest version 9.1 +) using CSS or SCSS/SASS.
permalink: /posts/code/how-to-install-bootstrap-in-angular.html
redirect_from:
  - /posts/how-to-install-bootstrap-in-angular.html
  - /posts/how-to-install-bootstrap-4-in-angular-4-as-a-dependency/
  - /posts/how-to-install-bootstrap-in-angular/
---
There are other packages out there that you can use such as <a href="https://github.com/valor-software/ngx-bootstrap" target="_blank" rel="noopener">ngx-bootstrap</a>, but this is the vanilla <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a> (including JavaScript) method.

There are some slight differences from versions before Angular 6. This post is for 6+ and will show you how to install <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap 4</a> in <a href="https://angular.io/" target="_blank" rel="noopener">Angular</a> using either CSS or <a href="#scss">SCSS/SASS <i class="fad fa-level-down-alt"></i></a>.

<i class="fab fa-css3 text-pink header-icon" title="CSS 3"></i>

#### _If you're using CSS:_

1. From the root of your project you need to install <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a>, <a href="https://jquery.com/" target="_blank" rel="noopener">jQuery</a> and <a href="https://popper.js.org/" target="_blank" rel="noopener">Popper.js</a>:

    ```bash
    npm install bootstrap jquery popper.js --S
    ```

    <div class="blurb"><i class="fad fa-exclamation-triangle fa-lg text-gold"></i>&nbsp;&nbsp;&nbsp; You can disregard the warning about upgrading to <code>@popperjs/core</code>. Bootstrap requires Popper.js 1.6.
    </div>


2. Update your `angular.json` file with the same code snippet below in two places: Underneath `"build"` and `"test"`:

    ```json
    "styles": [
      "src/styles.css",
      "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    ],
    "scripts": [
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/popper.js/dist/umd/popper.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
    ```

    <div id="scss" name="scss"></div>

3. Since we updated `angular.json` you'll have to restart your server. Once you do that you should be good to go for the CSS version.

---

<i class="fab fa-sass text-pink header-icon" title="SASS"></i>

#### _If you're using SCSS or SASS:_

1. From the root of your project you need to install <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a>, <a href="https://jquery.com/" target="_blank" rel="noopener">jQuery</a> and <a href="https://popper.js.org/" target="_blank" rel="noopener">Popper.js</a>:

    <div class="blurb"><i class="fad fa-exclamation-triangle fa-lg text-gold"></i>&nbsp;&nbsp;&nbsp; You can disregard the warning about upgrading to <code>@popperjs/core</code>. Bootstrap requires Popper.js 1.6.
    </div>

    ```bash
    npm install bootstrap jquery popper.js --S
    ```


2. Update your `angular.json` file with the same code snippet below in two places. Underneath `"build"` and `"test"`:

    ```json
    "styles": [
      "src/styles/styles.scss",
      "./node_modules/bootstrap/scss/bootstrap.scss"
    ],
    // See blurb about this below, and delete this comment.
    "stylePreprocessorOptions": {
      "includePaths": [
        "src/styles",
        "./node_modules/bootstrap/scss"
      ]
    },
    "scripts": [
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/popper.js/dist/umd/popper.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
    ```

    <div class="blurb"><i class="fad fa-books fa-lg"></i>&nbsp;&nbsp;&nbsp;  To read more about  <code>stylePreprocessorOptions</code> go to  &nbsp;<a href="https://github.com/angular/angular-cli/wiki/stories-global-styles" target="_blank" rel="noopener"> Angular/CLI README  <i class="fad fa-external-link-alt"></i></a>. &nbsp;It's a quick (3 min) read and definitely a good thing to be aware of if you're working with SASS, LESS, etc in Angular.
    </div>


3. Create a `styles` directory/folder in `/src`. So it should be `src/styles`.

4. Now move your `styles.scss` file into that directory and create your variables, mixins and custom files to that `src/styles` directory using the following naming convention: `_variables.scss`, `_mixins.scss` and `_custom.scss`.

5. Now open your `styles.scss` file and import <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a> and your custom/mixin/variable files:

    ```scss
    /* Bootstrap */
    @import 'bootstrap';

    /* Custom */
    @import 'variables';
    @import 'mixins';
    @import 'custom';
    ```

6. To use your variables in other components, you'll have to import them into every
`component-name.component.scss` file like so. But because we imported all of Bootstrap's `.scss` files into our `angular.json` file, we can leave off the path which makes things much cleaner:

    ```scss
    /* component-name.component.scss */
    @import 'variables';
    ```

7. Since we updated `angular.json` you'll have to restart your server.
