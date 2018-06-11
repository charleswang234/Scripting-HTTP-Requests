var https = require('https');
var data = '';

function getAndPrintHTML (options, callback) {

  https.get(options, function(response) {

    response.on('data', function(chunks) {
      data += chunks;
    });

    response.on('end', function() {
      callback(data);
    });
  });
}


function printHTML(html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTML(requestOptions, printHTML);