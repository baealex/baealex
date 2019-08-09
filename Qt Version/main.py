from PyQt5 import QtCore, QtGui, QtWidgets
import threading
import sys

class Ui_ControlPanel(object):

    is_start = False
    is_pause = False
    is_force_stop = False

    def setupUi(self, ControlPanel):
        ControlPanel.setObjectName("ControlPanel")
        ControlPanel.setWindowTitle("Control Panel v2")
        ControlPanel.resize(800, 600)

        # BUTTON
        self.StartButton = QtWidgets.QPushButton(ControlPanel)
        self.PauseButton = QtWidgets.QPushButton(ControlPanel)
        self.SaveButton = QtWidgets.QPushButton(ControlPanel)
        self.ExitButton = QtWidgets.QPushButton(ControlPanel)

        # INPUT BOX
        self.NumberInput = QtWidgets.QLineEdit(ControlPanel)
        self.SpeedInput = QtWidgets.QLineEdit(ControlPanel)

        # CANVAS
        self.CanvasBackground = QtWidgets.QLabel(ControlPanel)
        self.CanvasMoter = QtWidgets.QLabel(ControlPanel)

        self.init_name()
        self.init_pos()
        self.init_style()
        self.init_event()

    def init_name(self):
        self.StartButton.setText("START")
        self.PauseButton.setText("PAUSE")
        self.SaveButton.setText("SAVE")
        self.ExitButton.setText("Exit")

        self.NumberInput.setPlaceholderText("Object Number")
        self.SpeedInput.setPlaceholderText("Pulse Speed")

    def init_pos(self):
        self.StartButton.setGeometry(QtCore.QRect(180,520,100,40))
        self.PauseButton.setGeometry(QtCore.QRect(290,520,100,40))
        self.SaveButton.setGeometry(QtCore.QRect(400,520,100,40))
        self.ExitButton.setGeometry(QtCore.QRect(510,520,100,40))

        self.NumberInput.setGeometry(QtCore.QRect(290,200,210,40))
        self.SpeedInput.setGeometry(QtCore.QRect(290,250,210,40))

        self.CanvasBackground.setGeometry(QtCore.QRect(700,50,700,450))
        self.CanvasMoter.setGeometry(QtCore.QRect(-100,-100,30,30))

    def init_style(self):
        ControlPanel.setStyleSheet("background:#fff;")
        self.CanvasBackground.setStyleSheet("background:#eee;")
        self.CanvasMoter.setStyleSheet("background:#f00;border-width:1px;border-style:solid;border-radius:15px;")

    def init_event(self):
        self.StartButton.clicked.connect(self.BtnStart)
        self.PauseButton.clicked.connect(self.BtnPause)
        self.SaveButton.clicked.connect(self.BtnSave)
        self.ExitButton.clicked.connect(self.BtnExit)

    def ControlManager(self):
        if not self.is_start:
            # START
            self.CanvasBackground.move(50,50)
            self.StartButton.setEnabled(False)
        else:
            # STOP
            self.CanvasBackground.move(700,50)
            self.CanvasMoter.move(-100,-100)
            self.StartButton.setEnabled(True)
        self.is_start = not self.is_start

    def BtnStart(self):
        self.ControlManager()
        t = threading.Thread(target=self.MoterRun, args=())
        t.start()

    def BtnPause(self):
        self.is_pause = not self.is_pause

    def BtnSave(self):
        print("Save")

    def BtnExit(self):
        self.is_force_stop = True
        exit()

    def MoterRun(self):
        pos = 0
        for i in range(50000):
            if self.is_pause:
                while self.is_pause:
                    if self.is_force_stop:
                        exit()
            else:
                if self.is_force_stop:
                    exit()

                pos += 1
                self.CanvasMoter.move(60+pos/100,60)
            print(i)
        self.ControlManager()

if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    ControlPanel = QtWidgets.QDialog()
    ui = Ui_ControlPanel()
    ui.setupUi(ControlPanel)
    ControlPanel.show()
    sys.exit(app.exec_())