import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Loading from './components/loading/Loading';
import Navbar from './components/homePage/navbarSection/Navbar';
import SignupSection from './components/homePage/signUp';
import VerifyEmailPage from './components/homePage/signUp/VerifyEmailPage';
import SigninSection from './components/signIn';
import ForgotPasswordPage from './components/signIn/forgetPassword';
import ResetPasswordPage from './components/signIn/resetPassword';
import { AuthProvider } from './components/AuthContext';

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false); 

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/signin" element={<SigninSection />} /> 
          <Route path="SignUp" element={<SignupSection />} /> 
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/VerifyEmailPage" element={<VerifyEmailPage />} /> 
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
