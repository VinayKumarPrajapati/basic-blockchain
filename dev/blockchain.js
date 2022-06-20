function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
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

module.exports = Blockchain;