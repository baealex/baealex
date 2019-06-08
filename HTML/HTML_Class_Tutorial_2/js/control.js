window.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
        case 37 : // left
            moveKeyState[0]  = 1; 
            break;
        case 38 : // up
            moveKeyState[1]  = 1;
            break;
        case 39 : // right
            moveKeyState[2]  = 1;
            break;
        case 40 : // down
            moveKeyState[3]  = 1;
            break;
    }
}, false);

window.addEventListener('keyup', function(e) {
    switch(e.keyCode) {
        case 37 : // left
            moveKeyState[0]  = 0; 
            break;
        case 38 : // up
            moveKeyState[1]  = 0;
            break;
        case 39 : // right
            moveKeyState[2]  = 0;
            break;
        case 40 : // down
            moveKeyState[3]  = 0;
            break;
    }
}, false);

window.addEventListener('load', function(e) {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    mPlayer = new Player("#ff0");

    for(var i=0; i<30; i++) {
        otherBalls[i] = new OtherBall();
    }

    setInterval(draw, 1000 / 60);
}, false);

function CanvasClear() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function CanvasPrintText(text, x, y, size='30px', color='#fff', font='나눔고딕') {
    ctx.fillStyle = color;
    ctx.font = size+' '+font;
    ctx.fillText(text, x, y);
}

function draw() {
    CanvasClear();
    CanvasPrintText("@baealex", 10, 30);
    CanvasPrintText(moveKeyState, 30, 65, '22px');

    mPlayer.Update();
    mPlayer.Render();

    for(var i=0; i<30; i++) {
        otherBalls[i].Update();
        otherBalls[i].Render();
    }

    // CanvasPrintText(moveKeyState);
}