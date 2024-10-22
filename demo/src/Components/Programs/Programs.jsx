import React from 'react'
import './Programs.css'
import program_1 from '../../assets/programs_1.jpg'
import program_2 from '../../assets/programs_2.jpg'
import program_3 from '../../assets/programs_3.jpg'
import program_icon_1 from '../../assets/program_icon_1.webp'
import program_icon_2 from '../../assets/program_icon_2.webp'
import program_icon_3 from '../../assets/program_icon_3.webp'

const Programs = () => {
  return (
    <div className='container-fluid'>
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
            <p>Tu tarjeta de crédito te ofrece más</p>
        </div>    
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className='caption'>
          <img src={program_icon_2} alt="" />
            <p>Financia lo que sueñas,quieres y necesitas</p>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="" />
        <div className='caption'>
          <img src={program_icon_3} alt="" />
            <p>Tu seguridad es la de todos, con nuestros seguros</p>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Programs
