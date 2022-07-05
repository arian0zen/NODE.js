const express = require('express');
const { appendFile } = require('fs');
const { request } = require('http');
const fs = require('fs');
const app = express();
const path = require('path');
const port = 80;

//EXPRESS codes
app.use('/static', express.static('static')) //serving static files
app.use(express.urlencoded());






//PUG codes
app.set('view engine', 'pug'); //setting the template engine for pug
app.set('views', path.join(__dirname, 'views')); //set the views pug directory



//ENDPOINTS
app.get('/', (req, res)=>{
    const con = ""
    const params = {'title': 'Pug may be the best'}
    res.status(200).render('index.pug', params)

});
app.post('/', (req, res)=>{
    name_form = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputToWrite = `the name of the client is ${name_form}, ${age} year, ${gender} and ${more}, address is ${address}`
    console.log(req.body)
    fs.writeFileSync('output.txt', outputToWrite )
    const params = {'message': 'Your submission collected successfully'}
    res.status(200).render('index.pug', params)
})


//START server

app.listen(port, () =>{
    console.log(`this is running on port ${port}`)
});

// console.log(name_form)