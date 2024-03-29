---
layout: post
categories: code
author: Colin Stodd
tags:
  - CSS,
  - Tips & Tricks,
  - SASS
title: Things You Should Know About CSS
date: 2019-05-12 00:00:10 -0500
last_modified_at: 2020-03-12 00:10:10 -0500
pinned: false
featured: false
image: ../images/posts/css3.png
description: Most people use SASS/SCSS or LESS, but maybe you don't need to? Here are a couple of reasons I'm opting to use vanilla CSS instead of SCSS in my projects
permalink: /posts/code/things-you-should-know-about-css.html
comments: true
redirect_from:
  - /posts/things-you-should-know-about-css.html
  - /posts/things-you-should-know-about-css/
---

Most people use <a href="https://sass-lang.com/documentation/syntax" target="_blank" rel="noopener">SASS/SCSS</a> or <a href="http://lesscss.org/" target="_blank" rel="noopener">LESS</a>,  but maybe you don't need to?  Here are a couple of reasons I'm opting to use vanilla CSS instead of SCSS in my projects.

1. It's one less abstraction or process I need to compile. I can't tell you the number of times I build my application but something in the build process goes weary and it's because of something like SASS.

2. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener">CSS</a> now has variables.  That's right; The main reason I loved SCSS so much was because of the ability to create variables. Doing so allowed you to change the root variable and it would change everything application/site wide. It's pretty awesome, but now you can do the same with vanilla CSS. Most text editors & IDE's also support color highlighting too with CSS variables. It's simple, all you need to do is wrap your variables inside a `:root {}` like so


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
