import { useState,useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import Alumni from './pages/Alumni.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Manage from './components/Manage.jsx'
import SiteDataTeam from './pages/SiteData.team.jsx'
import SiteDataAlumni from './pages/SiteData.alumni.jsx'
import SiteDataBlog from './pages/SiteData.blog.jsx'


function App() {
    // useEffect(()=>{
    //   async function fetchData(){
    //     const team_response = await fetch(import.meta.env.VITE_API_URI+"team")
    //     const alumni_response = await fetch(import.meta.env.VITE_API_URI+"alumni")
    //     const blog_response = await fetch(import.meta.env.VITE_API_URI+"blog")
    //     var team_data = await team_response.json()
    //     var blog_data = await blog_response.json()
    //     var alumni_data = await alumni_response.json()
    //     .finally(()=>{
    //         const loader = document.getElementById("preloader");
    //         loader.classList.add("hidden");
    //     })
    //     .catch(()=>{
    //         console.log("Error in fetching data!")
    //     })


    //     console.log(team_data);
    // }
    // fetchData();
    // },[]);


  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<><Header selected = "Home"/> <Home/><Footer/></>}/>  
        <Route path = "/about" element = {<><Header selected = "About"/> <About/><Footer/></>}/> 
        <Route path = "/blog" element = {<><Header selected = "Blog"/> <Blog/><Footer/></>}/> 
        <Route path = "/team" element = {<><Header selected = "Team"/> <Team/><Footer/></>}/> 
        <Route path = "/alumni" element = {<><Header selected = "Alumni"/> <Alumni/><Footer/></>}/> 
        <Route path = "/contact" element = {<><Header selected = "Contact"/> <Contact/><Footer/></>}/> 
        <Route path = "/api/manage/team" element = {<><Header selected = "None"/> <Manage selected = "team"/><SiteDataTeam/></>}/> 
        <Route path = "/api/manage/alumni" element = {<><Header selected = "None"/><Manage selected = "alumni"/> <SiteDataAlumni/></>}/> 
        <Route path = "/api/manage/blog" element = {<><Header selected = "None"/><Manage selected = "blog"/> <SiteDataBlog/></>}/> 
      
      </Routes>
    
    
    
    </BrowserRouter>
      
       
    </>
  )
}

export default App
