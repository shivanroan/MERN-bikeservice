const mongoose=require('mongoose')
const schema=mongoose.Schema


//my userschema 
let userSchema=mongoose.Schema({
    date:{
        type:String,

    },
    address:{
        type:String
    },
    name:{
        type:String,
    },
    mobilenumber:{
        type:String,
    },
    email:{
        type:String,
    },
    generalservice:{
        type:Boolean
    },
    oilchange:{
        type:Boolean
    },
    waterwash:{
        type:Boolean
    },
    description:{
        type:String
    },
    completed:{
        type:Boolean,
    }
})

module.exports=userSchema
