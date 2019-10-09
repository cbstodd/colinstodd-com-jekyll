---
layout: post
category: posts
author: Colin Stodd
tags: Angular, UIKIT, Tutorial
title: How to add UIKit to Angular
date:   2019-02-19 15:30:12 -0400
pinned: true
featured: false
image: "https://firebasestorage.googleapis.com/v0/b/colinstodd-com.appspot.com/o/images%2F2019%2Fuikit-min.png?alt=media&token=405033ba-2f94-43cf-8b69-4a600e10f6ed"
description: How to install UIKit in Angular 6+ using CSS or SASS/SCSS.
permalink: /posts/how-to-add-uikit-to-angular.html
comments: true
redirect_from:
  - /posts/how-to-add-uikit-to-angular/
---

I recently heard about [UIKit](https://getuikit.com/) from a friend and I decided to give it a spin. It's pretty amazing. Here's how you can install it in [Angular](https://angular.io/).

1. from the root of your project you need to install jQuery and UIKit:

`npm install jquery uikit --save`

2. Open up your `angular.json` file and add the styles and scripts:

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

3. Restart your server and you should be ready to code!

---

**If you're using SCSS (SASS)**

Do the first step above, but your `angular.json` file shoule be:

```json
"styles": [
    "src/styles/styles.scss"
  ],
  "stylePreprocessorOptions": {
    "includePaths": [
      "src/styles"
    ]
  },
  "scripts": [
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/uikit/dist/js/uikit.min.js",
    "./node_modules/uikit/dist/js/uikit-icons.min.js"
  ]
```

Now create a `styles` directory/folder in your `/src` folder. So it should be `src/styles`.

Now move your `styles.scss` file into that folder and also create and add your variables, mixins and custom files to that folder using the following naming convention: `_variables.scss`, `_mixins.scss` and `_custom.scss`.

Now open your `styles.scss` file and import UIKit and your custom/mixin/variable files:

```scss
/* UIkit */
@import "../../node_modules/uikit/src/scss/variables-theme";
@import "../../node_modules/uikit/src/scss/mixins-theme";
@import "../../node_modules/uikit/src/scss/uikit-theme";

@import 'variables';
@import 'mixins';
@import 'custom';
```

To use your variables in other components in your angular app, you'll have to import it into every `component-name.component.scss` file like so:

```scss
@import '~src/styles/variables';
```

And dont forget to restart your server.
