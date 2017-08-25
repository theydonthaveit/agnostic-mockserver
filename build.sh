#/bin/bash

# create temp folder
mkdir dist

# cd into source and compile typescript to javascript to the temp folder
cd src && tsc

# copy two folders to the temp folder
cp -R config/ ../dist
cp -R test/ ../dist

# cd up a dir
cd ../

# run docker
sudo docker build -t firefly .

# clean up project dir
rm -rf dist