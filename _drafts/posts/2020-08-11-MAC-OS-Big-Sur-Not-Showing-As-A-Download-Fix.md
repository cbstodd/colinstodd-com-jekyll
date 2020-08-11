---
layout: post
draft: true
title: MAC OS Big Sur Beta not showing as a download (Fix)
author: Colin Stodd
description: How to fix the problem with Big Sur Beta not showing as developer download.
image: ../images/posts/ticktick_osx.png
featured: false
pinned: false
date: 2020-08-11 00:00:10 -0400
last_modified_at: 2020-08-11 00:00:10 -0400
permalink: /posts/tech/2020-08-11-MAC-OS-Big-Sur-Not-Showing-As-A-Download-Fix.html
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


Most likely if you're reading this post you have the same interest in trying Apple's new operating system which is the successor to OSX. This one is called Big Sur or OS 11. 

I've been a beta tester with apple for years, which I typically only use with my personal mac, as I need the stability with my daily coding Macbook Pro. 

Anyway, I was having trouble locating the update and after a few different options I found only for Catalina beta, I thought I'd write this post to help others. 

<h5 class="blurb">
"I should also note that not every Mac is going to be compatible with Big Sur, which is originally what I thought may have been the issue. But fortunately for me I made the cutoff bing a late 2013 Macbook Pro (last model that is officially supported). 
</h5>

List of compatible MACs': 
- 2015 and later MacBook
- 2013 and later MacBook Air
- 2013 and later MacBook Pro
- 2014 and later Mac mini
- 2014 and later iMac
- 2017 and later iMac Pro
- 2013 and later Mac Pro

If you have any questions regarding that, I urge you to take a look at this link to find out. 

If you have tried unenrolling and re-enrolling and that didnt' work, then this will most likely work for you:


open terminal command + shift + T
sudo -i

enter root password
/System/Library/PrivateFrameworks/Seeding.framework/Versions/A/Resources/seedutil


Unenroll from the Beta Program 
/System/Library/PrivateFrameworks/Seeding.framework/Versions/A/Resources/seedutil unenroll


Enroll in the DeveloperSeed Beta 
/System/Library/PrivateFrameworks/Seeding.framework/Versions/A/Resources/seedutil enroll DeveloperSeed

Close and re-open System Preferences > Software Update

The new Beta should now show up