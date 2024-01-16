//npm - global command comes with node 
//npm --version 
//local dependency - use it only in this project 
//npm i <packagename>

// global dependency - use it in any project 
//npm install -g <packagename>
// sudo npm install -g <packagename> mac 

// package.json - manifest files (stores important info about project/package)
//manual approach (create package.json in th root, create properties etc)
// npm init (step by step , press enter to skip)
//npm init -y (everything default )

const _ = require('lodash');

const items = [1,[2,[3,[8]]]];

const newItems =  _.flattenDeep(items);
console.log(newItems);
console.log('hello world')