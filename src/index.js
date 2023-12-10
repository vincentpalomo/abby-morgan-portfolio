import React from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './components';
import './index.css';

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Home />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab="home" />);
