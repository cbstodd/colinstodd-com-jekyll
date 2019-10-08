---
layout: post
category: posts
author: Colin Stodd
tags: CSS, Tips & Tricks, SASS
title: Things You Should Know About CSS
date:   2019-05-12 15:30:12 -0400
pinned: false
featured: true
image: "https://firebasestorage.googleapis.com/v0/b/colinstodd-com.appspot.com/o/images%2F2019%2Fcss3.png?alt=media&token=713b22a8-f662-452b-8317-e807d9ad356a"
description: Most people use SASS/SCSS or LESS, but maybe you don't need to? Here are a couple of reasons I'm opting to use vanilla CSS instead of SCSS in my projects
permalink: /posts/things-you-should-know-about-css.html
comments: true
redirect_from:
  - /posts/things-you-should-know-about-css
---

Most people use SASS/SCSS or LESS,  but maybe you don't need to?  Here are a couple of reasons I'm opting to use vanilla CSS instead of SCSS in my projects.

1. It's one less abstraction or process I need to compile. I can't tell you the number of times I build my application but something in the build process goes weary and it's because of something like SASS.

2. CSS now has variables.  That's right; The main reason I loved SCSS so much was because of the ability to create variables. Doing so allowed you to change the root variable and it would change everything application/site wide. It's pretty awesome, but now you can do the same with vanilla CSS. Most text editors & IDE's also support color highlighting too with CSS variables. It's simple, all you need to do is wrap your variables inside a `:root {}` like so


```css
:root {
    /* Fonts */
    --sans-font: 'Roboto', sans-serif;
    --serif-font: 'Cambria', serif;

    /* Colors */
    --dark-red: #860000;
    --light-gray: #cccccc;
    --dark: #444444;
}

p {
    font-family: var(--sans-font);
    color: var(--dark);
}
```


And you can call those variables with `var(--var-name)`.

3. Another reason I've started using CSS again is CSS Grid. With a few lines of code, you can create your own CSS "Grid Framework" like [Bootstrap](https://getbootstrap.com/), with columns and all. Since CSS Grid takes some more explaining (and I'm really lazy), I'm going to forward you to a couple of resources that are amazing and must be bookmarked. This [interactive course from Scrimba](https://scrimba.com/g/gR8PTE) will leave you a pro at CSS Grid and should only take you an afternoon to complete, and best of all it's 100% FREE!

And for reference sake, you can't get much better than [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).

This guide from Learn [CSS Grid](https://learncssgrid.com/) is also a great reference/education tool.

And with those, you'll be well on your way to a CSS Grid pro!