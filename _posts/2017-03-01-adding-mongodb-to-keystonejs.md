---
layout: post
category: posts
author: Colin Stodd
tags: Angular, Webstorm
title: Adding MongoDB To KeystoneJS
date:   2017-03-01 00:00:00 -0400
pinned: true
featured: false
image: "https://res.cloudinary.com/colinstodd-com/image/upload/c_fit/xsp7s0ofqlpqzdeb2boc.png"
description: How to connect your mLab MongoDB to your KeystoneJS app.
permalink: /posts/adding-mongodb-to-keystonejs.html
comments: true
redirect_from:
    - /posts/adding-mongodb-to-keystonejs/
---

 There isn't (that I can find) clear instructions on how to connect your mLab (MongoDB) database to your KeystoneJS app. I'm writing this to try and help future on-lookers. It's stupid simple, but there is one step I feel is missing on the KeystoneJS documentation .

1. You first need to create a database. <a href="https://mlab.com/" target="_blank">mLab</a> gives you a free sandbox starter. Sign up for a account. Once you have created the account you need to create a database.

2. Once you create the database, you have to make sure you create a default/admin user in order for it to work. Todo that you need to click on the newly created database, and add user; You can refer to (click on) the image at the top of the page.

3. Once you have created that database and user, you need to click on the database you created and take the string that looks like this, and replace the `<dbuser>:<dbpassword> `with your username and password. Add this to your `.env` file, following `MONGO_URI=` mine looks like this:


```javascript
MONGO_URI=mongodb://YOUR_USERNAME:YOUR_PASSWORD@ds12345.mlab.com:54321/colinstoddcom
```

4. Now this is the part that is left out of the documentation. In your keystone.js file you need to add:

```javascript
'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/colinstodd',
```

in your `keystone.init`. Mine looks something like this:

```javascript

keystone.init({
    'name':  'colinstodd.com',
    'brand': 'colinstodd.com',

    'sass':        'public',
    'static':      'public',
    'favicon':     'public/favicon.ico',
    'views':       'templates/views',
    'mongo':       process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/colinstodd-com', // ADD HERE
    'view engine': '.hbs',

    'custom engine': handlebars.create({
        layoutsDir:    'templates/views/layouts',
        partialsDir:   'templates/views/partials',
        defaultLayout: 'default',
        helpers:       new require('./templates/views/helpers')(),
        extname:       '.hbs'
    }).engine,

    'emails': 'templates/emails',

    'auto update': true,
    'session':     true,
    'auth':        true,
    'user model':  'User'
});
```


The  `MONGO_URI` comes from the variable in your `.env` file we just updated. This just sets your database for each enviornment (development and production).

Once you have these added, start your KeystoneJS server and you should be up and running.  Let me know if you have any questions.
