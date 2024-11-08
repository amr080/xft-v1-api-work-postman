#!/bin/bash
for file in collections/*.json; do
  filename=$(basename "$file" .postman_collection.json)
  postman-to-markdown "$file" > docs/"$filename".md
done
