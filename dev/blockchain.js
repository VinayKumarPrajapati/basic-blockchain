function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

//Creating New Block 
//Transcation will created after last block mine
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transcations: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    //clearing out previous transcation to start again
    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

module.exports = Blockchain;