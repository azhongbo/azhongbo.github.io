#!/usr/bin/python3

# python3 -m pip install python3-xlib
# python3 -m pip install pyautogui

# http://blog.topspeedsnail.com/archives/5373
# sudo apt-get install python3-pip
# sudo pip3 install python3-xlib
# sudo apt-get install scrot
# sudo apt-get install python3-tk
# and sudo apt-get install python3-dev


import pyautogui

#Python脚本在每执行一个函数后暂停几秒钟，这样你就有了几秒种的控制权
pyautogui.PAUSE = 1.5

#想终止程序，只要你快速的把鼠标移动到屏幕左上角就可以了
pyautogui.FAILSAFE = True

## 取得螢幕解析度
#width, height = pyautogui.size()
#print(width,height)

## 取得目前滑鼠座標
#x, y = pyautogui.position()


## 點選右鍵
#pyautogui.click(button='right')

## click函数完成了一次鼠标点击。一次完整的点击包括两部分，按下mouseDown()和弹起mouseUp()。上面这两个函数参数和click函数一样，其实click函数只是简单的封装了mouseDown()和mouseUp()函数
#pyautogui.click(100, 100)


im = pyautogui.screenshot()
#im.getpixel((50, 200))
#pyautogui.pixelMatchesColor(50, 200, (30, 132, 153)) 

def test1():
	for i in range(2):
		## moveTo 移動絕對座標
		pyautogui.moveTo(100, 100, duration=0.25)
		pyautogui.moveTo(200, 100, duration=0.25)
		pyautogui.moveTo(200, 200, duration=0.25)
		pyautogui.moveTo(100, 200, duration=0.25)


	for i in range(2):
		## moveRel 相對座標
		pyautogui.moveRel(100, 0, duration=0.25)
		pyautogui.moveRel(0, 100, duration=0.25)
		pyautogui.moveRel(-100, 0, duration=0.25)
		pyautogui.moveRel(0, -100, duration=0.25)