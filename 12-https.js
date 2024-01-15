const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write("welocome to our home page ");
    }
    if(req.url==='/about'){
        res.write('here our some history');
    }
    
    res.end(
        `<h1>Oops!</h1>
        <p> sorry the page you are looking for not found</p>
        <a href='/'>back to home </a>`
    );
})

server.listen(5000)