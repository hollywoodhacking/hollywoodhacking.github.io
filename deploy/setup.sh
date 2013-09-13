#!/bin/sh

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"

npm install bower
npm install typescript
bower install

cd script/app/
dir *.ts /b /s > ts-files.txt
tsc @ts-files.txt --module amd
del ts-files.txt