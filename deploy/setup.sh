#!/bin/sh

echo "setting up Hollywood Hacking - build # ""$TRAVIS_BUILD_NUMBER""\n"

echo "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
chmod 600 id_travis.pub.pem
ssh-add id_travis.pub.pem

npm install bower
bower install
