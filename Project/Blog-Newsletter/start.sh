#!/bin/bash

source mvenv/bin/activate
cd src
uwsgi --socket :11111 --module main.wsgi --enable-threads