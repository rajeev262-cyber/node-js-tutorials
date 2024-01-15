// commonjs every file is module (by default)
// module - Encapsulated code (only share minimum)


const name = require('./4-modules1');

const sayhi = require('./5-modules2')

const data = require('./6-alternative-syntax')

require('./7-mind-grenade');
console.log('helo');
console.log(data);
sayhi('sussan');
sayhi(name.name1);
sayhi(name.name2);

sayhi(data.items);
