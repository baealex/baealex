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

		case 81: MeMe.h += 5; break;
		case 87: if(MeMe.h > 0) MeMe.h -= 5; break;
		case 65: MeMe.w += 5; break;
		case 83: if(MeMe.w > 0) MeMe.w -= 5; break;

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
	Canvas = document.getElementById('canvas');
	ctx = Canvas.getContext('2d');
	CanvasW = Canvas.width;
	CanvasH = Canvas.height;

	MeMe = new Player();
	sFall = new FallBall(); // 1번 / 한개 떨어지는
	Ball = new MoveBalls(50); // 2번 / 돌아다니는 공
	Fall = new FallBalls(1000); // 3번 / 여러개 떨어지는
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