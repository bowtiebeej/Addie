//Change the opacity of the name
function nameChange() {
	var opacity = document.getElementId("coloredName").style.opacity = "0";
	var el = document.getElementById("h1");
	if (el.style.opacity !== undefined) {
		el.style.opacity = opacity;
	} else {
		alert("Uh Oh, Uncle BJ's surprise doesn't work here.");
	}
}