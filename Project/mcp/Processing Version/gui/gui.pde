import processing.serial.*;

final int btn_number = 5;
final int btn_height = 50;
final int btn_width = 100;

final int inputbox_number = 5;
final int inputbox_height = 25;
final int inputbox_width = 100;
int inputbox_focus = 0;

final int margin = 20;

J5MoterCanvas mCanvas;
J5Button [] mButton;
J5InputBox [] mInputBox;
J5InputBoxGroup mInputBoxGroup;

Serial serial;

public void settings() {
  size(800, 600);
}

void setup() {
  background(color(255));
  
  serial = new Serial(this, Serial.list()[0], 9600);
  
  mCanvas = new J5MoterCanvas( margin, margin, 800-inputbox_width-margin*5, 600-btn_height-margin*3 );

  mButton = new J5Button[5];
  for (int i=0; i<5; i++) {
    mButton[i] = new J5Button(
      margin+(btn_width+margin)*i, 
      600-btn_height-margin, 
      btn_width, 
      btn_height
    );
  }
  mButton[0].setText("Start");
  mButton[1].setText("Force Stop");
  mButton[2].setText("-");
  mButton[3].setText("-");
  mButton[4].setText("Exit");

  mInputBox = new J5InputBox[5];
  for (int i=0; i<5; i++) {
    mInputBox[i] = new J5InputBox(
      800-inputbox_width-margin*2, 
      margin*4+(inputbox_height+margin)*i, 
      inputbox_width, 
      inputbox_height
    );
  }
  mInputBox[0].setHolderText("Number");
  mInputBox[1].setHolderText("Speed");
  mInputBox[2].setHolderText("-");
  mInputBox[3].setHolderText("-");
  mInputBox[4].setHolderText("-");
  
  mInputBoxGroup = new J5InputBoxGroup( 800-inputbox_width-margin*3, margin*2, inputbox_width+margin*2, (inputbox_height+margin)*5+margin*2 );
  mInputBoxGroup.setText("DATA");
}

void draw() {
  background(color(255));

  for (int i=0; i<5; i++) {
    mButton[i].show();
  }

  mInputBoxGroup.show();
  for (int i=0; i<5; i++) {
    mInputBox[i].show();
  }
  mInputBox[inputbox_focus].focus();

  mCanvas.show();
}

void mousePressed() {
  for (int i=0; i<btn_number; i++) {
    if (mButton[i].hover()) {
      switch(i) {
      case 0:
        //serial.write("0");
        //serial.write(mInputBox[0].getText()+","+mInputBox[1].getText());
        break;
      case 1:
        print("1");
        //serial.write("1");
        break;
      case 2:
        print("2");
        //serial.write("2");
        break;
      case 3:
        print("3");
        //serial.write("3");
        break;
      case 4:
        exit();
        break;
      }
    }
  }
  
  for (int i=0; i<inputbox_number; i++) {
    if (mInputBox[i].hover()) {
      switch(i) {
      case 0:
        inputbox_focus = 0;
        break;
      case 1:
        inputbox_focus = 1;
        break;
      case 2:
        inputbox_focus = 2;
        break;
      case 3:
        inputbox_focus = 3;
        break;
      case 4:
        inputbox_focus = 4;
        break;
      }
    }
  }
}

void keyPressed() {
  if (key==ENTER || key==RETURN || key==TAB) {
    inputbox_focus++;
    if (inputbox_focus >= inputbox_number) {
      inputbox_focus = 0;
    }
  } else if (key==BACKSPACE) {
    mInputBox[inputbox_focus].deleteChar();
  } else {
    mInputBox[inputbox_focus].insertChar(key);
  }
}
