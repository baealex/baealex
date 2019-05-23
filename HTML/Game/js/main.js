/*
var my_dot = {
    x : 100,
    y : 100,
    sx : 5,
    sy : 5,
    mx : 800,
    my : 600
}
*/

var MYBALL = function(ele_id, type) {
    this.myObj = document.getElementById(ele_id);
    this.objType = type;
    this.x = 400;
    this.y = 300;
    this.w = 30;
    this.h = 30;
    this.sx = parseInt(Math.random()*10+1);
    this.sy = parseInt(Math.random()*10+1);
    this.mx = 800;
    this.my = 600;
    this.init = function() {
        this.myObj.innerHTML = "●";
        with(this.myObj.style) {
            fontSize = '25px';
            color = '#f00';
            // background = "#000";
            position = 'absolute';
            // border = '1px solid #00f';
            width = this.w + 'px';
            height = this.h + 'px';
            top = this.y + 'px';
            left = this.x + 'px';
        }
       if(this.objType == 'AUTO') {
           var Self = this;
           setTimeout(function(){ Self.AUTO_Update(); }, 33);
        }
    };
    this.USER_Update = function(key) {
        switch(key) {
            case 37 : // left
                if(this.x - this.sx > 0) 
                    this.x -= this.sx;
                break;
            case 38 : // up
                if(this.y - this.sy > 0) 
                    this.y -= this.sy
                break;
            case 39 : // right
                if(this.x + this.sx < this.mx) 
                    this.x += this.sx;
                break;
            case 40 : // down
                if(this.y + this.sy < this.my)
                    this.y += this.sy;
                break;
        }
        setTimeout(this.Render, 0);
    };
    this.AUTO_Update = function() {
        this.x += this.sx;
        if(this.x < 0 || this.x > 800 - this.w - 1) {
            this.x -= this.sx;
            var sc = parseInt(Math.random()*10 + 1);
            this.sx = sc * (this.sx < 0 ? 1 : -1)
        }
        this.y += this.sy;
        if(this.y < 0 || this.y > 600 - this.h - 1) {
            this.y -= this.sy;
            var sc = parseInt(Math.random()*10 + 1);
            this.sy = sc * (this.sy < 0 ? 1 : -1)
        }
        var Self = this;
        setTimeout(function(){ Self.Render(); }, 0);
    };
    this.Render = function() {
        this.myObj.style.top = this.y + 'px';
        this.myObj.style.left = this.x + 'px';
        if(this.objType == 'AUTO') {
            var Self = this;
            setTimeout(function(){ Self.AUTO_Update();}, 33);
        }
    };
};

var my_dot = null;
var ball = null;

window.addEventListener("load", function(e) {
    my_dot = new MYBALL('my-div', 'USER');
    my_dot.init();

    ball = new MYBALL('ball-div', 'AUTO');
    ball.init();
}, false);

window.addEventListener("keydown", function(e) {
    my_dot.USER_Update(e.keyCode);
}, false);