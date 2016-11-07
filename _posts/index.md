---
title: Home
layout: default.html
permalink: false
---

{% for post in collections.posts %}
<div class="post">
  <h1 class="post-title">
    <a href="{{ site.baseurl }}/{{ post.path }}">
      {{ post.title }}
    </a>
  </h1>
  <span class="post-date">{{ post.date | date }}</span>
  {{ post.excerpt | safe }}
</div>
{% endfor %}
