
// chkData(`
// ##### (data_python_django.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_python_django.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_python_django.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_python_django.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_python_django.js) 主旨放這裡 #####
// 內容放這裡
// `)







chkData(`
##### (data_python_django.js) 基本設定 #####

## 基本設定 settings.py
LANGUAGE_CODE = 'zh-hant'
TIME_ZONE = 'Asia/Taipei'

# 創建一個專案
django-admin startproject HelloJango

## ???
python manage.py migrate

# 啟動服務
python manage.py runserver
python manage.py runserver 0.0.0.0:8000


## 建立一個 app
python manage.py startapp app

## 修改 HelloJango/settings.py
## 把它加入 INSTALLED_APPS：
INSTALLED_APPS = [
    ... ,
    ... ,
    'app',
]


## 修改 HelloJango/urls.py
from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('',views.hello),
    path('admin/', admin.site.urls),
]


## 修改 app/views.py

from django.shortcuts import render
from django.http import HttpResponse

def hello(request):    
    return HttpResponse("My Test")



############################################
## 網頁放置 HelloJango/app/templates/home.html
############################################
## 建立 app/templates/home.html

## 修改 HelloJango/urls.py 的 urlpatterns 參數
urlpatterns = [
    ...
    path('home/' , views.home,name='home'),
]

## 修改 app/views.py
def home(request):
    return render(request,'home.html')




############################################
## 網頁放置 根目錄 HelloJango/templates/test.html
############################################

## 修改 HelloJango/settings.py 中的 TEMPLATES , 加入 BASE_DIR 根目錄的 templates 位置
'DIRS': [BASE_DIR, 'templates' ],

## 修改 HelloJango/urls.py 的 urlpatterns 參數
urlpatterns = [
    ...
    path('test/',views.test,name='test'),
]

## 修改 app/views.py
def test(request):
    return render(request,'test.html')



############################################
## 建立專案 app2 , http://127.0.0.1:8000/app2/index/
############################################
## 建立一個 app2
python manage.py startapp app2

## 修改 HelloJango/settings.py
## 把它加入 INSTALLED_APPS：
INSTALLED_APPS = [
    ... ,
    'app2',
]


## 修改 HelloJango/urls.py
from django.urls import path, include
urlpatterns = [
    ...
    path('app2/', include('app2.urls')),
]


## 加入 app2/urls.py
from django.contrib import admin
from django.urls import path
from app2 import views

urlpatterns = [
    path('index/', views.index),
]


## 加入 app2/views.py
from django.shortcuts import render
from django.http import HttpResponse

def index(request):    
    return HttpResponse("My app2")




############################################
## 建立專案 app2 , 建立 db
############################################
## 設定 databases 修改 app2/models
class Student(models.Model):
    s_name = models.CharField(max_length=16)
    s_age = models.IntegerField(default=1)

## 執行 makemigrations 建立 db
python manage.py makemigrations
python manage.py migrate


## 加入 app2/urls.py
urlpatterns = [
    ...
    path('addstudent/' , views.add_student),
    path('getstudent/' , views.get_student),
]

## 加入 app2/views.py
def add_student(request):
    student = Student()
    student.s_name = f"Albert{ random.randrange(100) }"
    student.save()
    return HttpResponse(f"Add Sucesses{student.s_name}")

def get_student(request):
    students = Student.objects.all()
    # for student in students:
    #     print(student.s_name)

    context = {
        "MyGame": "Play game" , 
        "students" : students
    }

    return render(request, 'student_list.html' , context=context)

## 根目錄 HelloJango/templates/student_list.html
<h1>Ubuntu</h1>
<h2>{{MyGame}}</h2>
<ul>
    {% for student in students %}
        <li>{{ student.s_name}}</li>
    {% endfor %}
</ul>

## 執行 python manage.py runserver

`)

