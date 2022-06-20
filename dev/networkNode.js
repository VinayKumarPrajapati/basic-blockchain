const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const { v4: uuidv4 } = require('uuid');
uuidv4();
const port = process.argv[2];
const rp = require('request-promise');
const { post } = require('request-promise');

const nodeAddress = uuidv4().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function(req, res) {
    res.send(bitcoin);
});

app.post('/transcation', function(req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in Block ${blockIndex}` });
});

// Mine a Block
app.get('/mine', function(req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };

    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);

    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

    //Giving Bitcon to miner
    bitcoin.createNewTransaction(12.5, "00",nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    res.json({
        note: "New Block Mined Successfully",
        block: newBlock
    })
});

//Register node, broadcast node to entire network
app.post('/register-and-broadcast-node',function(req,res){
    
    const newNodeUrl = req.body.newNodeUrl;

    if(bitcoin.networkNodes.indexOf(newNodeUrl) == -1)
        bitcoin.networkNodes.push(newNodeUrl);

    const regNodesPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl => {
        const requestOptions = {
            uri: networkNodeUrl + '/register-node',
            method: POST,
            body: {newNodeUrl: newNodeUrl},
            json: true
        };

        regNodesPromises.push(rp(requestOptions));
    });

    Promise.all(regNodesPromises)
        .then(data => {
            const bulkRegsiterOptions = {
                uri: newNodeUrl + '/register-nodes-bulk',
                method: 'POST',
                body: {allNetWorkNodes: [ ...bitcoin.networkNodes, bitcoin.currentNodeUrl ] },
                json: true
            };
          return  rp(bulkRegsiterOptions);
        })
        .then(data => {
            res.json({ note: 'New node register with network successfully' });
        })
});

//register a node with network
app.post('/register-node',function(req,res){
    
});

//register multiple nodes at once
app.post('/register-nodes-bulk',function(req,res){

});

app.listen(port, function() {
    console.log(`Listening to port ${port}`);
});