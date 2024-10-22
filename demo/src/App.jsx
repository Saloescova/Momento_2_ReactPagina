import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

const App =() => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
       <Navbar/>  
       <Hero/>
       <div className="container">
        <Title subTitle='Necesidades' title='Te Ofrecemos'/>
       <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subTitle='Acerca de' title='Financia lo que sueñas,quieres y necesitas'/>
       <Campus/>
       <Title subTitle='Testimonios' title='Seguros y Ahorro Decisiones que nos cambian la vida'/>
       <Testimonials/>
       <Title subTitle='Contactenos' title='Ponte en contacto con nosotros'/>
       <Contact/>
       <Footer/>
    </div>
    <VideoPlayer playState={playState}setPlayState={setPlayState}/>
    </div>
  )
}

export default App
