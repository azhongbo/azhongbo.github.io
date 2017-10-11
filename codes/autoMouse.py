#!/usr/bin/python3
import pyautogui

## 螢幕滑鼠自動程式

try:
	## 取得圖片四個座標
	a,b,c,d = pyautogui.locateOnScreen('autoMouse.png')
	## 取得圖片中心
	x,y = pyautogui.center((a,b,c,d))
	## 滑鼠移動
	pyautogui.moveTo(x,y,duration=0.25)
	
except:    pass