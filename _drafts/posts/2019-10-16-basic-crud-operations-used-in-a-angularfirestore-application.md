---
layout: post
title: Basic CRUD Operations Used In A AngularFirestore Application
author: Colin Stodd
description: CRUD snippets that I tend to reuse in every Angular service
featured: false
pinned: false
image: "../../images/posts/angularfire.png"
date:   2019-10-16 22:30:00 -0400
categories: code
Items:
  - Angular,
  - Firebase,
  - AngularFirestore2
  - Firestore,
  - Observables,
  - UID,
  - CRUD
comments: true
# permalink:
---

I've been building a bunch of <a href="https://github.com/angular/angularfire2" target="_blank" rel="noopener">AngularFirestore2</a> apps recently (Loving it BTW), but I've come to realize that I'm really just copying and pasting much of the functionality of my services and renaming the `Item.ts` and Observable names. Anyway, I figured I'd post these common functions mainly for easy access (for myself), but I figured you might be able to get some use from them as well.

Who knows, maybe this becomes some sort of documentation cheat-sheet of some sort down the line.

For the sake of simplicty and reuseability (you can do a find a replace to reuse) I'm going to call each "object" or "type" an **Item**.

---

### Returns an Observable list of all Items by its "name" in ascending order:

```typescript
export class ItemService {

  itemCollection: AngularFirestoreCollection<Item>;
  items$: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {}

  getAllitems(): Observable<Item[]> {
    this.itemCollection = this.afs.collection<Item>('items', (ref) => {
        return ref.orderBy('name', 'asc');
    });
    return this.items$ = this.itemCollection.valueChanges();
  }

}
```

---

### Returns a single Observable Item from it's ID:

```typescript
export class ItemService {

  itemCollection: AngularFirestoreDocument<Item>;
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

---

### Sets Item data (from a reactive form):

```typescript
export class ItemService {
  uid: string;

  constructor(private afs: AngularFirestore, private userService: UsersService) {
    this.uid = userService.currentUser.uid;
  }

    saveItem(formData: Item): Promise<void> {
        const currentDate = Date.now(); // Or: const currentDate = new Date(); If you want a Timestamp.
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

---

### Update/Merge Item Data:

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
              createdAt: formData.createdAt || Date.now(),
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

### Delete an Item:

```typescript
export class ItemService {

  itemCollection: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {}

  deleteTag(id: string): void {
      this.itemDoc = this.afs.doc<Tag>(`items/${id}`);
      this.itemDoc.delete()
          .then(() => {
            // Do Something with Success
          }))
          .catch((error) => console.error(`myERROR: `, error));
  }

}
```

And with that you should have the general CRUD operations taken care of. I will try and add more complex situations when I find the time. If you find something wrong or missing please let me know in the comments.