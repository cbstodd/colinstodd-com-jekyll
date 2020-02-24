---
layout: post
categories: code
author: Colin Stodd
tags:
  - Angular,
  - ngIf
title: How To Use *ngIf in Angular
date: 2017-04-23 00:00:00 -0400
pinned: false
featured: false
image: ../images/posts/angular.png
description: Simple example of how to use *ngif.
permalink: /posts/code/how-to-use-ngif-in-angular.html
comments: true
redirect_from:
  - /posts/how-to-use-ngif-in-angular.html
  - /posts/how-to-use-ngif-in-angular-4/
---

Here is a simple example of how to use `*ngIf` in Angular.

### Component (TypeScript):

```typescript
oddNumbers: number[] = [1, 3, 5, 7, 9];
evenNumbers: number[] = [0, 2, 4, 6, 8];
isOdd: boolean = false;

oddText: string = 'odd';
evenText: string = 'even';
```

### View (HTML):

```html
<div class="container">
  <div class="row">
      <div class="col-xs-12">
          <button class="btn btn-primary" (click)="isOdd = !isOdd">Only show
              <span *ngIf="!isOdd">{oddText}</span> <span *ngIf="isOdd">{evenText}</span> numbers
          </button>
          <br><br>
          <ul class="list-group">
              <div *ngIf="isOdd">
                  <h5>Odd numbers</h5>
                  <li class="list-group-item" *ngFor="let odd of oddNumbers">
                      { odd }
                  </li>
              </div>
              <div *ngIf="!isOdd">
                  <h5>Even numbers</h5>
                  <li class="list-group-item" *ngFor="let even of evenNumbers">
                       { even }
                  </li>
              </div>
          </ul>
      </div>
  </div>
</div>
```

