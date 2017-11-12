#!/usr/bin/env bash

cd src/ || exit

awk '/video/ {print $2}' ./assets/vocabulaire.json \
  | sed 's/"//g' \
> videos.url

wget \
  --input-file videos.url \
  --directory-prefix=assets/flv \
  --continue

rm videos.url
