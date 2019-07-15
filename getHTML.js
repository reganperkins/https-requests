const https = require('https');
const fs = require('fs');

function getHTML (options, cb) {
  let html = '';

  https.get(options, (res) => {
    res.on('data', (data) => {
      html += data;
    });
    res.on('end', () => {
      cb(html);
    });
  });
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function saveToOutputFile(html) {
  const writeStream = fs.WriteStream('./output.js');
  writeStream.write(html, 'UTF8');
  writeStream.end();
}

getHTML(requestOptions, saveToOutputFile);
