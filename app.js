const fs = require('fs'),
  getHtml = require('./https-function');

function saveToOutputFile(html) {
  const writeStream = fs.WriteStream('./output.js');
  writeStream.write(html, 'UTF8');
  writeStream.end();
}

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHtml(requestOptions, saveToOutputFile);