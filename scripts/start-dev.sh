#!/bin/bash

cd docker

if [ "$1" = '-u' ] || [ "$1" = '--update' ]
then
    echo 'build react app...'
    yarn --cwd ../packages/web/ build
fi

echo 'stop docker containers...'
docker-compose -f docker-compose.dev.yml down -v

echo 'start docker containers...'
docker-compose -f docker-compose.dev.yml up -d --build