var Person = function(name) {
	if(name) {
		this.name = name;
	}
}

Person.prototype.name = "WHO IS?";

var noname = new Person();
var bae = new Person("BAE JINO");

console.log(noname.name);
console.log(bae.name);