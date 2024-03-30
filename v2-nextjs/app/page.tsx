/* eslint-disable react/no-unescaped-entities */
'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cst = new Date(time);
  cst.setHours(cst.getHours());

  const scrollToHome = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#home' } });
  };
  const scrollToAbout = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#about' } });
  };
  const scrollToProjects = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#projects' } });
  };
  const scrollToContact = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#contact' } });
  };

  return (
    <>
      {/* hero */}
      <div
        className="flex min-h-screen flex-col items-center justify-between px-24 bg-offwhite text-offblack"
        id="home"
      >
        <div className="fixed sm:w-full w-[44vh] sm:px-24">
          <nav className="flex flex-row justify-between items-center font-lemurmure w-full text-3xl h-[5vh]">
            <div className="cursor-pointer" onClick={scrollToHome}>
              abby morgan
            </div>
            <ul className="flex gap-5">
              <li className="cursor-pointer" onClick={scrollToAbout}>
                about
              </li>
              <li className="cursor-pointer" onClick={scrollToProjects}>
                projects
              </li>
              <li className="cursor-pointer" onClick={scrollToContact}>
                contact
              </li>
            </ul>
          </nav>
        </div>
        <div className="h-[50vh] flex items-center">
          <div className="2xl:text-[45vh] sm:text-[40vh] text-[23vh] font-lemurmure sm:leading-3 leading-[19vh] sm:mb-16">
            abby morgan
          </div>
        </div>
        <div className="bg-offblack h-[50vh] sm:w-full w-[95vw] rounded-t-[20px] text-offwhite text-xl flex flex-col justify-end pl-5 pb-5">
          <div className="font-roboto">software engineer</div>
          <div className="font-roboto">ui/ux designer</div>
        </div>
      </div>

      {/* about section */}
      <div
        className="flex min-h-screen flex-col items-start justify-start sm:pt-10 sm:px-24 pl-2 bg-offwhite text-offblack"
        id="about"
      >
        <div className="font-lemurmure sm:text-[400px] text-[18vh] leading-[18vh] mt-24 xl:mt-40">about</div>
        <p className="font-roboto sm:text-xl sm:tracking-widest tracking-[3px] sm:w-[75%] w-[90vw] sm:mt-48 mt-10 text-offgrey">
          I'm a software engineer driven by a passion for innovation and problem-solving. With a growth mindset as my
          compass, I thrive on challenges, viewing each one as an opportunity to expand my skills and knowledge.
          Adaptable and always eager to learn, I navigate the dynamic landscape of technology with enthusiasm. My
          commitment to continuous improvement not only fuels my personal development but also contributes to creating
          robust, forward-thinking solutions. Let's code and grow together!
        </p>
      </div>

      {/* project section */}
      <div
        className="flex min-h-screen flex-col items-start justify-start sm:p-24 pt-24 pl-2 bg-offwhite text-offgrey font-lemurmure sm:text-[15vh] text-[6vh] leading-3"
        id="projects"
      >
        <div className="flex items-center border-t-2 border-b-2 border-offblack h-[20vh] sm:w-full w-[95vw] sm:pl-20 pl-5 pb-5 hover:bg-offblack hover:text-offwhite">
          fullstack developer
        </div>
        <div className="flex items-center border-b-2 border-offblack h-[20vh] sm:w-full w-[95vw] sm:pl-20 pl-5 pb-5 hover:bg-offblack hover:text-offwhite">
          software engineer
        </div>
        <div className="flex items-center border-b-2 border-offblack h-[20vh] sm:w-full w-[95vw] sm:pl-20 pl-5 pb-5 hover:bg-offblack hover:text-offwhite">
          front-end developer
        </div>
        <div className="flex items-center border-b-2 border-offblack h-[20vh] sm:w-full w-[95vw] sm:pl-20 pl-5 pb-5 hover:bg-offblack hover:text-offwhite">
          personal project
        </div>
      </div>

      {/* contact section */}
      <div
        className="flex min-h-screen flex-col items-start justify-end sm:px-24 px-2 bg-offwhite text-offblack"
        id="contact"
      >
        <div className="h-[55vh] w-full flex flex-col justify-end items-start pb-5 font-roboto text-sm">
          <div className="text-sm uppercase">
            <div>baton rouge, la → {cst.toLocaleTimeString()}</div>
            <div className="flex items-center gap-1">
              currently: <span className="text-[8px] text-center">🟢</span> open to work
            </div>
          </div>
          <ul className="flex justify-between items-end w-full h-[10vh]">
            <li className="hover:bg-offblack hover:text-offwhite cursor-pointer">[linkedin]</li>
            <li className="hover:bg-offblack hover:text-offwhite cursor-pointer">[github]</li>
            <li className="hover:bg-offblack hover:text-offwhite cursor-pointer">[phone]</li>
            <li className="hover:bg-offblack hover:text-offwhite cursor-pointer">[email]</li>
          </ul>
        </div>
        <div className="h-[45vh] bg-offblack w-full rounded-t-[20px] font-lemurmure leading-3 sm:text-[40vh] text-[12vh] text-offwhite flex justify-center items-center overflow-hidden">
          <div>lets connect</div>
        </div>
      </div>
    </>
  );
}
