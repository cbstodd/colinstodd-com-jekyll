---
layout: post
categories: code
author: Colin Stodd
tags:
  - ES6,
  - Class,
  - Example
title: ES6 Class Example
date: 2016-08-16 00:00:10 -05:00
last_modified_at: 2016-08-16 00:00:10 -05:00
pinned: false
featured: false
image: ../images/posts/es6.png
description: Example of a class in Ecmascript/ES6
permalink: /posts/code/es6-class-example.html
comments: true
redirect_from:
  - /posts/es6-class-example.html
  - /posts/es6-class-example/
---

ES6 (The latest version of JavaScript) now supports classes. Here is a simple example of how to use it with a constructor function.

```javascript
class Student {
  constructor( { name, age, interestLevel = 5 } = {} ) {
      this.name = name;
      this.age = age;
      this.interestLevel = interestLevel;
      this.grades = new Map();
  }
}
let colper = new Student({ name: 'Colper', age: 32 });

colper.grades.set('JavaScript', 'B');
colper.grades.set('Ruby', 'C');
colper.grades.set('Python', 'D');

console.log(Array.from(colper.grades));
```
