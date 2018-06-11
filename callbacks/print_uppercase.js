var getHTML = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  //html.toUpperCase();
  console.log(html.toUpperCase()); // toUpperCase returns a new string and does not
  // modify the old string
}

getHTML(requestOptions, printUpperCase);