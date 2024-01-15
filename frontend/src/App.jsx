import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import Alumni from './pages/Alumni.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'


function App() {
  const [count, setCount] = useState(0)

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
      </Routes>
    
    
    
    </BrowserRouter>
      
       
    </>
  )
}

export default App
