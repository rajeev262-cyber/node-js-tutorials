const {createReadStream} = require('fs');


const stream = createReadStream('./content/big.txt');


//defult - 64kb
//last buffer  - remainder
//highWaterMark - control size 
//const stream = createReadStream('./content/big.txt',{highWaterMark: 9000});
//const stream = createReadStream('./content/big.txt',{ encoding: 'utf8' });

stream.on('data',(res)=>{

    console.log(res);
})