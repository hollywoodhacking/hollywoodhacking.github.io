#!/bin/sh

git config credential.helper "store --file=.git/credentials"
echo "https://${GH_TOKEN}:@github.com" > .git/credentials
git config user.email "travis@travis-ci.org"
git config user.name $GH_TOKEN
rm .gitignore
git add -A .
git commit -m "travis build ${TRAVIS_BUILD_NUMBER}"
git remote add deploy https://github.com/benbrunton/benbrunton.github.io.git
git push --force deploy master