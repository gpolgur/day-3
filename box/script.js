for (var i = 0; i < 299; i++) {
	document.querySelector(".container").innerHTML += "<div class='box'></div>";
}

var arrayOfBoxes = document.querySelectorAll(".box");

for (var i = 0; i < arrayOfBoxes.length; i++) {
	if(i % 2 === 0) {
		arrayOfBoxes[i].style.background = "pink";
	} else if (i % 9 === 0) {
		arrayOfBoxes[i].style.background = "violet";
	} else if (i % 5 === 0) {
		arrayOfBoxes[i].style.background = "lightcoral";
	} else {
		arrayOfBoxes[i].style.background = "lightblue";
	}
}