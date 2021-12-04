
// chkData(`
// ##### (data_python_numpy.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_python_numpy.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_python_numpy.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_python_numpy.js) 主旨放這裡 #####
// 內容放這裡
// `)


chkData(`
##### (data_python_numpy.js) Numpy np.ones np.ones_like 產出都為1 #####
a = np.arange(10,dtype='float') # [0. 1. 2. 3. 4. 5. 6. 7. 8. 9.]
np.ones(10)      #array([1., 1., 1., 1., 1., 1., 1., 1., 1., 1.])
np.ones(a.shape) #array([1., 1., 1., 1., 1., 1., 1., 1., 1., 1.])
np.ones_like(a)  #array([1., 1., 1., 1., 1., 1., 1., 1., 1., 1.])
`)


chkData(`
##### (data_python_numpy.js) Numpy np.zeros np.zeros_like 產出都為0 #####
a = np.arange(10,dtype='float') # [0. 1. 2. 3. 4. 5. 6. 7. 8. 9.]
np.zeros(10)      #array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0.])
np.zeros(a.shape) #array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0.])
np.zeros_like(a)  #array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0.])
`)


chkData(`
##### (data_python_numpy.js) Numpy np.hstack()  np.vstack() 水平垂直堆疊 #####
a = np.array([1,2,3])
b = np.array([4,5,6])

np.hstack((a,b)) #輸出 array([1, 2, 3, 4, 5, 6])
np.vstack((a,b)) #輸出 # array([[1, 2, 3],[4, 5, 6]])

# 水平堆疊 2x4 + 2x3 軸0要一樣
a = np.arange(8).reshape(2,4)
b = np.arange(6).reshape(2,3)
# array([[0, 1, 2, 3],
#        [4, 5, 6, 7]])
# array([[0, 1, 2],
#        [3, 4, 5]])
np.hstack((a,b))
# array([[0, 1, 2, 3, 0, 1, 2],
#        [4, 5, 6, 7, 3, 4, 5]])

# 垂直堆疊 4x2 + 3x2 軸1一樣
a = np.arange(8).reshape(4,2)
b = np.arange(6).reshape(3,2)
np.vstack((a,b))

# 水平堆疊 軸1堆疊 軸 0,2 要一樣
a = np.arange(24).reshape(2,3,4)
b = np.arange(8).reshape(2,1,4)
c = np.hstack((a,b)) ## 書出 2x4x4

# 垂直堆疊 軸0堆疊 軸 1,2 要一樣
a = np.arange(24).reshape(2,3,4)
b = np.arange(12).reshape(1,3,4)
c = np.vstack((a,b)) # 3x3x4

# np.hstack() 2D以上, 除了軸1 其餘要一樣
a = np.arange(12).reshape(2,6)
b = np.arange(14).reshape(2,7)

a = np.arange(24).reshape(2,3,4)
b = np.arange(32).reshape(2,4,4)

a = np.arange(40).reshape(2,1,4,5)
b = np.arange(80).reshape(2,2,4,5)

# np.vstack() 2D以上, 除了軸0 其餘要一樣
a = np.arange(12).reshape(6,2)
b = np.arange(14).reshape(7,2)

a = np.arange(24).reshape(3,2,4)
b = np.arange(32).reshape(4,2,4)

a = np.arange(40).reshape(1,2,4,5)
b = np.arange(80).reshape(2,2,4,5)

`)


chkData(`
##### (data_python_numpy.js) Numpy np.sort() 排序 #####
a = np.array([[2,15,1],[3,9,6]])
# [[ 2 15  1]
#  [ 3  9  6]]

np.sort(a,axis=1) #預設對軸=1排序
# array([[ 1,  2, 15],
#        [ 3,  6,  9]])
np.sort(a,axis=0) #對軸=0排序
# array([[ 2,  9,  1],
#        [ 3, 15,  6]])

`)


chkData(`
##### (data_python_numpy.js) Numpy np.transpose() 轉置 #####
a = np.arange(15).reshape(3,5)
a.T
`)


chkData(`
##### (data_python_numpy.js) Numpy np.argmax() np.argmin() #回傳 最大值 最小值的 index #####
a = np.array([3,7,4,1,5,9,7])
index = np.argmax(a) # 回傳 index = 5 是最大值
a[index] # 顯示 index = 5 的值為 9

a = np.array([[1,3,5,7],[2,4,6,8]])
# array([[1, 3, 5, 7],
#        [2, 4, 6, 8]])
np.argmax(a,axis=0) # 輸出 array([1, 1, 1, 1], dtype=int64)
np.argmax(a,axis=1) # 輸出 array([3, 3], dtype=int64)
`)


chkData(`
##### (data_python_numpy.js) Numpy np.maximum() np.minimum()輸入兩個值並比較, 回傳最大最小的那一個 #####
value = [1,2,3,4,5,6,7]
np.maximum(value,5) #array([5, 5, 5, 5, 5, 6, 7])
`)


chkData(`
##### (data_python_numpy.js) Numpy np.max() np.min()取出最大值 最小值 #####
a = np.array([0,1,2,3,4,5,6,7])
np.max(a) # 取出最大值 7

a = np.array([0,1,2,3,4,5,6,7,8]).reshape(3,3)
# [[0 1 2]
#  [3 4 5]
#  [6 7 8]]

np.max(a,axis=0) # array([6, 7, 8])
np.max(a,axis=1) # array([2, 5, 8])

`)



chkData(`
##### (data_python_numpy.js) Numpy np.where() #####

a = np.array([2,4,6,8,10])
np.where(a>5) # 輸出: a>5 的 index  (array([2, 3, 4], dtype=int64),)
a[np.where(a>5)] # 輸出 a>5 的值  array([ 6,  8, 10])

# 比較每個值是否 >=2 , 是的話輸出 1,不是輸出-1
a = np.arange(10)   # array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
np.where(a>=2,1,-1) # array([-1, -1,  1,  1,  1,  1,  1,  1,  1,  1])

np.where([[True,False], [True,True]],
         [[1,2], [3,4]], 
         [[9,8], [7,6]])

# array([[1, 8],  True,False 1,8
#        [3, 4]]) True,True 3,4


a = 10
np.where([[True,False], [True,False]],
             [["chosen","not chosen"], ["chosen","not chosen"]],
             [["not chosen","chosen"], ["not chosen","chosen"]])
# array([['chosen', 'chosen'],
#        ['chosen', 'chosen']], dtype='<U10')

a = np.arange(27).reshape(3,3,3)
np.where(a>=5)

`)


chkData(`
##### (data_python_numpy.js) Numpy np.all() & np.any() #####

# np.all() 比對所有值, 均為1才回傳True
a = np.array([0,1,2,3,4,5,6,7]).all()   # False
b = np.array([1,1,1,1,1,1,1,1]).all()   # True
c = np.array([True,True,True]).all()    # True
d = np.array([False,False,False]).all() # False
e = np.array([False,False,False]).all() # False

f = np.array([[1,1,1],
              [1,0,1],
              [1,1,1]]).all() # False

g = np.array([[1,1,1],
              [1,1,1],
              [1,1,1]]).all() # True

a = np.array([[0,0,0],
              [0,0,0],
              [0,0,0],
              
              [255,0,255],
              [0,255,255],
              [255,255,255]])
b = np.array([255,0,255])

print( np.all(a==b,axis=1) ) # [False False False  True False False]

# np.any()
np.array([1,2,3]).any() # True
np.array([1,1,0]).any() # True
np.array([1,1,1]).any() # True
np.array([True,True]).any()   # True
np.array([True,False]).any()   # True

a = np.array([[9,4,8],[2,4,6]])
np.any(a>5) # True

`)


chkData(`
##### (data_python_numpy.js) Numpy append #####

np.append( [1,2,3] , [4,5,6,7,8,9] ) # array([1, 2, 3, 4, 5, 6, 7, 8, 9])
np.append( [1,2,3] , [[6,7],[8,9]] ) # array([1, 2, 3, 6, 7, 8, 9]) , 展平後沿著 axis=0 方向合併

## 使用 axis , 必須考慮形狀 , 結果如下
np.append( [[1,2],[3,4]] ,[[5,6],[7,8]] , axis=0 )
# array([[1, 2],
#        [3, 4],
#        [5, 6],
#        [7, 8]])

np.append( [[1,2],[3,4]] ,[[5,6],[7,8]] , axis=1 )
# array([[1, 2, 5, 6],
#        [3, 4, 7, 8]])

`)


chkData(`
##### (data_python_numpy.js) NumPy reshape resize 陣列重塑形狀和調整大小 #####

import numpy as np

a = np.arange(8) 

b = a.reshape(4,2)  #轉換成了形狀為 (4, 2) 的一個矩陣
b = a.reshape(4,-1) # -1 表示自動計算
b = a.reshape(3,4)  #前後數目不一樣的話，就會有錯誤 ValueError 報出

np.arange(8).reshape(2,4,order='C') # 按行填充
# array([[0, 1, 2, 3],
#        [4, 5, 6, 7]])
np.arange(8).reshape(2,4,order='F') # 按列填充
# array([[0, 2, 4, 6],
#        [1, 3, 5, 7]])

# reshape & resize 差異
# resize 沒有 order 引數了，只有 order='C'的方式。
# resize 轉換的矩陣形狀中的元素數量跟原矩陣不同，它會強制進行轉換，而不報錯。
# resize 新陣列跟原陣列並不共用一個記憶體，所以彼此元素的改變不會影響到對方。

`)





chkData(`
##### (data_python_numpy.js) np array 合併範例 #####

import numpy as np

nd1 = np.random.randint(0,150,size = (4,5))
nd2 = np.random.randint(0,150,size = (2,5))
nd3 = np.random.randint(0,150,size = (4,8))
display(nd1,nd2,nd3)

np.concatenate([nd1,nd3],axis = 1) ## 使用 np.concatenate() 水平合併
np.concatenate([nd1,nd2],axis = 0) ## 使用 np.concatenate() 垂直合併
nd5 = np.hstack((nd1,nd3))         ## 使用 np.hstack() 水平的列數增加
nd4 = np.vstack((nd1,nd2))         ## 使用 np.vstack() 垂直行數增多
`)






chkData(`
##### (data_python_numpy.js) np.concatenate 合併圖片 #####

import numpy as np
from PIL import Image

## 使用 聯集 np.concatenate() 合併陣列
nd2 = np.random.randint(0,150,size = (4,5))
np.concatenate([nd2,nd2])


## 使用 聯集 np.concatenate() 合併圖片
cat = Image.open('cat.jpg')
cat_data = np.array(cat)

cat7 = cat_data[:,:230] ## 圖片取左邊 230px
plt.imshow(cat7)

cat8 = cat_data[:,470:,::-1] ## 圖片取右邊 470px
plt.imshow(cat8)

cat9 = np.concatenate([cat7,cat8],axis = 1) ## 合併
plt.imshow(cat9)

xxxxxxxxxxxxxxxxxxxxxxxxxxx
`)



chkData(`
##### (data_python_numpy.js) np 和 matplotlib 圖片操作 #####

import matplotlib.pyplot as plt
%matplotlib inline

cat = Image.open('cat.jpg')
cat_data = np.array(cat)

plt.imshow( cat_data ) # 顯示
plt.imshow( cat_data[::-1] ) #反轉
plt.imshow( cat_data[::-15,::-15] ) #馬賽克
plt.imshow( np.transpose(cat_data,axes = (1,0,2))  )  # 向左邊轉，行列调整 -- 高度 0、宽度 1、像素 2
`)


chkData(`
##### (data_python_numpy.js) np 和 PIL 圖片操作 #####

import numpy as np
from PIL import Image

cat = Image.open('cat.jpg')
cat_data = np.array(cat)

# 红绿蓝 0,1,2
# 绿红蓝 1,0,2
Image.fromarray( cat_data[:,:,::-1]     ) ## 轉藍色
Image.fromarray( cat_data[:,:,[1,0,2]]  ) ## 轉綠色
Image.fromarray( cat_data[:,:,0]        ) ## 轉灰階
Image.fromarray( cat_data[::5,::5]      ) ## resize
`)


chkData(`
##### (data_python_numpy.js) np 基本範例 #####

import numpy as np

nd.sum() ## 總和
nd.var() ## 方差
nd.mean() ## 平均
nd.std() ## 標準差

## 搭配 DataFrame
pd.DataFrame(np.random.randn(100, 4), columns=list('ABCD'))

## %timeit測試時間
%timeit np.arange(0,100000,1) 

## 建立list
l = [1,2,3,4,5,9,8,7,6]
nd = np.array(l)

l2 = [[1,3,5,7],[2,4,6,8]]
nd2 = np.array(l2)

#一維陣列建立
np.array([1, 2, 3, 4])

#二維陣列建立
np.array([(2.5, 1, 3, 4.5), (5, 6, 7, 8)], dtype = float)

#三維陣列建立
np.array([[(2.5, 1, 3, 4.5), (5, 6, 7, 8)], [(2.5, 1, 3, 4.5), (5, 6, 7, 8)]], dtype = float)

np.zeros((2, 3))               # 全部為 0  建立一個2x3全為0的陣列
np.ones((2, 3, 4))             # 全部為 1 建立一個2x3x4全為1的陣列
np.arange(1, 10, 2)            # 建立一個由1開始，不超過10，間隔值為2的均勻數值陣列
np.full((3,2), 8)              # 全部為指定數字  建立一個3x2全為8的陣列
np.linspace(0, 10, 5)          # 等差列數  建立一個0到10之間，均勻的5個數值陣列
np.eye(2)                      # 對角線陣列 建立一個5x5的單位矩陣

## 隨機建立
np.random.random((2,3))        # 建立一個2x3的隨機值矩陣
np.random.rand(4,2)            #  生成[0,1)之間的數據，包含0，不包含1 , shape: 4x2 
np.random.randn(2,4)           # 常態分佈
np.random.randint(1,9 ,size=5) # 1~9 隨機整數


## 常態分佈的擬合
np.random.normal(loc = 175,scale=10,size = 10000).round(2) ## 平均175 ,範圍10以內, 1000個
# loc：   此概率分佈的均值（對應著整個分佈的中心centre）
# scale： 此概率分佈的標準差（對應於分佈的寬度，scale越大越矮胖，scale越小，越瘦高）
# size：  輸出的shape，默認為None，只輸出一個值



###############
nd = np.random.randint(0,150,size = (4,5))  ## 產生 4x5 陣列
nd[1,1]     ## 取 1,1 的值
nd[2]       ## 取第2個列
nd[0:3]     ## 取 0~3 的列
nd[-2:]     ## 取倒數第2個之後
nd[0:3,0:3] ## 取 0~3 x 0~3 的資料
nd[::-1]    ## 反轉
nd[::2]     ## 兩個進行切片
`)




chkData(`
##### (data_python_numpy.js) Numpy 建立 1D 2D 3D 陣列 #####
## 建立 陣列
np.array([3,4,5]) #根據 list 建立 array
np.empty(3) # 建立任意數的一維 array
np.zeros(3) # 建立都是 0 的一維 array
np.ones(3)  # 建立都是 1 的一維 array
np.arange(10) #建立連續資料的一維 array

## 建立二維 陣列
np.array([[1,2],[3,4],[5,0]])  #根據 list 建立 array
np.empty([3,2]) # 建立任意數的 3x2 array
np.zeros([3,2]) # 建立都是 0 的 3x2 array
np.ones([3,2])  # 建立都是 1 的 3x2 array

## 建立三維 陣列
a = np.array([[[5, 2, 4],
        [1, 2, 8]],
        [[3, 8, 2],
        [4, 1, 3]]])
np.ones([2,2,3])
np.zeros([2,2,3])
`)


chkData(`
##### (data_python_numpy.js) Numpy 1D 2D 切片 #####
## 1D 切片
a = [1,2,3,4,5]
a[2:-1] # 取出 index=2和 index-1 [3, 4]

a = np.arange(10) # 產出 array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
a[1:5]   # 取出索引 1~4 >> array([1, 2, 3, 4])
a[2:8:2] # 取出索引 2~7, 每隔一個取出一個  >>  array([2, 4, 6])
a[:3]    # 取出索引 2 前面全部 >> array([0, 1, 2])
a[3:]    # 取出索引 2 後面全部 >> array([3, 4, 5, 6, 7, 8, 9])

a[::]    # 全部取出 [::] 表示全部 >> array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
a[::-1]  # 全部反向取出 [::] 表示全部 >> array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
a[::2]   # 全部取出 [::],但每隔一個取 >> array([0, 2, 4, 6, 8])
a[:]     # 全部取出 [:] 表示全部 >> array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

## 2D 切片
b = np.arange(20).reshape(4,5) # 建立一個 4x5 的陣列
b
b[1:3,2:4]
b[:2,1:]     # 切出 0~1, 1~最後
b[::2,:]     # 每隔一個取出, 取出全部
b[::-1,::-1] # 全部反向取出
`)



chkData(`
##### (data_python_numpy.js) Numpy 的 axis(軸) & dimension(維度) #####

a = np.array([[1,2,3],[4,5,6]])
# array([[1, 2, 3],
#        [4, 5, 6]])

# 這個 Array是 (2,3) 2x3 維的二軸陣列
# 第0軸 2維 , 第1軸 3維
a.ndim # 輸出2 表示 2軸 二維陣列


a = np.array([ [1,2],[3,4],[5,6] ])
b = np.array([a,a])
display(b)
display(b.sum(axis=0))
display(b.sum(axis=1))
display(b.sum(axis=2))

`)


chkData(`
##### (data_python_numpy.js) Numpy 速度測試，使用 np.sum vs sum #####

import time
a = np.random.randn(100000) ## 產生一堆數字
b = list(a) # 此數字轉換成 list

start_time = time.time()
for _ in range(1000):
    sum_1 = np.sum(a)
print( f"np.sum 花費 {time.time()-start_time} ")

start_time = time.time()
for _ in range(1000):
    sum_2 = sum(b)
print( f"sum 花費 {time.time()-start_time} ")


np.sum 花費 0.030289173126220703 
# sum 花費 5.088945627212524 
# sum 花費 5.088945627212524 

`)



chkData(`
##### (data_python_numpy.js) Numpy 基本操作 #####
import numpy as np

## 將 [1,2,3] 這個 array 轉換成陣列
a = np.array([1,2,3])

## numpy 運算
display(a)   ## 輸出 array([1, 2, 3])
display(a*3) ## 輸出 array([3, 6, 9])
display(a+3) ## 輸出 array([4, 5, 6])

## 比較 list 運算
display([1,2,3]*3)  ## 輸出 array([1, 2, 3, 1, 2, 3, 1, 2, 3])

## 將 a b 兩個 nparray 進行運算
b = np.array([3,4,3])
display(a + b) ## 輸出 array([4, 6, 6])
display(a / b) ## 輸出 array([0.33333333, 0.5       , 1.        ])
display(a * b) ## 輸出 array([3, 8, 9])

## np.arange() 建立連續數值陣列
np.arange(10) ## 產生 0-9 array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
np.arange(0,10,2) ## 產生 0-9 之間並間隔2  array([0, 2, 4, 6, 8])

## np.linspace() 此陣列以等差數列的形式產生，指定個數
np.linspace(0,10,15) ## 0~10 用 15 個數字均分


## 建立二維陣列
c = np.array([[1,2,3],[4,5,6]])
# array([[1, 2, 3],
#        [4, 5, 6]])

c.shape        # 顯示形狀為(2,3)
np.shape(c)    # 顯示形狀為(2,3)
c.reshape(3,2) # 使用 reshape 改變形狀

## 建立 三維陣列
d = np.array([[[1,2,3],[4,5,6],[7,8,9],[10,11,12]],
[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]])

display(d)
# array([[[ 1,  2,  3],
#         [ 4,  5,  6],
#         [ 7,  8,  9],
#         [10, 11, 12]],

#        [[ 1,  2,  3],
#         [ 4,  5,  6],
#         [ 7,  8,  9],
#         [10, 11, 12]]])

d.shape  ## (2, 4, 3)

a = np.array([1,2,3]) # 產生 array
type(a) #確認類型 numpy.ndarray
a.data # 查看記憶體 <memory at 0x000002927384C4C0>
a.dtype # 查看內容的類型 dtype('int32')

b = np.array([[1,2,3],[4,5,6]]) ## 產生二維陣列
b.shape # 形狀為 (2,3)
b.T # 轉置, 形狀變 (3,2)
# array([[1, 4],
#        [2, 5],
#        [3, 6]])

`)


