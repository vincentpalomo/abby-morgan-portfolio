import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';
import logo from '../assets/logo centered.png';
import hamburger from '../assets/hamburger.png';

const home = () => {
  return (
    <>
      <div className='hidden sm:block'>
        <div className='flex justify-center bg-forest-green'>
          <div className='bg-forest-green w-[1440px] h-screen relative'>
            <div className='flex justify-center items-center h-40'>
              <img className='h-16' src={logo} alt='logo' />
            </div>
            <div className='flex justify-center'>
              <Navbar />
            </div>

            <div className='h-[450px] w-full flex justify-center'>
              <img className='h-[422px]' src={profileImg} alt='abby morgan' />
            </div>

            <h1 className='absolute font-playfair text-abby-pink text-[128px] bottom-[100px] left-10'>abby</h1>
            <h1 className='absolute font-playfair text-abby-pink text-[128px] bottom-0 left-10'>morgan</h1>

            <h3 className='absolute font-playfair text-off-white text-[64px] bottom-5 right-10'>software engineer</h3>
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-forest-green sm:hidden'>
        <div className='bg-forest-green w-[1440px] h-screen relative'>
          <div className='h-48 flex mx-10 justify-between items-center'>
            <img className=' h-16' src={logo} alt='logo' />
            <img className=' h-7' src={hamburger} alt='mobile menu' />
          </div>
          {/* <div className="flex justify-center">
           <Navbar />
         </div> */}

          <h1 className='font-playfair text-center text-abby-pink text-6xl'>abby morgan</h1>

          <div className='w-full flex justify-center'>
            <img className='h-[328px]' src={profileImg} alt='abby morgan' />
          </div>

          <h3 className='mt-10 font-playfair text-off-white text-center text-[40px]'>software engineer</h3>
        </div>
      </div>
    </>
  );
};

export default home;
