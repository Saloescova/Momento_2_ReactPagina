import React from 'react'
import './Hero.css'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
   
    <div className='hero container-fluid'>
        <div className="hero-text">
            <h1>Cuida de los pequeños gastos; un pequeño agujero, hunde un barco</h1>
            <p>Ahorrar es importante ya que es una inversión a largo plazo, y se convierte en un
                respaldo para el futuro. La técnica de ahorrar viene de millones de años atrás y tiene
                muchas ventajas para la economía de las personas, es construir nuestro propio futuro
                resolviendo uno a uno los problemas que hoy aquejan nuestra cultura y sociedad. </p>
                
                <button className='btn'>
                Explorar más <img src={FaArrowRight}alt="" />
            </button>
                    
        </div>

    </div>
  )
}

export default Hero