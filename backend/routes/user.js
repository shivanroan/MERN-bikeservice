const express=require('express')
const router=express.Router()
const usercontrols=require('../controller/maincontrol')

//POST from /user/adduser
router.post('/adduser',usercontrols.postuser)

//GET from /user/adduser
router.get('/allusers',usercontrols.getuser)

//PUT from /user/edit-user/:name
router.put('/edit-user/:name',usercontrols.postedituser)

//POST from /user/deleteuser/:name
router.post('/deleteuser/:name',usercontrols.deleteuser)

//POST from /user/adminuser
router.post('/adminuser',usercontrols.postAdminuser)

//POST from /user/completed:name for mentioning that the service is complete and sending email
router.post('/completed/:name',usercontrols.postAdminComplete)


module.exports=router
