import React, { useRef } from 'react'
import './Testimonials.css';
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import user_3 from '../../assets/user_3.png'
import user_4 from '../../assets/user_4.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{

  if(tx > -50){
    tx -=25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
  if(tx < 0){
    tx -=25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='container-fluid'>
    <div className='testimonials'>
      <img src={next_icon} alt="Next" className='next-btn' onClick=
      {slideForward}/>
      <img src={back_icon} alt="Back" className='back-btn' onClick=
      {slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'></div>
            <div className="user-info">
              <img src={user_1} alt="Carolina Pérez" />
              <div>
                <h3>Carolina Pérez 1</h3>
                <span>Innovatec Labs</span>
              </div>
            </div>
            <p>
              A lo largo de los años, Carolina ha adoptado una estrategia disciplinada de ahorro,
              donde separa un porcentaje fijo de sus ingresos mensuales para sus ahorros. 
              En cuanto a depósitos, ha utilizado los depósitos a plazo como una forma de asegurar
              rendimientos más altos en comparación con las cuentas de ahorro regulares.
            </p>
          </li>

          <li>
            <div className='slide'></div>
            <div className="user-info">
              <img src={user_2} alt="Fernando Martínez" />
              <div>
                <h3>Fernando Martínez 2</h3>
                <span>Global Ventures</span>
              </div>
            </div>
            <p>
              Opta por separar una parte significativa de los ingresos de su empresa 
              en cuentas de ahorro con intereses altos,
              y complementa esto con depósitos a largo plazo.
              Esta combinación le ha permitido acumular capital de manera constante, 
              sin poner en riesgo su liquidez. Además, 
              invierte en proyectos estratégicos que le generan rendimientos adicionales.
            </p>
          </li>

          <li>
            <div className='slide'></div>
            <div className="user-info">
              <img src={user_3} alt="Carolina Pérez" />
              <div>
                <h3>Laura Ortiz 3</h3>
                <span>BlueSky Innovations</span>
              </div>
            </div>
            <p>
             Ha implementado una estrategia financiera efectiva en BlueSky Innovations.
             Al destinar un porcentaje de las ganancias mensuales a una cuenta de ahorro con intereses altos,
              ha logrado acumular capital de manera constante.
              Además, complementa esta estrategia con depósitos a plazo,
              lo que le permite asegurar rendimientos estables y seguros.
            </p>
          </li>
          <li>
            <div className='slide'></div>
            <div className="user-info">
              <img src={user_4} alt="Carolina Pérez" />
              <div>
                <h3>Ricardo Sánchez 4</h3>
                <span>FinTech Group</span>
              </div>
            </div>
            <p>
            Ha sido testigo de un crecimiento significativo en la capacidad de ahorro de sus clientes,
             gracias a estas estrategias. Muchos han logrado acumular un capital considerable que les ha permitido 
             realizar inversiones, adquirir bienes o enfrentar emergencias financieras.
            </p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Testimonials;


