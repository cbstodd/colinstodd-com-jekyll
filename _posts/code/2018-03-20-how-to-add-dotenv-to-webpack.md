---
layout: post
categories: code
author: Colin Stodd
tags:
  - Webpack,
  - .env,
  - DotEnv
title: How To Add DotEnv To Webpack
date: 2018-03-20 00:00:10 -05:00
last_modified_at: 2020-03-23 00:10:00 -05:00
pinned: false
featured: false
image: ../images/posts/env.png
description: This is how you can add dotenv to a project using Webpack.
permalink: /posts/code/how-to-add-dotenv-to-webpack.html
comments: true
redirect_from:
  - /posts/how-to-add-dotenv-to-webpack.html
  - /posts/how-to-add-dotenv-to-webpack/
---

dotenv allows you to store sensitive data variables locally (Secret Keys, etc), without having to include them directly in your app files.

This is based off of <a href="https://www.npmjs.com/package/dotenv-webpack" target="_blank" rel="noopener">dotenv-webpack</a>'s NPM package.

1. You first want to install dotenv-webpack via your terminal:

    ```bash
    npm install dotenv-webpack --save
    ```

2. Then create a file in the root of your directory `.env` and add your secret keys or whatever it is you want to hide like this.

    ```javascript
    SECRET_KEY_EXAMPLE = '3213213232132132123132adassdasdsd';
    ```

3. Now make sure to add `.env` to your `.gitignore` file so that it doesn't get deployed to Git.

    ```bash
    # .gitignore

    .env # Add to .gitignore file
    node_modules
    ```


4. Then add this plugin to your `webpack.config.js` file.

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


    <div class="blurb">
    <i class="fad fa-exclamation-triangle text-yellow fa-lg"></i>&nbsp;&nbsp;  Depending on what you are building, you may or may-NOT need to require the <code class="javascript">require('dotenv').config();</code> code snippet below in your root <code>.js</code> file. It depends on if you are using <code>fs</code>.
    </div>

5. In your main project folder ie `index.js`, add this line of code to require dotenv.

    ```javascript
    require('dotenv').config(); // See Blurb/Alert above
    ```

6. And you can test to see that it's working by logging it to your console like so:

    ```javascript
    console.log(process.env.SECRET_KEY_EXAMPLE);
    ```