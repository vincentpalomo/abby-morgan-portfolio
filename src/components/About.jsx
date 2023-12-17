import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';
import logo from '../assets/logo centered.png';
import hamburger from '../assets/hamburger.png';

const About = () => {
  return (
    <>
      {/* web view */}

      <div className='hidden sm:block'>
        <div className='flex justify-center bg-forest-green'>
          <div className='bg-forest-green w-[1440px] h-screen'>
            <div className='flex justify-center'>
              <Navbar />
            </div>

            <div className='flex justify-center items-center gap-20'>
              <div className=''>
                <div className='font-playfair italic text-[128px] text-off-white tracking-tighter'>hello</div>
                <div className='font-roboto text-[20px] text-off-white leading-7 w-[480px] h-[300px]'>
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

      {/* mobile view */}

      <div className='sm:hidden bg-forest-green flex justify-center'>
        <div className='bg-forest-green h-screen w-full'>
          {/* <div className="h-48 flex mx-10 justify-between items-center">
            <img className=" h-16" src={logo} alt="logo" />
            <img className=" h-7" src={hamburger} alt="mobile menu" />
          </div> */}
          <Navbar />

          <div className='flex flex-col justify-center items-center h-[650px] w-full relative'>
            <div className='absolute top-10 right-0'>
              <img className='h-[180px] w-[180px]' src={profileImg} alt='abby morgan' />
            </div>
            <div className='absolute font-playfair italic text-off-white tracking-tighter text-[98px] left-7 top-24'>hello</div>
            <div className='font-roboto text-off-white text-[14px] w-[340px] tracking-tighter leading-2'>
              I'm a software engineer driven by a passion for innovation and problem-solving. With a growth mindset as my compass, I thrive on
              challenges, viewing each one as an opportunity to expand my skills and knowledge. Adaptable and always eager to learn, I navigate the
              dynamic landscape of technology with enthusiasm. My commitment to continuous improvement not only fuels my personal development but also
              contributes to creating robust, forward-thinking solutions. Let's code and grow together!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
