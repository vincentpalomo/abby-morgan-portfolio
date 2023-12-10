import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';
import logo from '../assets/logo centered.png';

const home = () => {
  return (
    <div className="flex justify-center bg-forest-green">
      <div className="bg-forest-green w-[1440px] h-screen relative">
        <div className="flex justify-center items-center h-48">
          <img className="h-20" src={logo} alt="logo" />
        </div>
        <div className="flex justify-center">
          <Navbar />
        </div>

        <div className="h-[450px] w-full flex justify-center">
          <img className="h-[422px]" src={profileImg} alt="abby morgan" />
        </div>

        <h1 className="absolute font-playfair text-abby-pink text-[128px] bottom-[100px] left-10">abby</h1>
        <h1 className="absolute font-playfair text-abby-pink text-[128px] bottom-0 left-10">morgan</h1>

        <h3 className="absolute font-playfair text-off-white text-[64px] bottom-5 right-10">software engineer</h3>
      </div>
    </div>
  );
};

export default home;
