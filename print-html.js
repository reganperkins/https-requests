const https = require('https');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML (options) {
  let responseData = '';

  https.get(options, (res) => {

    res.on('data', (data) => {
      responseData += data;
    });

    res.on('end', () => {
      console.log(responseData);
    });

  });
}

// getAndPrintHTML(requestOptions);
getAndPrintHTML({host: 'sytantris.github.io', path: '/http-examples/step3.html'});
// getAndPrintHTML('https://sytantris.github.io/http-examples/step3.html');