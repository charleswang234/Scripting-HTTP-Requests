var https = require('https');

var data = '';

function getAndPrintHTML() {

  var requestOptions = {
     host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    response.on('data', function(chunks) {
      data += chunks;
    });

    response.on('end', function() {
      console.log(data);
    });
  });
}

getAndPrintHTML();