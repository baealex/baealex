from views import *
    
if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)
    ControlPanel = QtWidgets.QDialog()
    ui = Ui_ControlPanel()
    ui.setupUi(ControlPanel)
    ControlPanel.show()
    sys.exit(app.exec_())