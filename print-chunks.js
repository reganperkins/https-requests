// Your first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.
// You can use the example above as a reference or template.
// This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.
// Remember in this and each subsequent Step - you will always need to invoke (call) the function you wrote.
const https = require('https');
  

function getAndPrintHTMLChunks () {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, (res) => {
    res.on('data', (data) => {
      console.log(`${data} \n`);
    })
  });
}

getAndPrintHTMLChunks();