#!/usr/bin/env sh

HEROKU_BUILD_DATE="$(date)"

curl -nX PATCH -H "Authorization: Bearer $HEROKU_API_TOKEN" -H "Accept: application/vnd.heroku+json; version=3" -H "Content-Type: application/json" https://api.heroku.com/apps/jonprentice-me/config-vars -d "{\"BUILD_DATE\": \"$HEROKU_BUILD_DATE\"}"
