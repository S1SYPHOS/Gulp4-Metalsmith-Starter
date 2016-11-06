---
title: Home
layout: page.html
permalink: false
---
## Read what I have to say

<ul>
{% for p in collections.posts %}
<li><a href="{{ p.path }}">{{ p.title }}</a></li>
{% endfor %}
</ul>

- [About](/about/)

### Do you like megaman?

![sure dude](assets/images/megaman.png)
