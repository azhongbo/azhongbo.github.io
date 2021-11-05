

// chkData(`
// ##### (data_docker.js) 主旨放這裡 #####
// 內容放這裡
// `)


// chkData(`
// ##### (data_docker.js) 主旨放這裡 #####
// 內容放這裡
// `)


chkData(`
##### (data_docker.js) php mysql mysqladmin #####

# vi docker-compose.yml
version: '3'
services:
  web:
    image: php:7.0-apache
    restart: always
    ports:
      - 80:80
      - "443:443"
    volumes:
      - /docker/www:/var/www/html
    depends_on:
      - mysql      

  mysql:
    image: mysql:5.6
    restart: always
    ports:
      - "3306:3306"
    volumes:
      - /docker/mysql:/var/lib/mysql
    
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: test_db
      MYSQL_USER: user
      MYSQL_PASSWORD: pass

  phpmyadmin:
    restart: always
    depends_on:
      - mysql
    image: phpmyadmin/phpmyadmin
    container_name: phpmyadmin
    ports:
      - "8080:80"
    environment:
      PMA_HOST: mysql

$ docker-compose up -d
`)


chkData(`
##### (data_docker.js) docker Postgres #####

# vi docker-compose.yml

version: '3.7'
services:
    MyPgDB:
        image: postgres
        container_name: MyPgDB
        restart: always
        environment:
            - "TZ=Asia/Taipei"
            - "POSTGRES_DB=MyPgDB"
            - POSTGRES_PASSWORD=123456
        expose:
            - "5432"
        ports:
            - "5432:5432"
        volumes:
            - ./data:/var/lib/postgresql/data/


# docker-compose up -d
`)


chkData(`
##### (data_docker.js) docker volumes #####
Container 之間的資料共享

啟動第一個 Container
docker run -it -v /data --name=container1 centos /bin/bash

啟動第二個 Container
docker run -it --volumes-from container1 --name=container2 centos /bin/bash
`)


chkData(`
##### (data_docker.js) 安裝 Docer 教學 #####

## 安裝 docker 
## https://docs.docker.com/engine/install/ubuntu/
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

## 安裝 docker-compose
## https://docs.docker.com/compose/install/

sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose


## 安裝 portainer
## https://github.com/twtrubiks/docker-tutorial

docker search portainer
docker pull portainer/portainer
docker volume create portainer_data
docker run --name=portainer -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

## 設定 portainer
# 於左側框架點選 [Endpoints] 後，選擇 [local]。
# 於 [Endpoint details] 頁面中輸入 NAS Public IP，這是 Docker 部署 Container 的 Default IP。 

# non root 執行 docker
# 建立 docker group , 如果已經有就不用
# sudo groupadd docker
# 將 my_username 帳號加上 docker 群組中
sudo usermod -G docker -a my_username
# 立刻更新
newgrp docker
# 重啟服務
sudo systemctl restart docker

`)





chkData(`
##### (data_docker.js) download command 命令 #####
###  Docker command 命令 ####

docker pull tomcat:jre-9  ## 下載 tomcat
docker pull ubuntu  ## 下載 ubuntu
docker images ## 列出 images 
docker ps ## 列出執行中的 image

docker run -it --rm ubuntu bash

`)


chkData(`
##### (data_docker.js) Dockfile Ubuntu PHP 7.4 #####
###  Docker Ubuntu PHP 7.4 ####

FROM ubuntu
COPY startHttp /bin
RUN chmod 755 /bin/startHttp

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends tzdata
RUN ln -sf /usr/share/zoneinfo/Asia/Taipei /etc/localtime
RUN apt-get -y install net-tools nmap apache2 php7.4 curl systemd php7.4-sqlite3 apache2-dev php7.4-ldap php7.4-curl sqlite3 php7.4-curl php7.4-gd php7.4-pgsql php7.4-xml php7.4-bz2 php7.4-mbstring iputils-ping vim

RUN echo "ServerName localhost:80" >> /etc/apache2/apache2.conf

RUN echo "Asia/Taipei" > /etc/timezone
RUN dpkg-reconfigure --frontend noninteractive tzdata
RUN echo "Asia/Taipei" > /etc/timezone

RUN apt-get -y install python3 python3-pip python3-tk python3-dev scrot
RUN python3 -m pip install beautifulsoup4 flask jupyter jupyterlab keras lxml matplotlib numpy opencv-python pandas plotly pyautogui pygame pymssql python3-xlib requests selenium sklearn xlrd tensorflow==2.4.1
RUN python3 -m pip install torch==1.8.0+cpu torchvision==0.9.0+cpu torchaudio==0.8.0 -f https://download.pytorch.org/whl/torch_stable.html
# RUN python3 -m pip install psycopg2

EXPOSE 80
CMD ["startHttp"]





### 檔案: startHttp
#!/bin/bash
apachectl -D FOREGROUND


### 封裝 built 和 執行 run
docker built -t UbuntuPHP74 .
docker run -it --rm UbuntuPHP74 bash
docker run -dit --rm -p 80:80 -v /usr/local/docker/UbuntuPHP74/html:/var/www/html --name php UbuntuPHP74 startHttp
`)


chkData(`
##### (data_docker.js) save load images 匯出匯入 #####
###  Docker save load images 匯出匯入 ####

docker save -o <path for generated tar file> <image name>
docker load -i <path to image tar file>
`)


