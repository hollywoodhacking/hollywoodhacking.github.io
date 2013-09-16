#!/bin/bash

cd script/app/
r.js -o baseUrl=. name=bootstrap out=main-built.js
cd ../../
sed -i 's/bootstrap/main-built/g' index.html
