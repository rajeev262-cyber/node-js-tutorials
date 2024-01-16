const eventEmitter = require('events');
const customEventEmitter = new eventEmitter();
customEventEmitter.on('response',()=>{
    console.log('data recieved ');
})
customEventEmitter.on('response',()=>{  // we can create a much function we want  
    console.log('another response ');
})

customEventEmitter.emit('response');
