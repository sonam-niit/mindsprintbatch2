const url= require('url');

const myurl= url.parse('https://www.google.co.in/search?q=nodejs',true);

console.log(`Host ${myurl.host}`);
console.log(`HostName ${myurl.hostname}`);
console.log(`Path ${myurl.path}`);
console.log(`PathName ${myurl.pathname}`);
console.log(`Protocol ${myurl.protocol}`);
console.log(`Port ${myurl.port}`);
console.log(`Search ${myurl.search}`);
const query = myurl.query;
console.log(`q: ${query.q}`);
