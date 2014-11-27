#!/bin/sh

deploy/minify.sh
git config user.name hollywoodhacking
git config user.password "$PASSWORD"
rm .gitignore
git add . --all
git commit -m "travis build ${TRAVIS_BUILD_NUMBER}"
git branch temp
git checkout temp
git checkout -B master temp
git remote add deploy https://github.com/hollywoodhacking/hollywoodhacking.github.io.git
git push --force deploy master