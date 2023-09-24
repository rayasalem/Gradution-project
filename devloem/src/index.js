import React from 'react';
import ReactDOM from 'react-dom/client';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <App />
 </BrowserRouter>
   
 
);

