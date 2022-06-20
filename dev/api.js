const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res) {
    res.send(bitcoin);
});

app.get('/transcation', function(req, res) {
    console.log(req.body);
});

app.get('/mine', function(req, res) {
    
});

app.listen(3000, function() {
    console.log('Listening to port 3000');
});