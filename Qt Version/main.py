from PyQt5 import QtCore, QtGui
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QMessageBox, QDialog, QLineEdit, QLabel
import threading
import sys
from config import DefaultConf, UserConf


class Ui_MainControlPanel(object):
    isStart = False
    isPause = False
    isForceStop = False
    defaultConf = DefaultConf()
    userConf = UserConf()

    def __init__(self, window):
        window.setObjectName(self.defaultConf.window['config']['objectName'])
        window.setWindowTitle(self.defaultConf.window['config']['title'])
        window.resize(
            self.defaultConf.window['size']['width'], 
            self.defaultConf.window['size']['height']
        )

        # BUTTON
        self.layoutStartButton = self.makePushButton(window, 'START', [180,520,100,40])
        self.layoutPauseButton = self.makePushButton(window, 'PAUSE', [290,520,100,40])
        self.layoutSaveButton  = self.makePushButton(window, 'SAVE' , [400,520,100,40])
        self.layoutExitButton  = self.makePushButton(window, 'EXIT' , [510,520,100,40])

        # INPUT BOX
        self.layoutNumberInput = self.makeLineEdit(window, 'Object Number', [290,200,210,40])
        self.layoutSpeedInput  = self.makeLineEdit(window, 'Pulse Speed'  , [290,250,210,40])
        self.layoutNumberInput.setValidator(QtGui.QIntValidator())
        self.layoutSpeedInput.setValidator(QtGui.QIntValidator())

        # CANVAS
        self.layoutCanvasBackground = QLabel(window)
        self.layoutCanvasMoter = QLabel(window)
        self.initObjectStyle()
        self.initObjectEvent()

        if self.userConf.isRead:
            self.layoutNumberInput.setText(self.userConf.getConf(self.userConf.parser['input']['count']))
            self.layoutSpeedInput.setText( self.userConf.getConf(self.userConf.parser['input']['speed']))
    
    def getValidateInputValue(self, lineEdit):
        if len(lineEdit.text()) == 0:
            return 0
        else:
            return int(lineEdit.text())

    def makePushButton(self, parent, name, rect):
        pushButton = QPushButton(name, parent)
        pushButton.setGeometry(
            QtCore.QRect(
                rect[0],
                rect[1],
                rect[2],
                rect[3]
            )
        )
        return pushButton

    def makeLineEdit(self, parent, placeholder, rect):
        lineEdit = QLineEdit(parent)
        lineEdit.setPlaceholderText(placeholder)
        lineEdit.setGeometry(
            QtCore.QRect(
                rect[0],
                rect[1],
                rect[2],
                rect[3]
            )
        )
        return lineEdit
    
    def makeMessageBox(self, title, content):
        messageBox = QMessageBox()
        messageBox.setWindowTitle(title)
        messageBox.setText(content)
        return messageBox

    def initObjectPosition(self):
        self.layoutCanvasBackground.setGeometry(QtCore.QRect(700,50,700,450))
        self.layoutCanvasMoter.setGeometry(QtCore.QRect(-100,-100,30,30))

    def initObjectStyle(self):
        """
        self.CanvasBackground.setStyleSheet("background:#eee;")
        self.CanvasMoter.setStyleSheet("background:#f00;border-width:1px;border-style:solid;border-radius:15px;")
        """
        pass

    def initObjectEvent(self):
        self.layoutStartButton.clicked.connect(self.BtnStart)
        self.layoutPauseButton.clicked.connect(self.BtnPause)
        self.layoutSaveButton.clicked.connect(self.BtnSave)
        self.layoutExitButton.clicked.connect(self.BtnExit)

    def ControlManager(self):
        if not self.isStart:
            # START
            self.layoutCanvasBackground.move(50,50)
            self.layoutStartButton.setEnabled(False)
        else:
            # STOP
            self.layoutCanvasBackground.move(700,50)
            self.layoutCanvasMoter.move(-100,-100)
            self.layoutStartButton.setEnabled(True)
        self.isStart = not self.isStart

    def BtnStart(self):
        self.ControlManager()
        t = threading.Thread(target=self.MoterRun, args=())
        t.start()

    def BtnPause(self):
        self.isPause = not self.isPause

    def BtnSave(self):
        messageBoxYorN = self.makeMessageBox(
            'is Sure?',
            '현재 입력된 정보를 저장하겠습니까?'
        )
        messageBoxYorN.setStandardButtons(QMessageBox.Cancel | QMessageBox.Ok)
        result = messageBoxYorN.exec_()
        
        if result == QMessageBox.Ok:
            with open('user.conf', 'w') as saveOnFile:
                saveOnFile.write('ObjectNumber:' + str(self.getValidateInputValue(self.layoutNumberInput)) + '\n')
                saveOnFile.write('PulseSpeed:'   + str(self.getValidateInputValue(self.layoutSpeedInput )) + '\n')
            self.makeMessageBox(
                'Done!',
                '저장이 완료되었습니다.'
            ).exec_()


    def BtnExit(self):
        self.isForceStop = True
        exit()

    def MoterRun(self):
        pos = 0
        for i in range(50000):
            if self.isPause:
                while self.isPause:
                    if self.isForceStop:
                        exit()
            else:
                if self.isForceStop:
                    exit()

                pos += 1
                self.layoutCanvasMoter.move(60+pos/100,60)
            print(i)
        self.ControlManager()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    mainWidnow = QDialog()
    ui = Ui_MainControlPanel(mainWidnow)
    mainWidnow.show()
    sys.exit(app.exec_())