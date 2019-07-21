const sam1 = {
	name: "Sam",
	age: 4,
};

const sam2 = {
	name: "Sam",
	friend: {
		1: "Anna",
		2: "Alex",
		getName: function() { return this[1]; },
	},
};

console.log(sam2);
console.log(sam2.name); // Sam
console.log(sam2.friend);
console.log(sam2.friend[1]); // Anna
console.log(sam2.friend[2]); // Alex
console.log(sam2.friend.getName()); // Anna