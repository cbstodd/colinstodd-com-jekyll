---
layout: post
category: posts
author: Colin Stodd
tags: Angular, Tips
title: How To Create A Username From An Email Address Using AngularFire2
date:   2017-07-24 00:00:00 -0400
pinned: true
featured: false
image: "https://res.cloudinary.com/colinstodd-com/image/upload/c_fit,h_600,q_80/sskxe4hevg2utui8ce4z"
description: How to create a username from an email address using AngularFire2's email/password authentication method.
permalink: /posts/how-to-create-a-username-from-an-email-address-using-angularfire2
---

I figured this out the other day so I thought I'd share how I used <a href="https://github.com/angular/angularfire2" target="_blank">AngularFire2</a>'s email/password observable to split the email into a username. There might be a better way to do it, but this is pretty straightforward.

My goal was to display the username on a page when logged in (see image). Basically strip anything off after the `@` (the fake email address was `colper@example.com`). It sill needs styling but you get the point. This assumes you have already set up <a href="https://github.com/angular/angularfire2" target="_blank">AngularFire2</a>'s email/password user authentication and can successfully display a user's values.

I have my authentication logic in a `auth.service.ts` service file. And included the `auth.service.ts` where I want to render the username. In this case it was the `occasions.component.ts`.

From my `authService` I created a function `getUsername()`. I subscribe to that user and `split()`, `join()`, and convert it back to a `toString()` adding the `@` in front of the username. Fairly straightforward, but I'm still getting down my promises/observables and thought this might help someone doing the same.

```typescript
// auth.service.ts
export class NavbarComponent implements OnInit {
    username; // Dont forget This

    getUsername() {
        if (this.afAuth.auth.currentUser) {
            this.username = this.user
                .subscribe((user) => {
                    const splitEmail = user.email.split('@').splice(0, 1);
                    const strEmail   = splitEmail.toString();
                    this.username    = `@${strEmail}`;
                });
        }
    }
}
```

```typescript
// occasions.component.ts
constructor(
    private dataService: DataService,
    public authService: AuthService
) {}

ngOnInit() {
    this.occasion$ = this.dataService.getOccasions();
    this.authService.getUsername();
}
```

Let me know if you have any questions or if there is more eloquent way to do this. Thanks.