const connection= require('./models/connection')
const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const serviceRoutes=require('./routes/serviceroutes')
const cors=require('cors')
const userRoute=require('./routes/userroutes')

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())
app.use(cors())
app.use('/user',userRoute)
app.use('/service',serviceRoutes)

app.listen('8080',()=>{
    console.log("server is laughing")
})