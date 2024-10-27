const http=require("http");
const url=require('url');
const EventEmitter=require('events');

const eventobj = new EventEmitter();

const server=http.createServer((req,res)=>{
    
    if(req.url=='/'){
        res.end("home page");
    }
    else if(req.url=='/contact'){
        res.end("Contact us");
        eventobj.on('contactrout',(no)=>{console.log(`${no} contact page.`)});
        eventobj.on('secondlistener',(n1,n2)=>{console.log(`${n1}${n2}`)});
        eventobj.emit('contactrout',10,20);
        eventobj.emit('secondlistener',1,2);
    }
    else{
        res.writeHead(404,{"content-type":'text/html/css/js/nodejs/'});
        res.end("<h1>404 page not found</h1>");
    }
})

server.listen(3200,"localhost",()=>{console.log("listening port no.3200")});
// localhost 127.0.0.1 is used for loop back testing.

