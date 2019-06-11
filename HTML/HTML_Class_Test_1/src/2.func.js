function CanvasClear() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function CanvasPrint(text, x, y, size='30px', color='#fff', font='나눔고딕') {
    ctx.fillStyle = color;
    ctx.font = size+' '+font;
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