var fs  = require('fs');
var url = require('url');

var commonHeader = { 'Content-type': 'html' };

exports.debugPage = function (req, res) {

  var q = url.parse(req.url, true);

  var debugPath = q.pathname;
  
  var queryList = '';
  for (var i in q.query) {
    queryList += '<li>' + i + ': ' + q.query[i] + '</li>';
  }
  
  var fileContent = fs.readFileSync('./content/debugPage.html', 'utf8');
  
  fileContent = fileContent.replace('{{path}}', debugPath);
  fileContent = fileContent.replace('{{queryList}}', queryList);
  
  res.writeHead(200, commonHeader);
  res.write(fileContent);
  res.end();

};
