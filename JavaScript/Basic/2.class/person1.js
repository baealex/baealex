var Person = function(name) {
	this.name = name;
};

Person.prototype;
Person.prototype.speakName = function(number) {
	for(var i=0;i<number;i++) {
		console.log("My name is " + this.name);
	}
}

var bae = new Person("BAE JINO");
bae.speakName(10);