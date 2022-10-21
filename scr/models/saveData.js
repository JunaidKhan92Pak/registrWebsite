const mongoose = require("mongoose");
const validator = require('validator');

const dataSchema = mongoose.Schema({
    firstName:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
       type:Number,
       required:true,
       unique:true
    },
    dob:{
       type:String
    },
    gender:{
       type:String
    },
    password:{
       type:String,
       minlenght:6
    },
    comfrimpassword:{
       type:String
    }
});
const savaData = new mongoose.model('saveData', dataSchema);

 module.exports = savaData;