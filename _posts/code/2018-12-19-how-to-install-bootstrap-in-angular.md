---
layout: post
categories: code
author: Colin Stodd
tags:
  - Angular,
  - Bootstrap 4,
  - Bootstrap 5,
  - SASS,
  - SCSS,
  - CSS,
  - Tutorial
title: How to install Bootstrap 5 in Angular
date: 2018-12-19 00:00:10 -0500
last_modified_at: 2023-03-03 00:50:00 -0500
pinned: false
featured: true
image: https://blog.getbootstrap.com/assets/img/2020/06/v5-new-logo.png
description: A tutorial on how to install Bootstrap 4 or 5 in Angular 6+ using CSS or SCSS/SASS.
permalink: /posts/code/how-to-install-bootstrap-in-angular.html
redirect_from:
  - /posts/how-to-install-bootstrap-in-angular.html
  - /posts/how-to-install-bootstrap-4-in-angular-4-as-a-dependency/
  - /posts/how-to-install-bootstrap-in-angular/
---


<div class="blurb">
<h3 class="text-yellow"><i class="fad fa-info-circle fa-lg"></i>&nbsp;&nbsp; ***UPDATE*** A couple things to note with Bootstrap 5:</h3>
<ul>
<li><a href="https://jquery.com" title="jQuery" target="_blank" rel="nofollow noopener">jQuery</a> is no longer a dependency.</li>
<li><a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" title="Bootstrap 5" target="_blank" rel="nofollow noopener">Bootstrap 5</a> no longer supports Internet Explorer 👍 🥳 🍾.</li>
</ul>
</div>

There are other packages out there that you can use such as <a href="https://github.com/valor-software/ngx-bootstrap" target="_blank" rel="noopener">ngx-bootstrap</a>, but this is the vanilla <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a> (including JavaScript) method.

There are some slight differences from versions before Angular 6. This post is for 6+ and will show you how to install <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap 4 or 5</a> in <a href="https://angular.io/" target="_blank" rel="noopener">Angular</a> using either CSS or <a href="#scss">SCSS/SASS <i class="fad fa-level-down-alt"></i></a>.

<i class="fab fa-css3 text-pink header-icon" title="CSS 3"></i>

<h3 class="text-pink"><em>If you're using CSS:</em></h3>

1. From the root of your project you need to install <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap 5</a>, and <a href="https://popper.js.org/" target="_blank" rel="noopener">Popper.js</a> which is used for dropdown menu's and other JavaScript sort of things:

    ```bash
    npm install bootstrap popper.js --S
    ```


2. Update your `angular.json` file with the same code snippet below in two places: Underneath `"build"` and `"test"`:

    ```json
    "styles": [
      "src/styles.css",
      "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    ],
    "scripts": [
      "./node_modules/popper.js/dist/umd/popper.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
    ```

    

3. Since we updated `angular.json` you'll have to restart your server. Once you do that you should be good to go for the CSS version.

---

<i class="fab fa-sass text-pink header-icon" title="SASS"></i>

<h3 class="text-pink"><em>If you're using SCSS or SASS:</em></h3>

1. From the root of your project you need to install <a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap 5</a>, and <a href="https://popper.js.org/" target="_blank" rel="noopener">Popper.js</a> which is used for dropdown menu's and other JavaScript sort of things:

    ```bash
    npm install bootstrap popper.js --S
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
      "./node_modules/popper.js/dist/umd/popper.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
    ```

    <div class="blurb"><i class="fad fa-books fa-lg"></i>&nbsp;&nbsp;&nbsp;  To read more about  <code>stylePreprocessorOptions</code> go to  &nbsp;<a href="https://angular.io/guide/workspace-config#styles-and-scripts-configuration" target="_blank" rel="noopener"> Angular/CLI README  <i class="fad fa-external-link-alt"></i></a>. &nbsp;It's a quick (3 min) read and definitely a good thing to be aware of if you're working with SASS, LESS, etc in Angular.
    </div>


3. Create a `styles` directory/folder in `/src`. So it should be `src/styles`.

4. Now move your `styles.scss` file into that directory and create your variables, mixins and custom files to that `src/styles` directory using the following naming convention: `_variables.scss`, `_mixins.scss` and `_custom.scss`.

    ```css
    src
    ├── app
    │   ├── app-routing.module.ts
    │   ├── app.component.html
    │   ├── app.component.scss
    │   ├── app.component.spec.ts
    │   ├── app.component.ts
    │   ├── app.module.ts
    │   └── users
    ├── assets
    ├── environments
    │   ├── environment.prod.ts
    │   └── environment.ts
    ├── favicon.ico
    ├── index.html
    ├── main.ts
    ├── polyfills.ts
    ├── styles
    │   ├── _custom.scss /* Add files here but they should have the "_" pre-pended like `_custom.scss`, (shown above) other than `styles.scss`.  */
    │   ├── _mixins.scss /* Your editor and the lang strips these but I'm not entire sure why they are needed, but that's what I was taught. */
    │   ├── styles.scss
    │   └── _variables.scss  /* Add files here but they should have the "_" pre-pended like `_custom.scss`, (shown above) other than `styles.scss`.  */
    └── test.ts
    ```


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
