---
layout: post
category: posts
author: Colin Stodd
tags: ES6, Subclass, Example
title: ES6 Subclass Example
date:   2016-08-16 00:00:00 -0400
pinned: true
featured: false
image: "images/posts/es6.png"
description: An example of how to create a subclass (Super) in ES6
---

You can extend or import/assign classes within a class. Here is a example of that.


```javascript
class Developer {
      language() {
          const languages = [
              'Ruby',
              'JavaScript',
              'Python',
              'jQuery',
              'Swift',
              'HTML5',
              'CSS3'
          ];
      }

      constructor( { name, age, eyeColor = 'blue' } = {} ) {
          this.name = name;
          this.age = age;
          this.eyeColor = eyeColor;
      }
  }

  class Student extends Developer {
      // If called a framework as true, then it will call the instance of language
      //   if false, then it will call a language aka framework from the Student class
      language( framework ) {
          if (framework){
              super.language();
              return;
          }
          const languages = [
              'Ruby on Rails',
              'Angular',
              'ReactJS',
              'Django',
              'Ionic',
              'Ember'
          ];
          // Generates a random language
          console.log(`${this.name} is learning ${languages[Math.floor(Math.random() * languages.length)]}.`);
      }

      constructor( {name, age, interestLevel = 5 } = {} ) {
          super({ name, age }); // Needed to call instances from Person
          this.name = name; // Needed to call this.name
          this.age = age; // Needed to call this.name
          this.interestLevel = interestLevel;
          this.grades = new Map();
      }
  }


  // Sets the Class name
  // let colin = new Developer({ name: 'Colin', age: 32 });
  let colin = new Student({ name: 'Colin', age: 32, interestLevel: 4 });
  colin.language(true);
  let colper = new Developer(({ name: 'Colper', age: 32 }));

  //Calls the language function on that class
  colin.language();
  console.log(`Colin's interest level is: ${colin.interestLevel}`);
  console.log(`Colin's developer name is ${colper.name}, and is ${colper.age} years old.`);
  ```