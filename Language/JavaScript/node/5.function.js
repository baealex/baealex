function sum(a, b) {
    return a + b;
}

var add = sum;

console.log(typeof add);
console.log(add(1, 2));

var student = {
    name: 'goorm',
    age: 20
}

console.log('student.name : '        + student.name);
console.log('delete student.name : ' + delete student.name);
console.log('student.name : '        + student.name);
console.log('delete student : '      + delete student);
console.log('delete not_exist : '    + delete not_exist);
console.log('student.age : '         + student.age);