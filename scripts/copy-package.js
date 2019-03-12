
var fs = require('fs');

var packageJson = require('../package.json');
if (! packageJson) {
    throw new Error('Can\'t find package json');
}

delete packageJson.devDependencies;

fs.writeFile('./dist/package.json', JSON.stringify(packageJson, null, 2), function(err, result) {
    if(err) console.log('error', err);
  });