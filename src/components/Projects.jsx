import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';

const Projects = () => {
  return (
    <>
      <div className='hidden sm:block'>
        <div className='flex justify-center bg-forest-green'>
          <div className='bg-forest-green w-[1440px] h-screen'>
            <div className='flex justify-center'>
              <Navbar />
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
              <img className='h-[450px] w-[450px] ' src={profileImg} alt='abby morgan' />
              <h1 className='font-playfair text-off-white text-9xl tracking-tight'>under construction</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
