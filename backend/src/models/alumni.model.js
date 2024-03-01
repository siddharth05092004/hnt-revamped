const mongoose = require("mongoose")


const alumni_schema = mongoose.Schema({
    profile_name:{
        type:String,
        required:true
    },
    profile_post:{
        type:String,
        required:true
    },
    insta_id:{
        type:String,
        required:true
    },
    photo_url:{
        type:String,
        required:true
    },
    order:{
        type:Number,
        required:true
    }

})

const Alumni = new mongoose.model('Alumni',alumni_schema);
module.exports = Alumni;

