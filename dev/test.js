const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

// bitcoin.createNewBlock(91098, '0IHUUBJ899M87','0NKI7878NHJJHJH');

// bitcoin.createNewTransaction(100,'VINAY0NKI7878NHJJHJHDE','PRAJA78NHJJHJHDE0NKI');

// bitcoin.createNewBlock(91098, '0IHUU324J899M87','0NKI7878SDFSNHJJHJH');

// //It will be pending till Creating new block
// bitcoin.createNewTransaction(100,'VINAY0NKI7878NHJJHJHDE','PRAJA78NHJJHJHDE0NKI');
// bitcoin.createNewTransaction(200,'VINAY0NKI7878NHJJHJHDE','PRAJA78NHJJHJHDE0NKI');
// bitcoin.createNewTransaction(300,'VINAY0NKI7878NHJJHJHDE','PRAJA78NHJJHJHDE0NKI');

// bitcoin.createNewBlock(91198, '0IHUU324J899M87','0NKI7878SDFSNHJJHJH');

const previousBlockHash = 'PRAJA78NHJJHJHDE0NKI';
const currentBlockData = [
    {
        amount: 10,
        sender: 'VINAY0NKI7878NHJJHJHDE',
        recipient: '0IHUU324J899M87',
    },
    {
        amount: 190,
        sender: 'AINAY0NKI7878NHJJHJHDE',
        recipient: '0AHUU324J899M87',
    },
    {
        amount: 410,
        sender: 'BINAY0NKI7878NHJJHJHDE',
        recipient: '0BHUU324J899M87',
    },

];

const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

console.log(bitcoin);


