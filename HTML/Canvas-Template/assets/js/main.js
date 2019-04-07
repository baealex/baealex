var canvas = document.getElementById("myCanvas");
var cts = canvas.getContext("2d");

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
setInterval(draw, 10);