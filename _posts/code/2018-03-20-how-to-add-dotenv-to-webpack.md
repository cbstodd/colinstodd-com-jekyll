---
layout: post
category: code
author: Colin Stodd
tags:
  - Webpack,
  - .env,
  - DotEnv
title: How To Add DotEnv To Webpack
date:   2018-03-20 00:00:00 -0400
pinned: true
featured: false
image: ../images/posts/env.png
description: This is how you can add dotenv to a project using Webpack.
permalink: /posts/how-to-add-dotenv-to-webpack.html
comments: true
redirect_from:
  - /posts/how-to-add-dotenv-to-webpack/
---

dotenv allows you to store sensitive data variables locally (Secret Keys, etc), without having to include them directly in your app files.

This is based off of <a href="https://www.npmjs.com/package/dotenv-webpack" target="_blank">dotenv-webpack</a>'s NPM package.

You first want to install dotenv-webpack via your terminal:

```bash
npm install dotenv-webpack --save
```

Then create a file in the root of your directory `.env` and add your secret keys or whatever it is you want to hide like this.

```javascript
SECRET_KEY_EXAMPLE = '3213213232132132123132adassdasdsd';
```

Now make sure to add `.env` to your `.gitignore` file so that it doesn't get deployed to Git.

Then add this plugin to your `webpack.config.js` file.


```javascript
// webpack.config.js
const Dotenv = require('dotenv-webpack');
module.exports = {
  ...
  plugins: [
    new Dotenv()
  ]
  ...
};
```

In your main project folder ie `index.js`, add this line of code to require dotenv.

```javascript
require('dotenv').config();
```

And you can test to see that it's working by logging it to your console like so:

```javascript
console.log(process.env.SECRET_KEY_EXAMPLE);
```