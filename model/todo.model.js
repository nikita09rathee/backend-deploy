const mongoose=require("mongoose");
const todoSchema=mongoose.Schema({
      
      taskname:{type:String,required:true},
      status:{type:String,required:true},
      tag:{type:String,required:true},
      userId:{type:String,required:true}
      //ip adress

});
const TodoModel=mongoose.model("todo",todoSchema);
module.exports={TodoModel};
//enum:["pending","done"],