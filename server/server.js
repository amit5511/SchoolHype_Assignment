const app= require('./app');
const path=require('path');



//configure dot env
const dotenv = require('dotenv')
// dotenv.config({ path: "backend/config/.env" });
dotenv.config({ path: path.resolve(__dirname,'./configure/.env') })


//server
const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log("Server is runing on Port : "+port);
})