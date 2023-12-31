import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { About, Contact, Home, Projects } from './components';
import './index.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab='home' />);
