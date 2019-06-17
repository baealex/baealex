function CanvasClear() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function CanvasPrint(text, x, y, align='left', size='30px', color='#fff', font='나눔고딕') {
    ctx.fillStyle = color;
    ctx.font = size+' '+font;
    ctx.textAlign = align;
    ctx.fillText(text, x, y);
}

function RendomPlusOrMinus() {
    number = parseInt(Math.random()*2);
    if(number  == 0) {
        number--;
    }
    return number;
}

function isCollision(x1, y1, w1, h1, x2, y2, w2, h2){
	if( x1 + w1 > x2 + 0 && x1 + 0 < x2 + w2 && y1 + h1 > y2 + 0 && y1 + 0 < y2 + h2){
		return true;
	}else{
		return false;
	}
}
function getReflectionDir(dx, dy, x1, y1, w, h, mx1, my1, mw, mh) {
    var x2 = x1 + w;
    var y2 = y1 + h;
    var mx2 = mx1 + mw;
    var my2 = my1 + mh;
    var dirV = 0;
    var dirH = 0;
    if(dx>0 && dy>0) {
        if(y1>my1 && x1<mx1) { dirH = -1; }
        if(x1>mx1 && y1<my1) { dirV = -1; }
        if(x1<mx1 && y1<my1) { dirH = -1; dirV = -1; }
    } else if(dx>0 && dy<0) {
        if(y2<my2 && x1<mx1) { dirH = -1; }
        if(x1>mx1 && y1<my1) { dirV = 1; }
        if(x1<mx1 && y2>my2) { dirH = -1; dirV = 1; }
    } else if(dx<0 && dy<0) {
        if(y2<my2 && x2>mx2) { dirH = 1; }
        if(x2<mx2 && y2>my2) { dirV = 1; }
        if(x2<mx2 && y2<my2) { dirH = 1; dirV = 1; }
    } else {
        if(y1>my1 && x2>mx2) { dirH = 1; }
        if(x2>mx2 && y1<my1) { dirV = -1; }
        if(x2<mx2 && y1<my1) { dirH = -1; dirV = 1; }
    }
    return {sx:dirH, sy:dirV};
}