{"filter":false,"title":"myfirstmodule.js","tooltip":"/js_modules/myfirstmodule.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":2,"column":2},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":4,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["exports.getParameterByName = function(name, url) {","    if (!url) url = window.location.href;","    name = name.replace(/[\\[\\]]/g, '\\\\$&');","    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),","        results = regex.exec(url);","    if (!results) return null;","    if (!results[2]) return '';","    return decodeURIComponent(results[2].replace(/\\+/g, ' '));","};"],"id":3}],[{"start":{"row":3,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["","exports.getParameterByName = function(name, url) {","    if (!url) url = window.location.href;","    name = name.replace(/[\\[\\]]/g, '\\\\$&');","    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),","        results = regex.exec(url);","    if (!results) return null;","    if (!results[2]) return '';","    return decodeURIComponent(results[2].replace(/\\+/g, ' '));","};"],"id":4}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":3,"column":0},"end":{"row":3,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1531522609876,"hash":"4cf8ea59149efbdc95deedf345ccbbae82a7e232"}