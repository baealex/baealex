(function() {
    var funcs = [];

    for (var i=0; i<3; i++) {
        funcs[i] = function () { return i };
    }

    for (var j=0; j<3; j++) {
        console.log(funcs[j]());
    }
  
	// 3
    // 3
  	// 3
}());

(function() {
    var funcs = [];

    for (var i=0; i<3; i++) {
        funcs[i] = (function(x) {
          return function () {
            return x
          }
        })(i);
    }

    for (var j=0; j<3; j++) {
        console.log(funcs[j]());
    }
  
	// 0
    // 1
  	// 2
}());

(function() {
    var funcs = [];

    for (let i=0; i<3; i++) {
        funcs[i] = function () { return i };
    }

    for (let j=0; j<3; j++) {
        console.log(funcs[j]());
    }
  
	// 0
    // 1
  	// 2
}());