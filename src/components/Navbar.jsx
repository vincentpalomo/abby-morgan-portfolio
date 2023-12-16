import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo centered.png';
import hamburger from '../assets/hamburger.png';

const Navbar = () => {
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
          <img className='h-7 hover:cursor-pointer' src={hamburger} alt='mobile menu' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
