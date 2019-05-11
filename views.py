from PyQt5 import QtCore, QtGui, QtWidgets
from models import *
import sys

class Ui_TestBox(object):

    def setupUi(self, TestBox):

        TestBox.setObjectName("TestBox")
        TestBox.resize(800, 600)
        
        # ------------------------------------------------ #
                
        self.X_VALUE_LABLE = QtWidgets.QLabel(TestBox)
        self.X_VALUE_LABLE.setGeometry(QtCore.QRect(20, 40, 91, 61))
        self.X_VALUE_LABLE.setObjectName("X_VALUE_LABLE")
        self.X_VALUE_LABLE.setText("X Value : ")
        
        self.X_VALUE_INPUT = QtWidgets.QTextEdit(TestBox)
        self.X_VALUE_INPUT.setGeometry(QtCore.QRect(140, 40, 104, 61))
        self.X_VALUE_INPUT.setObjectName("X_VALUE_INPUT")
        
        self.Y_VALUE_LABLE = QtWidgets.QLabel(TestBox)
        self.Y_VALUE_LABLE.setGeometry(QtCore.QRect(300, 40, 91, 61))
        self.Y_VALUE_LABLE.setObjectName("Y_VALUE_LABLE")
        self.Y_VALUE_LABLE.setText("Y Value : ")
        
        self.Y_VALUE_INPUT = QtWidgets.QTextEdit(TestBox)
        self.Y_VALUE_INPUT.setGeometry(QtCore.QRect(420, 40, 104, 61))
        self.Y_VALUE_INPUT.setObjectName("Y_VALUE_INPUT")
        
        self.Z_VALUE_LABLE = QtWidgets.QLabel(TestBox)
        self.Z_VALUE_LABLE.setGeometry(QtCore.QRect(550, 40, 91, 61))
        self.Z_VALUE_LABLE.setObjectName("Z_VALUE_LABLE")
        self.Z_VALUE_LABLE.setText("Z Value : ")
        
        self.Z_VALUE_INPUT = QtWidgets.QTextEdit(TestBox)
        self.Z_VALUE_INPUT.setGeometry(QtCore.QRect(670, 40, 104, 61))
        self.Z_VALUE_INPUT.setObjectName("Z_VALUE_INPUT")
        
        # ------------------------------------------------ #
        
        self.Expected_view = QtWidgets.QTextEdit(TestBox)
        self.Expected_view.setGeometry(QtCore.QRect(130, 140, 621, 281))
        self.Expected_view.setObjectName("Expected_view")
        
        self.X = QtWidgets.QLabel(TestBox)
        self.X.setGeometry(QtCore.QRect(730, 430, 21, 16))
        self.X.setObjectName("X")
        
        self.Y = QtWidgets.QLabel(TestBox)
        self.Y.setGeometry(QtCore.QRect(110, 140, 21, 16))
        self.Y.setObjectName("Y")
        
        self.EXPECTED_VALUE = QtWidgets.QPushButton(TestBox)
        self.EXPECTED_VALUE.setGeometry(QtCore.QRect(20, 140, 71, 281))
        self.EXPECTED_VALUE.setLayoutDirection(QtCore.Qt.LeftToRight)
        self.EXPECTED_VALUE.setObjectName("EXPECTED_VALUE")
        
        # ------------------------------------------------ #
        
        self.SPEED_VALUE_LABLE = QtWidgets.QLabel(TestBox)
        self.SPEED_VALUE_LABLE.setGeometry(QtCore.QRect(60, 470, 131, 51))
        self.SPEED_VALUE_LABLE.setObjectName("SPEED_VALUE_LABLE")
        self.SPEED_VALUE_LABLE.setText("Speed : ")
        
        self.SPEED_VALUE_INPUT = QtWidgets.QTextEdit(TestBox)
        self.SPEED_VALUE_INPUT.setGeometry(QtCore.QRect(230, 470, 104, 51))
        self.SPEED_VALUE_INPUT.setObjectName("SPEED_VALUE_INPUT")
        
        self.PULSE_VALUE_LABLE = QtWidgets.QLabel(TestBox)
        self.PULSE_VALUE_LABLE.setGeometry(QtCore.QRect(410, 470, 131, 51))
        self.PULSE_VALUE_LABLE.setObjectName("PULSE_VALUE_LABLE")
        self.PULSE_VALUE_LABLE.setText("Pulse : ")
        
        self.PULSE_VALUE_INPUT = QtWidgets.QTextEdit(TestBox)
        self.PULSE_VALUE_INPUT.setGeometry(QtCore.QRect(590, 470, 104, 51))
        self.PULSE_VALUE_INPUT.setObjectName("PULSE_VALUE_INPUT")
        
        # ----------------------BOTTOM-------------------- #
        
        self.START_BUTTON = QtWidgets.QPushButton(TestBox)
        self.START_BUTTON.setGeometry(QtCore.QRect(10, 540, 131, 51))
        self.START_BUTTON.setObjectName("START_BUTTON")
        self.START_BUTTON.setText("Start")
        self.START_BUTTON.clicked.connect(self.btn_start_click)
        
        self.STOP_BUTTON = QtWidgets.QPushButton(TestBox)
        self.STOP_BUTTON.setGeometry(QtCore.QRect(160, 540, 131, 51))
        self.STOP_BUTTON.setObjectName("STOP_BUTTON")
        self.STOP_BUTTON.setText("Stop")
        
        self.FINISH_BUTTON = QtWidgets.QPushButton(TestBox)
        self.FINISH_BUTTON.setGeometry(QtCore.QRect(320, 540, 131, 51))
        self.FINISH_BUTTON.setFlat(False)
        self.FINISH_BUTTON.setObjectName("FINISH_BUTTON")
        self.FINISH_BUTTON.setText("Finish")
        
        self.SAVE_AS_BUTTON = QtWidgets.QPushButton(TestBox)
        self.SAVE_AS_BUTTON.setGeometry(QtCore.QRect(480, 540, 131, 51))
        self.SAVE_AS_BUTTON.setObjectName("SAVE_AS_BUTTON")
        self.SAVE_AS_BUTTON.setText("Save as")
        
        self.SAVE_BUTTON = QtWidgets.QPushButton(TestBox)
        self.SAVE_BUTTON.setGeometry(QtCore.QRect(630, 540, 131, 51))
        self.SAVE_BUTTON.setObjectName("SAVE_BUTTON")
        self.SAVE_BUTTON.setText("Save")
        
        # ------------------------------------------------ #
    
    def btn_start_click(self):
        if self.X_VALUE_INPUT.toPlainText() == '':
            self.X_VALUE_INPUT.setPlainText('0')
        if self.Y_VALUE_INPUT.toPlainText() == '':
            self.Y_VALUE_INPUT.setPlainText('0')
        if self.Z_VALUE_INPUT.toPlainText() == '':
            self.Z_VALUE_INPUT.setPlainText('0')
        mXvalue = int(self.X_VALUE_INPUT.toPlainText())
        mYvalue = int(self.Y_VALUE_INPUT.toPlainText())
        mZvalue = int(self.Z_VALUE_INPUT.toPlainText())
        btn_start_click_function(mXvalue, mYvalue, mZvalue)
        
