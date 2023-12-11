import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';

const About = () => {
  return (
    <>
      <div className='hidden sm:block'>
        <div className='flex justify-center bg-forest-green'>
          <div className='bg-forest-green w-[1440px] h-screen'>
            <div className='flex justify-center'>
              <Navbar />
            </div>

            <div className='flex justify-center items-center gap-20'>
              <div className=''>
                <div className='font-playfair italic text-[128px] text-off-white tracking-tighter'>hello</div>
                <div className='font-roboto text-[20px] text-off-white tracking-tighter leading-7 w-[480px] h-[300px]'>
                  I'm a software engineer driven by a passion for innovation and problem-solving. With a growth mindset as my compass, I thrive on
                  challenges, viewing each one as an opportunity to expand my skills and knowledge. Adaptable and always eager to learn, I navigate
                  the dynamic landscape of technology with enthusiasm. My commitment to continuous improvement not only fuels my personal development
                  but also contributes to creating robust, forward-thinking solutions. Let's code and grow together!
                </div>
              </div>
              <div className=''>
                <img className='h-[550px]' src={profileImg} alt='abby morgan' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
