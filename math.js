var globalVariable;

function f(x) {
	var answer = 2*x + 1;
	return answer;
}

var output = f(3);
console.log(f(output));

function g(n) {
	var answer = 5;
	return answer;
}

console.log(g(1))

function h(x) {
	var answer = 3*x - 2;
	return answer;
}

var output = h(7);
console.log(h(output));

function j(x, y) {
	var answer = 2*(x + y);
	return answer;
}

var output = j(2, 4);
console.log(output);

function a(x, y, z) {
	var answer = 5*x + 2*y - 3*z + 7;
	return answer;
}

var output = a(1, 2, 3);
console.log(output);

function b(x, y, z) {
	var answer = h(x) + h(y) + a(x, y, z)
	return answer;
}

var output = b(4, 5, 6);
console.log(output);

function pythag(a, b) {
	function square(x) {
		var answer = x*x;
		return answer;
	}

	var aSquared = square(a);
	var bSquared = square(b);
	var answer = Math.sqrt(aSquared + bSquared);
	return answer;
 }

 console.log(pythag(3, 4));

function thing() {
	var answer = "hihihi";
	return answer;
}

console.log("hihihi");

function one(a, b, c) {
	function two(x) {
		var answer = 2*x*x + 7*x - 18;
		return answer;
	}

	function three(y) {
		var answer = 12*y + 5;
		return answer;
	}

	var aTwo = two(a);
	var bTwo = two(b);
	var cTwo = two(c);
	var aThree = three(a);
	var bThree = three(b);
	var cThree = three(c);
	var answer = (aTwo - aThree + bTwo - bThree + cTwo - cThree);
}

console.log(one(2, 3, 5));

function k(x) {
	var answer = x + 2 * 8 - 3;
	return answer;
}

console.log(3);

function triple(a) {
	var answer = a + a + a;
	return answer;
}

console.log(trple("hi"));

