from PyQt5 import QtCore, QtGui
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QMessageBox, QDialog, QLineEdit, QLabel
import threading
import sys
from config import DefaultConf, UserConf, MoterConf

class Ui_MainControlPanel(object):
    isStart = False
    isPause = False
    isForceStop = False
    defaultConf = DefaultConf()
    userConf = UserConf()
    moterConf = MoterConf()

    def __init__(self, window):
        window.setObjectName( self.defaultConf.window['config']['objectName'])
        window.setWindowTitle(self.defaultConf.window['config']['title'])
        window.resize(
            self.defaultConf.window['size']['width'], 
            self.defaultConf.window['size']['height']
        )

        # BUTTON
        self.layoutStartButton = self.makePushButton(window, 'START', [10,400,150,40])
        self.layoutPauseButton = self.makePushButton(window, 'PAUSE', [10,450,150,40])
        self.layoutSaveButton  = self.makePushButton(window, 'SAVE' , [10,500,150,40])
        self.layoutExitButton  = self.makePushButton(window, 'EXIT' , [10,550,150,40])

        # INPUT BOX
        self.layoutNumberInput = self.makeLineEdit(window, 'Object Number', [10,10,150,40])
        self.layoutSpeedInput  = self.makeLineEdit(window, 'Pulse Speed'  , [10,60,150,40])
        self.layoutNumberInput.setValidator(QtGui.QIntValidator())
        self.layoutSpeedInput.setValidator(QtGui.QIntValidator())

        # CANVAS
        self.layoutCanvasBackground = QLabel(window)
        self.layoutCanvasMoter = QLabel(window)

        self.layoutCanvasBackground.setStyleSheet(
            """
            background:#eee;
            """
        )
        self.layoutCanvasMoter.setStyleSheet(
            """
            background:#f00;
            border-width:1px;
            border-style:solid;
            border-radius:15px;
            """
        )
        
        self.initObjectPosition()
        self.initObjectEvent()

        # WINDOW STYLE SHEET
        css = ''
        for line in open('style.css', 'r').readlines():
            css += line
        window.setStyleSheet(css)

        # CONFIG READ
        if self.userConf.isRead:
            self.layoutNumberInput.setText(
                self.userConf.getConf(
                    self.userConf.parser['input']['count']
                )
            )
            self.layoutSpeedInput.setText (
                self.userConf.getConf(
                    self.userConf.parser['input']['speed']
                )
            )
    
    def getValidateInputValue(self, lineEdit):
        if len(lineEdit.text()) == 0:
            return str(0)
        else:
            return str(lineEdit.text())

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
        self.layoutCanvasBackground.setGeometry(QtCore.QRect(170,10,620,580))
        self.layoutCanvasMoter.setGeometry(QtCore.QRect(-100,-100,30,30))

    def initObjectEvent(self):
        self.layoutStartButton.clicked.connect(self.btnStartEvent)
        self.layoutPauseButton.clicked.connect(self.btnPauseEvent)
        self.layoutSaveButton.clicked.connect(self.btnSaveEvent)
        self.layoutExitButton.clicked.connect(self.btnExitEvent)

    def controlManager(self):
        if not self.isStart:
            self.layoutStartButton.setEnabled(False)
        else:
            self.layoutStartButton.setEnabled(True)
        self.isStart = not self.isStart

    def btnStartEvent(self):
        self.controlManager()
        t = threading.Thread(target=self.moterRun, args=())
        t.start()

    def btnPauseEvent(self):
        self.isPause = not self.isPause

    def btnSaveEvent(self):
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


    def btnExitEvent(self):
        self.isForceStop = True
        exit()

    def moterRun(self):
        objectNumber = int(self.getValidateInputValue(self.layoutNumberInput))
        pulseDelay = float(self.getValidateInputValue(self.layoutSpeedInput))
        while True:
            self.moterConf.setDirAxis('X', 1)
            for i in range(50000):
                self.moterMoveControl('X', pulseDelay)
            
            self.moterConf.setDirAxis('Y', 1)
            for i in range(objectNumber):
                for i in range(50000/objectNumber):
                    self.moterMoveControl('Y', pulseDelay)
                self.moterConf.setDirAxis('Z', 1)
                for i in range(5000):
                    self.moterMoveControl('Z', pulseDelay)
                self.moterConf.setDirAxis('Z', 0)
                for i in range(5000):
                    self.moterMoveControl('Z', pulseDelay)
            
            self.moterConf.setDirAxis('Y', 0)
            for i in range(50000):
                self.moterMoveControl('Y', pulseDelay)
            
            self.moterConf.setDirAxis('X', 0)
            for i in range(50000):
                self.moterMoveControl('X', pulseDelay)
            # self.layoutCanvasMoter.move(60+pos/100,60)
            break
        self.controlManager()

    def moterMoveControl(self, axis, delay):
        if self.isPause:
            while self.isPause:
                if self.isForceStop:
                    exit()
        else:
            if self.isForceStop:
                exit()
            self.moterConf.setPulseAxis(axis, delay)

if __name__ == "__main__":
    app = QApplication(sys.argv)
    mainWidnow = QDialog()
    ui = Ui_MainControlPanel(mainWidnow)
    mainWidnow.show()
    sys.exit(app.exec_())