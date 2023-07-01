//import 4 files(libs)
const express=require("express");
const app = express();
const bodyparser=require("body-parser");
const router=require('./router/router');

//add middlewares
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//url handler
app.use("/",router);

//start the server
app.listen(5555,function(){
    console.log("server started on port 5555")
})
module.exports=app;
