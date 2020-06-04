---
layout: post
categories: code
author: Colin Stodd
tags:
  - Angular,
  - Materialize CSS,
  - Tutorial
title: How To Install Materialize CSS In Angular
date: 2018-10-11 00:00:01 -0500
last_modified_at: 2020-06-04 00:00:10 -0500
pinned: true
featured: false
image: ../images/posts/matcss-min.png
description: Tutorial on how to install Materialize CSS in Angular using Ngx-Materalize or vanilla Materialize CSS.
permalink: /posts/code/how-to-install-materialize-css-in-angular.html
comments: true
redirect_from:
  - /posts/how-to-install-materialize-css-in-angular.html
  - /posts/how-to-install-materialize-css-in-angular-6/
  - /blog/post/how-to-install-materialize-css-in-angular-5
---

<a href="http://materializecss.com/" target="_blank" rel="noopener">Materialize CSS</a> has been a great tool for quick and elegant front-end development. I originally wrote this post to show you how to install the vanilla <a href="http://materializecss.com/" target="_blank" rel="noopener">Materialize CSS</a> in <a href="https://angular.io/" target="_blank" rel="noopener">Angular</a> (<a href="#vanilla-install">still here in the second section <i class="fad fa-level-down-alt"></i></a>) however, I discovered the open source project: <a href="https://sherweb.github.io/ngx-materialize/home" target="_blank" rel="noopener">ngx-materalize</a> and I highly recommend using this package if you are using Materialize CSS with <a href="https://angular.io/" target="_blank" rel="noopener">Angular</a>. It may not be as quick to get started, but in the long run you will end up saving a bunch of time and frustration using it's built-in features. It makes development much cleaner and easier than the vanilla version. Here's how you can install it.

1. Once you've created your project, open up your terminal and run:

    ```bash
    npm install --save ngx-materialize
    ```

    This installs <a href="http://materializecss.com/" target="_blank" rel="noopener">Materailize CSS</a>, <a href="https://jquery.com/" target="_blank" rel="noopener">jQuery</a> and the added features of <a href="https://sherweb.github.io/ngx-materialize/home" target="_blank" rel="noopener">ngx-materalize</a>.

2. Open up your `angular.json` file and add the style and scripts.


    ```json
    "styles": [
      "src/styles.css",
      "node_modules/materialize-css/dist/css/materialize.min.css"
    ],
      "scripts": [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/materialize-css/dist/js/materialize.min.js"
    ]
    ```

3. Add `jQuery` and `materalize-css` types to your `.tsconfig` file:

    ```json
        {
      "extends": "../tsconfig.json",
      "compilerOptions": {
        "outDir": "../out-tsc/app",
        "module": "es2015",
        "types": [
          "jquery", // Add
          "materialize-css" // Add
        ]
      },
      "exclude": [
        "src/test.ts",
        "**/*.spec.ts"
      ]
    }
    ```

4. Install the icons if you choose by running this in your terminal:

    ```bash
    npm install --save @mdi/font
    ```

5. Add the icons to your `angular.json` file:

    ```json
    "styles": [
      "src/styles.scss",
      "node_modules/materialize-css/dist/css/materialize.min.css",
      "node_modules/@mdi/font/css/materialdesignicons.min.css" // Add
    ],
    ```

6. Lastly, you'll probably want to install Animations, so run this in your terminal:

    ```bash
    npm install --save @angular/animations
    ```

    You use animations by adding them to every module you want them to be used. If you want them to be used throughout your entire app then you could add them to your `app.module.ts` file like this:

    ```typescript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    // Add line below
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        // Add line below:
         BrowserAnimationsModule,
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

Now you should be on your way to using Materialize CSS with Angular using <a href="https://sherweb.github.io/ngx-materialize/home" target="_blank" rel="noopener">ngx-materalize</a>. **Don't forget to restart your server**!

<div name="vanilla-install" id="vanilla-install"></div>

<hr>

### If you would like to install the vanilla version of MaterializeCSS:

1. Once you’ve created your project, open up your terminal and run:

    ```bash
     npm i materialize-css jquery --S
     ```
    This installs <a href="http://materializecss.com/" target="_blank" rel="noopener">Materailize CSS</a> and <a href="https://jquery.com/" target="_blank" rel="noopener">jQuery</a>

2. If you want to use the <a href="https://google.github.io/material-design-icons/#icon-font-for-the-web" target="_blank" rel="noopener">Material Design</a> icons add this to the your `index.html` file:

    ```html
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    ```

    You can <a href="https://google.github.io/material-design-icons/#icon-font-for-the-web" target="_blank" rel="noopener">host the icons</a> yourself but I prefer a CDN as it's likely people have it downloaded to their browser's cache and any new fonts are automatically updated/added, but you may want to host them yourself if you are building an app that needs to work offline (e.g. a Progressive Web App (PWA)). If that's the case you can go to the <a href="https://google.github.io/material-design-icons/#icon-font-for-the-web" target="_blank" rel="noopener">Material Design site</a> for directions on how to do that.

3. Open up your `angular.json` file and add the style and scripts.

    ```json
    "styles": [
      "src/styles.css",
      "node_modules/materialize-css/dist/css/materialize.min.css"
    ],
      "scripts": [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/materialize-css/dist/js/materialize.min.js"
    ]
    ```

4. Restart your server and you should be ready to go!








