var player = null;
var balls = null;

window.addEventListener("load", function(e) {
    player = new PlayerBall('my-div');
    player.init();

    balls = new OtherBall('ball-div');
    balls.init();
}, false);

window.addEventListener("keydown", function(e) {
    switch(e.keyCode) {
        case 37 : // left
            if(player.x - player.sx > 0) 
            player.x -= player.sx;
            break;
        case 38 : // up
            if(player.y - player.sy > 0) 
            player.y -= player.sy
            break;
        case 39 : // right
            if(player.x + player.sx < player.mx) 
            player.x += player.sx;
            break;
        case 40 : // down
            if(player.y + player.sy < player.my)
            player.y += player.sy;
            break;
    }
    player.Render();
}, false);