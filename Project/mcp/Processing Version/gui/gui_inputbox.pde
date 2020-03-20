class J5InputBoxGroup {
  int x, y, w, h;
  String text;
  
  J5InputBoxGroup(int x, int y, int w, int h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  void setText(String text) {
    this.text = text;
  }
  
  void show() {
    stroke(200);
    fill(255);
    rect(this.x,this.y,this.w,this.h);
    if(this.text != "") {
      fill(color(200));
      textAlign(CENTER, CENTER);
      text("DATA", this.x+this.w/2, this.y);
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
    if (result.length() > 0) {
      result = result.substring(0, result.length()-1);
    }
  }

  void insertChar(char c) {
    result += c;
  }

  String getText() {
    return this.result;
  }
  
  boolean hover() {
    if (mouseX >= this.x && mouseX <= this.x+this.w && 
      mouseY >= this.y && mouseY <= this.y+this.h) {
      return true;
    } else {
      return false;
    }
  }

  void show() {
    stroke(100);
    fill(color(255));
    rect(this.x, this.y, this.w, this.h);

    if (this.result != "") {
      fill(color(0));
      textAlign(CENTER, CENTER);
      text(this.result, this.x+this.w/2, this.y+this.h/2);
    } else {
      if (this.holder != null) {
        fill(color(200));
        textAlign(CENTER, CENTER);
        text(this.holder, this.x+this.w/2, this.y+this.h/2);
      }
    }
  }
  
  void focus() {
    stroke(100);
    fill(color(255));
    rect(this.x, this.y, this.w, this.h);

    if (this.result != "") {
      fill(color(0));
      textAlign(CENTER, CENTER);
      text(this.result+"|", this.x+this.w/2, this.y+this.h/2);
    } else {
      if (this.holder != null) {
        fill(color(200));
        textAlign(CENTER, CENTER);
        text(this.holder, this.x+this.w/2, this.y+this.h/2);
        fill(color(0));
        textAlign(CENTER, CENTER);
        text("|", this.x+this.w/2, this.y+this.h/2);
      }
    }
  }
}
