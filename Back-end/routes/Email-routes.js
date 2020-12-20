const {emailToExec}=require("../controllers/Email")
const express=require("express")
const bodyParser=require("body-parser")


const  router=express.Router();

router.post("/sendMail",(req,res)=>{
   console.log(req.body)
  
   //emailToExec(req.body.to,req.body.subject,"Hello")
  })

module.exports=router;