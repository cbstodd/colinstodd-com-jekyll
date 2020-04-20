---
layout: post
title: Common Angular Firestore CRUD Functions
author: Colin Stodd
description: CRUD snippets that I tend to reuse in every Angular service
featured: false
pinned: false
image: images/posts/angularfire.png
date: 2019-10-19 22:30:00 -0500
last_modified_at: 2020-04-07 10:30:00 -0500
categories: code
tags:
  - Angular,
  - Firestore,
  - Observables,
  - UID,
  - CRUD,
  - Services,
  - Examples
comments: true
permalink: /posts/code/common-angular-firestore-crud-functions.html
redirect_from:
  - /posts/code/crud-operations-in-a-angular-firestore-app.html
  - /posts/crud-operations-in-a-angular-firestore-app.html
---

I've been building a bunch of <a href="https://github.com/angular/angularfire2" target="_blank" rel="noopener">AngularFirestore2</a> apps recently, and I've come to realize that I'm really just copying and pasting much of the functionality of my services and renaming the `Item.ts` types and Observable names. Anyway, I figured I'd post these common functions mainly for easy access (for myself), but I thought maybe you guys could find the code useful as well. Who knows, maybe this becomes a documentation cheat-sheet down the line.

For the sake of simplicity and reusability (just do a find and replace) I'm going to call each "object" or "type" an **`Item`**; so you should be able to use your favorite <a href="https://code.visualstudio.com/" target="_blank" rel="noopener" title="Visual Studio Code">text editor</a> or <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener" title="Webstorm">IDE</a> to update to whatever you need.

All of the code is meant to be placed in your service. Going off of the `Item` naming convention, it would be
`item.service.ts`

You'll need to create the functionality with forms and user auth separately. Maybe down the line I'll write that and link to it in a future post.

-----

### <i class="fad fa-clipboard-list"></i> Returns a Observable list of all `Items` by its "`name`" in ascending order:

```typescript
export class ItemService {

  itemCollection: AngularFirestoreCollection<Item>;
  items$: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {}

  getAllItems(): Observable<Item[]> {
    this.itemCollection = this.afs.collection<Item>('items', (ref) => {
        return ref.orderBy('name', 'asc');
    });
    return this.items$ = this.itemCollection.valueChanges();
  }

}
```

-----

### <i class="fad fa-hand-point-up"></i> Returns a single Observable `Item` from it's `ID`:

```typescript
export class ItemService {

  itemDoc: AngularFirestoreDocument<Item>;
  item$: Observable<Item>;

  constructor(private afs: AngularFirestore) {}

  getItem(id: string): Observable<Item> {
      this.itemDoc = this.afs.doc<Item>(`items/${id}`);
      this.item$ = this.itemDoc.snapshotChanges().pipe(
          map((action) => {
              if (action.payload.exists === false) {
                  return null;
              } else {
                  const data = action.payload.data() as Item;
                  data.id = action.payload.id;
                  return data;
              }
          }));
      return this.item$;
  }

}
```

-----

### <i class="fad fa-save"></i> Sets/Saves `Item` data (from a reactive form):

```typescript
export class ItemService {
  uid: string;

  constructor(private afs: AngularFirestore, private userService: UsersService) {
    this.uid = userService.currentUser.uid;
  }

  saveItem(formData: Item): Promise<void> {
      const currentDate = Date.now(); // OR
      // const currentDate = new Date(); If you want a Timestamp.
      const newId = this.afs.createId();
      const itemRef: AngularFirestoreDocument<Item> = this.afs.doc(`items/${newId}`);

    if (formData && this.uid) {
      const data: Item = {
          authorId: this.uid || '',
          createdAt: currentDate,
          description: formData.description || '',
          id: newId,
          name: formData.name || '',
          updatedAt: currentDate,
      };
    }

    return itemRef.set(data)
        .then(() => {
            // Set some sort of Success alert/action
        })
        .catch((error) => {
            // Set some Error alert/action
            console.error(`myERROR: `, error);
        });
  }

}
```

-----

### <i class="fad fa-cloud-upload-alt"></i> Updates/Merges `Item` Data:

```typescript
export class ItemService {
  uid: string;

  constructor(private afs: AngularFirestore, private userService: UsersService) {
    this.uid = userService.currentUser.uid;
  }

  updateItem(formData: Item, id: string): Promise<void> {
    const newDate = Date.now();
    const questRef: AngularFirestoreDocument<Item> = this.afs.doc(`item/${id}`);

    if (this.uid && formData && id) {
      const data: Item = {
          authorId: this.uid || '',
          createdAt: formData.createdAt || newDate,
          description: formData.description || '',
          id,
          name: formData.name || '',
          updatedAt: newDate,
    };
  }

  return questRef.set(data, { merge: true })
      .then(() => {
          // Set some sort of Success alert/action
      })
      .catch((error) => {
          // Set some Error alert/action
          console.error(`myERROR: `, error);
      });
  }

}
```

-----

### <i class="fad fa-trash-alt"></i> Delete an `Item`:

```typescript
export class ItemService {

  itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {}

  deleteItem(id: string): void {
    this.itemDoc = this.afs.doc<Item>(`items/${id}`);
    this.itemDoc.delete()
        .then(() => {
          // Do Something with Success
        })
        .catch((error) => console.error(`myERROR: `, error));
  }

}
```

And with that you should have the general CRUD operations taken care of. I will try and add more complex situations when I find the time. If you find something wrong or missing please let me know in the comments.

-----