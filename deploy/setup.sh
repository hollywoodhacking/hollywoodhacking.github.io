#!/bin/sh

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER"
ssh -T git@github.com
npm install bower
bower install
echo "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config