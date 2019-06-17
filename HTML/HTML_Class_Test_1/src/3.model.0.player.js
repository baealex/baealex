var Player = function(){
	this.w = 200;
	this.h = 50;
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