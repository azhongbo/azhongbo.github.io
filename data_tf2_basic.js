
// chkData(`
// ##### (data_tf2_basic.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_tf2_basic.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_tf2_basic.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_tf2_basic.js) 主旨放這裡 #####
// 內容放這裡
// `)


chkData(`
##### (data_tf2_basic.js) Aladdin Persson 4 CNN Cifar10 #####

## TensorFlow Tutorial 4 - Convolutional Neural Networks with Sequential and Functional API
## https://www.youtube.com/watch?v=WAciKiDP2bo
## https://github.com/aladdinpersson/Machine-Learning-Collection/blob/master/ML/TensorFlow/Basics/tutorial4-convnet.py

import os
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, utils
from tensorflow.keras.layers import Dropout
from tensorflow.keras.datasets import cifar10
from tensorflow.keras import utils

import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
np.random.seed(10)
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

physical_devices = tf.config.list_physical_devices('GPU')
tf.config.experimental.set_memory_growth(physical_devices[0],True)

###### 載入 Cifar10 #######

(train_images, train_labels) , (test_images, test_labels) = cifar10.load_data()
label_dict={0:"airplane",1:"automobile",2:"bird",3:"cat",4:"deer",5:"dog",6:"frog",7:"horse",8:"ship",9:"truck"}

train_images.shape #(50000, 32, 32, 3)
train_4Dimages = train_images.reshape( train_images.shape[0],32,32,3 ).astype("float32")  ## 50000,32,32 =>  50000,32,32,3
test_4Dimages  = test_images.reshape( test_images.shape[0],32,32,3 ).astype("float32")    ## 10000,32,32 =>  10000,32,32,3

## 正規化
train_4Dimages_normalize = train_4Dimages /255.0
test_4Dimages_normalize = test_4Dimages /255.0


###### 顯示圖片 ######
def plot_image(image):
    fig = plt.gcf()
    fig.set_size_inches(2,2)
    plt.imshow(image, cmap="binary")
    plt.show

def plot_images_labels_prediction(images,labels,prediction,idx,num=10):
    fig = plt.gcf()
    fig.set_size_inches(12,14)
    if num>25: num=25
    for i in range(0, num):
        ax=plt.subplot(5, 5, 1+i)
        ax.imshow(images[idx], cmap="binary")
        title = f"{str(i)} , {label_dict[labels[i][0]]}"
        
        if len(prediction)>0:
            title+= f"=> {label_dict[prediction[i]]}"
        
        ax.set_title(title,fontsize=10)
        ax.set_xticks([])
        ax.set_yticks([])
        idx+=1
    plt.show()

plot_images_labels_prediction(train_images, train_labels,[],0)


###### Sequential mode ######
model = keras.Sequential([
    keras.Input(shape=[32, 32, 3]),
    
    layers.Conv2D(32, 3, padding="same", activation="relu"),  ## filter 32, 每個濾鏡 3x3, 不改變大小 padding="same" (另外一個為 valid)
    Dropout(rate=(0.25)),                                     ## 丟棄 %25神經元
    layers.Conv2D(32, 3, padding="valid", activation="relu"),
    layers.MaxPooling2D(pool_size=[2,2]),                     ## 建立池化層

    layers.Conv2D(64, 3, padding="same", activation="relu"),
    Dropout(rate=(0.25)),                                     ## 丟棄 %25神經元
    layers.Conv2D(64, 3, padding="same", activation="relu"),
    layers.MaxPooling2D(pool_size=[2,2]),                     ## 建立池化層
    
    layers.Conv2D(128, 3, padding="same", activation="relu"),
    Dropout(rate=(0.25)),                                     ## 丟棄 %25神經元
    layers.Conv2D(128, 3, padding="same", activation="relu"),
    layers.MaxPooling2D(pool_size=[2,2]),                     ## 建立池化層
    
    layers.Flatten(),
    layers.Dense(200, activation="relu"),
    layers.Dense(20, activation="relu"),
    Dropout(rate=(0.25)),
    layers.Dense(10,activation="softmax"),
])


###### functional mode ######
inputs = keras.Input(shape=(32, 32, 3))

# x = layers.Conv2D(32, 3, padding="same", name="Conv2D-32")(inputs)
# x = layers.BatchNormalization()(x)
# x = keras.activations.relu(x)
# x = layers.Dropout(rate=(0.25))(x)
# x = layers.MaxPooling2D(pool_size=[2,2])(x)

# x = layers.Conv2D(64, 3, padding="same", name="Conv2D-64")(x)
# x = layers.BatchNormalization()(x)
# x = keras.activations.relu(x)
# x = layers.Dropout(rate=(0.25))(x)
# x = layers.MaxPooling2D(pool_size=[2,2])(x)

# x = layers.Conv2D(128, 3, padding="same", name="Conv2D-128")(x)
# x = layers.BatchNormalization()(x)
# x = keras.activations.relu(x)
# x = layers.Dropout(rate=(0.25))(x)
# x = layers.MaxPooling2D(pool_size=[2,2])(x)

# x = layers.Flatten()(x)
# x = layers.Dense(2000, activation="relu")(x)
# x = layers.Dense(1000, activation="relu")(x)
# x = layers.Dense(500, activation="relu")(x)
# x = layers.Dense(100, activation="relu")(x)
# x = layers.Dense(50, activation="relu")(x)
# x = layers.Dropout(rate=(0.25))(x)
# outputs = layers.Dense(10, activation="softmax")(x)
# model = keras.Model(inputs=inputs, outputs=outputs)

model.summary()


###### 開始訓練 ######

model.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=False),
    optimizer=keras.optimizers.Adam(lr=0.001),
    metrics=["accuracy"],
)

try:
    model.load_weights("CIFAR-10.h5")
    print("Load Successfuly")
except:
    print("Load Error")

train_history = model.fit(train_4Dimages_normalize,  # 填入 train 資料 (已正規化)
                          train_labels,              # 填入 標籤 (不需要 OneHot)
                          batch_size=32, 
                          epochs=10, 
                          verbose=2,             # 顯示訓練過程
                          validation_split=0.2)  # validation_split 80%訓練 20%驗證

model.save_weights("CIFAR-10.h5")
print("Save Successfuly")


###### 顯示訓練結果 ######
def show_train_history(train_history):
    plt.plot(train_history.history['accuracy'])
    plt.plot(train_history.history['loss'])
    plt.plot(train_history.history['val_accuracy'])
    plt.plot(train_history.history['val_loss'])
    plt.title("Train History")
    plt.ylabel('accuracy')
    plt.xlabel('Epoch')
    plt.legend(['accuracy','loss','val_accuracy','val_loss'],loc='upper right')
    plt.show()

show_train_history(train_history)


###### 驗證測試資料的準確率 ######
scores = model.evaluate( test_4Dimages_normalize, test_labels, batch_size=32, verbose=2)
print(f"accuracy={scores[1]}")

###### 預測資料 ######
prediction = model.predict(test_4Dimages_normalize)
prediction = np.argmax( prediction, axis=1 )

prediction #顯示預測資料

###### 繪出前面10筆 ######
plot_images_labels_prediction(test_images,test_labels,prediction,0,10)

###### 顯示預測機率細項 ######
def show_Predicted_Probability(y,prediction,x_img,Predicted_Probability,i):
    print('label:',label_dict[y[i][0]],'prediction:',label_dict[prediction[i]])
    plt.figure(figsize=(2,2))
    plt.imshow(np.reshape(x_img[i],(32,32,3)))
    plt.show()
    for j in range(10):
        print( f"{label_dict[j]}\tprobability: {Predicted_Probability[i][j]}"    )

## 輸入測試資料可以得到預測機率
Predicted_Probability=model.predict(test_4Dimages_normalize) #計算每張圖片被預測為某個類的概率

show_Predicted_Probability(test_labels,prediction,test_images,Predicted_Probability,3)

## 使用混淆矩陣
import pandas as pd
pd.crosstab(test_labels.reshape(-1), 
            prediction, 
            rownames=['test_labels'],
            colnames=['prediction'] )

`)



chkData(`
##### (data_tf2_basic.js) Aladdin Persson 3 NN mnist #####

# TensorFlow Tutorial 3 - Neural Networks with Sequential and Functional API
# https://www.youtube.com/watch?v=pAhPiF3yiXI
# https://github.com/aladdinpersson/Machine-Learning-Collection/blob/master/ML/TensorFlow/Basics/tutorial3-neuralnetwork.py

import os
# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, utils
from tensorflow.keras.layers import Dropout
from tensorflow.keras.datasets import mnist
from tensorflow.keras import utils
import matplotlib.pyplot as plt

physical_devices = tf.config.list_physical_devices('GPU')
tf.config.experimental.set_memory_growth(physical_devices[0],True)


###### 載入 mnist #######

(train_images, train_labels) , (test_images, test_labels ) = mnist.load_data()

# 正規化
train_normalization = train_images.reshape(-1,28*28).astype('float32') / 255.0
test_normalization  = test_images.reshape(-1,28*28).astype("float32")  / 255.0

# OneHot (後面 model.fit 會自動處理 onehot )
# train_label_onehot = utils.to_categorical(train_labels)
# test_label_onehot  = utils.to_categorical(test_labels)


###### 顯示圖片 #######
def plot_image(image):
    fig = plt.gcf()
    fig.set_size_inches(2,2)
    plt.imshow(image, cmap="binary")
    plt.show

def plot_images_labels_prediction(images,labels,prediction,idx,num=10):
    fig = plt.gcf()
    fig.set_size_inches(12,14)
    if num>25: num=25
    for i in range(0, num):
        ax=plt.subplot(5, 5, 1+i)
        ax.imshow(images[idx], cmap="binary")
        title= f"label: {str(labels[idx])}"
        if len(prediction)>0:
            title+=f" prediction: {str(prediction[idx])}"
        ax.set_title(title,fontsize=10)
        ax.set_xticks([])
        ax.set_yticks([])
        idx+=1
    plt.show()

plot_images_labels_prediction(train_images, train_labels,[],10,20)


###### 建立模型 #######

## Sequential mode 方法一 ##
# model = keras.Sequential([
#     keras.Input(shape=(28*28)),
#     layers.Dense(512, activation="relu"),
#     Dropout(0.5),
#     layers.Dense(256, activation="relu"),
#     Dropout(0.5),
#     layers.Dense(10,  activation="softmax"),
# ])

## Sequential mode 方法二 ##
model = keras.Sequential()
model.add(keras.Input(shape=(784)) )
model.add(layers.Dense(1000,activation="relu"))
model.add(Dropout(0.5))
model.add(layers.Dense(256,activation="relu"))
model.add(Dropout(0.5))
model.add(layers.Dense(10,activation="softmax"))

## functional mode 方法三 ##
# inputs = keras.Input(shape=[784])
# x = layers.Dense(512,activation="relu",name="h1")(inputs)
# x = layers.Dropout(0.5)(x)
# x = layers.Dense(256,activation="relu",name="h2")(x)
# x = layers.Dropout(0.5)(x)
# outputs = layers.Dense(10,activation="softmax")(x)
# model = keras.Model(inputs=inputs,outputs=outputs)

print(model.summary())


###### 開始訓練 建立損失函數 優化器 ######
model.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=False),
    optimizer=keras.optimizers.Adam(lr=0.001),
    metrics=["accuracy"],
)

train_history = model.fit(train_normalization,   # 填入 train 資料 (已正規化)
                          train_labels,          # 填入 標籤 (不需要 OneHot)
                          batch_size=32, 
                          epochs=10, 
                          verbose=2,             # 顯示訓練過程
                          validation_split=0.2)  # validation_split 80%訓練 20%驗證




###### 繪製正確率 錯誤率 ######
def show_train_history(train_history):
    plt.plot(train_history.history['accuracy'])
    plt.plot(train_history.history['loss'])
    plt.plot(train_history.history['val_accuracy'])
    plt.plot(train_history.history['val_loss'])
    plt.title("Train History")
    plt.ylabel('accuracy')
    plt.xlabel('Epoch')
    plt.legend(['accuracy','loss','val_accuracy','val_loss'],loc='upper right')
    plt.show()

show_train_history(train_history)


###### 預測準確率 ######
scores = model.evaluate( test_normalization, test_labels, batch_size=32, verbose=2)
print(f"accuracy={scores[1]}")

###### 預測資料 ######
# 使用 Sequential model 時候的預測方式
# prediction = model.predict_classes(test_normalization)

# 使用 functional model 時候的預測方式
# prediction = model.predict(test_normalization)
# prediction = np.argmax( prediction, axis=1 )

prediction #顯示預測資料


###### 顯示測驗結果 ######
plot_images_labels_prediction(test_images,test_labels,prediction,idx=340)

###### 建立混淆矩陣 ######
pd.crosstab(test_labels, 
            prediction, 
            rownames=['test_labels'],
            colnames=['prediction'] )


###### 真實與預測的 dataframe ######
df = pd.DataFrame({'test_labels': test_labels, 'prediction': prediction})
df[:10]

###### dataframe 找出預測錯誤 ######
df[(df.test_labels==5)\&(df.prediction!=5)]

###### 顯示錯誤的圖片 ######
plot_images_labels_prediction(test_images,test_labels,prediction,idx=4360,num=1)

`)


chkData(`
##### (data_tf2_basic.js) plt 顯示 mnist / car10 / cifar100 圖片 #####

import matplotlib.pyplot as plt
import numpy as np
def myShow(x_data, y_data ):
    plt.figure(figsize=(5, 3))
    plt.subplots_adjust(hspace=0.1)
    for n in range(15):
        plt.subplot(3, 5, n+1)
        plt.imshow(x_data[n])
        plt.axis('off')
    print(y_data[:15])

(x1,y1), (x1_,y1_) = datasets.mnist.load_data()
(x2,y2), (x2_,y2_) = datasets.cifar10.load_data()
(x3,y3), (x3_,y3_) = datasets.cifar100.load_data()

myShow(x1,y1)
# myShow(x2,np.reshape(y2,[-1]))
# myShow(x3,np.reshape(y3,[-1]))
`)



chkData(`
##### (data_tf2_basic.js)  gpu cuda memory error #####

import  os
from tensorflow.compat.v1 import ConfigProto
from tensorflow.compat.v1 import InteractiveSession

os.environ['TF_CPP_MIN_LOG_LEVEL']='2'

os.environ["CUDA_DEVICE_ORDER"] = "PCI_BUS_ID"
os.environ['CUDA_VISIBLE_DEVICES'] = "0"  # 選擇GPU
config = ConfigProto()
config.allow_soft_placement=True  #指定設備不存在，允许TF自動分配設備
config.gpu_options.per_process_gpu_memory_fraction=0.8  # 分配 memory 避免溢出
config.gpu_options.allow_growth = True   # 自動分配 GPU RAM
session = InteractiveSession(config=config)

## 處理 cudnn error
## FROM https://davistseng.blogspot.com/2019/11/tensorflow-2.html
def solve_cudnn_error():
    gpus = tf.config.experimental.list_physical_devices('GPU')
    if gpus:
        try:
            # Currently, memory growth needs to be the same across GPUs
            for gpu in gpus:
                tf.config.experimental.set_memory_growth(gpu, True)
            logical_gpus = tf.config.experimental.list_logical_devices('GPU')
            print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
        except RuntimeError as e:
            # Memory growth must be set before GPUs have been initialized
            print(e)
solve_cudnn_error()
`)



chkData(`
##### (data_tf2_basic.js) cpu gpu test #####

import tensorflow as tf
import timeit

with tf.device('/cpu:0'):
    cpu_a = tf.random.normal([10000, 1000])
    cpu_b = tf.random.normal([1000, 2000])
    print(cpu_a.device, cpu_b.device)

with tf.device('/gpu:0'):
    gpu_a = tf.random.normal([10000, 1000])
    gpu_b = tf.random.normal([1000, 2000])
    print(gpu_a.device, gpu_b.device)

def cpu_run():
    with tf.device('/cpu:0'):
        a = tf.matmul(cpu_a, cpu_b)
    return a

def gpu_run():
    with tf.device('/gpu:0'):
        a = tf.matmul(gpu_a, gpu_b)
    return a


cpu_time = timeit.timeit(cpu_run, number=10)
gpu_time = timeit.timeit(gpu_run, number=10)
print('Run1: ', cpu_time, gpu_time , cpu_time/gpu_time )

cpu_time = timeit.timeit(cpu_run, number=10)
gpu_time = timeit.timeit(gpu_run, number=10)
print('Run1: ', cpu_time, gpu_time , cpu_time/gpu_time )

cpu_time = timeit.timeit(cpu_run, number=10)
gpu_time = timeit.timeit(gpu_run, number=10)
print('Run1: ', cpu_time, gpu_time , cpu_time/gpu_time )
`)


chkData(`
##### (data_tf2_basic.js) fashion mnist 圖像分類 #####

# TensorFlow and tf.keras
# https://www.tensorflow.org/tutorials/keras/classification
# https://geektutu.com/post/tf2doc-ml-basic-image.html

import tensorflow as tf
from tensorflow import keras
import numpy as np

fashion_mnist = keras.datasets.fashion_mnist

(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()

train_images = train_images / 255.0
test_images = test_images / 255.0

model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10, activation='softmax')
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(train_images, train_labels, epochs=10)

test_loss, test_acc = model.evaluate(test_images, test_labels)
print('Test accuracy:', test_acc)

# 使用 predict函數進行預測
predictions = model.predict(test_images)
predictions[0]
np.argmax(predictions[0]) # 9
test_labels[0] # 9
`)

