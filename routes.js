'use strict';

const userData=require('./functions/hoteldata')
const banksdata =require('./functions/bankdata')
const viewUserlist =require('./functions/gethotel')
const banklist=require('./functions/getbank')
const jwtHelper = require('./jwtHelper');
const ctrlUser = require('./functions/logincontroller');
module.exports = router => {
    router.post('/postUser',(req,res)=>{
     
        var listdata = req.body
     console.log(listdata);
     userData.postDetail(listdata)
     .then(response=>{
         res.status(200).send({
             response
         })
     
     })
     })
     router.post('/bankUser',(req,res)=>{
     
        var bankdata = req.body
     console.log(bankdata);
     banksdata.postDetail(bankdata)
     .then(response=>{
         res.status(200).send({
             response
         })
     
     })
     })
     router.get('/getdata',(req,res)=>{
             viewUserlist
                .getDetail()
                .then(result => {
        
                    res.send({
                        result : result,
                       "message": "hotel details displayed successfully",
                        "checkstatus": true
                    });
                })
                
        })
   
        router.get('/bankdata',(req,res)=>{
            banklist
               .getDetail()
               .then(result => {
       
                   res.send({
                       result : result,
                      "message": " bank details displayed successfully",
                       "checkstatus": true
                   });
               })
               
       })
       router.post('/authenticate', ctrlUser.authenticate);
       router.post('/register', ctrlUser.register);
   
        
}
