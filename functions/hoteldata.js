'use strict';
const  db = require('../models/db');

exports.getDetail = (data) => {
  
    return new Promise(async (resolve, reject) => {
        const newUser = new db.dataset (data)
        const checkobj=await newUser.save();
        console.log("Hotel details", checkobj);
        resolve(checkobj);
        
    });
}