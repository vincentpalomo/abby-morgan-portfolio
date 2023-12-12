import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';

const Contact = () => {
  return (
    <>
      {/* web view */}

      <div className='hidden sm:block'>
        <div className='flex flex-col bg-forest-green h-screen w-[1440px]'>
          <Navbar />

          {/* <div className='h-[450px] w-full flex justify-center'>
            <img className='h-[422px]' src={profileImg} alt='abby morgan' />
          </div> */}

          <div className='h-1/2 flex flex-col items-center justify-center'>
            <h1 className='font-playfair text-off-white text-9xl tracking-tight text-center'>let's talk</h1>
            <div className='flex justify-evenly items-center h-44 w-1/3'>
              <img className='h-[75px]' src={linkedin} alt='LinkedIn link' />
              <img className='h-[75px]' src={email} alt='email link' />
              <img className='h-[75px]' src={github} alt='github link' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
