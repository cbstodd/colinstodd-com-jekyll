---
layout: post
category: posts
author: Colin Stodd
tags: Angular, ngIf
title: How To Use *ngIf in Angular
date:   2017-04-23 00:00:00 -0400
pinned: true
featured: false
image: "https://firebasestorage.googleapis.com/v0/b/colinstodd-com.appspot.com/o/images%2F2019%2Fangular_logo.png?alt=media&token=c049718f-eef9-4c4a-9ce9-73fcb3e271cc"
description: Simple example of how to use *ngif.
---

Here is a simple example of how to use *ngIf in Angular.

### Component:

```typescript
oddNumbers = [1, 3, 5, 7, 9];
evenNumbers = [0, 2, 4, 6, 8];
onlyOdd = false;

oddText = 'odd';
evenText = 'even';
```

### View:

```html
<div class="container">
  <div class="row">
      <div class="col-xs-12">
          <button class="btn btn-primary" (click)="onlyOdd = !onlyOdd">Only show
              <span *ngIf="!onlyOdd">{oddText}</span> <span *ngIf="onlyOdd">{evenText}</span> numbers
          </button>
          <br><br>
          <ul class="list-group">
              <div *ngIf="onlyOdd">
                  <h5>Odd numbers</h5>
                  <li class="list-group-item" *ngFor="let odd of oddNumbers">
                      { odd }
                  </li>
              </div>
              <div *ngIf="!onlyOdd">
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

