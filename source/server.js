var testFolder = '../assets/';
var fs = require('fs');
var storage = [];
fs.readdirSync(testFolder).forEach(function (file) {
    var rawdata = fs.readFileSync('../assets/' + file);
    var student = JSON.parse(rawdata);
    storage.push(student);
});
console.log(storage[0].features[0].id);
