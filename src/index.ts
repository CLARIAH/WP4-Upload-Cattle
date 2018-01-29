import Client from "@triply/client.js/build/src/App";

const [, , token, username, datasetName,  ...files] = process.argv;
async function run() {
  const account = Client.get({ url: 'https://api.druid.datalegend.net', token: token }).getAccount(username);


  ///check whether account name exists
  await account.info();

  var dataset = account.getDataset(datasetName);
  try {
    //check whether dataset name exists
    await dataset.info();
  } catch(e) {
    //assuming it doesnt exist
    dataset = await account.addDataset({accessLevel: 'public',name: datasetName})
  }


  //Clear all linked data in this dataset
  await dataset.removeAllGraphs();

  console.info(`Uploading ${files.length} files`);
  await dataset.upload(...files);

  console.info('Importing uploaded files');
  await dataset.getJob().exec();
  console.info('Done!')
}

run().then(() => {}, e => console.error(e));
