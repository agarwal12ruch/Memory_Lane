const express=require("express");
const router=express.Router();
const Note=require("../models/Notes");
const {body,validationResult}=require("express-validator")
const fetchuser=require("../middleware/fetchuser")
router.post("/newnote",fetchuser,[ body("title","enter a valid title").isLength({min:3}),
body("description","enter a valid description").isLength({min:5}),
body("tag","enter a valid title").isLength({min:3})
 ],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
          return res.status(400).json({errors:errors.array()});
    }
    const {title,description,tag}=req.body;
    const Newnote =  await new Note({
        title,description,tag,user:req.user.id
      });
      await Newnote.save();
      res.json(Newnote)
    

})

router.put("/UPDATENOTE/:id",fetchuser,async(req,res)=>{
  const{title,description,tag}=req.body;
  const updatenote={};
  if(title){updatenote.title=title}
  if(description){updatenote.description=description}
  if(tag){updatenote.tag=tag}
  try {
    let userid=await Note.findById(req.params.id);
    if(!userid){
      return res.status(400).send("user note found");
    }
    if(userid.user.toString()!==req.user.id){
      return res.status(401).send("Not Allowed");
    }
    userid=await Note.findByIdAndUpdate(req.params.id,{$set:updatenote},{new:true})
     res.json({userid});
  } catch (error) {
    console.log(error.message);
    if(error.code===11000){
      return res.status(400).json({errors:[{msg:"duplicate emai,user already exists"}]})
    }
    res.status(500).send("server error");
  }
})

router.delete("/DELETENOTE/:id",fetchuser,async(req,res)=>{
  try {
    let userid=await Note.findById(req.params.id);
    if(!userid){
      return res.status(400).send("user not found");
    }
    if(userid.user.toString()!==req.user.id){
      return res.status(400).send("Not Allowed");
    }
    userid= await Note.findByIdAndDelete(req.params.id);
    res.json({"SUCCESS":"NOTE HAS BEEN DELETED",userid:userid});
  } catch (error) {
    console.log(error.message);
    if (error.code === 11000) { // Duplicate key error code
      return res.status(400).json({ errors: [{ msg: "Duplicate email, user already exists" }] });
    }
    res.status(500).send("Server error");
  }
})
router.get("/FETCHNOTE",fetchuser,async(req,res)=>{
   try{
    const data=await Note.find({user:req.user.id})
    res.json(data);
   }
   catch (error) {
    console.error(error.message);
    if (error.code === 11000) { // Duplicate key error code
      return res.status(400).json({ errors: [{ msg: "Duplicate email, user already exists" }] });
    }
    res.status(500).send("Server error");
  }
})

module.exports=router;