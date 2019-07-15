const https = require('https');

function getAndPrintHTML () {
  let responseData = '';
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, (res) => {

    res.on('data', (data) => {
      responseData += data;
    });

    res.on('end', () => {
      console.log(responseData);
    });

  });
}

getAndPrintHTML();