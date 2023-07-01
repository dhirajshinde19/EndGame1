var mysql=require("mysql");

const mysqlconnection=mysql.createConnection({
    "host":"127.0.0.1",
    "user":"root",
    "password":"Gururaj#007",
    "port":3306,
    "database":"gurudb"
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("error occured"+JSON.stringify(err));
    }
    else{
        console.log("connect done")
    }
})
module.exports=mysqlconnection;