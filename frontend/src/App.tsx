import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Loading from './components/loading/Loading';
import Navbar from './components/homePage/navbarSection';
import SignupSection from './components/homePage/signUp';
import VerifyEmailPage from './components/homePage/signUp/VerifyEmailPage';
import SigninSection from './components/signIn';
import ForgotPasswordPage from './components/signIn/forgetPassword';
import ResetPasswordPage from './components/signIn/resetPassword';
import { AuthProvider } from './components/AuthContext';
import { QuestionAnswer } from '@mui/icons-material';
import ReactionComponent from './components/courses/lessons/lessonStyle/QuestionSlide/ReactionComponent';
import BitsLesson from './components/courses/lessons/lessonStyle/LessonHearts/BitsLesson';

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false); 
  const questionData = [
    {
      question: (
        <>
          Headings in HTML come in different levels. <code>&lt;h1&gt;</code> defines the most important heading.
          <br />
          Code a level 1 heading: <code>{'<h1>'}</code> _____ <code>{'</h1>'}</code>
        </>
      ),
      answers: ['Heading 1', 'Heading 2', 'Heading 3'],
    },
    
  ];
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
          {/* <Route path='/test' element={<ReactionComponent/>} /> */}
          <Route path='/test' element={<BitsLesson/>} />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
