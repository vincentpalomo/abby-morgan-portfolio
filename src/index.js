import React from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from './components';

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab="home" />);
