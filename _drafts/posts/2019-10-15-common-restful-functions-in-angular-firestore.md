---
layout: post
title: Common RESTful functions used in a Angular Firestore Application
author: Colin Stodd
description: Snippets that I find to be reusing in the services of my AngularFirestore apps.
featured: true
pinned: true
image:
date:   2019-10-15 22:30:00 -0400
categories: code
tags:
  - Angular,
  - Firebase,
  - Firestore,
  - Observables,
  - Functions,
  - CRUD
comments: true
permalink:
---

I've been building a bunch of <a href="https://github.com/angular/angularfire2" target="_blank" rel="noopener">AngularFirestore2</a> apps recently (Loving it BTW), but I've come to realize that I'm really just copying and pasting much of the functionality of my services and renaming the `Model.ts` and Observable names. Anyway, I figured I'd post these common functions mainly for easy access (for myself), but I figured you might be able to get some use from them as well.

Who knows, maybe this becomes some sort of documentation cheat-sheet of some sort down the line.