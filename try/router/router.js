const express = require("express");
const router=express.Router();
const connection=require('../db/dbconnect')

router.get("/books",(req,resp)=>{
    connection.query("select * from books",(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))
        }else
            resp.send(data)
    })
    
})
router.get("/books/:bid",(req,resp)=>{
    connection.query("select * from books where bookid=?",[req.params.bid],(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))
        }else
            resp.send(data);
    })
})
//whole object will be inserted by post method
router.post("/books/:bookid",(req,resp)=>{
    var bookid=req.body.bookid;
    var bookname=req.body.bookname;
    var bookauthor=req.body.bookauthor;
    var booklang=req.body.booklang;
    var price = req.body.price;
    connection.query("insert into books values(?,?,?,?,?)",[bookid,bookname,bookauthor,booklang,price],(err,data)=>{
        if(err){
            resp.status(500).send("data not inserted")

        }else{
            if(data.affectedRows>0)
                resp.send("inserted succesfully")
            else
                resp.send("insertion failed")}
        })
})

router.delete("/books/:bookid",(req,resp)=>{
    connection.query("delete from books where bookid=?",[req.params.bookid],(err,data)=>{
        console.log(data);
        if(err){
            resp.status(500).send("data not deleted")
        }
        else{
            if(data.affectedRows>0)
            resp.send("deleted successfully");
            else
            resp.status(500).send("not deleted")
        }
        
    })
})
module.exports=router;