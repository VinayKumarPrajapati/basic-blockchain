const sha256 = require('sha256');

function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];

    this.createNewBlock(100, '0','0');
}

//Creating New Block 
//Transcation will created after last block mine
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transcations: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    //clearing out previous transcation to start again
    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };
    //Everytime new Transcation Created it will push newTransaction[] 
    //This are pending Transactions 
    //Validated after creating new block
    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}
    // return hash generated from the block we passed
    //sha256 input as text and return fix length of hash string
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
    
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);

    return hash;
}

//Every Block connected must have legitimate data 
//It will keep hashing block until it finds correct hash
//Random and Guess Method till find the solution
//Will keep changing nonce value
//Proof Of Work Should be very difficult to calculate
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while(hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        //console.log(hash);
    }

    return nonce;
}

module.exports = Blockchain;