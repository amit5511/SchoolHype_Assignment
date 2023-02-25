const express = require('express');
const app=express();
const path=require('path');

//cors setup
var cors = require('cors');
app.use(cors());

// handle post put and patch request
app.use(express.json({limit: '50mb'}));

//routes setup
const contactRoute =require('./Routes/contactRoute');
app.use('/api/v1',contactRoute);


//initalized frontend
app.use(express.static(path.join(__dirname,'../build')));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../build/index.html'))
})


module.exports =app;