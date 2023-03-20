import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BroserRouter } from 'react-router-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BroserRouter>
      <App />
    </BroserRouter>
  </StrictMode>
);
