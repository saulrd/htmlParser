var fs = require('fs');
var htmlParser = require('../src/htmlParser');
var entrada = fs.readFileSync('./entrada.html').toString();

//console.log(entrada)
var dom = htmlParser.parse(entrada);

console.log("dom", dom.childNodes[2].childNodes[0].childNodes[0].attributes);
// console.log("dom", dom.childNodes[2].childNodes[0].childNodes[0]);
