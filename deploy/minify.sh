#!/bin/bash

cd script/app/
r.js -o baseUrl=. name=main out=main-built.js
cd ../../
sed -i 's/app\/main/app\/main-built/g' index.html
