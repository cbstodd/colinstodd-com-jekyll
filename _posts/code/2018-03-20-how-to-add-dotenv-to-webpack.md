---
layout: post
categories: code
author: Colin Stodd
tags:
  - Webpack,
  - .env,
  - DotEnv
title: How To Add DotEnv To Webpack
date: 2018-03-20 00:10:10 -0500
last_modified_at: 2020-03-27 00:30:00 -0500
pinned: false
featured: false
image: images/posts/env.png
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
    <i class="fad fa-exclamation-triangle text-yellow fa-lg"></i>&nbsp;&nbsp; There seems to be a <a href="https://github.com/webpack-contrib/css-loader/issues/447" target="_blank" rel="noopener">bug</a> with either <code>fs</code> or <code>dotenv-webpack</code> that gives you this error: <br>
    <code class="text-pink">Error: Can't resolve 'fs' in</code>. Nevertheless, I've included the work-around below.
    </div>

    <strong><span class="text-yellow">(Work-around)</span></strong>: Also include this to your `webpack.config.js` file if getting the aforementioned error:

    ```javascript
    module.exports = {
        // Add
        node: {
          fs: 'empty'
        },
        ...
        ...
        ...
    ```

6. In your main project folder ie `index.js`, add this line of code to require dotenv.

    ```javascript
    require('dotenv').config(); // See Blurb/Alert above
    ```

7. And you can test to see that it's working by logging it to your console like so:

    ```javascript
    console.log(process.env.SECRET_KEY_EXAMPLE);
    ```

Please let me know in the comments that everything is working for you guys. I noticed the up-votes on the first comment that it wasn't working, but I think I found the culprit and posted the fix above, but to be certain I'd appreciate it if you could let me know... <br>
Thanks,<br>
-Colin.