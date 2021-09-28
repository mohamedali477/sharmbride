const mongoose=require('mongoose')
const userSchema = mongoose.Schema({

    name:{type:String,require :true},
    email:{type:String, require:true},
    password:{type:String,require:true},
    isAdmin:{type:Boolean,default:false},
  
},{
    timestamps:true,
})

const roomModel=mongoose.model('user',userSchema)
module.exports=roomModel