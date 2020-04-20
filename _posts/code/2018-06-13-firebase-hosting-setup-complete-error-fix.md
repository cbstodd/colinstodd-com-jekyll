---
layout: post
categories: code
author: Colin Stodd
tags:
  - Angular,
  - Firebase,
  - Errors
title: Firebase Hosting Setup Complete Error Fix
date: 2018-06-13 00:00:01 -0500
last_modified_at: 2018-06-13 00:00:01 -0500
pinned: false
featured: false
image: images/posts/firebase-setup-warning.png
description: fix "Firebase hosting setup complete" alert/error when deploying Angular 6 app to firebase hosting.
permalink: /posts/code/firebase-hosting-setup-complete-error-fix.html
comments: true
redirect_from:
  - /posts/firebase-hosting-setup-complete-error-fix.html
  - /posts/fix-angular-firebase-hosting-setup-complete-error-warning-page/
---

I was just trying to post my <a href="https://github.com/angular/angularfire2" target="_blank" rel="noopener">AngularFire</a> app to <a href="https://firebase.google.com/" target="_blank" rel="noopener">Firebase hosting</a> and I was getting the ***"Firebase hosting setup complete"*** alert page. I couldn't find the fix online, so I'll post it here.

**The Problem:**

When you run `ng build --prod`, Angular now places the build files in `dist/app-name/`, but prior to ng6 it would place the build files in `dist/`. So when you're uploading the files, Firebase ends up looking in the `dist` folder (probably where you're used to setting your `firebase init` public folder).

**The Fix:**

Open up your `angular.json` file and change

```json
"outputPath": "dist/your-app-name",
```

to

```json
"outputPath": "dist",
```

You should now be able to run your `firebase init` setup as you normally would have in Angular 5--.
