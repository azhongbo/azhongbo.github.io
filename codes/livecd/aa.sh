#!/bin/bash

### 建立初始環境與虛擬硬碟

runPath=`pwd`
DiskFile='/sda3/temp.vdi'
MateISO='/sda3/VirtualBoxVMs/ubuntu-mate-17.04-desktop-amd64.iso'


if [  -f $DiskFile ]; then
    rm -f $DiskFile
fi

VBoxManage createhd --filename $DiskFile --size 81920

modprobe nbd
qemu-nbd -c /dev/nbd0 $DiskFile

echo "d
n
p
1


w
" | fdisk /dev/nbd0

mkfs.ext4 -F /dev/nbd0p1

mkdir /livecd
mount /dev/nbd0p1 /livecd

mkdir -p /livecd/isomount /livecd/isonew/{squashfs,cd,custom}
cd /livecd

mount -o loop,ro $MateISO isomount

rsync --exclude=/casper/filesystem.squashfs -a isomount/ isonew/cd/

modprobe squashfs

mount -t squashfs -o loop isomount/casper/filesystem.squashfs isonew/squashfs

rsync -a isonew/squashfs/ isonew/custom/

umount isonew/squashfs
umount isomount


cd /livecd
echo nameserver 8.8.8.8     > /tmp/resolv.conf
echo nameserver 168.95.1.1 >> /tmp/resolv.conf

echo deb http://archive.ubuntu.com/ubuntu/ zesty main restricted universe multiverse             > /tmp/sources.list
echo deb http://security.ubuntu.com/ubuntu/ zesty-security main restricted universe multiverse  >> /tmp/sources.list
echo deb http://archive.ubuntu.com/ubuntu/ zesty-updates main restricted universe multiverse    >> /tmp/sources.list
echo deb https://download.sublimetext.com/ apt/stable/                                           > /tmp/sublime-text.list

cp /tmp/resolv.conf           /livecd/isonew/custom/etc/
cp /tmp/sources.list          /livecd/isonew/custom/etc/apt/
cp /tmp/sublime-text.list     /livecd/isonew/custom/etc/apt/sources.list.d/
cp "$runPath"/all-install.sh  /livecd/isonew/custom/root/

chroot isonew/custom
