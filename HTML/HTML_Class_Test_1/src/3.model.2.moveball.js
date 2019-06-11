var MoveBall = function(){
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
	this.Collision = function(){ // 돌아다니는 공
		// 상하좌우 체크
		var left = false;
		var right = false;
		var top = false;
		var bottom = false;

		if(this.y + this.r > MeMe.y && this.y - this.r < MeMe.y + MeMe.h && this.x + this.r > MeMe.x && this.x - this.r < MeMe.x + MeMe.w)
		{ // 충돌 감지
			if(this.y + this.r < MeMe.y + MeMe.h/10) {
				top = true; // 위쪽에서 접근한 공
			}
			if(this.y - this.r > MeMe.y + MeMe.h - MeMe.h/10) {
				bottom = true; // 아래에서 접근한 공
			}
			if(this.x + this.r < MeMe.x + MeMe.w/10) {
				left = true; // 왼쪽에서 접근한 공
			}
			if(this.x - this.r > MeMe.x + MeMe.w - MeMe.w/10) {
				right = true; // 오른쪽에서 접근한 공
			}

			// MeMe가 움직이지 않는 경우
			if(keyStat[0] + keyStat[1] + keyStat[2] + keyStat[3] == 0) {
				// 모서리에서 부딪혔을 때 -> 상하좌우 방향 변경
				if((top && left && this.sy > 0 && this.sx > 0)
				|| (top && right && this.sy > 0 && this.sx < 0)
				|| (bottom && left && this.sy < 0 && this.sx > 0)
				|| (bottom && right && this.sy < 0 && this.sx < 0)) {
					this.y -= this.sy;
					this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
					this.x -= this.sx;
					this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
				}
				// 위 또는 아래 -> 상하 방향 변경
				else if(top || bottom) {
					// 모서리에 맞았으나 좌우 방향을 변경해야 하는 경우
					if((top && left && this.sy < 0 && this.sx > 0)
					|| (top && right && this.sy < 0 && this.sx < 0)
					|| (bottom && left && this.sy > 0 && this.sx > 0)
					|| (bottom && right && this.sy > 0 && this.sx < 0)) {
						this.x -= this.sx;
						this.sx = this.sx * -1;
					}
					else {
						this.y -= this.sy;
						this.sy = this.sy * -1;
					}
				}	
				// 왼쪽 또는 오른쪽 -> 좌우 방향 변경
				else if(left || right) {
					this.x -= this.sx;
					this.sx = this.sx * -1;
				}
				else {
					this.sy = (parseInt(Math.random()*10) + 2) * (this.sy>0?-1:1);
					this.sx = (parseInt(Math.random()*10) + 2) * (this.sx>0?-1:1);
					this.y += this.sy;
					this.x += this.sx;
				}
			}

			// MeMe가 움직이고 있는 경우
			else {
				if(top && keyStat[1]) {
					if(this.sy < MeMe.sy) {
						// MeMe가 느리면 밀어주는
						this.sy -= MeMe.sy;	
					}
					else {
						// MeMe가 빠르면 밀고있는 개체는 속도를 같게 맞춤
						this.sy = MeMe.sy;
						this.sx = MeMe.sx;
						this.y = MeMe.y - this.r;
					}
				} else if(top) {
					// 아닌 개체는 튕겨나감
					this.y -= this.sy;
					this.sy = this.sy * -1;
				}
				if(bottom && keyStat[3]) {
					if(this.sy > MeMe.sy) {
						this.sy += MeMe.sy;	
					}
					else {
						this.sy = MeMe.sy;
						this.sx = MeMe.sx;
						this.y = MeMe.y + MeMe.h + this.r;
					}
				} else if(bottom) {
					this.y -= this.sy;
					this.sy = this.sy * -1;
				}
				if(left && keyStat[0]) {
					if(this.sx < MeMe.sx) {
						this.sx -= MeMe.sx;	
					}
					else {
						this.sy = MeMe.sy;
						this.sx = MeMe.sx;
						this.x = MeMe.x - this.r;
					}
				} else if(left) {
					this.x -= this.sx;
					this.sx = this.sx * -1;
				}
				if(right && keyStat[2]) {
					if(this.sx > MeMe.sx) {
						this.sx += MeMe.sx;	
					}
					this.sy = MeMe.sy;
					this.sx = MeMe.sx;
					this.x = MeMe.x + MeMe.w + this.r;
				} else if(right) {
					this.x -= this.sx;
					this.sx = this.sx * -1;
				}
			}
			CanvasPrint(top +" "+ bottom +" "+ left +" "+ right, 120, 60, '22px');
		}
	};
};
var MoveBalls = function(cnt){
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
	for(var i=0; i<this.cnt; i++) this.balls[i] = new MoveBall();
}