#!/bin/bash

DESPATH="/home/comma/webserver/baealex/h5ai/temp_web"
FILEPATH="/workspace/comma/personal/baealex/temp_web"

if [ -d $DESPATH ]; then rm -r $DESPATH; fi;

cp -r $FILEPATH $DESPATH
chmod -R 777 $DESPATH
chown -R comma $DESPATH

DESPATH=
FILEPATH=