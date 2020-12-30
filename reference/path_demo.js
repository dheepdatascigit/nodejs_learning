const path = require('path');

//base file name
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));

// create path object

console.log(path.parse(__filename));

//concatinate paths
console.log(path.join(__dirname, 'test', 'newfile.js'));
