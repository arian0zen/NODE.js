const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const index = fs.readFileSync("customBackend/lmao.html");
console.log("hello world");
const home = fs.readFileSync("customBackend/home.html");
const server = http.createServer((req, res) => {

    
    console.log(req.url)
    url = req.url; //this url will tell the server which page i want to go, then do an if else, if url = home.html then res.end(home) else if url = index.html then res.end(index)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/'){

        res.end(index);
    }
    else if (url == '/customBackend/home.html'){
        
        res.end(home);
    }
    else{
        res.end("<h1> Not found</h1>");
    }

    //we can use if and else to change the res.end(..) to go to other pages like index and home

});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });