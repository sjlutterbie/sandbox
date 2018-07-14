{"filter":false,"title":"debugpage.js","tooltip":"/views/debugpage.js","undoManager":{"mark":28,"position":28,"stack":[[{"start":{"row":0,"column":0},"end":{"row":20,"column":5},"action":"insert","lines":["var fs  = require('fs');","","var commonHeader = { 'Content-type': 'html' };","","exports.simpleForm = function (req, res) {","  var fileContent = fs.readFileSync('./content/simpleForm.html');","  res.writeHead(200, commonHeader);","  res.write(fileContent);","  res.end()","};",""," res.write('<p><strong>Path:</strong> ' + q.pathname + '</p>');","            res.write('<p><strong>Query string:</strong> ' + q.search + '</p>');","        ","            res.write('<ul><li>Query objects:</li>');","            res.write('<ul>');","            for (var i in q.query) {","                res.write('<li>' + i + ': ' + q.query[i] + '</li>');","            }","            res.write('</ul></ul>');","    }"],"id":1}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":18},"action":"remove","lines":["simpleForm"],"id":2},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["d"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["e"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["u"]}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"remove","lines":["u"],"id":3}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["b"],"id":4},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["u"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["g"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["P"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["a"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["g"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":47},"end":{"row":5,"column":57},"action":"remove","lines":["simpleForm"],"id":5},{"start":{"row":5,"column":47},"end":{"row":5,"column":48},"action":"insert","lines":["d"]},{"start":{"row":5,"column":48},"end":{"row":5,"column":49},"action":"insert","lines":["e"]},{"start":{"row":5,"column":49},"end":{"row":5,"column":50},"action":"insert","lines":["b"]},{"start":{"row":5,"column":50},"end":{"row":5,"column":51},"action":"insert","lines":["u"]},{"start":{"row":5,"column":51},"end":{"row":5,"column":52},"action":"insert","lines":["g"]},{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["P"]},{"start":{"row":5,"column":53},"end":{"row":5,"column":54},"action":"insert","lines":["a"]},{"start":{"row":5,"column":54},"end":{"row":5,"column":55},"action":"insert","lines":["g"]},{"start":{"row":5,"column":55},"end":{"row":5,"column":56},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["P"],"id":6}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["p"],"id":7}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["p"],"id":8}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["p"],"id":9}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"remove","lines":["p"],"id":10}],[{"start":{"row":5,"column":52},"end":{"row":5,"column":53},"action":"insert","lines":["P"],"id":11}],[{"start":{"row":8,"column":11},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["  "]},{"start":{"row":9,"column":2},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]},{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"insert","lines":["d"]},{"start":{"row":10,"column":3},"end":{"row":10,"column":4},"action":"insert","lines":["o"]}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["c"],"id":13},{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":["u"]},{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"insert","lines":["m"]},{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":["e"]},{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["n"]},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["t"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["."]},{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["g"]},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["e"]},{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":11},"end":{"row":10,"column":14},"action":"remove","lines":["get"],"id":14},{"start":{"row":10,"column":11},"end":{"row":10,"column":27},"action":"insert","lines":["getElementById()"]}],[{"start":{"row":10,"column":26},"end":{"row":10,"column":28},"action":"insert","lines":["()"],"id":15}],[{"start":{"row":10,"column":27},"end":{"row":10,"column":29},"action":"insert","lines":["''"],"id":16}],[{"start":{"row":10,"column":27},"end":{"row":10,"column":29},"action":"remove","lines":["''"],"id":17},{"start":{"row":10,"column":26},"end":{"row":10,"column":28},"action":"remove","lines":["()"]}],[{"start":{"row":10,"column":26},"end":{"row":10,"column":28},"action":"insert","lines":["''"],"id":18}],[{"start":{"row":10,"column":27},"end":{"row":10,"column":28},"action":"insert","lines":["p"],"id":19},{"start":{"row":10,"column":28},"end":{"row":10,"column":29},"action":"insert","lines":["a"]},{"start":{"row":10,"column":29},"end":{"row":10,"column":30},"action":"insert","lines":["t"]},{"start":{"row":10,"column":30},"end":{"row":10,"column":31},"action":"insert","lines":["h"]}],[{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"insert","lines":["."],"id":20},{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["/"]}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"remove","lines":["/"],"id":21}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["I"],"id":22}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"remove","lines":["I"],"id":23}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["i"],"id":24},{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["n"]},{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["n"]},{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["e"]},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["r"]},{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["H"]},{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["T"]},{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"insert","lines":["M"]},{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"insert","lines":["L"]}],[{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"insert","lines":[" "],"id":25},{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":["="]}],[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":10,"column":46},"end":{"row":10,"column":48},"action":"insert","lines":["\"\""],"id":27}],[{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":["H"],"id":28},{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"insert","lines":["e"]},{"start":{"row":10,"column":49},"end":{"row":10,"column":50},"action":"insert","lines":["l"]},{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"insert","lines":["l"]},{"start":{"row":10,"column":51},"end":{"row":10,"column":52},"action":"insert","lines":["o"]},{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"insert","lines":["!"]}],[{"start":{"row":12,"column":0},"end":{"row":22,"column":5},"action":"remove","lines":[""," res.write('<p><strong>Path:</strong> ' + q.pathname + '</p>');","            res.write('<p><strong>Query string:</strong> ' + q.search + '</p>');","        ","            res.write('<ul><li>Query objects:</li>');","            res.write('<ul>');","            for (var i in q.query) {","                res.write('<li>' + i + ': ' + q.query[i] + '</li>');","            }","            res.write('</ul></ul>');","    }"],"id":29}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":0},"end":{"row":12,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1531581112358,"hash":"682c2415152a3b967660b726110085be3170351e"}