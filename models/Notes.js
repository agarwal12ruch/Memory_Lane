const mongoose=require("mongoose");
const {Schema}=mongoose;
const NoteSchema=new Schema({
     user:{
           type:mongoose.Schema.Types.ObjectId,
           ref:'User'
     },
     title:{
         type:String,
         required:true,

     },description:{
        type:String,
        required:true
     },
     tag:{
        type:String,
        required:true
     },
     date:{
        type:Date,
        default:Date.now
     },
     file:{
        type:String
     }
     



})
module.exports=mongoose.model("notes",NoteSchema)