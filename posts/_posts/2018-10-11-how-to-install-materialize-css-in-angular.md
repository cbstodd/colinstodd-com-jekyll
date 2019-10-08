---
layout: post
category: posts
author: Colin Stodd
tags: Angular, Materialize CSS, Tutorial
title: How To Install Materialize CSS In Angular
date:   2018-10-11 00:00:01 -0400
pinned: true
featured: false
image: "https://firebasestorage.googleapis.com/v0/b/colinstodd-com.appspot.com/o/images%2F2019%2Fmatcss-min.png?alt=media&token=ab6b71f7-ba40-40a5-8729-d5ead821e246"
description: How to install Materialize CSS in Angular
permalink: /posts/how-to-install-materialize-css-in-angular
redirect_from:
  - /posts/how-to-install-materialize-css-in-angular-6
---

I've recently been playing with <a href="http://materializecss.com/" target="_blank">Materailize CSS</a>, and It's beautiful. Here's how you install it in Angular.

1. Once you've created your project, open up your terminal and run:
npm i materialize-css@next jquery --save

This installs <a href="http://materializecss.com/" target="_blank">Materailize CSS</a> and <a href="https://jquery.com/" target="_blank">jQuery</a>.

2. Open up your `angular.json` file and add the style and scripts.


```json
"styles": [
  "./node_modules/materialize-css/dist/css/materialize.css",
  "src/styles.css"
],
  "scripts": [
  "./node_modules/jquery/dist/jquery.min.js",
  "./node_modules/materialize-css/dist/js/materialize.js"
]
```

3. Restart your server and you should be ready to go!