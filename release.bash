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

function add_to_gitignore() {
    files_to_ignore=(
        node_modules/ 
        cypress/
        .gitignore
    )
    for filename in "${files_to_ignore[@]}"; do
        echo "$filename" >> .gitignore
    done
}

function clean_before_commit() {
    files_to_remove=(
        .editorconfig
        .nowignore
    )
    rm --recursive --force "${files_to_remove[@]}"
}

function commit_app() {
    local version="$version"

    cp --recursive dist/* ./
    rm dist/ --recursive --force
    echo "$version" > .versionrc

    git add .
    git commit -m "deploy $version"
}

function deploy() {
    git push
    git push --tags
}

function back_to_work() {
    rm .gitignore
    git checkout master
}

create_release "$version" \
    && create_build \
    && git checkout gh-pages \
    && add_to_gitignore \
    && clean_before_commit \
    && commit_app "$version"
deploy \
    && back_to_work
