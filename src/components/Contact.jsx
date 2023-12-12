import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';

const Contact = () => {
  return (
    <>
      {/* web view */}

      <div className='hidden sm:block'>
        <div className='flex flex-col bg-forest-green h-screen w-[1440px]'>
          <Navbar />

          <div className='h-[450px] w-full flex justify-center'>
            <img className='h-[422px]' src={profileImg} alt='abby morgan' />
          </div>

          <h1 className='font-playfair text-off-white text-9xl tracking-tight text-center'>under construction</h1>
        </div>
      </div>
    </>
  );
};

export default Contact;
