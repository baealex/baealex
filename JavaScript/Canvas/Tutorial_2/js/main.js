function include(FileDir) {
    var includejs = document.createElement("script");
    includejs.type = "text/javascript";
    includejs.src = FileDir;
    document.body.appendChild(includejs);
}

function RendomPlusOrMinus() {
    number = parseInt(Math.random()*2);
    if(number  == 0) {
        number--;
    }
    return number;
}

var moveKeyState = [0, 0, 0, 0];
var canvas = null;
var ctx = null;
var mPlayer = null;
var otherBalls = [];

include("js/model.js");
include("js/control.js");

// Canvas Init

/*
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
setInterval(draw, 10);
*/