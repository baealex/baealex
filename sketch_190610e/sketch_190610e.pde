class J5Button {
  int x, y, w, h;
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

class J5InputBox {
  int x, y, w, h;
  String holder="";
  String result="";

  J5InputBox(int x, int y, int w, int h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  void setHolderText(String text) {
    this.holder = text;
  }

  void Input(String t) {
    this.result += t;
  }

  void deleteChar() {
    if(result.length() > 0) {
      result = result.substring(0,result.length()-1);
    }
  }

  void insertChar(char c) {
    result += c;
  }

  String getText() {
    return this.result;
  }
  
  void show() {
    stroke(0);
    fill(color(255));
    rect(this.x, this.y, this.w, this.h);

    if(this.result != null) {
      fill(color(0));
      textAlign(CENTER, CENTER);
      text(this.result, this.x+this.w/2, this.y+this.h/2);
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

final int inputbox_number = 5;
final int inputbox_height = 25;
final int inputbox_width = 100;
final int inputbox_margin = 10;
int inputbox_focus = 0;

J5MoterCanvas mCanvas = new J5MoterCanvas(btn_width+btn_margin*2, btn_margin, 800-btn_width-btn_margin*3, 600-btn_margin*2);
J5Button [] mButton = new J5Button[5];
J5InputBox [] mInputBox = new J5InputBox[5];

public void settings() {
  size(800, 600);
}

void setup() {
  background(color(255));

  for(int i=0; i<5; i++) {
    mButton[i] = new J5Button(btn_margin,btn_margin+(btn_height+btn_margin)*i,btn_width,btn_height);
  }
  mButton[0].setText("Start");
  mButton[1].setText("Force Stop");
  mButton[2].setText("-");
  mButton[3].setText("-");
  mButton[4].setText("Exit");
  
  for(int i=0; i<5; i++) {
    mInputBox[i] = new J5InputBox(btn_margin,310+(inputbox_height+inputbox_margin)*i,inputbox_width,inputbox_height);
  }
}

void draw() {
  background(color(255));

  for(int i=0; i<5; i++) {
    mButton[i].show();
  }
  
  for(int i=0; i<5; i++) {
    mInputBox[i].show();
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
        exit();
        break;
      }
    }
  }
}

void keyPressed() {

  if(key==ENTER || key==RETURN || key==TAB) {
    inputbox_focus++;
    if(inputbox_focus >= inputbox_number) {
      inputbox_focus = 0;
    }
  } else if(key==BACKSPACE) {
    mInputBox[inputbox_focus].deleteChar();
  }
  else {
    mInputBox[inputbox_focus].insertChar(key);
  }
}
