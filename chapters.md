---
layout: page
title: All Chapters
nav_order: 2
permalink: /chapters/
---

# All Chapters

Browse through all chapters of *The Pragmatic Coders*:

{% assign sorted_chapters = site.chapters | sort: "nav_order" %}
<ul>
{% for chapter in sorted_chapters %}
  <li>
    <a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a>
    <p class="text-small text-grey-dk-000">{{ chapter.description | default: "A chapter in The Pragmatic Coders exploring AI-human collaboration in software development." }}</p>
  </li>
{% endfor %}
</ul>
