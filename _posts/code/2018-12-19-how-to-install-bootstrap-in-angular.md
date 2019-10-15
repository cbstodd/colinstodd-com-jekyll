---
layout: post
category: code
author: Colin Stodd
tags:
  - Angular,
  - Bootstrap 4,
  - Tutorial
title: How to install Bootstrap in Angular
date:   2018-12-19 00:00:00 -0400
pinned: true
featured: true
image: ../images/posts/bootstrap.png
description: How to install Bootstrap 4 in Angular 6, 7, 8+.
permalink: /posts/how-to-install-bootstrap-in-angular.html
redirect_from:
  - /posts/how-to-install-bootstrap-4-in-angular-4-as-a-dependency/
  - /posts/how-to-install-bootstrap-in-angular/
---
There are other packages out there that you can use such as [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap), but this is the vanilla [Bootstrap](https://getbootstrap.com/) (including JavaScript) method.

There are some slight differences from versions before Angular 6.

1. From the root of your project, run in your terminal:

```bash
npm install bootstrap --save
```

2. And you need to install it's dependencies ([jQuery](https://jquery.com/)) and ([Popper.JS](https://popper.js.org/)):

```bash
npm install jquery popper.js --save
```

3. Open up your `angular.json` file to find and add the style and scripts:

```json
"styles": [
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "./node_modules/jquery/dist/jquery.min.js",
  "./node_modules/popper.js/dist/umd/popper.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

---
***If you're using SCSS use this config:***

```json
"styles": [
    "src/styles.scss"
  ],
  "scripts": [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/popper.js/dist/umd/popper.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
  ],
```

4. Restart your server and you should be ready to code! (If using CSS)

**With SASS you need to make one last step. Place the line below in your styles.scss file (imports bootstrap)**

```scss
@import "../node_modules/bootstrap/scss/bootstrap"
```

***Extra Sass file configuration (suggestion but not required):***

Create directory in: `src/styles`

Create these files and place in that directory: `_variables.scss` and `_custom.scss`

Change: `.angular-cli.json`

```json
"styles": [
    "styles/styles.sass"
  ],
```

Import files into: `styles.scss`

```scss
@import "../../node_modules/bootstrap/scss/bootstrap";
@import "variables";
@import "custom";
```

To use your variables in other components in your angular app, you'll have to import it into every `component-name.component.scss` file like so:

```scss
@import '~src/styles/variables';
```
