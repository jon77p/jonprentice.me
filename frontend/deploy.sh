#!/usr/bin/env sh

cd frontend

# abort on errors
set -e

# install
npm install

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo "$HOST" > CNAME

cd -
