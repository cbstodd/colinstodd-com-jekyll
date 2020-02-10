---
layout: post
categories: personal
author: Colin Stodd
tags:
  - Phish,
  - Google Calendar,
  - iCal,
  - Shows
title: Download iCal and Google calendar for Phish tour dates and shows
date: 2020-01-23 12:01:00 -0400
last_modified_at: 2020-01-23 12:01:00 -0400
pinned: false
featured: true
image: "/images/posts/phish_summer_tour_2020.jpg"
description: Download Phish tour iCal/Google calendar. This calendar has been updated for the "2020 Summer Tour".
permalink: /posts/personal/download-ical-and-google-calendar-for-phish-tour-dates-and-shows.html
comments: true
redirect_from:
  - /posts/download-ical-and-google-calendar-for-phish-tour-dates-and-shows.html
  - /blog/post/ical-calendar-for-phish-s-2017-tour-dates/
  - /posts/ical-calendar-for-phish-tour-dates-and-shows/
ical_link: "https://calendar.google.com/calendar/ical/cigokdh5l6cs8i0ph6srjiboig%40group.calendar.google.com/private-65ee2a07a45e7f416407f9d73caa1735/basic.ics"
---


<h5 class="neu-alert m-3 text-blue-grey">
<i class="fad fa-microphone-stand" style="font-size:3rem;"></i>  UPDATE <i class="fad fa-calendar-alt"></i> {{ page.last_modified_at | date_to_string }}<br/>
<hr/>
This calendar has been updated for the "2020 Summer Tour".
Alerts are set two hours before Show Time.
</h5>




I was unable to find an updated <a href="https://phish.com/tours" target="_blank" rel="noopener" title="Phish Tour">Phish</a> iCal calendar on the web, so I created one myself and I'm sharing it with you. All you need to do is copy and paste this link into your calendar application.

## Examples:
<h4 class="text-blue-grey"><i class="fab fa-apple"></i> Calendar (Apple/iCal):</h4>Go in iCalendar and click `File > New Calendar Subscription` and paste the link below into that input field.

<h4 class="text-blue-grey"><i class="fab fa-google"></i> Google Calendar:</h4>Go into <a href="https://calendar.google.com/calendar" target="_blank" rel="noopener" title="Click to open Google Calendar">Google Calendar</a>, on the bottom left hand side you'll see `Other Calendars` then click the <i class="fal fa-plus neu-text"></i> and <br/>select `From URL` and paste the URL below into that input.

**Public Calendar URL:**
<input type="text" value="{{ page.ical_link }}" id="calendarLink" class="fixed-font">
<p>
  <button onclick="myFunction()" class="button special">
    <i class="fad fa-clipboard"></i> Copy URL
  </button>
</p>

You should now see the show dates with details populate on your calendar. I will try and keep this calendar updated should they add more dates. If you see something missing or off, please let me know in the comments.

<iframe style="border: 0;" src="https://calendar.google.com/calendar/embed?src=cigokdh5l6cs8i0ph6srjiboig%40group.calendar.google.com&amp;ctz=America/New_York" width="100%" height="600" frameborder="0" scrolling="no"></iframe>


<script type="text/javascript">
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("calendarLink");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("🐠 Calendar Link Copied 🐠 Now paste it into your calendar app. Enjoy the shows! 🍄 🌈 🌵 🥳 🐲");
}
</script>