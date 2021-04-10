import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { RiBuilding2Fill } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <RiBuilding2Fill className='navbar-icon' />
              BLOCK
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-links'>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-links'>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-links'>
                  Contacts
                </Link>
              </li>
              <li className='nav-btn'>

                <Link className='btn-link'>
                  <Button buttonStyle='btn--outline'>SIGN UP</Button>
                </Link>

              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
