import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';
import logo from '../assets/logo centered.png';

const home = () => {
  return (
    <div className="bg-forest-green">
      <div className="flex justify-center items-center h-48">
        <img className="h-20" src={logo} alt="logo" />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>

      <h1 className="font-playfair">abby morgan</h1>
      <img src={profileImg} alt="abby morgan" />
      <h3 className="font-playfair">software engineer</h3>
    </div>
  );
};

export default home;
