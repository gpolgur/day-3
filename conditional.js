function value(x) {
	if (x < 10) {
		console.log("small");
	} else {
		console.log("BIG");
	}
}

function sign(n) {
	if (n < 0) {
		console.log("negative");
	} else if (n > 0) {
		console.log("positive");
	} else if (n === 0) {
		console.log("zero");
	}
}

function equality(y, z) {
	if (y === z) {
		console.log("same");
	} else {
		console.log("different")
	}
}

value(15);
value(5);
sign(2);
sign(-1);
sign(0);
equality(1, 1);
equality(3, 6);

