const express = require("express");
const router = express.Router();
const connection = require('../db/dbconnect')

//get all employees
router.get("/employees",(req,resp)=>{
    connection.query("select * from employee",(err,data)=>{
        if(err){
            resp.status(500).send("data not found"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })
})
//get specific employee
router.get("/employees/:empid",(req,resp)=>{
    connection.query("select * from employee where empid=?",[req.params.empid],(err,data)=>{
        if(err){
            resp.status(500).send("data not found "+JSON.stringify(err))
        }else
        resp.send(data)
    })

//to insert an employee
router.post("/employees/:empid",(req,resp)=>{
    var empid = req.body.empid;
    var ename = req.body.ename;
    var sal = req.body.sal;
    connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,data)=>{
        if(err){
           resp.status(500).send("employee not inserted"+JSON.stringify(err))
        }else{
            if(data.affectedRows>0)
                resp.send("Employee inserted succesfully")
            else
                resp.send("Insertion failed")
        }
    })
})
// router.post("/employee/employee/:eid",(req,resp)=>{
//     var empid=req.body.empid;
//     var ename=req.body.ename;
//     var sal=req.body.sal
//     connection.query("insert into employee values(?,?,?)",[empid,ename,sal],(err,result)=>{
//       console.log(result);
//       if(err){
//           resp.status(500).send("data not inserted")
//       }
//       else{
//           if(result.affectedRows> 0)
//              resp.send("{'msg':'inserted successfully'}")
//           else
//           resp.send("{'msg':'not inserted '}")
//       }
//     })
//   })
//to partially update the employee
router.put("/employees/:empid",(req,resp)=>{
    var empid=req.body.empid;
    var ename=req.body.ename;
    var sal = req.body.sal;
    connection.query("update employee set ename=?,sal=? where empid=?",[ename,sal,empid],(err,data)=>{
        if(err){
            resp.status(500).send("employee updation failed")
        }else
            if(data.affectedRows>0)
                resp.send("Employee updated succesfully")
            else
                resp.send("employee not updated")
    })
})
//to delete the employee from the database
router.delete("/employees/:empid",(req,resp)=>{
    connection.query("delete from employee where empid=?",[req.params.empid],(err,data)=>{
        if(err){
            resp.status(500).send("employee not deleted")
        }
        else{
            if(data.affectedRows>0)
                resp.send("Employee deleted succesfully")
            else
                resp.send("Employee deletion failed!!!!")
        }
    })
})

})

module.exports=router;