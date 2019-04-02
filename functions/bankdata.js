'use strict';
const  db = require('../models/db');

exports.postDetail = (data) => {
  
    return new Promise(async (resolve, reject) => {
        const newUser = new db.bankset (data)
        const checkobj=await newUser.save();
        console.log("User details", checkobj);
        resolve(checkobj);
        
    });
}