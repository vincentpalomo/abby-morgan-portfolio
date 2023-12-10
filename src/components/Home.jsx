import React from 'react';
import Navbar from './Navbar';
import profileImg from '../assets/profile image placeholder.png';

const home = () => {
  return (
    <div>
      <Navbar />
      <h1>abby morgan</h1>
      <img src={profileImg} alt="abby morgan" />
      <h3>software engineer</h3>
    </div>
  );
};

export default home;
