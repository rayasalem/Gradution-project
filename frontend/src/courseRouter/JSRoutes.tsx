import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonOnejs from '../components/courses/JavaScript/JSLesson/LessonOne';
import LessonTwojs from '../components/courses/JavaScript/JSLesson/LessonTwo';
import LessonThreejs from '../components/courses/JavaScript/JSLesson/LessonThree';
import QuizOnejs from '../components/courses/JavaScript/QuizJS/QuizOne';
import LessonFourjs from '../components/courses/JavaScript/JSLesson/LessonFour';
import LessonFivejs from '../components/courses/JavaScript/JSLesson/LessonFive';
import LessonSixjs from '../components/courses/JavaScript/JSLesson/LessonSix';
import QuizTwojs from '../components/courses/JavaScript/QuizJS/QuizTwo';
import LessonSevenjs from '../components/courses/JavaScript/JSLesson/LessonSeven';
import LessonEightjs from '../components/courses/JavaScript/JSLesson/LessonEight';
import LessonNinejs from '../components/courses/JavaScript/JSLesson/LessonNine';
import LessonTenjs from '../components/courses/JavaScript/JSLesson/LessonTen';
import QuizThreejs from '../components/courses/JavaScript/QuizJS/QuizThree';



const JSRoutes = () => {
  return (
    <Routes>
          <Route path='lesson1' element={<LessonOnejs/>} />
          <Route path='lesson2' element={<LessonTwojs/>} />
          <Route path='lesson3' element={<LessonThreejs/>} />
          <Route path='quiz1' element={<QuizOnejs/>} />
          <Route path='lesson4' element={<LessonFourjs/>} />
          <Route path='lesson5' element={<LessonFivejs/>} />
          <Route path='lesson6' element={<LessonSixjs/>} />
          <Route path='quiz2' element={<QuizTwojs/>} />
          <Route path='lesson7' element={<LessonSevenjs/>} />
          <Route path='lesson8' element={<LessonEightjs/>} />
          <Route path='lesson9' element={<LessonNinejs/>} />
          <Route path='lesson10' element={<LessonTenjs/>} />
          <Route path='quiz3' element={<QuizThreejs/>} />
</Routes>
  )
}

export default JSRoutes