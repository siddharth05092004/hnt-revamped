const express = require('express')
const {getTeam,getBlog,getAlumni,makeTeam,makeBlog,makeAlumni,deleteTeam,deleteBlog,deleteAlumni} =require('./../controllers/controller.js')
const router = express.Router();

router.get('/team',async (req,res)=>{
    
    const team_data = await getTeam()
    res.send(team_data);
   
});

router.get('/blog',async (req,res)=>{
    
    const blog_data = await getBlog()
    res.send(blog_data);
});

router.get('/alumni',async (req,res)=>{
    
    const alumni_data = await getAlumni()
    res.send(alumni_data);
});


router.post('/alumni',async (req,res)=>{
    if(req.body.pass == process.env.PASSWORD){try{
    await makeAlumni(req.body)
    res.sendStatus(200);
    }
    catch(err){
        res.status(500).send(err);
    }}
    else{
        res.status(501).send("Wrong Password!")
    }
})

router.post('/blog',async (req,res)=>{
    if(req.body.pass == process.env.PASSWORD){try{
    await makeBlog(req.body)
    res.sendStatus(200);
    }
    catch(err){
        res.status(500).send(err);
    }}
    else{
        res.status(501).send("Wrong Password!")
    }
})

router.post('/team',async (req,res)=>{
    
    if(req.body.pass == process.env.PASSWORD){try{
    await makeTeam(req.body)
    res.sendStatus(200);
    }
    catch(err){
        res.status(500).send(err);
    }}
    else{
        res.status(501).send("Wrong Password!")
    }
})


router.delete('/alumni/:id',async(req,res)=>{
    if(req.body.pass==process.env.PASSWORD){try{
    const id=req.params.id;
    const delete_alumni = await deleteAlumni(id);
    res.sendStatus(200);}
    catch(err){
        res.status(500).send(err)
    }}
    else{
        res.status(501).send("Wrong Password!")
    }
})

router.delete('/team/:id',async(req,res)=>{
    
    if(req.body.pass==process.env.PASSWORD){try{
        const id=req.params.id;
        const delete_team = await deleteTeam(id);
        res.sendStatus(200);}
        catch(err){
            res.status(500).send(err)
        }}
        
    else{
        res.status(501).send("Wrong Password!")
    }
})

router.delete('/blog/:id',async(req,res)=>{
    
    if(req.body.pass==process.env.PASSWORD){try{
        const id=req.params.id;
        const delete_blog = await deleteBlog(id);
        res.sendStatus(200);}
        catch(err){
            res.status(500).send(err)
        }}
        else{
            res.status(501).send("Wrong Password!")
        }
})





module.exports = router;