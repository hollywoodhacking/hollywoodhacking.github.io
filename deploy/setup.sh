#!/bin/bash

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"

npm install bower
npm install -g typescript
npm install -g requirejs
bower install

deploy/compile.sh