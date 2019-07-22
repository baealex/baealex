var MoveBall = function () {
	var colors = ['rgba(255,0,0,1)', 'rgba(0,128,255,1)', 'rgba(128,128,255,1)', 'rgba(255,255,0,1)', 'rgba(128,255,0,1)', 'rgba(0,255,0,1)', 'rgba(255,0,255,1)', 'rgba(255,0,128,1)'];
	this.r = parseInt(Math.random() * 10) + 2;
	this.ox = this.x = parseInt(Math.random() * 9000) % (CanvasW - this.r * 2) - this.r;
	this.oy = this.y = parseInt(Math.random() * 9000) % (CanvasH - this.r * 2) - this.r;
	this.col = colors[parseInt(Math.random() * 1000) % colors.length];
	this.sx = (parseInt(Math.random() * 10) + 2) * (Math.random() * 1000 > 500 ? 1 : -1);
	this.sy = (parseInt(Math.random() * 10) + 2) * (Math.random() * 1000 > 500 ? 1 : -1);
	this.Update = function () {
		this.ox = this.x; // 과거 위치를 기억함
		this.oy = this.y;
		this.x += this.sx;
		if (this.x < this.r || this.x > CanvasW - this.r) {
			this.x -= this.sx;
			this.sx = (parseInt(Math.random() * 10) + 2) * (this.sx > 0 ? -1 : 1);
		}
		this.y += this.sy;
		if (this.y < this.r || this.y > CanvasH - this.r) {
			this.y -= this.sy;
			this.sy = (parseInt(Math.random() * 10) + 2) * (this.sy > 0 ? -1 : 1);
		}
		this.Collision();
	};
	this.Render = function () {
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
	};
	this.Collision = function () { // 돌아다니는 공
		var dx = this.x - this.ox;
		var dy = this.y - this.oy;
		var inclination = dy / dx;

		for (var x = 0; dx > 0 ? x <= dx : x >= dx; dx > 0 ? x++ : x--) {
			var y = x * inclination;

			if (isCollision((this.ox + x) - this.r, (this.oy + y) - this.r, this.r * 2, this.r * 2, MeMe.x, MeMe.y, MeMe.w, MeMe.h)) {

				var ss = getReflectionDir(dx, dy, (this.ox + x) - this.r, (this.oy + y) - this.r, this.r * 2, this.r * 2, MeMe.x, MeMe.y, MeMe.w, MeMe.h);

				if (ss.sx < 0 && keyStat[mkey.left] == 0) { 
					this.sx *= ss.sx;
					this.x = MeMe.x - this.r;
					return;
				}
				
				if (ss.sx > 0 && keyStat[mkey.right] == 0) {
					this.sx *= -ss.sx;
					this.x = MeMe.x + MeMe.w + this.r;
					return;
				}

				if (ss.sy < 0 && keyStat[mkey.up] == 0) {
					this.sy *= ss.sy;
					this.y = MeMe.y - this.r;
					return;
				}

				if (ss.sy > 0 && keyStat[mkey.down] == 0) {
					this.sy *= -ss.sy;
					this.y = MeMe.y + MeMe.h + this.r;
					return;
				}

				if(keyStat[0] + keyStat[1] + keyStat[2] + keyStat[3] > 0) {
					this.sx = MeMe.sx + 0.1;
					this.sy = MeMe.sy + 0.1;
					return;
				}
			}
		}
	};
};
var MoveBalls = function (cnt) {
	this.cnt = cnt == null ? 10 : cnt;
	this.balls = [];
	this.Update = function () {
		for (var i = 0; i < this.cnt; i++) this.balls[i].Update();
	};
	this.Render = function () {
		for (var i = 0; i < this.cnt; i++) this.balls[i].Render();
	};
	this.Collision = function (obj) {
		for (var i = 0; i < this.cnt; i++) this.balls[i].Collision(obj);
	};
	for (var i = 0; i < this.cnt; i++) this.balls[i] = new MoveBall();
};