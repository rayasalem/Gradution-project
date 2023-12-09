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
import QuizOne from './components/courses/HTML/quizHtml/QuizOne';
import LessonFour from './components/courses/HTML/lessonHtml/LessonFour';
import LessonFive from './components/courses/HTML/lessonHtml/LessonFive';
import LessonSix from './components/courses/HTML/lessonHtml/LessonSix';
import QuizTwo from './components/courses/HTML/quizHtml/QuizTwo';
import LessonNine from './components/courses/HTML/lessonHtml/LessonNine';
import LessonTen from './components/courses/HTML/lessonHtml/LessonTen';
import QuizThree from './components/courses/HTML/quizHtml/QuizThree';
import LessonTwo from './components/courses/HTML/lessonHtml/LessonTwo';
import LessonThree from './components/courses/HTML/lessonHtml/LessonThree';
import LessonEight from './components/courses/HTML/lessonHtml/LessonEight';
import LessonSeven from './components/courses/HTML/lessonHtml/LessonSeven';

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
          <Route path='/DoneLesson' element={<DoneLessonPage/>} />
          <Route path='/test' element={<QuizOne/>} />

          <Route path='/learn/html/:courseId' element={<HTMLCourse/>} />
          <Route path="/learn/html/:courseId/lesson1"element={<LessonOne/>}/>
          <Route path="/learn/html/:courseId/lesson2"element={<LessonTwo/>}/>
          <Route path="/learn/html/:courseId/lesson3"element={<LessonThree/>}/>
          <Route path="/learn/html/:courseId/Quiz1" element={<QuizOne />} />
          <Route path="/learn/html/:courseId/lesson4" element={<LessonFour />} />
          <Route path="/learn/html/:courseId/lesson5" element={<LessonFive />} />
          <Route path="/learn/html/:courseId/lesson6" element={<LessonSix />} />
          <Route path="/learn/html/:courseId/Quiz2" element={<QuizTwo />} />
          <Route path="/learn/html/:courseId/lesson7" element={<LessonSeven />} />
          <Route path="/learn/html/:courseId/lesson8" element={<LessonEight />} />
          <Route path="/learn/html/:courseId/lesson9" element={<LessonNine />} />
          <Route path="/learn/html/:courseId/lesson10" element={<LessonTen />} />
          <Route path="/learn/html/:courseId/Quiz3" element={<QuizThree />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
