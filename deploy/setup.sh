#!/bin/bash

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"

npm install bower
npm install typescript
bower install

cd script/app/
echo "--module amd" > ts-files.txt
find **/*.ts >> ts-files.txt
node tsc @ts-files.txt
rm ts-files.txt