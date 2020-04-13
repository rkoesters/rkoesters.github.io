function externalLinks() {
	for (const a of document.getElementsByTagName('a')) {
		if (a.hostname && a.hostname !== location.hostname) {
			a.rel = 'noopener';
			a.target = '_blank';
		}
	}
}
window.addEventListener('DOMContentLoaded', externalLinks);
