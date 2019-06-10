class J5Button {
  int x;
  int y;
  int w;
  int h;
  String text;
  int baseColor = 255;
  int hoverColor = 200;
  
  J5Button(int x, int y, int w, int h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  void setText(String text) {
    this.text = text;
  }
  
  void setColor(int c, int hc) {
    this.baseColor = c;
    this.hoverColor = hc;
  }
  
  boolean hover()  {
    if (mouseX >= this.x && mouseX <= this.x+this.w && 
        mouseY >= this.y && mouseY <= this.y+this.h) {
      return true;
    } else {
      return false;
    }
  }
  
  void show() {
    stroke(0);
    if(this.hover()) {
      fill(color(this.hoverColor));
    }
    else {
      fill(color(this.baseColor));
    }
    rect(this.x, this.y, this.w, this.h);
    
    if(this.text != null) {
      fill(color(abs(255-this.baseColor)));
      textAlign(CENTER, CENTER);
      text(this.text, this.x+this.w/2, this.y+this.h/2);
    }
  }
}

class J5MoterCanvas {
  int x;
  int y;
  int h;
  int w;
  
  int posX = 0;
  int posY = 0;
  
  J5MoterCanvas(int x, int y, int w, int h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.posX = this.w+this.x;
    this.posY = this.h-this.y;
  }
  
  void setPos(int x, int y) {
    this.posX = x;
    this.posY = y;
  }
  
  void show() {
    this.update();
    stroke(0);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  
    stroke(0);
    fill(255,0,0);
    ellipse(this.posX, this.posY, 30, 30);
  }
  
  void update() {
    if(this.posX > this.x) {
      this.posX--;
    }
  }
}

final int btn_number = 5;
final int btn_height = 50;
final int btn_width = 100;
final int btn_margin = 10;

J5Button [] mButton = new J5Button[5];
J5MoterCanvas mCanvas = new J5MoterCanvas(btn_width+btn_margin*2, btn_margin, 800-btn_width-btn_margin*3, 600-btn_margin*2);

void setup() {
  size(800, 600);
  background(color(255));
  
  for(int i=0; i<5; i++) {
    mButton[i] = new J5Button(btn_margin,btn_margin+(btn_height+btn_margin)*i,btn_width,btn_height);
  }
  mButton[0].setText("Start");
  mButton[1].setText("Force Stop");
  mButton[2].setText("-");
  mButton[3].setText("-");
  mButton[4].setText("-");
}

void draw() {
  background(color(255));
  
  for(int i=0; i<5; i++) {
    mButton[i].show();
  }
  
  mCanvas.show();
}

void mousePressed() {
  for(int i=0; i<btn_number; i++) {
    if(mButton[i].hover()) {
      switch(i) {
        case 0:
        print("Btn 1 Click!");
        break;
        case 1:
        print("Btn 2 Click!");
        break;
        case 2:
        print("Btn 3 Click!");
        break;
        case 3:
        print("Btn 4 Click!");
        break;
        case 4:
        print("Btn 5 Click!");
        break;
      }
    }
  }
}
