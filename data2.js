// ### tensorflow ###

// chkData(`
// ##### (data2.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data2.js) 主旨放這裡 #####
// 內容放這裡
// `)


chkData(`
##### (data2.js) tensorflow Convolutional Neural Networks with Sequential and Functional API #####
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.datasets import cifar10

physical_device = tf.config.list_physical_devices('GPU')
tf.config.experimental.set_memory_growth( physical_device[0] , True )
(x_train, y_train) , (x_test, y_test) = cifar10.load_data()
x_train = x_train.astype("float32") / 255.0
x_test  = x_test.astype("float32") / 255.0

## Sequential mode ##
# model = keras.Sequential([
#     keras.Input(shape=[32, 32, 3]),
#     layers.Conv2D(32, 3, padding="valid", activation="relu"),
#     layers.MaxPooling2D(pool_size=[2,2]),
#     layers.Conv2D(64, 3, activation="relu"),
#     layers.MaxPooling2D(pool_size=[2,2]),
#     layers.Conv2D(128,3, activation="relu"),
#     layers.Flatten(),
#     layers.Dense(64, activation="relu"),
#     layers.Dense(10)
# ])


## functional mode ##
inputs = keras.Input(shape=(32, 32, 3))

x = layers.Conv2D(32, 3, padding="valid")(inputs)
x = layers.BatchNormalization()(x)
x = keras.activations.relu(x)
x = layers.MaxPooling2D(pool_size=[2,2])(x)

x = layers.Conv2D(64, 3, padding="same")(x)
x = layers.BatchNormalization()(x)
x = keras.activations.relu(x)
x = layers.MaxPooling2D(pool_size=[2,2])(x)

x = layers.Conv2D(128, 3)(x)
x = layers.BatchNormalization()(x)
x = keras.activations.relu(x)

x = layers.Flatten()(x)
x = layers.Dense(64, activation="relu")(x)
outputs = layers.Dense(10)(x)
model = keras.Model(inputs=inputs, outputs=outputs)

print(model.summary())

model.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=True),
    optimizer = keras.optimizers.Adam(lr=3e-4),
    metrics=["accuracy"]
)

model.fit(x_train, y_train, batch_size=64, epochs=10, verbose=2)
model.evaluate(x_test, y_test, batch_size=64, verbose=2)
`)


chkData(`
##### (data2.js) tensorflow Neural Networks mnist #####
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.datasets import mnist

physical_devices = tf.config.list_physical_devices('GPU')
tf.config.experimental.set_memory_growth(physical_devices[0],True)


(x_train,y_train) , (x_test, y_test ) = mnist.load_data()
x_train = x_train.reshape(-1,28*28).astype('float32') / 255.0
x_test  = x_test.reshape(-1,28*28).astype("float32") / 255.0

## Sequential mode ##
# model = keras.Sequential([
#     keras.Input(shape=(28*28)),
#     layers.Dense(512, activation='relu'),
#     layers.Dense(256, activation='relu'),
#     layers.Dense(10),
# ])

# model = keras.Sequential()
# model.add(keras.Input(shape=(784)) )
# model.add(layers.Dense(512,activation="relu"))
# model.add(layers.Dense(256,activation="relu"))
# model.add(layers.Dense(10,activation="relu"))

## functional mode ##
inputs = keras.Input(shape=[784])
x = layers.Dense(512,activation="relu",name="h1")(inputs)
x = layers.Dense(256,activation="relu",name="h2")(x)
outputs = layers.Dense(10,activation="softmax")(x)
model = keras.Model(inputs=inputs,outputs=outputs)

print(model.summary())

model.compile(
    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=False),
    optimizer=keras.optimizers.Adam(lr=0.001),
    metrics=["accuracy"],
)

model.fit(x_train, y_train, batch_size=32, epochs=5, verbose=2)
model.evaluate(x_test,y_test, batch_size=32, verbose=2)


`)




