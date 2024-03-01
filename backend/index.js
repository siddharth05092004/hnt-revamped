const express = require('express')
const mongoose = require('mongoose')
const router =require("./src/routes/router.js")
const cors = require('cors')
require('dotenv').config();
const corsOptions = {
    origin: process.env.ALLOWED_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  
  const app = express();
  app.use(cors(corsOptions));
app.use(express.json());
app.use('/api',router);    

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Database connected!")
    app.listen(process.env.PORT || 4000,()=>{
        console.log("Listening at: ",process.env.PORT || 4000);
    })
})
.catch((err)=>{
    console.log(err)
})