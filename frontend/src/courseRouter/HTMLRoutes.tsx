import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonOne from '../components/courses/HTML/lessonHtml/LessonOne';
import LessonTwo from '../components/courses/HTML/lessonHtml/LessonTwo';
import LessonThree from '../components/courses/HTML/lessonHtml/LessonThree';
import QuizOne from '../components/courses/HTML/quizHtml/QuizOne';
import LessonFour from '../components/courses/HTML/lessonHtml/LessonFour';
import LessonFive from '../components/courses/HTML/lessonHtml/LessonFive';
import LessonSix from '../components/courses/HTML/lessonHtml/LessonSix';
import QuizTwo from '../components/courses/HTML/quizHtml/QuizTwo';
import LessonSeven from '../components/courses/HTML/lessonHtml/LessonSeven';
import LessonEight from '../components/courses/HTML/lessonHtml/LessonEight';
import LessonNine from '../components/courses/HTML/lessonHtml/LessonNine';
import LessonTen from '../components/courses/HTML/lessonHtml/LessonTen';
import QuizThree from '../components/courses/HTML/quizHtml/QuizThree';


const HTMLRoutes = () => {
  return (
   
    <Routes>
          <Route path="lesson1" element={<LessonOne/>}/>
          <Route path="lesson2"element={<LessonTwo/>}/>
          <Route path="lesson3"element={<LessonThree/>}/>
          <Route path="Quiz1" element={<QuizOne />} />
          <Route path="lesson4" element={<LessonFour />} />
          <Route path="lesson5" element={<LessonFive />} />
          <Route path="lesson6" element={<LessonSix />} />
          <Route path="Quiz2" element={<QuizTwo />} />
          <Route path="lesson7" element={<LessonSeven />} />
          <Route path="lesson8" element={<LessonEight />} />
          <Route path="lesson9" element={<LessonNine />} />
          <Route path="lesson10" element={<LessonTen />} />
          <Route path="Quiz3" element={<QuizThree />} />
    
  </Routes>
        
  
  )
}

export default HTMLRoutes