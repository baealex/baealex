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

  boolean hover() {
    if (mouseX >= this.x && mouseX <= this.x+this.w && 
      mouseY >= this.y && mouseY <= this.y+this.h) {
      return true;
    } else {
      return false;
    }
  }

  void show() {
    stroke(0);
    if (this.hover()) {
      fill(color(this.hoverColor));
    } else {
      fill(color(this.baseColor));
    }
    rect(this.x, this.y, this.w, this.h);

    if (this.text != null) {
      fill(color(abs(255-this.baseColor)));
      textAlign(CENTER, CENTER);
      text(this.text, this.x+this.w/2, this.y+this.h/2);
    }
  }
}
