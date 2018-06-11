var https = require('https');
// var data = '';

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    response.on('data', function(chunk) {
      console.log(chunk + '/n');
    });

    // response.on('end', function() {
    //   console.log(data);
    // });
  });
}

getAndPrintHTMLChunks();