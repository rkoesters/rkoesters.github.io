"use strict";

// Make sure external links open in a new tab/window.
function externalLinks() {
	for (const a of document.getElementsByTagName("a")) {
		if (a.hostname && a.hostname !== location.hostname) {
			a.rel = "noopener";
			a.target = "_blank";
		}
	}
}

// Make sure iframes (assumed to be videos) maintain a 16:9 aspect ratio.
function resizeIframes() {
	for (const iframe of document.getElementsByTagName("iframe")) {
		iframe.height = parseInt((iframe.offsetWidth / 16) * 9);
	}
}
window.addEventListener("resize", resizeIframes);

// Append a `<link>` element with the given `href` and `rel` to `<head>`.
function appendToHead(href, rel) {
	const l = document.createElement("link");
	l.href = href;
	l.rel = rel;
	document.getElementsByTagName("head")[0].appendChild(l);
}

function onLoaded() {
	appendToHead("/assets/syntax.css", "stylesheet");
	resizeIframes();
	externalLinks();
}
window.addEventListener("DOMContentLoaded", onLoaded);
