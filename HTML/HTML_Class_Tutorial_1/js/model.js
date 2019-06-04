var mapWidth = 800;
var mapHeight = 600;

var PlayerBall= function(ele_id) {
    this.mObject = document.getElementById(ele_id);
    this.x = 400;
    this.y = 300;
    this.w = 30;
    this.h = 30;
    this.sx = 5;
    this.sy = 5;
    this.mx= mapWidth - this.w;
    this.my = mapHeight - this.h;
    this.init = function() {
        // this.mObject.innerHTML = "●";
        with(this.mObject.style) {
            // fontSize = '25px';
            // color = '#00f';
            backgroundColor = "#00f";
            position = 'absolute';
            border = '1px solid #000';
            borderRadius = "100%";
            width = this.w + 'px';
            height = this.h + 'px';
            top = this.y + 'px';
            left = this.x + 'px';
        }
    }
    this.Render = function() {
        this.mObject.style.top = this.y + 'px';
        this.mObject.style.left = this.x + 'px';
    };
}

var OtherBall = function(ele_id, player) {
    this.mObject = document.getElementById(ele_id);
    this.mPlayer = player;
    this.x = parseInt(Math.random()*mapWidth)
    this.y = parseInt(Math.random()*mapHeight)
    this.w = 30;
    this.h = 30;
    this.sx = parseInt(Math.random()*10+1) * RendomPlusOrMinus();
    this.sy = parseInt(Math.random()*10+1) * RendomPlusOrMinus();
    this.mx = 800;
    this.my = 600;
    this.init = function() {
       // this.mObject.innerHTML = "●";
        with(this.mObject.style) {
            // fontSize = '25px';
            // color = '#f00;
            backgroundColor = "#f00";
            position = 'absolute';
            border = '1px solid #000';
            borderRadius = "100%";
            width = this.w + 'px';
            height = this.h + 'px';
            top = this.y + 'px';
            left = this.x + 'px';
        }
        var Self = this;
        setTimeout(function(){ Self.Update(); }, 33);
    };
    this.Update = function() {
        this.x += this.sx;
        if(this.x < 0 || this.x > mapWidth - this.w - 1) {
            this.x -= this.sx;
            var sc = parseInt(Math.random()*10 + 1);
            this.sx = sc * (this.sx < 0 ? 1 : -1)
        }
        this.y += this.sy;
        if(this.y < 0 || this.y > mapHeight - this.h - 1) {
            this.y -= this.sy;
            var sc = parseInt(Math.random()*10 + 1);
            this.sy = sc * (this.sy < 0 ? 1 : -1)
        }
        this.Collision();
        
        var Self = this;
        setTimeout(function(){ Self.Render(); }, 0);
    };
    this.Collision = function() {
        if(this.mPlayer.x > this.x) {
            if(this.mPlayer.y > this.y) {
                if(this.mPlayer.x - (this.x + this.w) < 0 && this.mPlayer.y - (this.y + this.h) < 0) {
                    alert("충돌");
                }
            }
            if(this.mPlayer.y < this.y) {

            }
        }
        else if(this.mPlayer.x < this.x && this.mPlayer.y < this.y) {
            if(this.x - (this.mPlayer.x + this.mPlayer.w) < 0 && this.y - (this.mPlayer.y + this.mPlayer.h) < 0) {
                alert("충돌");
            }
        }
    };
    this.Render = function() {
        this.mObject.style.top = this.y + 'px';
        this.mObject.style.left = this.x + 'px';
        var Self = this;
        setTimeout(function(){ Self.Update();}, 33);  
    };
};