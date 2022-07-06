const express = require("express");
const path  = require("path");
// const fs = require("fs");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const port = 80;


//express
app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
});

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory






//start the server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});