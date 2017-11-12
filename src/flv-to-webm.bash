#!/usr/bin/env bash

inputs="src/assets/flv"
outputs="src/assets/video"

[[ ! -d $outputs ]] && mkdir -p "$outputs"

for video in "$inputs"/*; do
new_video="${video##*/}"
  ffmpeg \
    -y \
    -i "$video" \
    -an \
    -codec:v libvpx \
    -minrate 192k \
    -maxrate 300k \
    -b:v 192k \
    -bufsize 192 \
  "$outputs"/${new_video%.*}.webm
done
