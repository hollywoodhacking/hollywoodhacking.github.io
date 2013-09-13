#!/bin/sh

git config credential.helper "store --file=.git/credentials"
echo "https://${GH_TOKEN}:@github.com" > .git/credentials
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis"
rm .gitignore
git add -A .
git commit -m "travis build ${TRAVIS_BUILD_NUMBER}"
git remote add deploy https://github.com/benbrunton/benbrunton.github.io.git
git push deploy master