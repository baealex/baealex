var ChangePlayMode = new function(){
	this.oldPlayer = playS;
	this.newPlayer = null;
	this.isRun = false;
	this.mode = 0;
	this.speedX = 35;
	this.speedY = 25;
	this.screenX = 0;
	this.screenY = 0;
	this.screenR = 0;
	this.screenG = 0;
	this.screenB = 0;
	this.screenM = 0;
	this.change = function(player){
		if(player==playS) return;
		this.oldPlayer = playS;
		this.newPlayer = player;
		this.isRun = true;
		this.mode = 0;
		this.screenR = parseInt(Math.random()*255);
		this.screenG = parseInt(Math.random()*255);
		this.screenB = parseInt(Math.random()*255);
		this.screenM = parseInt(Math.random()*4);
		this.speedX = 35;
		this.speedY = 25;
		switch(this.screenM) {
			case 0:
				this.screenX = -CanvasW;
				this.screenY = 0;
				break;
			case 1:
				this.screenX = CanvasW;
				this.screenY = 0;
				break;
			case 2:
				this.screenX = 0;			
				this.screenY = -CanvasH;
				break;
			case 3:
				this.screenX = 0;
				this.screenY = CanvasH;
				break;
		}
	};
	this.Render = function(){
		if(this.isRun){
			if(this.mode == 0) {
				this.oldPlayer.Update();
				this.oldPlayer.Render();
				switch(this.screenM) {
					case 0:
						this.screenX += this.speedX;
						if(this.screenX > 0) {
							this.screenX = 0;
							this.mode = 1;
						}
						break;
					case 1:
						this.screenX -= this.speedX;
						if(this.screenX < 0) {
							this.screenX = 0;
							this.mode = 1;
						}
						break;
					case 2:
						this.screenY += this.speedY;
						if(this.screenY > 0) {
							this.screenY = 0;
							this.mode = 1;
						}
						break;
					case 3:
						this.screenY -= this.speedY;
						if(this.screenY < 0) {
							this.screenY = 0;
							this.mode = 1;
						}
						break;
				}
			} else {
				this.newPlayer.Update();
				this.newPlayer.Render();
				switch(this.screenM) {
					case 0:
						this.screenX -= this.speedX;
						if(this.screenX < -CanvasW) {
							playS = this.newPlayer;
							this.isRun = false;
						}
						break;
					case 1:
						this.screenX += this.speedX;
						if(this.screenX > CanvasW) {
							playS = this.newPlayer;
							this.isRun = false;
						}
						break;
					case 2:
						this.screenY -= this.speedY;
						if(this.screenY < -CanvasH) {
							playS = this.newPlayer;
							this.isRun = false;
						}
						break;
					case 3:
						this.screenY += this.speedY;
						if(this.screenY > CanvasH) {
							playS = this.newPlayer;
							this.isRun = false;
						}
						break;
				}
			}
			this.speedX *= 1.01;
			this.speedY *= 1.01;
			ctx.fillStyle = "rgb("+this.screenR+","+this.screenG+","+this.screenB+")";
			ctx.fillRect (this.screenX, this.screenY, CanvasW, CanvasH);
		}
	};
};