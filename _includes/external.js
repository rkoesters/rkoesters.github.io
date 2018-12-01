$(document).ready(function(){
	$("a").filter(function(){
		return this.hostname && this.hostname !== location.hostname;
	}).attr({
		rel:    "noopener",
		target: "_blank"
	});
});
