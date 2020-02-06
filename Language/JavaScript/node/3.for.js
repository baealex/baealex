// for

var array = new Array();

for(var i = 0; i < 10; i++) {
    array.push(i);
}

console.log(array.toString());

// for-in

var a = ['a', 'b', 'c', 'x', 'y', 'z']
var result = ''

for (var i in a) {
    result += 'index:' + i + ', value:' + a[i] + '\n';
}

console.log(result)