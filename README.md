### Installation:

- Make sure nodejs and npm are installed
- Clone this repo
- Run `npm install` from this dir
- Run `npm run build` from this dir


### Uploading graphs to druid

Run `./uploadFiles  <token> <username> <datasetname> [...<files]`.

This will remove existing graphs from the dataset, and replace it with the uploaded files.
