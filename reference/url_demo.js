const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//host
console.log(myUrl.host);

// search parameters
console.log(myUrl.searchParams);

myUrl.searchParams.append('age', '30');
console.log(myUrl.toString());
