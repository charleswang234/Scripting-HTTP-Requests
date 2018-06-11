var getHTML = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html) {
  console.log(html.toLowerCase(html));;
}

getHTML(requestOptions, printLowerCase);