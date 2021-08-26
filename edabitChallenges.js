// Challenge 1

function getFirstValue(arr) {
	return arr[0];
}

// Challenge 2

function getLastItem(arr) {
	return arr[arr.length -1];
}

// Challenge 3

function valueAt(arr, i) {
	return arr[Math.floor(i)];
}

// Challenge 4

function evenOrOdd(arr) {
	let sum = 0;
	for (var i = 0; i < arr.length ; i++){
		sum += arr[i];
	}
	if (sum % 2 == 0){
		return "even"
	} else {
		return "odd"
	}
}

// Challenge 5

function reverse(arr) {
	let myArray = [];
	while (arr.length){
		myArray.push(arr.pop());
	}
	return myArray;
}