const express =require('express')
const schema=require('../models/model')
const mongoose=require('mongoose')
const Admin=require('../models/adminmodel')
const Coursemodel= mongoose.model("Course",schema)

const router=express.Router()

require('dotenv').config();
const nodemailer=require('nodemailer')

//for node mailer package to work tansport and send mail funtions are necessary

let transportAdmin=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"zhivanaws@gmail.com",
        pass:"zhiva6116"
    }
})

// to change this we need to provide an gmail account with less secure app 
let mailOptionAdmin={
    from:"zhivanaws@gmail.com",
    to:"zhivanml@gmail.com",
    subject:"Reguarding the service of your bike",
    text:"Your service is completed"
}

//user data is stored in DB
exports.postuser=((req,res)=>{
    let course=new Coursemodel()
    // course.userid=req.body.userid;
    course.name=req.body.name;
    course.mobilenumber=req.body.mobilenumber;
    course.address=req.body.address;
    course.email=req.body.email;
    course.date=req.body.date;
    course.save()
    res.send("User has been created")
})

//Checks if the user is admin right now one admin is added the admin details are provided in document
exports.postAdminuser=((req,res,next)=>{
    Admin.findOne({username:req.body.username})
    .then(user=>{
        console.log("user from login")
        // res.send("It worked")
        if (!user) res.sendStatus(204);
        else {
            bcrypt.compare(req.body.password, user.password)
                .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
        }
    })
    .catch(err=>{
        console.log(err)
    })
})
//for editing the user details
exports.postedituser=((req,res,next)=>{
    const name=req.params.name

    Coursemodel.findOne({name:name},(err,data)=> {
        if(err){
            console.log(err)
        }
        data.date=req.body.date
        data.address=req.body.address
        data.name=req.body.name
        data.mobilenumber=req.body.mobilenumber
        data.save()
    })
    // .then(user=>{
    //     res.send(user)
    //     // user.userid=userid
    //     // user.name=name;
    //     // user.mobilenumber=mobilenumber;
    //     // user.save();
    // })
    .then(result=>{
        res.send("USER UPDATED")
    })
    .catch(err=>{
        console.log(err)
    })
})

//to delete the user from the DB
exports.deleteuser=((req,res,next)=>{
    const name=req.params.name;
    // const table=new Coursemodel()
    Coursemodel.findOneAndDelete({name:name})
    .then(() => {
      res.send("User Deleted")
    })
    .catch(err => console.log(err));
})

//to get all the users
exports.getuser=((req,res,next)=>{
    Coursemodel.find({}, {name:1, _id:0})
    .then(users=>{
        res.send(users)
    })
})

//this needs a name as params and it sends mail to user that the service has been completed
exports.postAdminComplete=(req,res,next)=>{
    const name=req.params.name;
    Coursemodel.findOne({name})
    .then(data=>{
        data.completed=true
        data.save()
        res.send("Service Updated , Mail Has been sent to the customer"+ data)
        transportAdmin.sendMail(mailOptionAdmin,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("mailed")
            }
        })
    })
    .catch(err=>{
        console.log(err)
    })
}
