import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Loading from './components/loading/Loading';
import Navbar from './components/homePage/navbarSection/Navbar';
import SignupSection from './components/homePage/signUp';
import VerifyEmailPage from './components/homePage/signUp/VerifyEmailPage';

 

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false); 
   return (
    <Router>
      <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated}/>
    <Routes>
      <Route path="/" element={<HomePage/>} />  
      <Route path="SignUp" element={<SignupSection setAuthenticated={setAuthenticated} />} /> 
      <Route path="/VerifyEmailPage" element={<VerifyEmailPage/>} /> 
      <Route path="*" element={<PageNotFound />} /> 

    </Routes>
  </Router>
  );
}

export default App;
