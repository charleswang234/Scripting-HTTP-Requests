var https = require('https');
var data = '';

function getAndPrintHTML (options) {

  https.get(options, function(response) {

    response.on('data', function(chunks) {
      data += chunks;
    });

    response.on('end', function() {
      console.log(data);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);