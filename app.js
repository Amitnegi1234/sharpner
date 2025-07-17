import express from "express";
const app=express();
app.use((req,res,next)=>{
    res.send("hello");
})

app.listen(3000,()=>{
    console.log('Server is up and running on port 3000! Ready to handle requests');
})