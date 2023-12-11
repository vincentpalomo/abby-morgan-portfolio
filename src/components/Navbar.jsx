import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='font-playfair text-[34px] w-[500px] text-abby-pink flex justify-between '>
        <Link to='/'>home</Link>
        <Link to='/'>about</Link>
        <Link to='/'>projects</Link>
        <Link to='/'>contact</Link>
      </div>
    </>
  );
};

export default Navbar;
