import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div>home</div>
        <div>about</div>
        <div>projects</div>
        <div>contact</div>
      </div>
    </>
  );
};

export default Navbar;
