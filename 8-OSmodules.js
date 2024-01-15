const os = require('os');

//for current user info 
let user = os.userInfo()
console.log(user)

console.log(`the system uptime is ${os.uptime}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);