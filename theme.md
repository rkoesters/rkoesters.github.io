---
layout: page
title:  Theme Picker
themes: [minimal, classic]
---

{{ page.title }}
================

<div>
{% for theme in page.themes %}
	<button onclick="setTheme('{{ theme }}')">{{ theme }}</button>
{% endfor %}
</div>
