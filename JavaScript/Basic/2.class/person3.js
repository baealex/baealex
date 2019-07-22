var Person = function(name) {
	this.name = name;
	
	Person.list.push(this);
};

Person.list = [];
Person.printAllNames = function() {
	Person.list.forEach(function(person) {
		console.log(person.name);
	});
}

var bae1 = new Person("BAE1");
var bae2 = new Person("BAE2");
var bae3 = new Person("BAE3");

Person.printAllNames();