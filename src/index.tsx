import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import MenuBar from './menu';
import { BrowserRouter as Router } from 'react-router-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MenuBar />
  </StrictMode>
);
