import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Resume.pdf'
import hero from '../data/hero.json'
import Typed from 'typed.js'


const Home = () => {
  const TypedRef = useRef(null)
  useEffect(()=>{
   const options ={
    strings:["Welcome To My Portfolio 🤝","My Name is KOMAL JHA " , "I'M A Software developer"],
    typeSpeed:70,
    backSpeed:50,
    loop:true,
   }

   const typed = new Typed(TypedRef.current,options)
   return ()=>{
    typed.destroy()
   }

  },[])
  return (
    <>
    <div className="container home" id='home'>
       <div className="left"  >
        <h1 ref={TypedRef}>
         
          </h1>

        <a href={pdf} download='Resume.pdf' className="btn btn-outline-warning my-3">Download Resume</a>
       </div>
       <div className="right" >

        <div className="img">
          <img src={`/assets/${hero.imgSrc}`} alt="" />
        </div>
        
       </div>
    </div>
    </>
  )
}

export default Home