---
layout: post
category: posts
author: Colin Stodd
tags: ES6, Class, Example
title: ES6 Class Example
date:   2016-08-16 00:00:00 -0400
pinned: true
featured: false
image: "images/posts/es6.png"
description: Example of a class in Ecmascript/ES6
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