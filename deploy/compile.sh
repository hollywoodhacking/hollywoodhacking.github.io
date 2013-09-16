#!/bin/zsh

cd script/app/
echo "--module amd" > ts-files.txt
find *.ts **/*.ts >> ts-files.txt
tsc @ts-files.txt
rm ts-files.txt
cd ../../