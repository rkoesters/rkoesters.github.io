// Make sure iframes (assumed to be videos) maintain a 16:9 aspect ratio.
function resize_iframes() {
	for (let iframe of document.getElementsByTagName('iframe')) {
		iframe.height = parseInt((iframe.offsetWidth / 16) * 9);
	}
}
window.addEventListener('resize', resize_iframes);
resize_iframes();
