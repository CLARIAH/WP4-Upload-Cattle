import Client from "@triply/client.js/build/src/App";

const [, , token, username, datasetName,  ...files] = process.argv;
async function run() {
  const account = Client.get({ url: 'https://api.druid.datalegend.net', token: token }).getAccount();


  ///check whether account name exists
  await account.info();

  var dataset = account.getDataset(datasetName);
  //check whether dataset name exists
  await dataset.info();


  //Clear all linked data in this dataset
  await dataset.removeAllGraphs();

  console.info(`Uploading ${files.length} files`);
  await dataset.upload(...files);

  console.info('Importing uploaded files');
  await dataset.getJob().exec();
  console.info('Done!')
}

run().then(() => {}, e => console.error(e));
