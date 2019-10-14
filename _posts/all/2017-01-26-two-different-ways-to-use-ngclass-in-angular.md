---
layout: post
category: posts
author: Colin Stodd
tags:
  - Angular,
  - ngClass
title: Two Different Ways To Use NgClass In Angular
date:   2017-01-28 00:00:00 -0400
pinned: true
featured: false
image: images/posts/angular.png
description: Simple example of how to use [ngClass] in Angular
permalink: /posts/two-different-ways-to-use-ngclass-in-angular.html
comments: true
redirect_from:
    - /posts/two-different-ways-to-use-ngclass-in-angular/
---

`ngClass` functions as though `ngIf` is built into the statement. The class binds and defaults to truthy. So if `showPerson` is true, it will bind, or else it will not. But you can declare the else with a falsey statement by using `!` not.

**Component:**
```typescript
// componentName.component.ts
showPerson:boolean = false;
showToggle(){
    this.showPerson = !this.showPerson;
}
```

***View:***

**Better for having more than one conditional:**
```html
<!-- * componentName.component.html * -->
<button class="btn" (click)="showToggle();"
        [ngClass]="{'btn-warning':showPerson, 'btn-success':!showPerson}">
    Toggle person
</button>
```

**Using dot notation:**
```html
<!-- * componentName.component.html * -->
<button class="btn" (click)="showToggle();"
        [class.btn-success]="!showPerson"
        [class.btn-danger]="showPerson">Toggle person
</button>
```
