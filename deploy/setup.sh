#!/bin/bash

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"

npm install bower
npm install typescript
bower install

cd script/app/
find **/*.ts > ts-files.txt
tsc @ts-files.txt --module amd
del ts-files.txt