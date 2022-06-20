const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(91098, '0IHUUBJ899M87','0NKI7878NHJJHJH');

bitcoin.createNewTransaction(100,'VINAY0NKI7878NHJJHJHDE','PRAJA78NHJJHJHDE0NKI');

bitcoin.createNewBlock(91098, '0IHUU324J899M87','0NKI7878SDFSNHJJHJH');

//It will be pending till Creating new block
bitcoin.createNewTransaction(100,'VINAY0NKI7878NHJJHJHDE','PRAJA78NHJJHJHDE0NKI');
bitcoin.createNewTransaction(200,'VINAY0NKI7878NHJJHJHDE','PRAJA78NHJJHJHDE0NKI');
bitcoin.createNewTransaction(300,'VINAY0NKI7878NHJJHJHDE','PRAJA78NHJJHJHDE0NKI');

bitcoin.createNewBlock(91198, '0IHUU324J899M87','0NKI7878SDFSNHJJHJH');

console.log(bitcoin);


