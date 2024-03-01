const Alumni =require("./../models/alumni.model.js");
const Blog = require("./../models/blog.model.js")
const Team = require("./../models/team.model.js")

function getAlumni(){
    const alumni_data = Alumni.find({}).sort({order:1});
    return alumni_data;
}

function getTeam(){
    const team_data = Team.find({}).sort({order:1});
    return team_data;
}

function getBlog(){
    const blog_data = Blog.find({}).sort({order:1});
    return blog_data;

}

function makeAlumni(data){
    const make_alumni = Alumni.create(data);
    return make_alumni;
}

function makeTeam(data){
    const make_team = Team.create(data);
    return make_team;
}

function makeBlog(data){
    const make_blog = Blog.create(data);
    return make_blog;
}


function deleteAlumni(data){
    const delete_alumni = Alumni.deleteOne({_id:data});
    return delete_alumni;
}

function deleteTeam(data){
    const delete_team = Team.deleteOne({_id:data});
    return delete_team;
}

function deleteBlog(data){
    const delete_blog = Blog.deleteOne({_id:data});
    return delete_blog;
}


module.exports =   {getTeam,getBlog,getAlumni,makeTeam,makeBlog,makeAlumni,deleteTeam,deleteBlog,deleteAlumni}