var fs  = require('fs');

var commonHeader = { 'Content-type': 'html' };

exports.simpleForm = function (req, res) {
  var fileContent = fs.readFileSync('./content/simpleForm.html');

  res.writeHead(200, commonHeader);
  res.write(fileContent);
  res.end();
};