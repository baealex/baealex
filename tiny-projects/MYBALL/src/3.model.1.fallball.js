var FallBall = function(){
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