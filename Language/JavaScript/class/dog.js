var Dog = function(name, age, color) {
	this.name = name;
	this.age = age;
	this.color = color;
	this.constructor.totalDogs++;
}

Dog.prototype.speak = function() {
	console.log("안녕 내 이름은 "+this.name+"이고, 나이는 "+this.age+"살이고, 색깔은 "+this.color+"야!");
};

Dog.totalDogs = 0;
Dog.printTotalDogs = function() {
	console.log("모두 ", Dog.totalDogs, "마리의 멍멍이");
};

var mong = new Dog("mong", 6, "black and white");
var mung = new Dog("mung", 3, "white");
mung.speak();
Dog.printTotalDogs();