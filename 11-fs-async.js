const { log } = require('console')
const {readFile, WriteFile, writeFile } = require('fs')
console.log("start");

readFile('./content/first.txt','utf8',(err,res)=>{

    if(err){
        console.log(err);
        return;
    }
    else {
        const first = res;
        readFile('./content/second.txt','utf8',(err,res)=>{

            if(err) {
                console.log(err);
                return;
            }
            const second = res;
            writeFile('./content/result-async.txt',`here is the async result ${second,first}`,(err,res)=>{

                if(err){
                    console.log(err);
                    return;
                }
                else console.log('done with this task');
            })

        })
    }
})

console.log("starting new task....");