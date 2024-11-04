const express =require("express"); // it gives the module express reference 
const app=express(); // it is a function while calling returns the object with some method and properties and use factory pattern.

app.get("/",(req,res)=>{// crud operations method create->.post, read->.get, delete->.delete,update->put.
    res.send("hello i am learning easy epxressjs");
});

app.listen(3001,()=>{
    console.log("<h1>listening the port no 3000<h1/>");
});

