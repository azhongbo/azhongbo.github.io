#!/bin/bash
DIR="/usr/share/backgrounds/mate/nature";
PIC=$(ls $DIR | shuf -n1); CMPL=$DIR/$PIC;
dconf write /org/mate/desktop/background/picture-filename "'$CMPL'";