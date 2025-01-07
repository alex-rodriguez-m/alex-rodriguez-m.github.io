---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* D.Eng. in Mechanics, Department of Aerospace Engineering and Applied Mechanics, Tongji University, 2028 (expected)
* M.Eng. in Mechanics, Department of Aerospace Engineering, Nanjing University of Aeronautics and Astronautics, 2024
* B.Eng. in Mechanical Engineering, Department of Mechanical Engineering, National Technological Institute of Mexico, 2019

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Academic Services
======
* Reviewer for: Materials Research Express, Engineering Research Express, and Physica Scripta. 

For an extended version, please check the following link: [CV](/_pages/CV.pdf)
