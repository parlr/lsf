#!/usr/bin/env bash
# see: https://askubuntu.com/q/56022/22343
# REQUIREMENT:
#   sudo apt install --yes ffmpeg libav-tools

INPUT_FILE="$1"   # video file to split
SPLIT_DATA="$2"   # tsv file: mot  start_time end_time

full_path="$1"
directory_path="${full_path%/*}"
extension="${full_path##*.}"

# awk 'BEGIN{FS=","} /Dialogue/{print $2" "$3}' \
#   "$directory_path/${file/.$extension/.ass}" \
# > "$directory_path/$file.tsv"

FFMPEG() {
  ffmpeg \
    -i "$INPUT_FILE" \
    -ss "$start" \
    -to "$end" \
    -vcodec copy \
    -acodec copy \
    -cpu-used -4 \
    -loglevel error \
    "$chunk" < /dev/null
}

convert_to_webm() {
  ffmpeg \
    -y \
    -i "$chunk" \
    -acodec libvorbis \
    -codec:v libvpx \
    -b:v 192k \
    -b:a 96k \
    -minrate 128k \
    -maxrate 256k \
    -bufsize 192k \
    -cpu-used -4 \
    -deadline best \
    -loglevel error \
  "$chunk.webm" < /dev/null
  # rm "$chunk"
}

split_video() {
  while read -r start end; do
    mot="${start}"
    chunk="$directory_path/$mot.$extension"

    FFMPEG "${start}" "${end}"
    convert_to_webm
  done < $SPLIT_DATA
}

split_video
