var https = require('https'); // private variable
var data = '';

module.exports = function getHTML (options, callback) {
  // var https = require('https'); // can also place here
    https.get(options, function(response) {

    response.on('data', function(chunks) {
      data += chunks;
    });

    response.on('end', function() {
      callback(data);
    });
  });
};