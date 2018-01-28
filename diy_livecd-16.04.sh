#!/bin/bash

umount /dev/sdg2
umount /dev/sda3

mkdir /sda3
mkdir /sdg2

mount /dev/sda3 /sda3 -o uid=999
mount /dev/sdg2 /sdg2 -o uid=999


apt-get update

apt-get -y install virtualbox virtualbox-guest-utils virtualbox-guest-additions-iso  virtualbox-qt qemu qemu-kvm squashfs-tools


#########################################
VBoxManage createhd --filename /sdc2/000/temp.vdi --size 81920
modprobe nbd
qemu-nbd -c /dev/nbd0 /sdc2/000/temp.vdi

echo "d
n
p
1


w
" | fdisk /dev/nbd0
mkfs.ext4 -F /dev/nbd0p1
#########################################



modprobe nbd
qemu-nbd -c /dev/nbd0 /sdg2/000/temp.vdi





mkdir /livecd
mount /dev/nbd0p1 /livecd

mkdir -p /livecd/isomount /livecd/isonew/{squashfs,cd,custom}

cd /livecd

mount -o loop,ro /sdg2/000/ubuntu-mate-16.04.3-desktop-amd64.iso isomount
#mount -t tmpfs -o size=6656M tmpfs /livecd/isonew/custom/

rsync --exclude=/casper/filesystem.squashfs -a isomount/ isonew/cd/

modprobe squashfs

mount -t squashfs -o loop isomount/casper/filesystem.squashfs isonew/squashfs

rsync -a isonew/squashfs/ isonew/custom/

umount isonew/squashfs
umount isomount


echo '# deb cdrom:[Ubuntu-MATE 16.04.3 LTS _Xenial Xerus_ - Release amd64 (20170801)]/ xenial main multiverse restricted universe' > /livecd/isonew/custom/etc/apt/sources.list
echo deb http://tw.archive.ubuntu.com/ubuntu/ xenial main restricted universe multiverse >> /livecd/isonew/custom/etc/apt/sources.list
echo deb http://security.ubuntu.com/ubuntu/ xenial-security main restricted universe multiverse >> /livecd/isonew/custom/etc/apt/sources.list
echo deb http://tw.archive.ubuntu.com/ubuntu/ xenial-updates main restricted universe multiverse >> /livecd/isonew/custom/etc/apt/sources.list
cat /etc/resolv.conf > /livecd/isonew/custom/etc/resolv.conf 



cd /livecd
chroot isonew/custom

### 進入虛擬系統 , 進行系統安裝設定

mount -t proc none /proc
mount -t sysfs none /sys
export HOME=/root

cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime

apt-get update

apt-get -y install virtualbox virtualbox-guest-utils virtualbox-guest-additions-iso  virtualbox-qt qemu qemu-kvm squashfs-tools
apt-get -y install gnome-raw-thumbnailer ufraw-batch encfs k4dirstat nmon language-pack-zh-hant chromium-browser expect firefox gimp git ibus ibus-chewing ibus-table-cangjie libreoffice-l10n-zh-tw libreoffice-pdfimport lynx nbtscan net-tools nmap openssh-server p7zip p7zip-full p7zip-rar putty  qemu-kvm remmina remmina-plugin-rdp remmina-plugin-vnc samba smplayer virtualbox virtualbox-guest-additions-iso virtualbox-guest-utils virtualbox-qt vlc

apt-get -y install ubuntu-restricted-extras
apt-get -y install openssh-server apache2 php7.0 php7.0-sqlite3 sqlite3 php7.0-mysql mysql-server apache2-dev php-mongodb mongodb


##### Install Python #######################################
apt-get -y install python3-pip python3-tk python3-dev scrot 
apt-get -y install python-pip  python-tk  python3-dev 
#python3-pip python3-setools

python3 -m pip install --upgrade pip
python3 -m pip install selenium
python3 -m pip install python3-xlib
python3 -m pip install pymongo
python3 -m pip install pyautogui

python -m pip install --upgrade pip
python -m pip install selenium
python -m pip install python3-xlib
python -m pip install pymongo
python -m pip install pyautogui
#############################################################



##### Install sublime-text ##################################
cd /tmp
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
apt-get -y install apt-transport-https
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
apt-get update
apt-get -y install sublime-text
#############################################################



##### Install H264 ##########################################
cd /tmp
wget http://h264.code-shop.com/download/apache_mod_h264_streaming-2.2.7.tar.gz
tar -zxvf apache_mod_h264_streaming-2.2.7.tar.gz

cd mod_h264_streaming-2.2.7
./configure --with-apxs=`which apxs2`
make
make install
echo 'LoadModule h264_streaming_module /usr/lib/apache2/modules/mod_h264_streaming.so' >> /etc/apache2/apache2.conf
echo 'AddHandler h264-streaming.extensions .mp4' >> /etc/apache2/apache2.conf
#################################



##### Install VSCODE & Vmware ##############################
dpkg -i /root/code*.deb
/root/./VMware-Workstation-Full-14.0.0-6661328.x86_64.bundle --custom
############################################################





apt --fix-broken install

apt-get clean
rm -rf /tmp/*
umount /proc /sys
exit




cd /livecd
chmod +w isonew/cd/casper/filesystem.manifest
chroot isonew/custom dpkg-query -W --showformat='${Package}\t${Version}\n' > $_
mksquashfs isonew/custom isonew/cd/casper/filesystem.squashfs




cd /livecd
cd isonew/cd
mkisofs -r -V "UbuntuLiveCD" -b isolinux/isolinux.bin -c isolinux/boot.cat -cache-inodes -J -l -no-emul-boot -boot-load-size 4 -boot-info-table -o /sda3/VirtualBoxVMs/ubuntu-mate-0000.iso .


















