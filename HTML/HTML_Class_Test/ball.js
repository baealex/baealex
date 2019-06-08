var keyStat = [0, 0, 0, 0];
var modeKey = 0;
var Canvas = null;
var ctx = null;
var CanvasW = null;
var CanvasH = null;
var MeMe = null;
var Ball = null;
var Fall = null;
var sFall = null;
var playS = null;

function CanvasClear() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function CanvasPrintText(text, x, y, size='30px', color='#fff', font='나눔고딕') {
    ctx.fillStyle = color;
    ctx.font = size+' '+font;
    ctx.fillText(text, x, y);
}

window.addEventListener('keydown', function(e){
	switch(e.keyCode){
		case 37: // left
			keyStat[0] = 1;
			break;
		case 38: // up
			keyStat[1] = 1;
			break;
		case 39: // right
			keyStat[2] = 1;
			break;
		case 40: // down
			keyStat[3] = 1;
			break;
		case 49: modeKey = 1; break;
		case 50: modeKey = 2; break;
		case 51: modeKey = 3; break;
	}
}, false);
window.addEventListener('keyup', function(e){
	switch(e.keyCode){
		case 37: // left
			keyStat[0] = 0;
			break;
		case 38: // up
			keyStat[1] = 0;
			break;
		case 39: // right
			keyStat[2] = 0;
			break;
		case 40: // down
			keyStat[3] = 0;
			break;
	}
}, false);
window.addEventListener('load', function(e){
	Canvas = document.getElementById('id_my_canvas');
	ctx = Canvas.getContext('2d');
	CanvasW = Canvas.width;
	CanvasH = Canvas.height;

	MeMe = new MMMMEEEEE();
	Ball = new MMYBALL(50);
	sFall = new sMYFALL();
	Fall = new MYFALL(1000);
	playS = sFall;
	setInterval(function(){
		ctx.fillStyle = "rgba(0, 0, 0, 1)";
		ctx.fillRect (0, 0, CanvasW, CanvasH);
		MeMe.Update();
		// 모드체인지 검사
		if(modeKey==1){ ChangePlayMode.change(sFall); modeKey = 0; }
		if(modeKey==2){ ChangePlayMode.change(Ball); modeKey = 0; }
		if(modeKey==3){ ChangePlayMode.change(Fall); modeKey = 0; }

		ctx.font = 'bold 24px Comic Sans MS';
		ctx.fillStyle = '#003366';
		ctx.textAlign = 'center';
		ctx.fillText("[1].낙하공1개, [2].돌아다니는공, [3].낙하공여러개", CanvasW/2, 50);

		if(ChangePlayMode.isRun){
			ChangePlayMode.Render();
		}else{
			playS.Update();
			playS.Render();
		}
		MeMe.Render();
	}, 1000 / 60);
}, false);


var MMMMEEEEE = function(){
	this.w = 100;
	this.h = 100;
	this.x = CanvasW / 2 - this.w/2;
	this.y = CanvasH * 2 / 3 - this.h/2;
	this.sx = 0;
	this.sy = 0;
	this.Update = function(){
		if(keyStat[0]==1){
			this.sx -= 0.5; 
			if(this.sx<-20) this.sx = -20;
		}else{
			if(this.sx<0){
				this.sx += 0.5;
				if(this.sx>=0) this.sx = 0;
			}
		}
		if(keyStat[1]==1){
			this.sy -= 0.5;
			if(this.sy<-20) this.sy = -20;
		}else{
			if(this.sy<0){
				this.sy += 0.5;
				if(this.sy>=0) this.sy = 0;
			}
		}
		if(keyStat[2]==1){
			this.sx += 0.5;
			if(this.sx>20) this.sx = 20;
		}else{
			if(this.sx>0){
				this.sx -= 0.5;
				if(this.sx<=0) this.sx = 0;
			}
		}
		if(keyStat[3]==1){
			this.sy += 0.5;
			if(this.sy>20) this.sy = 20;
		}else{
			if(this.sy>0){
				this.sy -= 0.5;
				if(this.sy<=0) this.sy = 0;
			}
		}
		this.x += this.sx;
		if(this.x<0){ this.x = 0; this.sx = 0; }
		if(this.x>CanvasW-this.w){ this.x = CanvasW-this.w; this.sx = 0; }

		this.y += this.sy;
		if(this.y<0){ this.y = 0; this.sy = 0; }
		if(this.y>CanvasH-this.h){ this.y = CanvasH-this.h; this.sy = 0; }

	};
	this.Render = function(){
		ctx.fillStyle = "rgba(255,255,0,0.5)";
		ctx.fillRect (this.x, this.y, this.w, this.h);
		ctx.strokeStyle = "rgb(255,255,0)";
		ctx.strokeRect (this.x, this.y, this.w, this.h);
	};
};
var MYBALL = function(){
	var colors = ['rgba(255,0,0,1)', 'rgba(0,128,255,1)', 'rgba(128,128,255,1)', 'rgba(255,255,0,1)', 'rgba(128,255,0,1)', 'rgba(0,255,0,1)', 'rgba(255,0,255,1)', 'rgba(255,0,128,1)'];
	this.r = parseInt(Math.random()*10) + 2;
	this.ox = this.x = parseInt(Math.random()*9000) % (CanvasW-this.r*2) - this.r;
	this.oy = this.y = parseInt(Math.random()*9000) % (CanvasH-this.r*2) - this.r;
	this.col = colors[ parseInt(Math.random()*1000) % colors.length ];
	this.sx = (parseInt(Math.random()*10) + 2) * (Math.random()*1000>500?1:-1);
	this.sy = (parseInt(Math.random()*10) + 2) * (Math.random()*1000>500?1:-1);
	this.Update = function(){
		this.ox = this.x; // 과거 위치를 기억함
		this.oy = this.y;
		this.x += this.sx;
		if(this.x < this.r || this.x > CanvasW - this.r){
			this.x -= this.sx;
			this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
		}
		this.y += this.sy;
		if(this.y < this.r || this.y > CanvasH - this.r){
			this.y -= this.sy;
			this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
		}
		this.Collision();
	};
	this.Render = function(){
		ctx.fillStyle = this.col;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
		ctx.fill();
	};
	this.Collision = function(){
		var left = false;
		var right = false;
		var top = false;
		var bottom = false;
		if(this.y > MeMe.y && this.y < MeMe.y + MeMe.h && this.x > MeMe.x && this.x < MeMe.x + MeMe.w)
		{
			if(this.y < MeMe.y + MeMe.h/10) {
				top = true;
			}
			if(this.y > MeMe.y + MeMe.h - MeMe.h/10) {
				bottom = true;
			}
			if(this.x < MeMe.x + MeMe.w/10) {
				left = true;
			}
			if(this.x > MeMe.x + MeMe.w - MeMe.w/10) {
				right = true;
			}

			// 모서리에서 부딪혔을 때
			if((top && left) || (top && right) || (bottom && left) || (bottom && right)) {
				this.y -= this.sy;
				this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
				this.x -= this.sx;
				this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
			}
			// 위 또는 아래
			else if(top || bottom) {
				this.y -= this.sy;
				this.sy = this.sy * -1;
			}	
			// 좌 또는 우
			else if(left || right) {
				this.x -= this.sx;
				this.sx = this.sx * -1;
			}
			else {
				this.y = this.oy;
				this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
				this.x = this.ox;
				this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
			}
			CanvasPrintText(top +" "+ bottom +" "+ left +" "+ right, 120, 60, '22px');
		}
	};
};
var MMYBALL = function(cnt){
	this.cnt = cnt==null ? 10 : cnt;
	this.balls = [];
	this.Update = function(){
		for(var i=0; i<this.cnt; i++) this.balls[i].Update();
	};
	this.Render = function(){
		for(var i=0; i<this.cnt; i++) this.balls[i].Render();
	};
	this.Collision = function(obj){
		for(var i=0; i<this.cnt; i++) this.balls[i].Collision(obj);
	};
	for(var i=0; i<this.cnt; i++) this.balls[i] = new MYBALL();
}
var ChangePlayMode = new function(){
	this.oldPlayer = playS;
	this.newPlayer = null;
	this.isRun = false;
	this.alpha = 0;
	this.mode = 0;
	this.change = function(player){
		if(player==playS) return;
		this.oldPlayer = playS;
		this.newPlayer = player;
		this.isRun = true;
		this.alpha = 1;
		this.mode = 0;
	};
	this.Render = function(){
		if(this.isRun){
			ctx.globalAlpha = 1;
			ctx.fillStyle = "rgba(0, 0, 0, 1)";
			ctx.fillRect (0, 0, CanvasW, CanvasH);
			if(this.mode == 0){ // fadeout
				this.oldPlayer.Update();
				ctx.globalAlpha = this.alpha;
				this.oldPlayer.Render();
				this.alpha -= 0.05;
				if(this.alpha<=0){
					this.alpha = 0;
					this.mode = 1;
				}
			}else{ // fadein
				this.newPlayer.Update();
				ctx.globalAlpha = this.alpha;
				this.newPlayer.Render();
				this.alpha += 0.05;
				if(this.alpha>=1.0){
					ctx.globalAlpha = 1;
					playS = this.newPlayer;
					this.isRun = false;
				}
			}
		}
	};
};
var MYFALL = function(cnt){
	var _MYFALL = function(){
		var Colors = ['#00ffff', '#00ccff', '#cc00ff', '#ccff00', '#ff0000'];
		this.x = 0;
		this.y = 0;
		this.ox = 0;
		this.oy = 0;
		this.r = 0;
		this.sx = 0;
		this.sy = 0;
		this.col = ''
		this.a = 0;
		this.stat = 0; // 0: 움직이지 않음, 1:움직이는 중
		this.trig = function(){ // 이제 움직이기 시작함
			if(this.stat==0){
				this.r = parseInt(Math.random()*10) + 2;
				this.ox = this.x = this.r;
				this.oy = this.y = parseInt(Math.random()*1000) % 90; // 0 ~ 89
				this.sx = Math.random()*10 + 2; // 1 ~ 5
				this.sy = 0;
				this.col = Colors[ parseInt(Math.random()*1000) % Colors.length ];
				this.a = 0.5; // 가속도
				this.stat = 1;
			}
		}
		this.Update = function(){
			if(this.stat>0){
				this.ox = this.x;
				this.oy = this.y;
				this.x += this.sx;
				if(this.x<this.r || this.x>CanvasW-this.r){
					this.x -= this.sx;
					this.sx *= -0.5;
				}
				this.sy += this.a;
				this.y += this.sy;
				if(this.y>CanvasH-this.r){
					this.y = CanvasH-this.r;
					this.sy *= -0.5; // 탄성도
					if(Math.abs(this.sy)<0.5){
						this.stat = 0;
					}
				}
			}
		}
		this.Render = function(){
			if(this.stat>0){
				//*
				ctx.fillStyle = this.col;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
				ctx.fill();
				// */
				ctx.strokeStyle = this.col;
				ctx.beginPath();
				ctx.lineWidth = 1;
				//ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
				ctx.moveTo(this.ox, this.oy);
				ctx.lineTo(this.x, this.y);
				ctx.stroke();
			}
		};
		this.Colision = function(){
			/*
			if(isCollision(this.x - this.r, this.y - this.r, this.r*2, this.r*2, MeMe.x, MeMe.y, MeMe.w, MeMe.h)){
				var ox = this.ox;
				var oy = this.oy;

				this.ox = this.x;
				this.oy = this.y;

				// 충돌 은 위 아래 방향만 변경하는걸로 한다.
				this.sy *= -0.5; // 탄성도
			}
			*/
			var left = false;
			var right = false;
			var top = false;
			var bottom = false;
			if(this.y > MeMe.y && this.y < MeMe.y + MeMe.h && this.x > MeMe.x && this.x < MeMe.x + MeMe.w)
			{
				if(this.y < MeMe.y + MeMe.h/10) {
					top = true;
				}
				if(this.y > MeMe.y + MeMe.h - MeMe.h/10) {
					bottom = true;
				}
				if(this.x < MeMe.x + MeMe.w/10) {
					left = true;
				}
				if(this.x > MeMe.x + MeMe.w - MeMe.w/10) {
					right = true;
				}
	
				// 모서리에서 부딪혔을 때
				if((top && left) || (bottom && left)) {
					this.y -= this.sy;
					this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
					this.x -= this.sx;
					this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
				}
				// 위 또는 아래
				else if(top || bottom) {
					this.y -= this.sy;
					this.sy = this.sy * -0.5;
				}	
				// 좌 또는 우
				else if(left || right) {
					this.x -= this.sx;
					this.sx = this.sx * -1;
				}
				else {
					this.y = this.oy;
					this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
					this.x = this.ox;
					this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
				}
				CanvasPrintText(top +" "+ bottom +" "+ left +" "+ right, 120, 60, '22px');
			}
		};
		this.Collision = function(){
			var left = false;
			var right = false;
			var top = false;
			var bottom = false;
			if(this.y > MeMe.y && this.y < MeMe.y + MeMe.h && this.x > MeMe.x && this.x < MeMe.x + MeMe.w)
			{
				if(this.y < MeMe.y + MeMe.h/10) {
					top = true;
				}
				if(this.y > MeMe.y + MeMe.h - MeMe.h/10) {
					bottom = true;
				}
				if(this.x < MeMe.x + MeMe.w/10) {
					left = true;
				}
				if(this.x > MeMe.x + MeMe.w - MeMe.w/10) {
					right = true;
				}
	
				// 모서리에서 부딪혔을 때
				if(top && left || top && right || bottom && left || bottom && right) {
					this.y -= this.sy;
					this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
					this.x -= this.sx;
					this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
				}
				// 위 또는 아래
				else if(top || bottom) {
					this.y -= this.sy;
					this.sy = this.sy * -1;
				}	
				// 좌 또는 우
				else if(left || right) {
					this.x -= this.sx;
					this.sx = this.sx * -1;
				}
				else {
					this.y = this.oy;
					this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
					this.x = this.ox;
					this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
				}
				CanvasPrintText(top +" "+ bottom +" "+ left +" "+ right, 120, 60, '22px');
			}
		};
	};
	this.cnt = cnt==null ? 200 : cnt;
	this.falls = [];
	for(var i=0; i<this.cnt; i++) this.falls[i] = new _MYFALL();
	this.trig = function(){
		for(var i=0; i<this.cnt; i++){
			if(this.falls[i].stat==0){
				this.falls[i].trig();
				break;
			}
		}
	};
	this.FrameNo = 0;
	this.Update = function(){
		for(var i=0; i<this.cnt; i++) this.falls[i].Update();
		if(this.FrameNo%1 == 0) this.trig();
		this.Colision();
		this.FrameNo = (this.FrameNo+1) % 6000;
	};
	this.Render = function(){
		for(var i=0; i<this.cnt; i++) this.falls[i].Render();
	};
	this.Colision = function(obj){
		for(var i=0; i<this.cnt; i++) this.falls[i].Colision(obj);
	};
};
var sMYFALL = function(){
	var Colors = ['#00ffff', '#00ccff', '#cc00ff', '#ccff00', '#ff0000'];
	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.sx = 0;
	this.sy = 0;
	this.col = ''
	this.a = 0;
	this.stat = 0; // 0: 움직이지 않음, 1:움직이는 중
	this.trig = function(){ // 이제 움직이기 시작함
		if(this.stat==0){
			this.r = parseInt(Math.random()*10) + 2;
			this.x = this.r;
			this.y = parseInt(Math.random()*1000) % 90; // 0 ~ 89
			this.sx = parseInt(Math.random()*1000) % 20 + 5; // 1 ~ 5
			this.sy = 0;
			this.col = Colors[ parseInt(Math.random()*1000) % Colors.length ];
			this.a = 0.9;
			this.stat = 1;
		}
	}
	this.Update = function(){
		if(this.stat>0){
			this.x += this.sx;
			if(this.x<this.r || this.x>CanvasW-this.r){
				this.x -= this.sx;
				this.sx *= -1;
			}
			this.sy += this.a;
			this.y += this.sy;
			if(this.y>CanvasH-this.r){
				this.y = CanvasH-this.r;
				this.sy *= -0.5;
				if(Math.abs(this.sy)<0.5){
					this.stat = 0;
				}
			}
			this.Collision();
		}else{
			this.trig();
		}
	}
	this.Render = function(){
		if(this.stat>0){
			ctx.fillStyle = this.col;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
			ctx.fill();
		}
	};
	this.Collision = function(){
		if(isCollision(this.x - this.r, this.y - this.r, this.r*2, this.r*2, MeMe.x, MeMe.y, MeMe.w, MeMe.h)){
			var ox = this.ox;
			var oy = this.oy;

			this.ox = this.x;
			this.oy = this.y;

			// 충돌 은 위 아래 방향만 변경하는걸로 한다.
			this.sy *= -0.5; // 탄성도
		}
	};
}
function isCollision(x1, y1, w1, h1, x2, y2, w2, h2){
	if( x1 + w1 > x2 + 0 && x1 + 0 < x2 + w2 && y1 + h1 > y2 + 0 && y1 + 0 < y2 + h2){
		return true;
	}else{
		return false;
	}
} 