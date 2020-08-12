---
layout: post
categories: personal
author: Colin Stodd
tags:
  - Phish,
  - Google Calendar,
  - iCal,
  - Shows
  - Tour
title: Download iCal and Google calendar for Phish tour dates and shows
date: 2020-01-23 12:01:00 -0500
last_modified_at: 2020-06-17 00:08:10 -0500
pinned: false
featured: false
# image: ../images/posts/dinner_and_movie_words.png
image: 'https://5ojtv13o4by138ocv258q4xu7h-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/19940708ph_great_woods_trey_narration_VHS_screenshot_02_crop.jpg'
description: Download Phish tour iCal/Google calendar. This calendar has been updated to include the "Dinner And A Movie"; also info regarding their rescheduled summer tour.
permalink: /posts/personal/download-ical-and-google-calendar-for-phish-tour-dates-and-shows.html
comments: true
redirect_from:
  - /posts/download-ical-and-google-calendar-for-phish-tour-dates-and-shows.html
  - /blog/post/ical-calendar-for-phish-s-2017-tour-dates/
  - /posts/ical-calendar-for-phish-tour-dates-and-shows/
  - /posts/ical-calendar-for-phish-tour-dates-and-shows
ical_link: "https://calendar.google.com/calendar/ical/cigokdh5l6cs8i0ph6srjiboig%40group.calendar.google.com/public/basic.ics"
gcal_link: "https://calendar.google.com/calendar/embed?src=cigokdh5l6cs8i0ph6srjiboig%40group.calendar.google.com&ctz=America%2FNew_York"
---


<div class="blurb mb-3">
<i class="fad fa-microphone-stand" style="font-size:3rem;"></i>  UPDATE <i class="fad fa-calendar-alt"></i> {{ page.last_modified_at | date_to_string }}<br/>
  <hr/>
  <span class="text-yellow">From <a href="https://phish.com/news/summer-tour-rescheduled-for-2021/" target="_blank" rel="_noopener" class="text-yellow" title="Go to Phish's website to read for yourself">Phish's Email/Website <i class="fad fa-external-link-square"></i></a></span><br>
  <span class="text-yellow">"Due to the ongoing pandemic, we sadly have made the difficult decision to reschedule Phish’s entire 2020 summer tour, now moving to the summer of 2021. We’ve been as excited as ever to play music for you all, and are so heartbroken to postpone these dates..."</span> <br>
  <hr/>
  <i class="fad fa-angle-double-right fa-lg"></i> As long as Phish provides these streams I'll do my best to keep updating the info for each night. <br/>
  <i class="fad fa-angle-double-right fa-lg"></i> Yes, I'll be updating next years' dates -- soon enough.
</div>


I was unable to find an updated <a href="https://phish.com/tours" target="_blank" rel="noopener" title="Phish Tour">Phish</a> iCal calendar on the web, so I created one myself and I'm sharing it with you. All you need to do is copy and paste this link into your calendar application.



## Examples:
<h4 class="text-yellow"><i class="fab fa-apple"></i> Calendar (Apple/iCal):</h4>Go in iCalendar and click `File > New Calendar Subscription` and paste the link below into that input field.

**Public <i class="fab fa-apple text-yellow"></i> iCal URL:**
<input type="text" value="{{ page.ical_link }}" id="calendarLink" class="fixed-font">
<p>
  <button onclick="appleFunction()" class="button small">
    <i class="fab fa-apple"></i> Copy URL
  </button>
</p>


-----


<h4 class="text-yellow"><i class="fab fa-google"></i> Google Calendar:</h4>Go into <a href="https://calendar.google.com/calendar" target="_blank" rel="noopener" title="Click to open Google Calendar">Google Calendar</a>, on the bottom left hand side you'll see `Other Calendars` then click the <i class="fal fa-plus neu-text"></i> and <br/>select `From URL` and paste the URL below into that input.


**Public <i class="fab fa-google text-yellow"></i> Google URL:**
<input type="text" value="{{ page.gcal_link }}" id="googleCalendarLink" class="fixed-font">
<p>
  <button onclick="googleFunction()" class="button small">
    <i class="fab fa-google"></i> Copy URL
  </button>
</p>

-----

You should now see the show dates with details populate on your calendar. I will try and keep this calendar updated should they add more dates. If you see something missing or off, please let me know in the comments.

<iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%235868a1&amp;ctz=America%2FNew_York&amp;src=Y2lnb2tkaDVsNmNzOGkwcGg2c3JqaWJvaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%2300cab3&amp;mode=MONTH&amp;title=%3C%22(((%3C3%20%20Phish%20Shows%20%20%3C%22(((%3C3" style="border-width:0" width="100%" height="800" frameborder="0" scrolling="no"></iframe>


<script type="text/javascript">
// Apple Calendar
function appleFunction() {
  /* Get the text field */
  var copyText = document.getElementById("calendarLink");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Calendar Link Copied to your clipboard, Now paste it into Apple Calendar. Enjoy the shows! 🐠 🍄 🌈 🌵 🥳 🐲");
}
// Google Calendar
function googleFunction() {
  /* Get the text field */
  var googleText = document.getElementById("googleCalendarLink");

  /* Select the text field */
  googleText.select();
  googleText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Calendar Link Copied to your clipboard, Now paste it into Google Calendar. Enjoy the shows! 🐠 🍄 🌈 🌵 🥳 🐲");
}
</script>