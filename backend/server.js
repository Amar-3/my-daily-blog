const express= require('express');


const expressApp = express();



expressApp.listen(5000 , ()=>{
    console.log("server is running");
});