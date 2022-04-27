// on switch interaction, toggle the light mode
function lightmode() {
    // adds and removes the classes from the site (can be anywhere)
	$(".dark").addClass("light");
	$(".dark").removeClass("dark");
	$(".mode input").attr("onclick", "darkmode()");
}

// toggles the dark mode
function darkmode() {
    // adds and removes the classes from the site (can be anywhere)
    $(".light").addClass("dark");
    $(".light").removeClass("light");
    $(".mode input").attr("onclick", "lightmode()");
}