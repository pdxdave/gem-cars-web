import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MobileProvider } from './context/nav_context';
import { PartsProvider } from './context/parts_context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PartsProvider>
      <MobileProvider>
        <App />
      </MobileProvider>
     </PartsProvider>
  </React.StrictMode>
);


