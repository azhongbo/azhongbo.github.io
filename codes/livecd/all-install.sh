#!/bin/bash
mount -t proc none /proc
mount -t sysfs none /sys
export HOME=/root

cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime


echo nameserver 8.8.8.8     > /tmp/resolv.conf
echo nameserver 168.95.1.1 >> /tmp/resolv.conf

echo deb http://archive.ubuntu.com/ubuntu/ zesty main restricted universe multiverse             > /tmp/sources.list
echo deb http://security.ubuntu.com/ubuntu/ zesty-security main restricted universe multiverse  >> /tmp/sources.list
echo deb http://archive.ubuntu.com/ubuntu/ zesty-updates main restricted universe multiverse    >> /tmp/sources.list

cp /tmp/resolv.conf       /etc/
cp /tmp/sources.list      /etc/apt/
cp /tmp/sublime-text.list /etc/apt/sources.list.d/


wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | apt-key add -
apt-get install apt-transport-https
echo "deb https://download.sublimetext.com/ apt/stable/" | tee /etc/apt/sources.list.d/sublime-text.list
apt-get update


apt-get -y install python3-pip python3-setools scrot python3-tk python3-dev 
python3 -m pip install selenium
python3 -m pip install python3-xlib
## python3 -m pip install pyautogui

apt-get -y install sublime-text
apt-get -y install chromium-browser expect firefox gimp git libreoffice-l10n-zh-tw libreoffice-pdfimport mtr lynx nbtscan net-tools nmap openssh-server p7zip p7zip-full p7zip-rar putty remmina remmina-plugin-rdp remmina-plugin-vnc samba smplayer vlc
apt-get -y install ibus ibus-chewing ibus-table-cangjie
apt-get -y install squashfs-tools genisoimage qemu-kvm
apt-get -y install virtualbox
apt-get -y install virtualbox-dkms
apt-get -y install virtualbox-guest-utils
apt-get -y install virtualbox-ext-pack
apt-get -y install virtualbox-guest-x11
apt-get -y install virtualbox-guest-additions-iso
apt-get -y install virtualbox-qt
apt-get -y install virtualbox-guest-dkms

echo ttf-mscorefonts-installer msttcorefonts/accepted-mscorefonts-eula select true | debconf-set-selections
apt-get -y install ttf-mscorefonts-installer
apt-get -y install ubuntu-restricted-extras


apt-get -y install apache2 php7.0 php7.0-sqlite3 sqlite3 

#debconf-set-selections <<< 'mysql-server mysql-server/root_password password 1234'
#debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password 1234'
#apt-get -y install php7.0-mysql mysql-server

