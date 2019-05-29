var Player = function(color) {
    this.x = canvas.width / 2 - 15;
    this.y = canvas.height * 2 / 3 - 15;
    this.sx = 0;
    this.sy = 0;

    this.w = 30;
    this.h = 30;
    this.color = color;

    // this.sx = 5;
    // this.sy = 5;
    this.Update = function() {
        /*
        
        // 일반 등속 운동
        
        if(moveKeyState[0] == 1) {
            if(this.x > 0) {
                this.x -= this.sx;
            }
        }
        if(moveKeyState[1] == 1) {
            if(this.y > 0) {
                this.y -= this.sy;
            }
        }
        if(moveKeyState[2] == 1) {
            if(this.x < canvas.width - this.w) {
                this.x += this.sx;
            }
        }
        if(moveKeyState[3] == 1) {
            if(this.y < canvas.height - this.h) {
                this.y += this.sy;
            }
        }
        // */

        // 가속도 운동

        if(moveKeyState[0] == 1) {
            this.sx -= 0.5;
            if(this.sx < -20) {
                this.sx = -20;
            }
            this.x += this.sx;
            if(this.x < 0) {
                this.x = 0;
                this.sx = 0;
            }
        } else {
            if(this.sx < 0) {
                this.sx += 1;
                if(this.sx >= 0) {
                    this.sx = 0;
                }
            }
        }

        if(moveKeyState[1] == 1) {
            this.sy -= 0.5;
            if(this.sy < -20) {
                this.sy = -20;
            }
            this.y += this.sy;
            if(this.y < 0) {
                this.y = 0;
                this.sy = 0;
            }
        } else {
            if(this.sy < 0) {
                this.sy += 1;
                if(this.sy >= 0) {
                    this.sy = 0;
                }
            }
        }

        if(moveKeyState[2] == 1) {
            this.sx += 0.5;
            if(this.sx > 20) {
                this.sx = 20;
            }
            this.x += this.sx;
            if(this.x > canvas.width - this.w) {
                this.x = canvas.width - this.w;
                this.sx = 0;
            }
        } else {
            if(this.sx > 0) {
                this.sx -= 1;
                if(this.sx <= 0) {
                    this.sx = 0;
                }
            }
        }

        if(moveKeyState[3] == 1) {
            this.sy += 0.5;
            if(this.sy > 20) {
                this.sy = 20;
            }
            this.y += this.sy;
            if(this.y > canvas.height - this.h) {
                this.y = canvas.height - this.h;
                this.sy = 0;
            }
        } else {
            if(this.sy > 0) {
                this.sy += 1;
                if(this.sy <= 0) {
                    this.sy = 0;
                }
            }
        }
    };

    this.Render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    };
}

var OtherBall = function() {
    var colors = ['#fff', '#ff0', '#f0f', '#0ff', '#f00', '#0f0', '#00f'];
    this.color = colors[parseInt((Math.random * 10000) % colors.length)];
    this.mx = canvas.width;
    this.my = canvas.height;
    this.x = parseInt((Math.random()* 9000000) % this.mx)
    this.y = parseInt((Math.random()* 9000000) % this.my)
    this.w = 5;
    this.h = 5;
    this.sx = parseInt(Math.random()*10+1) * RendomPlusOrMinus();
    this.sy = parseInt(Math.random()*10+1) * RendomPlusOrMinus();

    this.Update = function() {
        this.x += this.sx;
        if(this.x < 0 || this.x > this.mx - this.w - 1) {
            this.x -= this.sx;
            var sc = parseInt(Math.random()*10 + 1);
            this.sx = sc * (this.sx < 0 ? 1 : -1)
        }
        this.y += this.sy;
        if(this.y < 0 || this.y > this.my - this.h - 1) {
            this.y -= this.sy;
            var sc = parseInt(Math.random()*10 + 1);
            this.sy = sc * (this.sy < 0 ? 1 : -1)
        }
    };
    
    this.Render = function() {
        console.debug(this.color);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x + (this.w/2), this.y + (this.h/2), this.w, 0, Math.PI * 2, true);
        ctx.fill();
    };
};