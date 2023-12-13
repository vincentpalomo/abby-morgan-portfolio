import React from 'react';
import Navbar from './Navbar';
import github from '../assets/github.png';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      {/* web view */}

      <div className="hidden sm:block">
        <div className="bg-forest-green flex justify-center">
          <div className="flex flex-col bg-forest-green h-screen w-[1440px]">
            <Navbar />

            <div className="h-1/2 flex flex-col items-center justify-center">
              <h1 className="font-playfair text-off-white text-9xl tracking-tight text-center">let's talk</h1>
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
    </>
  );
};

export default Contact;
