class Figure {
	getSize() {
		return 0;
	}
}

class Oval extends Figure {
	constructor(radius1, radius2) {
		super();
		this.radius1 = radius1;
		this.radius2 = radius2;
	}

	getSize() {
		return this.radius1 * this.radius2 * Math.PI;
	}
}

class Circle extends Oval {
	constructor(radius) {
		super(radius, radius);
	}
}

class Rect extends Figure {
	constructor(width1, width2, height) {
		super();
		this.width1 = width1;
		this.width2 = width2;
		this.height = height;
	}

	getSize() {
		return ((this.width1 + this.width2) / 2) * this.height;
	}
}

class Rectangle extends Rect {
	constructor(width, height) {
		super(width, width, height);
	}
}

class Square extends Rect {
	constructor(width) {
		super(width, width, width);
	}
}

var mSquare = new Square(5);
console.log(mSquare.getSize());
