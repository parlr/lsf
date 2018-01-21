#!/usr/bin/env bash

git checkout gh-pages
git reset --hard master
yarn build
git add dist/
yarn version --new-version "$1"
git push --force
git push --tags
git checkout master
