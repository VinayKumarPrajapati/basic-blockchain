const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

bitcoin.createNewBlock(91098, '0IHUUBJ899M87','0NKI7878NHJJHJH');
bitcoin.createNewBlock(91098, '0IHUU324J899M87','0NKI7878SDFSNHJJHJH');
bitcoin.createNewBlock(91098, '0IHUUBJ8324299M87','0NKI7878SDFNHJJHJH');


console.log(bitcoin);


