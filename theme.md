---
layout: page
title:  Theme Picker
themes: [classic, minimal, business]
---

{{ page.title }}
================

<div>
{% for theme in page.themes %}
	<button onclick="setTheme('{{ theme }}')">{{ theme }}</button>
{% endfor %}
</div>
