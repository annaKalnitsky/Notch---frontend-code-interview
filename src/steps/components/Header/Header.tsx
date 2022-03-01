import React from 'react';
import Logo from '../../../assets/logo.svg';
import './Header.scss';

const Header = () => {
  return (   
    <div className='header-logo'>      
        <img src={Logo} alt='Logo'/>
    </div>
  )
}

export default Header;