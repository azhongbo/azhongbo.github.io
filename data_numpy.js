
// chkData(`
// ##### (data_numpy.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_numpy.js) 主旨放這裡 #####
// 內容放這裡
// `)


chkData(`
##### (data_numpy.js) 建立 1D 2D 3D 陣列 #####
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
##### (data_numpy.js) 1D 2D 切片 #####
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
##### (data_numpy.js) Numpy的 axis(軸) & dimension(惟度) #####

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
##### (data_numpy.js) 測試　Numpy 速度, 使用 np.sum vs sum #####

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
##### (data_numpy.js) 基本操作 #####
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


