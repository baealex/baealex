console.log('Object.prototype', Object.prototype)

var obj = new Object();
var objProto = Object.getPrototypeOf(obj)

console.log('objProto', objProto)
console.log('Object.getPrototypeOf(objProto)', Object.getPrototypeOf(objProto))

class OB2 extends Object {
    oo() {
        console.log('hello')
    }
}

var obj2 = new OB2()
var obj2Proto = Object.getPrototypeOf(obj2)

console.log('obj2Proto', obj2Proto)
console.log('Object.getPrototypeOf(obj2Proto)', Object.getPrototypeOf(obj2Proto))

var obj3 = Object.create(null)
console.log(Object.getPrototypeOf(obj3))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(obj3)))
console.log(obj3.toString())