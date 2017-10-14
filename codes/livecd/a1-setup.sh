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


Soft='/media/ubuntu-mate/ext4/tools'
cp $Soft/geckodriver                       /livecd/isonew/custom//usr/local/bin/
cp $Soft/phantomjs                         /livecd/isonew/custom/usr/bin/
cp $Soft/VMware-Workstation-Full-14.bundle /livecd/isonew/custom/tmp/
cp "$runPath"/all-install.sh               /livecd/isonew/custom/root/

cd /livecd
chroot isonew/custom
