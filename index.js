const fs = require('fs');
const http = require('http');

console.log('Starting server');
const hostname = '127.0.0.1';
const port = 3000;


const fileContent = fs.readFileSync("lmao.html" )
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello Wra zdtsbeeedfdfsfsfdfffffffffffffrgx zsiurngzzdadd');

  res.end(fileContent)

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});  

// let text = fs.readFileSync('delete.txt', 'utf-8');
// text = text.replace("testing", "lmao");
// console.log("the content of the delete.txt");
// console.log(text);
// console.log("creating a new file");
// fs.writeFileSync("lmao.txt", text)


