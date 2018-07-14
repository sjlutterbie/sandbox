var mysql = require('mysql');
var creds = require('../credentials');



var con = mysql.createConnection({
    host: creds.mysqlcreds['host'],
    user: creds.mysqlcreds['user'],
    password: creds.mysqlcreds['password'],
    database: 'sandbox'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query('SELECT * FROM birthdays;', function (err, result, fields) {
    if (err) throw err;
    
    for (var i in result) {
      for (var j in result[i]){
        var tmpString = j + ': ' + result[i][j];
        console.log(tmpString);
      }
    }
  });
});