var simpleForm = require('./views/simpleForm');
var debugPage = require('./views/debugPage');

var commonHeader = { 'Content-type': 'html' };
var url = require('url');

exports.evalPath = function (req, res) {
    
    var q = url.parse(req.url, true);
    
    res.writeHead(200,commonHeader);
    
    //Route input based on path
    switch(q.pathname) {
        case '/':
            res.write('<h1>Hello, World!</h1>');
            break;
        case '/simpleForm':
            simpleForm.simpleForm(req, res);
            break;
        default:
            debugPage.debugPage(req, res);
    }

    res.end()    

};


