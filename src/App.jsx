import { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'

import './index.css'
import Experience from './component/Experirnce'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Education from './component/Education'


function App() {
  
  useEffect(()=>{
   Aos.init();
  },[])
  return (
   <>
   <Navbar/>
   <div className="container" style={{overflow:"hidden"}}>
   <Home/>
   <Education/>
   <Experience/>
   <Skills/>
   <Projects/>
   <Contact/>

   </div>
   
   

   </>
  )
}

export default App
