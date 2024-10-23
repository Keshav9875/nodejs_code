const fs=require("fs");
// fs.writeFile("write.txt","hello I am using node js core module thing... :)",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("error free");
//     }
// });

// fs.appendFile("write.txt","you are not good because you are the awesome guy in this planet",(err)=>{
//     if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("error free");
//             }
// });

// fs.readFile('write.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

fs.rename('writse.txt','readwrite.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("rename completed..");
    }
  
    
})