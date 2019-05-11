from views import *
    
if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    TestBox = QtWidgets.QDialog()
    ui = Ui_TestBox()
    ui.setupUi(TestBox)
    TestBox.show()
    sys.exit(app.exec_())