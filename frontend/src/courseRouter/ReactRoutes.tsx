import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonOneReact from '../components/courses/React/LessonReact/LessonOne';
import LessonTwoReact from '../components/courses/React/LessonReact/LessonTwo';
import LessonThreeReact from '../components/courses/React/LessonReact/LessonThree';
import QuizOneReact from '../components/courses/React/QuizReact/QuizOne';
import LessonFourReact from '../components/courses/React/LessonReact/LessonFour';
import LessonFiveReact from '../components/courses/React/LessonReact/LessonFive';
import LessonSixReact from '../components/courses/React/LessonReact/LessonSix';
import QuizTwoReact from '../components/courses/React/QuizReact/QuizTwo';
import LessonSevenReact from '../components/courses/React/LessonReact/LessonSeven';
import LessonEightReact from '../components/courses/React/LessonReact/LessonEight';
import LessonNineReact from '../components/courses/React/LessonReact/LessonNine';
import LessonTenReact from '../components/courses/React/LessonReact/LessonTen';
import QuizThreeReact from '../components/courses/React/QuizReact/QuizThree';

const ReactRoutes = () => {
  return (
    <Routes>
          <Route path='lesson1' element={<LessonOneReact/>} />
          <Route path='lesson2' element={<LessonTwoReact/>} />
          <Route path='lesson3' element={<LessonThreeReact/>} />
          <Route path='quiz1' element={<QuizOneReact/>} />
          <Route path='lesson4' element={<LessonFourReact/>} />
          <Route path='lesson5' element={<LessonFiveReact/>} />
          <Route path='lesson6' element={<LessonSixReact/>} />
          <Route path='quiz2' element={<QuizTwoReact/>} />
          <Route path='lesson7' element={<LessonSevenReact/>} />
          <Route path='lesson8' element={<LessonEightReact/>} />
          <Route path='lesson9' element={<LessonNineReact/>} />
          <Route path='lesson10' element={<LessonTenReact/>} />
          <Route path='quiz3' element={<QuizThreeReact/>} />
</Routes>
  )
}

export default ReactRoutes