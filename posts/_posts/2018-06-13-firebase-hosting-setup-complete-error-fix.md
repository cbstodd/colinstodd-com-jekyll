---
layout: post
category: posts
author: Colin Stodd
tags: Angular, Firebase, Errors
title: Firebase Hosting Setup Complete Error Fix
date:   2018-06-13 00:00:01 -0400
pinned: true
featured: false
image: "https://res.cloudinary.com/colinstodd-com/image/upload/c_fit/v86saw7fsim04orhctll.png"
description: fix "Firebase hosting setup complete" alert/error when deploying Angular 6 app to firebase hosting.
permalink: /posts/firebase-hosting-setup-complete-error-fix
redirect_from:
  - /posts/fix-angular-firebase-hosting-setup-complete-error-warning-page
---

I was just trying to post my AngularFire app to Firebase hosting and I was getting the ***"Firebase hosting setup complete"*** alert page. I couldn't find the fix online, so I'll post it here.

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