import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Loading from './components/loading/Loading';
import Navbar from './components/homePage/navbarSection/Navbar';

 


function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />       
    </Routes>
  </Router>
  );
}

export default App;
