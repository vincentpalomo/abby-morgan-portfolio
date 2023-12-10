import React from 'react';
import { createRoot } from 'react-dom/client';

const app = () => {
  return <div>Hello World</div>;
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App tab="home" />);
