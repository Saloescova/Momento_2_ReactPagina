import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo_4.webp';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container-fluid ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo de caja de Ahorros" className="logo-pequeno" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Inicio</Link></li>
        <li><Link to='Necesidades' smooth={true} offset={-260} duration={500}>Necesidades</Link></li>
        <li><Link to='Acerca de' smooth={true} offset={-150} duration={500}>Acerca de</Link></li>
        <li><Link to='Testimonios' smooth={true} offset={-260} duration={500}>Testimonios</Link></li>
        <li><Link to='Contactenos' smooth={true} offset={-260} duration={500} className='btn'>Contáctenos</Link></li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;

