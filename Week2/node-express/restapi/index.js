const express = require('express');
const userController= require('./userroutes');
const cors= require('cors');

const server= express(); 
server.use(cors());
//JSON Parser
server.use(express.json())
server.use('/api/users',userController);
server.use('/api/customers',require('./custcontroller'));

//if any pattern not matching
server.use((req,res)=>{
    res.send("Page not found");
})
server.listen(5000,()=>console.log("server started"))