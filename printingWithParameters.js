var https = require('https'); // private variable
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