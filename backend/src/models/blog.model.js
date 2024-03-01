const mongoose = require("mongoose")


const blog_schema = mongoose.Schema({
    photo_url:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    dateTime:{
        type:String,
        required:true
    },
    articleLink:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    order:{
        type:Number,
        required:true
    }

})

const Blog = new mongoose.model('Blog',blog_schema);
module.exports = Blog;