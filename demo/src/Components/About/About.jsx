import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.webp'
import play_icon from '../../assets/play_icon.webp'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play_icon' onClick={()=>
              {setPlayState(true)}}/>
        </div>
        <div className="about-rigth">
          <h3>Establece Metas de ahorros</h3>
          <h2>Reduce Gastos Innecesarios</h2>
          <p>
          La importancia de ahorrar en la economía es pensar en la necesidad del mañana porque
          el que ahorra tendrá con que cubrir sus necesidades cuando se presentan calamidades
          en el diario vivir que no somos indiferentes a ello, ahorrando podemos disfrutar la vida
          a nuestro modo ya que con lo que ahorres puedes comprar o hacer lo que te guste. 
          </p>
          <p>
          Seria una común comodidad que te darías, además la importancia de ahorrar es para que
            hagas lo que te plazca con tu dinero, para que disfrutes cada segundo de tu vida sin
            ningún problema económico y social,
          </p>
          <p>
          Ahorrar definitivamente es la mejor solución, nos
          ayuda a salir adelante estableciendo un cronograma de ideas y de cosas importantes que
          queramos hacer, solo es cuestión de adquirir un gran conocimiento y saber que esto es
          una gran inversión que solo busca nuestra felicidad y nuestra excelente calidad de vida. 
          </p>
        </div>
    </div>
  )
}

export default About
