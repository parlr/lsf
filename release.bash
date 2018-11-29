#!/usr/bin/env bash

version="$1"

function commit_app() {
    local version="$version"

    git checkout master -- dist/
    mv dist/* ./
    git add .
    git commit -m "deploy $version"
}

function create_build() {
    rm dist/ -rf
    yarn install --frozen-lockfile
    yarn build
}

function create_release() {
    local version="$version"

    yarn version --new-version "$version"
}

function deploy() {
    git push
    git push --tags
}

create_build \
    && create_release "$version" \
    && git checkout gh-pages \
    && commit_app "$version" \
    && deploy \
    && git checkout master
