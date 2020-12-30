const fs = require('fs');
const path = require('path');

// Create a folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created....');
});
*/

// create/write a file

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hellow world", err => {
    if (err) throw err;
    console.log('File created.....');
})

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " this is great", err => {
    if (err) throw err;
    console.log('File appended.....');
})

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Reading file \n\n", data);
})
