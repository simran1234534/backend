const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 var Schema=mongoose.Schema
 
 const userSchema = new Schema({ 
    email: String,
    password: String,
    saltSecret: String
   
});

const editSchema = new Schema({
            
html_attributions:
    [{
   geometry:{
       location:{
           lat:Number,
           lng:Number
       },
       viewport:[{
           northeast:{
              
                  lat:Number,
              lng:Number
              
           },
           southwest:{
               lat:Number,
               lng:Number
           }
      }]
       
   },
   icon:String,
   name:String,
   opening_hours:{
       open_now:Boolean
   },
   place_id:String,
   plus_code:
       {
       compound_code:String,
       global_code:String    
       },
       rating:Number,
       reference:String,
       scope:String,
       types:[String],
       user_rating_total:Number,
       vicinity:String
}]
 
})
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        "SECRET#123",
    {
        expiresIn: '10m'
    }
     );
}
   
mongoose.connect('mongodb://shubhi:shub123@ds119755.mlab.com:19755/ima',{useNewUrlParser:true}).then(
    ()=>{
        console.log("connected to mongoDB")},
     (err)=>{
         console.log("err",err);
     })
 var  dataset = mongoose.model('hotelschema',editSchema); 
  
 var bankset = mongoose.model('bankschema',editSchema)
 var user = mongoose.model('registrations', userSchema);
   module.exports={
     dataset:dataset,
     bankset:bankset,
     user:user
     }