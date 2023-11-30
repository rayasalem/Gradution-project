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
import BitsLesson from './components/courses/lessons/lessonStyle/LessonHearts/BitsLessonEnd';
import DoneLessonPage from './components/courses/lessons/LessonDone';
import LessonSlide from './components/courses/lessons/lessonStyle/LessonSlide';
import LessonOne from './components/courses/HTML/lessonHtml/LessonOne';
import HTMLCourse from './components/courses/HTML';
import BitsLessonEnd from './components/courses/lessons/lessonStyle/LessonHearts/BitsLessonEnd';
import BitsLessonStart from './components/courses/lessons/lessonStyle/LessonHearts/BitsLessonStart';

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
          {/* <Route path='/test' element={<ReactionComponent/>} /> */}
          {/* <Route path='/test' element={<DoneLessonPage/>} /> */}
          {/* <Route path='/test' element={<LessonOne/>} /> */}
          <Route path='/test' element={<BitsLessonStart/>} />

          <Route path='/learn/html/:courseId' element={<HTMLCourse/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
