#!/usr/bin/env bash

version="$1"

function create_release() {
    local version="$version"

    yarn version --new-version "$version"
}

function create_build() {
    rm dist/ -rf
    yarn install --frozen-lockfile
    yarn build
}

function clean_before_commit() {
    files_to_remove=(
        cypress/ 
        node_modules/
        .editorconfig
        .gitignore
        .nowignore
    )
    rm --recursive --force "${files_to_remove[@]}"
}

function commit_app() {
    local version="$version"

    cp --recursive dist/* ./
    rm dist/ --recursive --force
    git add .
    git commit -m "deploy $version"
}

function deploy() {
    git push
    git push --tags
}

create_release "$version" \
    && create_build \
    && git checkout gh-pages \
    && clean_before_commit \
    && commit_app "$version" \
    && deploy 
    git checkout master
