const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
//    fs.readFile('./data.txt','utf-8',(err,data)=>{
//      if(err){
//         res.end(err);
//      }
//      res.end(data);
//    })

//streaming example

    // const rstream=fs.createReadStream("./data.txt");
    
    // rstream.on("data",(readdata)=>{
    //     res.write(readdata);
    // })

    // rstream.on("end" ,()=>{
    //     res.end();
    // })

    // rstream.on("error",()=>{
    //     res.end("file not found");
    // })

    // res.on("finish",()=>{
    //     console.log("Response has been fully sent to the client...");
    // })


    // by using stream pipes it is easy and fast also in compare to previious method.
    const rstream=fs.createReadStream("./data.txt");
    rstream.pipe(res);
    

})

let port=3300;
server.listen(port,"localhost",()=>{
    console.log("Listening port no "+`${port}`);
})