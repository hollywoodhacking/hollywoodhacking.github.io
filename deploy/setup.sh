#!/bin/sh

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"
echo "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh -T git@github.com
npm install bower
bower install
