class J5MoterCanvas {
  CanvasMoterObject moter;
  CanvasDesObject [] des;
  int desCount = 0;
  
  int x;
  int y;
  int w;
  int h;

  J5MoterCanvas(int x, int y, int w, int h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    moter = new CanvasMoterObject(this.x, this.y);
    des = new CanvasDesObject[5];
    des[desCount++] = new CanvasDesObject(100, 100);
    des[desCount++] = new CanvasDesObject(120, 100);
    des[desCount++] = new CanvasDesObject(140, 100);
    des[desCount++] = new CanvasDesObject(160, 100);
    des[desCount++] = new CanvasDesObject(180, 100);
  }

  void show() {
    update();
    
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    
    moter.show();
    for(int i=0;i<desCount;i++) {
      des[i].show();
    }
  }
  
  int getPos(char pos) {
    int result = 0;
    switch(pos) {
      case 'x':
        result = this.x;
        break;
      case 'y':
        result = this.y;
        break;
      case 'w':
        result = this.w;
        break;
      case 'h':
        result = this.h;
        break;
    }
    return result;
  }
  
  int desX = 0;
  int desY = 0;

  void update() {
    if(desY < 100) {
      desY++;
      moter.movePos(0,1);
    }
    else {
      desX++;
      moter.movePos(1,0);
    }
  }
}
