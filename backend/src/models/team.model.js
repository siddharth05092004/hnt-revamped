const mongoose = require("mongoose")


const team_schema = mongoose.Schema({
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

const Team = new mongoose.model('Team',team_schema);
module.exports = Team;
