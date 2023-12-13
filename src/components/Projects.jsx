import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';
import logo from '../assets/logo centered.png';
import hamburger from '../assets/hamburger.png';

const Projects = () => {
  return (
    <>
      {/* web view */}
      <div className="hidden sm:block">
        <div className="flex justify-center bg-forest-green">
          <div className="bg-forest-green w-[1440px] h-screen">
            <div className="flex justify-center">
              <Navbar />
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <div className="h-[450px] w-full flex justify-center">
                <img className="h-[422px]" src={profileImg} alt="abby morgan" />
              </div>
              <h1 className="font-playfair text-off-white text-9xl tracking-tight">under construction</h1>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="flex justify-center bg-forest-green sm:hidden">
        <div className="bg-forest-green w-full h-screen relative">
          <div className="h-48 flex mx-10 justify-between items-center">
            <img className=" h-16" src={logo} alt="logo" />
            <img className=" h-7" src={hamburger} alt="mobile menu" />
          </div>

          <h1 className="font-playfair text-center text-off-white text-[96px]">come back soon</h1>
        </div>
      </div>
    </>
  );
};

export default Projects;
