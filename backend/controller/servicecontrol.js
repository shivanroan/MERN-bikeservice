const schema=require('../models/model')
const mongoose=require('mongoose')

const Coursemodel= mongoose.model("Course",schema)
require('dotenv').config();
const nodemailer=require('nodemailer')


let transportUser=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"zhivanml@gmail.com",
        pass:"zhiva6116"
    }
})

let mailOptionUser={
    from:"zhivanml@gmail.com",
    to:"zhivanaws@gmail.com",
    subject:"Service needed",
    text:"I need this to be done fast"

}


//for updating the service inforamtion of a specific user by getting his name
exports.postservice=(req,res,next)=>{
    let name=req.params.name;
    Coursemodel.findOne({name:name},(err,data)=> {
        if(err){
            console.log(err)
        }
        data.generalservice=req.body.generalservice
        data.oilchange=req.body.oilchange
        data.waterwash=req.body.waterwash
        data.discription=req.body.discription
        data.save()
        transportUser.sendMail(mailOptionUser,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("mailed")
                res.send("MAIL SENT TO THE service people")
            }
        })
    })
    .then(result=>{
        res.send("service added")
    })
}

//this returns the admins the required info of which user needs what kinda service
exports.getserviceinfo=(req,res,next)=>{
    // let name=req.params.name;
    Coursemodel.find({}, {name:1,generalservice:1,oilchange:1,waterwash:1,discription:1, _id:0})
    .then(result=>{
        res.send(result)
    })
} 

//this funtion provides previous and current service of the user from the name of the user
exports.getprevious=(req,res,next)=>{
    const name=req.params.name;
    Coursemodel.find({name},{completed:0,_id:0,userid:0,name:0,mobilenumber:0,__v:0})
    .then(result=>{
        res.send(result)
    })
}

//this funtion provides the status of the service 
exports.getStatuspeek=(req,res,next)=>{
    const name=req.params.name;
    Coursemodel.find({name},{completed:1,_id:0})
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
    }