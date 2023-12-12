import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo centered.png';

const Navbar = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center h-40'>
          <Link to='/'>
            <img className='h-16' src={logo} alt='logo' />
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
    </>
  );
};

export default Navbar;
