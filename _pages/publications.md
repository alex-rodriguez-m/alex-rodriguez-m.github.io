---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.researchgate  %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.researchgate }}">my ResearchGate profile</a>.</div>
<a
    id="cy-effective-orcid-url"
    class="underline"
     href="https://orcid.org/0000-0002-9280-8562"
     target="orcid.widget"
     rel="me noopener noreferrer"
     style="vertical-align: top">
     <img
        src="https://orcid.org/sites/default/files/images/orcid_16x16.png"
        style="width: 1em; margin-inline-start: 0.5em"
        alt="ORCID iD icon"/>
      https://orcid.org/0000-0002-9280-8562
    </a>

{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
    

