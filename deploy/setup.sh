#!/bin/bash

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"

npm install bower
npm install -g typescript
bower install

pwd
cd script/app/
echo "--module amd" > ts-files.txt
find *.ts **/*.ts >> ts-files.txt
cat ts-files.txt
echo "begin typescript compilation"
tsc @ts-files.txt
rm ts-files.txt
echo "typescript compilation complete"