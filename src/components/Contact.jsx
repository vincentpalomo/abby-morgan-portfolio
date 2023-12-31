import React from 'react';
import Navbar from './Navbar';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logo centered.png';
import hamburger from '../assets/hamburger.png';

const Contact = () => {
  return (
    <>
      {/* web view */}

      <div className="hidden sm:block">
        <div className="bg-forest-green flex justify-center">
          <div className="flex flex-col bg-forest-green h-screen w-[1440px]">
            <Navbar />

            <div className="h-2/3 flex flex-col items-center justify-center">
              <h1 className="font-playfair text-off-white text-9xl tracking-tight text-center">let’s talk</h1>
              <div className="flex justify-evenly items-center h-44 w-1/3">
                <Link to="">
                  <img className="h-[75px]" src={linkedin} alt="LinkedIn link" />
                </Link>
                <Link to="">
                  <img className="h-[75px]" src={email} alt="email link" />
                </Link>
                <Link to="">
                  <img className="h-[75px]" src={github} alt="github link" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}

      <div className="flex justify-center bg-forest-green sm:hidden">
        <div className="bg-forest-green w-full h-screen relative">
          <Navbar />

          <div className="flex flex-col justify-center h-1/2">
            <h1 className="font-playfair text-center tracking-tighter text-off-white text-[96px]">let’s talk</h1>

            <div className="flex justify-evenly items-center h-32">
              <Link to="">
                <img className="h-[75px]" src={linkedin} alt="LinkedIn link" />
              </Link>
              <Link to="">
                <img className="h-[75px]" src={email} alt="email link" />
              </Link>
              <Link to="">
                <img className="h-[75px]" src={github} alt="github link" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
