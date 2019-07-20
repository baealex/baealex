class Transportation {
	constructor(id, capacity) {
		this.id = id;
		this.capacity = capacity;
	}

	getPrice() {
		return 0;
	}
}

class Airplane extends Transportation {
	constructor(id, capacity, seatClass) {
		super(id, capacity);
		this.seatClass = seatClass;
	}

	getPrice() {
		var price = Airplane.prices[this.seatClass];
		if(!price) {
			return -1;
		} else {
			return price;
		}
	}
}

Airplane.prices = {
	I: 100,
	B: 300,
	F: 500
};

class Ship extends Transportation {
	constructor(id, capacity, isCruise) {
		super(id, capacity);
		this.isCruise = isCruise;
	}

	getPrice() {
		return (this.isCruise) ? 200 : 50;
	}
}

var air1 = new Airplane("747", 50, "F");
var air2 = new Airplane("747", 50, "B");
var ship1 = new Ship("Cruise88", 300, true);
var ship2 = new Ship("Ship39", 150, false);

var list = [air1, air2, ship1, ship2];
for(var i=0; i<list.length; i++) {
	var trans = list[i];
	console.log(trans.id, trans.capacity, trans.getPrice());
}
