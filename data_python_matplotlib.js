
// chkData(`
// ##### (data_matplotlib.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_matplotlib.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_matplotlib.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_matplotlib.js) 主旨放這裡 #####
// 內容放這裡
// `)




chkData(`
##### (data_matplotlib.js) 中文亂碼處理 #####

###  Python matplotlib 中文亂碼處理 ####
### file: mainCode_Python_matplotlib
import numpy as np 
from matplotlib import pyplot as plt
from matplotlib.font_manager import FontProperties

x = np.arange(1,11)
y =  2  * x +  5

plt.title("test")

font = FontProperties(fname=r"C:\\Windows\\Fonts\\simsun.ttc", size=14)

plt.rcParams["font.sans-serif"] = ["Microsoft JhengHei"]
plt.rcParams["axes.unicode_minus"] = False

plt.xlabel("x axis caption 測試x",fontproperties=font )
plt.ylabel("y axis caption 測試y",fontproperties=font) 
plt.plot(x,y)
plt.show()
`)

