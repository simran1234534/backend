'use strict';
const  db = require('../models/db');

exports.getDetail = (checkdata) => {
  console.log(checkdata)
    return new Promise(async (resolve, reject) => {
        
        const checkobj=await db.bankset.find()
       
       
        console.log("Bank details", checkobj);
        resolve(checkobj);
        
    });
}