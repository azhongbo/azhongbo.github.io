
// chkData(`
// ##### (data_python.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_python.js) 主旨放這裡 #####
// 內容放這裡
// `)


chkData(`
##### (data_python.js) Python gi web #####
###  Python gi web####

#!/usr/bin/python3
# sudo apt-get install python3-gi python3-gi-cairo gir1.2-gtk-3.0 gir1.2-webkit2-4.0

import gi
gi.require_version('Gtk', '3.0')
gi.require_version('WebKit2', '4.0')
from gi.repository import Gtk, WebKit2

class BrowserWindow(Gtk.Window):
    def __init__(self):
        super().__init__(title="使用者手冊")
        self.set_default_size(800, 600)

        # 建立 WebKit2 WebView
        self.webview = WebKit2.WebView()
        self.add(self.webview)

        # 載入本地 HTML 檔案
        file_path = "/home/user/Documents/index.html"
        self.webview.load_uri(f"file://{file_path}")

        self.connect("destroy", Gtk.main_quit)

if __name__ == "__main__":
    win = BrowserWindow()
    win.show_all()
    Gtk.main()
`)


chkData(`
##### (data_python.js) gemini ryan #####
gemini ryan

## apt install xclip
import os, sys, time, json

def get_data(_string):
    _forward = "http://xx.xx.xx.xx:xx"
    myTime = time.strftime('%Y%m%d%H%M%S',time.localtime(time.time() + 0 * 24 * 60 * 60 ) )
    _mykey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    file1 = f"/tmp/ask-{myTime}-1.txt"
    file2 = f"/tmp/ask-{myTime}-2.txt"
    runcmd = "curl -x __FORWARD__HERE___ -H 'Content-Type: application/json' -d '{\"contents\":[{\"parts\":[{\"text\":\"__INPUT__HERE___\"}]}]}' -X POST 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=__MYKEY__HERE___'"
    runcmd = runcmd.replace("__INPUT__HERE___"   ,_string  )
    runcmd = runcmd.replace("__FORWARD__HERE___" ,_forward )
    runcmd = runcmd.replace("__MYKEY__HERE___"   ,_mykey  )
    mydata_string = os.popen(runcmd).read()
    mydata = json.loads(mydata_string)
    mydata2 = mydata['candidates'][0]
    mydata3 = mydata2['content']
    mydata4 = mydata3['parts'][0]
    mydata5 = mydata4['text']
    fp = open(file1,'w')
    fp.write(mydata_string)
    fp.close
    fp = open(file2,'w')
    fp.write(mydata5)
    fp.close
    os.popen(f"code {file2}")

_string = os.popen("xclip -o").read()
if 'aaaa' in _string:
    _string = _string[4:]
    get_data(_string)

`)


chkData(`
##### (data_python.js) visual studio c++ #####
###  Python vc++ proxy ####
### file: mainCode_Python_
 -*-  coding:utf-8  -*-
1) 安裝 Microsoft Visual Studio 2017 Express Desktop
2) 找到 link.exe & lc.exe & Framework 2.0 & stdint.h 位置
3) 設定環境變數如下 

set PATH=%PATH%;D:\\Python\\Python37\\;D:\\Python\\Python37\\Scripts\\;C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\WDExpress\\VC\\Tools\\MSVC\\14.16.27023\\bin\\Hostx86\\x64\\;C:\\Windows\\Microsoft.NET\\Framework\\v2.0.50727\\
set CL=-FI"C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\WDExpress\\VC\\Tools\\MSVC\\14.16.27023\\include\\stdint.h"

C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\WDExpress\\VC\\Auxiliary\\Build\\vcvarsall.bat
`)


chkData(`
##### (data_python.js) 建立視窗 GUI #####
###  Python 建立視窗 GUI ###


#  -*-  coding:utf-8  -*-
from tkinter import *
window = Tk()
window.title("視窗我的標題")
window.geometry('800x480')

## 宣告陣列，長度500
sButton = [None] *  500

def hit_me(id,runCommand):
    file_name = "CommandLine_" + str(id) + ".sh"
    f = open( "tmp/" + file_name , 'w', encoding = 'UTF-8')
    f.write(runCommand)
    f.close()
    os.popen("chmod 755 tmp/" + file_name)
    os.popen("sudo mate-terminal -x bash -c 'sh tmp/" + file_name + "' ")

def layButton(id,xx,yy,actionText,runCommand):
    global sButton,sLabel

    sButton[id] = Button( window, text='安裝'      , font=( "Arial", 12) , command=lambda:hit_me(id,runCommand) )
    sButton[id].place( x=xx     , y=yy   , anchor=NW , width=40,height=25)

    sLabel[id]  = Label(  window, text=actionText , font=( "Arial", 12) , fg="black")
    sLabel[id].place(  x=xx+90  , y=yy+2 , anchor=NW )

xx = 20
yy = 20
id = 0
actionText = "1) 建立 VDI 檔案"
runCommand = """#!/bin/bash
#### 建立基本 VDI 檔案 ####
VBoxManage createhd --filename ~/mydata.vdi --size 81920
chmod a+rw VDI_FILE
exit
"""
layButton(id,xx,yy,actionText,runCommand)
`)



chkData(`
##### (data_python.js) 讀取檔案/寫入/搜尋/陣列基本/  #####



#  -*-  coding:utf-8  -*-
import re

arr = [None] * 500
arr.extend((0,0,0,0,0))

with open( "xxx.txt") as file:
    all_data = file.readlines()
    for data in all_data:

        if re.search(r'xxx',data):
            print(data)

fp = open(extensionFile,'w')
fp.write(data2)
fp.close
`)



chkData(`
##### (data_python.js) os.popen 執行外部命令 #####



#  -*-  coding:utf-8  -*-
import os

## 單純執行
os.system("ls -l")

## os.popen
command = "nbtscan 127.0.0.1/24"
with os.popen(command) as myCommand:
    dataArray = myCommand.readlines()
    for data in dataArray:
        print(data)

## 呼叫外部命令至，產生另外的視窗執行
os.popen("sudo mate-terminal -x bash -c 'sh xxx.py' ")

## 呼叫外部命令至 string
myStr = os.popen("ifconfig").read()

# ## 呼叫外部命，每一行存在 list 裡面，使用 for 讀出
myArr  = os.popen("ifconfig").readlines()
for myStr in myArr:
    print(myStr)

# ## 呼叫外部命，每一行存在 list 裡面，使用 while 讀出
myArr = os.popen("ifconfig").readlines()
while(myArr):
    myStr = myArr.pop(0)
    print(myStr)


import subprocess
sp = subprocess.Popen( "ifconfig", shell=True , stdout=subprocess.PIPE, stderr=subprocess.PIPE)
out, err = sp.communicate()

if out: # 標準輸出    
    print(out)
if err: # 標準錯誤輸出    
    print(err)

# 執行結果編碼
print(sp.returncode)



## 回傳執行結果
return_code = subprocess.call("ls /tmp", shell=True)  
print(return_code)
`)





chkData(`
##### (data_python.js) 網頁爬蟲範例 #####



#  -*-  coding:utf-8  -*-


## sudo pip3 install beautifulsoup4
import os,sqlite3
import urllib.request
import urllib.parse
import requests,re
from bs4 import BeautifulSoup

##### 莫凡 ##########################################

import requests

def get():
    param = {"wd": "莫烦Python"}
    r = requests.get('http://www.baidu.com/s', params=param)
    print(r.url)
    print(r.text)


def post_name():
    # http://pythonscraping.com/pages/files/form.html
    data = {'firstname': '莫烦', 'lastname': '周'}
    r = requests.post('http://pythonscraping.com/files/processing.php', data=data)
    print(r.text)


def post_image():
    # http://pythonscraping.com/files/form2.html
    file = {'uploadFile': open('./image.png', 'rb')}
    r = requests.post('http://pythonscraping.com/files/processing2.php', files=file)
    print(r.text)


def post_login():
    # http://pythonscraping.com/pages/cookies/login.html
    payload = {'username': 'Morvan', 'password': 'password'}
    r = requests.post('http://pythonscraping.com/pages/cookies/welcome.php', data=payload)
    # http://pythonscraping.com/pages/cookies/profile.php
    r = requests.get('http://pythonscraping.com/pages/cookies/profile.php', cookies=r.cookies)
    print(r.text)


def session_login():
    # http://pythonscraping.com/pages/cookies/login.html
    session = requests.Session()
    payload = {'username': 'Morvan', 'password': 'password'}
    r = session.post('http://pythonscraping.com/pages/cookies/welcome.php', data=payload)
    r = session.get("http://pythonscraping.com/pages/cookies/profile.php")
print(r.text)



###############################################

url = 'www.google.com'
response = urllib.request.urlopen(url)
html_doc = response.read().decode('utf-8')
soup = BeautifulSoup(html_doc, 'html.parser')

paragraphs = soup.find_all('div','jbInfoin')

for p in paragraphs:
    myData = p.text


#### 方法一 POST UserName / Password  ###########################################
response = requests.get('https://xx.xx.xx.xx/test/',verify=False,
                        auth=requests.auth.HTTPBasicAuth(
                          'username',
                          'password'))

soup = BeautifulSoup( response.text , 'html.parser')

for a in soup.findAll('img'):    a.replaceWithChildren()
for a in soup.findAll('font'):    a.replaceWithChildren()
for a in soup.findAll('tr'):    a.replaceWithChildren()
for a in soup.findAll('td'):    a.replaceWithChildren()

alldata = soup.prettify().splitlines()

while(alldata):
    data = alldata[0]
    if re.search(r'test',data):
        string = alldata[5].replace(' ','')
    alldata = alldata[1:]




#### 方法二 POST UserName / Password  ###########################################

    name1  = 'Qry1'
    value1 = uid

    name2  = 'Qry1'
    value2 = '查詢'

    data = urllib.parse.urlencode({
        name1 : value1,
        name2 : value2
    } ).encode('ascii')

    html_doc = urllib.request.urlopen("http://xx.xx.xx.xx/Query.php", data ).read().decode('utf-8')

    soup = BeautifulSoup( html_doc , 'html.parser')

    for a in soup.findAll('span'):    a.replaceWithChildren()
    for a in soup.findAll('td'):    a.replaceWithChildren()
    for a in soup.findAll('th'):    a.replaceWithChildren()
    return soup.prettify()


`)



chkData(`
##### (data_python.js) 建立GUI範例 #####

#  -*-  coding:utf-8  -*-
from tkinter import *
window = Tk()
window.title("視窗我的標題")
window.geometry('800x480')

## 宣告陣列，長度500
sButton = [None] *  500

def hit_me(id,runCommand):
    file_name = "CommandLine_" + str(id) + ".sh"
    f = open( "tmp/" + file_name , 'w', encoding = 'UTF-8')
    f.write(runCommand)
    f.close()
    os.popen("chmod 755 tmp/" + file_name)
    os.popen("sudo mate-terminal -x bash -c 'sh tmp/" + file_name + "' ")

def layButton(id,xx,yy,actionText,runCommand):
    global sButton,sLabel

    sButton[id] = Button( window, text='安裝'      , font=( "Arial", 12) , command=lambda:hit_me(id,runCommand) )
    sButton[id].place( x=xx     , y=yy   , anchor=NW , width=40,height=25)

    sLabel[id]  = Label(  window, text=actionText , font=( "Arial", 12) , fg="black")
    sLabel[id].place(  x=xx+90  , y=yy+2 , anchor=NW )

xx = 20
yy = 20
id = 0
actionText = "1) 建立 VDI 檔案"
runCommand = """#!/bin/bash
#### 建立基本 VDI 檔案 ####
VBoxManage createhd --filename ~/mydata.vdi --size 81920
chmod a+rw VDI_FILE
exit
"""
layButton(id,xx,yy,actionText,runCommand)
`)



chkData(`
##### (data_python.js) 外部命令轉碼 #####

#  -*-  coding:utf-8  -*-
os.system("iconv -f big5 -t utf-8 qqqqq.html -o vvvvv.html")
`)


chkData(`
##### (data_python.js) 讀取參數 #####

#  -*-  coding:utf-8  -*-
import sys

filename  = sys.argv[0]   ## 讀取檔案名稱
variable1 = sys.argv[1]   ## 第 1 個變數
variable2 = sys.argv[2]   ## 第 2 個變數
variable3 = sys.argv[3]   ## 第 3 個變數
`)


chkData(`
##### (data_python.js) Hash 雜湊  #####

 -*-  coding:utf-8  -*-

dict = { 'Name': 'Zara', 'Age': 7 }

aa = 'Name'
print(dict[aa])
print(dict.keys() )

for key,values in  dict.items():
    print (key,values)

`)



chkData(`
##### (data_python.js) AES encrypt 加密 #####

 -*-  coding:utf-8  -*-

# pip install pycrypto
# pip install base58

# -*- coding: utf-8 -*-
"""
Routines for convergent encryption.
"""
from __future__ import absolute_import, division, unicode_literals

from Crypto.Cipher import AES

_IV = 16 * '\\x00'

def aes_encrypt(data, key):
    cryptor = AES.new(key, AES.MODE_CBC, _IV)
    return cryptor.encrypt(data)

def aes_decrypt(data, key):
    cryptor = AES.new(key, AES.MODE_CBC, _IV)
    return cryptor.decrypt(data)

`)


chkData(`
##### (data_python.js) list #####

 -*-  coding:utf-8  -*-

a = [5,6,7,8]
a = a[1:]   # 第一位取出
a.pop()     # 最後一位取出  [5,6,7] 
a.append(2) # 最後一位增加 2  [5,6,7,2] 
a.sort()    # 排列 小 > 大
a.reverse() # 排列 大 > 小

### 多維方法一 ##########################
user = {}
def org(uid,name,dep):
	global user
	try:		
		user[uid]['id']= uid
	except:
		user[uid] = {}

	user[uid]['name'] = name
	user[uid]['dep']  = dep

org('04154','Ryan','IT')
ss  = user['04154']['dep']
print( ss )

### 多維方法二 ##########################
user2 = {}
def org2(uid,name,dep):
	global user2
	user2[ ( uid , 'name' ) ] = name
	user2[ ( uid , 'dep' ) ]  = dep

org2('04154','Ryan','IT')
ss  = user2[ ('04154','name')  ]
print( ss )


### 多維參考1 ##########################
a={}
a['b'] = {}
a['b']['c']={}
a['b']['c']['d'] = 1
### 多維參考2 ##########################
from collections import defaultdict

def site_struct():
    return defaultdict(board_struct)

def board_struct():
    return defaultdict(user_struct)

def user_struct():
    return dict(pageviews=0,username='',comments=0)

userdict = defaultdict(site_struct)

userdict['site']['board']['username'] =  1
userdict['par']['chl']['username'] = 'ceshi'

print userdict['site']['board']['username']
print userdict['par']['chl']['username']

`)

MyCodeTitle  = "RyanCode Python ( module 模組 )"
chkData(`
##### (data_python.js) module 模組 #####

### 模組 test.py  ##############
name = "ok"
def hello(name):
    return "Hello " + name



### （一） main.py 匯入模組 #############
#!/usr/bin/python3
import test
print(test.name)
print(dir(test))
print(test.hello("Jacky"))



### （二） main.py 匯入child 裡面的模組 #############
child/             ## 套件名稱為 child 的目錄
child/__init__.py  ## 指定為套件, 可為空檔
child/test.py      ## child 套件裡面的模組

### main.py  ####################
#!/usr/bin/python3
import child
print( child.test.hello("David")  )
`)


chkData(`
##### (data_python.js) class 類別 #####

 -*-  coding:utf-8  -*-

class Account:
    def __init__(self, number, name):
        self.number = number
        self.name = name
        self.balance = 0
        
    def deposit(self, amount):  #存款動作: amount代表存入金額
        if amount <= 0:
            raise ValueError('must be positive')
        self.balance += amount
        
    def withdraw(self, amount): #取款動作: amount代表取款金額
        if amount <= self.balance:
            self.balance -= amount
        else:
            raise RuntimeError('balance not enough')

acct1 = Account("123–456–789", "Justin") #開一個帳戶acct1.deposit(100)
acct1.withdraw(30)
print(acct1.balance) #餘額是 70
`)


chkData(`
##### (data_python.js) 避免重複執行 #####

 -*-  coding:utf-8  -*-
import subprocess
proc = subprocess.Popen(["pgrep", "-f", __file__], stdout=subprocess.PIPE)
std = proc.communicate()
if len(std[0].decode().split()) > 1:
    exit('Already running')

###  Python 避免重複執行(2) ####
import socket,time
def main(): ## 主程式
    for i in range(0,100):
        print(i)
        time.sleep(1)

try:
    s = socket.socket()
    s.bind(( "127.0.0.1", 54321 ))
    main() ## 執行主程式
    s.close()
except KeyboardInterrupt:
    s.close()
except:
    print(' * already has an instance, so exit.')
    exit(0)
`)


chkData(`
##### (data_python.js) LDAP #####

 -*-  coding:utf-8  -*-

from ldap3 import Server, Connection, ALL, SUBTREE, ServerPool,ALL_ATTRIBUTES

LDAP_SERVER_POOL = ["abc.com"]
LDAP_SERVER_PORT = 389
SEARCH_BASE = "ou=Users,dc=abc,dc=com"


def ldap_auth(username, password):
    ldap_server_pool = ServerPool(LDAP_SERVER_POOL)
    conn = Connection(ldap_server_pool, user=username, password=password, check_names=True, lazy=False, raise_exceptions=False)
    conn.open()
    conn.bind()

    if conn.result["description"] == "success":
        print("auth ok")
    else:
        print("auth fail")


if __name__ == "__main__":
    ldap_auth("username", "password")
`)



chkData(`
##### (data_python.js) dic 計算重複字數 #####

 -*-  coding:utf-8  -*-

words = 'Stewart and his team put out several issues of The Whole Earth Catalog of The ...'
words = speech.lower().split()

dic = {}
for w in words:
    if w not in stopwords and len(w) >=2:
        if w not in dic:
            dic[w] = 1
        else:
            dic[w] = dic[w] + 1
`)

chkData(`
##### (data_python.js) pip offline proxy 下載 #####

## default
apt-get -y install python3-pip python3-tk python3-dev scrot
python3 -m pip install --upgrade pip

## proxy 
vi /etc/apt/apt.conf
Acquire::http::Proxy "http://xx.xx.xx.xx:8080";

pip install tensorflow keras --proxy http://xx.xx.xx.xx:8080
pip install pycrypto --trusted-host pypi.python.org --trusted-host files.pythonhosted.org --trusted-host pypi.org --proxy http://xxxx:xxxxx@xx.xx.xx.xx:80 


## offline download
sudo python3 -m pip download  requests beautifulsoup4 pandas numpy

## offline install
sudo python3 -m pip install --no-index --find-links=file:/files/pip3  requests beautifulsoup4 pandas numpy


tensorflow sklearn keras
jupyter jupyterlab 
matplotlib plotly 
opencv-python
lxml requests beautifulsoup4 pandas numpy xlrd pyautogui  pygame
`)
