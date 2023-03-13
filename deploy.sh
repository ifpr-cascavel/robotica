#!/bin/bash

apt update 
apt -y install git 
#pwd
#cd /${PROJECT} &&  
source /tmp/variables.env
export USE_SSH
export GIT_MAIL
export GIT_USER
export GIT_NAME
export GIT_PASS
git config --global user.email ${GIT_MAIL} 
git config --global user.name  ${GIT_NAME} 
npm run deploy
echo GIT_MAIL: ${GIT_MAIL} 
echo GIT_NAME: ${GIT_NAME}

