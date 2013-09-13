#!/bin/bash

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"

npm install bower
npm install -g typescript
bower install

cd script/app/
find **/*.ts > ts-files.txt
tsc @ts-files.txt --module amd
rm ts-files.txt