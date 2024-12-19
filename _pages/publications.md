---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.researchgate  %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.researchgate }}">my ResearchGate profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
