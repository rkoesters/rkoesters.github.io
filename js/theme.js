function setTheme(theme) {
	// Change the theme.
	var link = document.getElementById("theme");
	link.href = "/css/" + theme + ".css";

	// Save the theme info.
	localStorage.setItem("theme", theme);
}

function loadTheme() {
	var theme = localStorage.getItem("theme");
	if (theme != null) {
		setTheme(theme);
	}
}

loadTheme();
