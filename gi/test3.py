#!/usr/bin/python3
import gi
gi.require_version("Gtk", "3.0")
from gi.repository import Gtk
import subprocess


"""
產生 一個 300x300 視窗, 不能改變大小 , 
一個 Label 顯示請輸入密碼, 一個密碼輸入框, 
一個確認按鈕, 點選確認後, 如果密碼正確顯示 Label 顯示密碼正確
請使用 Python gi 提供範例
-------------------------------
此程式確認按鈕下方從左至右, 加入3個 disable 的button, 名稱為 按鈕1 按鈕2 按鈕3
當密碼輸入正確後, 將 3個 button 改為 enable 
按鈕1 點選後的會執行 apt update 指令
按鈕2 點選後的會執行 sync 指令
按鈕3 點選後的會執行 reboot 指令
---------------------------------
輸入密碼後, 點選確認 或直接按 enter 都可以進行密碼驗證
"""

class PasswordWindow(Gtk.Window):
    def __init__(self):
        super().__init__(title="密碼輸入")
        self.set_default_size(300, 300)
        self.set_resizable(False)

        vbox = Gtk.Box(orientation=Gtk.Orientation.VERTICAL, spacing=10)
        vbox.set_border_width(20)
        self.add(vbox)

        self.label = Gtk.Label(label="請輸入驗證碼")
        vbox.pack_start(self.label, False, False, 0)

        self.entry = Gtk.Entry()
        self.entry.set_visibility(False)
        self.entry.connect("activate", self.on_confirm_clicked)
        vbox.pack_start(self.entry, False, False, 0)

        self.confirm_button = Gtk.Button(label="確認")
        self.confirm_button.connect("clicked", self.on_confirm_clicked)
        vbox.pack_start(self.confirm_button, False, False, 0)

        # 水平容器放三個按鈕
        hbox = Gtk.Box(orientation=Gtk.Orientation.HORIZONTAL, spacing=10)
        vbox.pack_start(hbox, False, False, 0)

        # 三個初始為 disabled 的按鈕
        self.btn1 = Gtk.Button(label="T")
        self.btn1.set_sensitive(False)
        self.btn1.connect("clicked", self.on_btn1_clicked)
        hbox.pack_start(self.btn1, True, True, 0)

        self.btn2 = Gtk.Button(label="A")
        self.btn2.set_sensitive(False)
        self.btn2.connect("clicked", self.on_btn2_clicked)
        hbox.pack_start(self.btn2, True, True, 0)

        self.btn3 = Gtk.Button(label="S")
        self.btn3.set_sensitive(False)
        self.btn3.connect("clicked", self.on_btn3_clicked)
        hbox.pack_start(self.btn3, True, True, 0)

    def on_confirm_clicked(self, button):
        check_flage = False
        password = self.entry.get_text()

        # 啟用安裝按鈕 和 Console 按鈕
        if password == "1234":
            check_flage = True
            self.label.set_text("密碼正確")
            self.btn1.set_sensitive(True)
            self.btn2.set_sensitive(True)
            
        if password == "5678":
            check_flage = True
            self.label.set_text("密碼正確")
            self.btn3.set_sensitive(True)
        
        if check_flage == False:
            self.label.set_text("密碼錯誤")

    def on_btn1_clicked(self, button):
        # 執行 apt update 指令
        subprocess.Popen(["sudo", "apt", "update"])

    def on_btn2_clicked(self, button):
        # 執行 sync 指令
        subprocess.Popen(["sync"])

    def on_btn3_clicked(self, button):
        # 執行 reboot 指令
        subprocess.Popen(["sudo", "reboot"])

def main():
    win = PasswordWindow()
    win.connect("destroy", Gtk.main_quit)
    win.show_all()
    Gtk.main()

if __name__ == "__main__":
    main()
