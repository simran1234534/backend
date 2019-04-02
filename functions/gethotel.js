'use strict';
const  db = require('../models/db');

exports.getDetail = (checkdata) => {
  console.log(checkdata)
    return new Promise(async (resolve, reject) => {
        
        const checkobj=await db.dataset.find()
       
       
        console.log("Hotel details", checkobj);
        resolve(checkobj);
        
    });
}