const mongoose= require('mongoose')

//for connction with mongoDB server
mongoose.connect('mongodb://localhost:27017/ZeddDB',{useUnifiedTopology:true,useNewUrlParser:true},(err)=>{
    if(!err){
        console.log("Connection Success")
    }
    else{
        console.log(err)
    }
})
