var arr = ["hello", "goodbye",];

//var store = 0;
//for (var x of arr) {
//	store = x + store;
//	console.log(store);
//}

//for (var i = 0; i < arr.length; i = i + 1) {
//	console.log(" element " + i + " is " + arr[i]);
//}

function upTo(low, high) {
	var answer = [];
	for (var i = low; i <= high; i++) {
		answer.push(i);
	}
	return answer;
}

console.log(upTo(10, 50));