#!/bin/sh

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"

echo $GH_TOKEN
npm install bower
bower install
