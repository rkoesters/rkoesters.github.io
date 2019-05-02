// Make sure iframes (assumed to be videos) maintain a 16:9 aspect ratio.
function resize_iframes() {
	$("iframe").each(function() {
		var w = parseInt($(this).width());
		var h = parseInt((w / 16) * 9);
		$(this).height(h);
	});
}
$(window).resize(resize_iframes);
resize_iframes();
