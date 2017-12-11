#!/bin/bash

DIR='/sda2/wallpapers';PIC=$(ls $DIR | shuf -n1); CMPL=$DIR/$PIC; dconf write /org/mate/desktop/background/picture-filename "'$CMPL'";

