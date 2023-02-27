#### 建立基本目錄
mkdir -p nginx/ssl
mkdir -p nginx/logs
mkdir php
mkdir postgres-data


#### 目錄結構
nginx/logs/            # log 存放位置
nginx/ssl/nginx.key    # ssl 憑證存放, 如果不設定 https 可以忽略
nginx/ssl/nginx.cert   # ssl 憑證存放, 如果不設定 https 可以忽略
nginx/nginx.conf       # nginx 設定檔
php/                   # php 存放位置
postgres-data/         # 資料庫目錄
docker-compose.yml     # docker compose
ssl.conf               # 憑證設定檔


#### nginx 設定ssl 指令
# nginx.key & nginx.crt 要複製到 ngixn/ssl 裡面
openssl req -x509 -new -nodes -sha256 -utf8 -days 3650 -newkey rsa:2048 -keyout nginx.key -out nginx.crt -config ssl.conf


#### php 基本安裝
apt-get update
apt-get install tzdata
dpkg-reconfigure tzdata

docker-php-ext-enable sodium
apt-get install -y libpq-dev libldap2-dev telnet expect net-tools vim ufw iftop

docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
docker-php-ext-install pdo pdo_pgsql pgsql
docker-php-ext-configure ldap --with-libdir=/lib/x86_64-linux-gnu/
docker-php-ext-install ldap
docker-php-ext-install pdo_mysql
docker-php-ext-install mysqli pdo pdo_mysql
docker-php-source delete

# docker 裡面 php 安裝完畢退出容氣候, 要記得封裝成 image, 指令 >>>  docker commit your_xxxx_id image_new_name

