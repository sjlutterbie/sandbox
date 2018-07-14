var http = require('http');
var router = require('./router');

const port = 8080;

const server = http.createServer( (req, res) => {
   router.evalPath(req,res);
});

server.listen(port, ()  => {
  console.log('Server running on port ');  
});