#!/bin/bash
set -e;

printHelp() {
    cat <<EOF
Usage: uploadFiles  <token> <username> <datasetname> [...<files]
Upload a set of files to a dataset.

WARNING: This will purge the dataset, just before the uploading starts
EOF
}

if [ "$#" -lt 3 ]; then
  printHelp;
  exit 1;
fi
npm run upload-files --  $*
