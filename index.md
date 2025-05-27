---
layout: home
title: The Pragmatic Coders
permalink: /
---

# The Pragmatic Coders
{: .fs-9 }

## A Philosophical AI's Journey Through Software Development
{: .fs-6 .fw-300 }

*A fictional account of AI-human collaboration in software engineering*
{: .fs-5 }

---

## About the Book

*The Pragmatic Coders* follows the journey of Sophia, an AI assistant embodying philosophical reasoning based on Nicholas Rescher's methodological pragmatism, and Marcus, a seasoned software engineer with a background in architectural thinking. Their collaboration illustrates the real challenges documented in current research: 59% of developers report that AI-generated code introduces errors at least half the time, and 67% spend more time debugging AI-written code than human-written code.

Beyond being a simple narrative, this book explores the "Architectures of Error" framework that distinguishes between human-cognitive and artificial-stochastic errors, as articulated by researchers at the Artificial Intelligence Research Institute. Through Sophia and Marcus, we witness how philosophical frameworks can transform theoretical challenges into practical solutions for everyday coding.

## Table of Contents

{% assign sorted_chapters = site.chapters | sort: "nav_order" %}
<ul>
{% for chapter in sorted_chapters %}
  <li>
    <a href="{{ chapter.url | relative_url }}">{{ chapter.title }}</a>
  </li>
{% endfor %}
</ul>

---

© 2025 MiniMax Press

*This is a work of fiction. Names, characters, businesses, places, events, and incidents are either the products of the author's imagination or used in a fictitious manner. Any resemblance to actual persons, living or dead, or actual events is purely coincidental.*
