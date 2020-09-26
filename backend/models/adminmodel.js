const mongoose=require('mongoose')
 //schema for admin pannel
let serviceSchema=mongoose.Schema({
    username:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=mongoose.model('Admin',serviceSchema)
