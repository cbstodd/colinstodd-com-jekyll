---
layout: post
draft: true
title: MAC OS Big Sur Beta not showing as a download (Fix)
author: Colin Stodd
description: How to fix the problem with Big Sur Beta not showing as developer download
image: ../../images/posts/big_sur.png
featured: true
pinned: false
date: 2020-08-11 00:00:10 -0400
last_modified_at: 2020-10-19 10:00:10 -0400
permalink: /posts/tech/MAC-OS-Big-Sur-Not-Showing-As-A-Download-Fix.html
categories: tech
tags:
  - Apple,
  - MAC OS,
  - Big Sur,
  - Beta,
  - Install,
  - Error
comments: true
---


If you're reading this post I presume you have the same interest in trying <a href="https://www.apple.com/macos/big-sur-preview/" target="_blank" rel="noopener">Apple's new operating system</a> which is the successor to OSX. This one is called <a href="https://www.apple.com/macos/big-sur-preview/" target="_blank" rel="noopener">Big Sur or OS 11</a>.

I've been a beta tester with <a href="https://apple.com" title="Apple" target="_blank" rel="noopener">Apple</a> for years, which I typically only use with my personal mac, as I need the stability with my daily coding MacBook Pro.

Anyway, I was having trouble locating the update and after a few different options I found only for Catalina beta, I thought I'd write this post to help others.

<h4 class="blurb">
I should also note that not every Mac is going to be compatible with Big Sur; fortunately for me I made the cutoff being a late 2013 MacBook Pro (last model that is officially supported).
</h4>

List of compatible MACs':
- 2015 and later MacBook
- 2013 and later MacBook Air
- 2013 and later MacBook Pro
- 2014 and later Mac mini
- 2014 and later iMac
- 2017 and later iMac Pro
- 2013 and later Mac Pro

If you have any questions regarding your MacBook's compatibility, I recommend that you take a look at this <a href="https://developer.apple.com/forums/thread/649715?answerId=621273022#621273022" target="_blank" rel="noopener">link</a> to learn more.

If re-enrolling didn't work for you, than this should work for you:


Open terminal `command` + `shift` + `T` and run:<br>
```bash
sudo -i
```

<button class="button small copy-btn pull-right"
   title="Copy to clipboard"
   data-clipboard-text="sudo -i">
     <i class="fad fa-clipboard-list"></i> Copy
</button>


##### Enter root password:

```txt
/System/Library/PrivateFrameworks/Seeding.framework/Versions/A/Resources/seedutil
```
##### Unenroll from the Beta Program:

```txt
/System/Library/PrivateFrameworks/Seeding.framework/Versions/A/Resources/seedutil unenroll
```

##### Enroll in the DeveloperSeed Beta:

```txt
/System/Library/PrivateFrameworks/Seeding.framework/Versions/A/Resources/seedutil enroll DeveloperSeed
```

Close and re-open `System Preferences` > `Software Update`

The new Beta should now show up


Let me know if you run into any issues.

----