const express=require('express')
const router=express.Router()
const serviceControl=require('../controller/servicecontrol')

//PUT from /service/addservice/:name
router.put('/addservice/:name',serviceControl.postservice)

//GET from /service/listservice
router.get('/listservices',serviceControl.getserviceinfo)

//GET from /service/previousbook/:name
router.get('/previousbook/:name',serviceControl.getprevious)

//GET from /service/status/:name
router.get('/status/:name',serviceControl.getStatuspeek)

module.exports=router