import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { AuthProvider } from './components/AuthContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <AuthProvider>
    <App />
    </AuthProvider>
    </RecoilRoot>
  </React.StrictMode>
);


