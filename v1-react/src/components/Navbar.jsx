import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo centered.png';
import openLogo from '../assets/logo centered open.png';
import hamburger from '../assets/hamburger.png';

const Navbar = () => {
  const [isOpen, toggleOpen] = useState(false);

  const toggleMenu = () => {
    toggleOpen(!isOpen);
  };

  const closeMenu = () => {
    toggleOpen(false);
  };

  return (
    <>
      {/* web view */}
      <div className='hidden sm:block '>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center h-36'>
            <Link to='/'>
              <img className='h-[55px]' src={logo} alt='logo' />
            </Link>
          </div>
          <div className='font-playfair text-[34px] w-[500px] text-abby-pink flex justify-between '>
            <Link className='hover:text-off-white' to='/'>
              home
            </Link>
            <Link className='hover:text-off-white' to='/about'>
              about
            </Link>
            <Link className='hover:text-off-white' to='/projects'>
              projects
            </Link>
            <Link className='hover:text-off-white' to='/contact'>
              contact
            </Link>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className='sm:hidden block'>
        <div className='h-48 flex mx-10 justify-between items-center'>
          <Link to='/'>
            <img className='h-16' src={logo} alt='logo' />
          </Link>

          <div className=''>
            <button className={`cursor-pointer ${isOpen}`} onClick={toggleMenu}>
              <img className='h-7' src={hamburger} alt='mobile menu' />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className='bg-abby-pink fixed top-0 z-40 h-screen w-screen'>
            <Link className='w-screen flex justify-center top-36 absolute' to='/' onClick={closeMenu}>
              <img className='h-16' src={openLogo} alt='logo' />
            </Link>

            <div className='h-screen flex flex-col justify-center items-center font-playfair text-forest-green text-[64px]'>
              <Link className='hover:text-off-white' onClick={closeMenu} to='/'>
                home
              </Link>
              <Link className='hover:text-off-white' onClick={closeMenu} to='/about'>
                about
              </Link>
              <Link className='hover:text-off-white' onClick={closeMenu} to='/projects'>
                projects
              </Link>
              <Link className='hover:text-off-white' onClick={closeMenu} to='/contact'>
                contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
