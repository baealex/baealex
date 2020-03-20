class CanvasObject {
  int x;
  int y;
  int r;
  
  CanvasObject(int x, int y) {
    this.x = x;
    this.y = y;
  }
  
  void show() {
  }
  
  void setRadius(int r) {
    this.r = r;
  }
  
  void setPos(int x, int y) {
    this.x = x;
    this.y = y;
  }
  
  void movePos(int x, int y) {
    this.x += x;
    this.y += y;
  }
  
  int getRadius() {
    return this.r;
  }
}

class CanvasMoterObject extends CanvasObject {
  CanvasMoterObject(int x, int y) {
    super(x+15, y+15);
    setRadius(30);
  }
  
  @Override
  void show() {
    stroke(0);
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);
  }
}

class CanvasDesObject extends CanvasObject {
  CanvasDesObject(int x, int y) {
    super(x, y);
    setRadius(10);
  }
  
  @Override
  void show() {
    stroke(0);
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.r, this.r);
  }
}
