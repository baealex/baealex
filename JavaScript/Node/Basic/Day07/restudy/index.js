function add(x, y) {
    return x+y;
}

add1 = (x, y) => {
    return x+y;
}

add2 = (x, y) => x+y;
console.log(add2(5,7));

console.log("---- mClass ----");
var mClass = {
    age: 5,
    getAge: function() {
        return this.age;
    }
};
console.log(mClass.getAge());

console.log("---- localGetAge ----");
var localGetAge = mClass.getAge();
console.log(localGetAge);
// console.log(localGetAge());

var x = function(){
    this.w = 20;
    var h = 20;
    this.update = function() {
        this.w += 20;
        console.log("update");
    };
};
console.log("---- x ----");
console.log(x.w); // undefined

console.log("---- TX ----");
var TX = new x();
console.log(TX.w);
console.log(TX.h); // undefined
console.log(TX.update());
console.log(TX.w);