import React from 'react'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonOneInCSS from '../components/courses/CSS/lessonCss/LessonOne';
import LessonTwoInCSS from '../components/courses/CSS/lessonCss/LessonTwo';
import LessonThreeInCSS from '../components/courses/CSS/lessonCss/LessonThree';
import QuizOneInCss from '../components/courses/CSS/quizCss/QuizOne';
import LessonFourInCSS from '../components/courses/CSS/lessonCss/LessoFour';
import LessonFiveInCSS from '../components/courses/CSS/lessonCss/LessonFive';
import LessonSixInCSS from '../components/courses/CSS/lessonCss/LessonSix';
import QuizTwoInCss from '../components/courses/CSS/quizCss/QuizTwo';
import LessonSevenInCSS from '../components/courses/CSS/lessonCss/LessonSeven';
import LessonNineInCSS from '../components/courses/CSS/lessonCss/LessonNine';
import LessonEightInCSS from '../components/courses/CSS/lessonCss/LessonEight';
import LessonTenInCSS from '../components/courses/CSS/lessonCss/LessonTen';
import QuizThreeInCss from '../components/courses/CSS/quizCss/QuizThree';

const CSSRoutes = () => {
  return (
    <Routes>
   <Route path='lesson1' element={<LessonOneInCSS/>} />
          <Route path='lesson2' element={<LessonTwoInCSS/>} />
          <Route path='lesson3' element={<LessonThreeInCSS/>} />
          <Route path='quiz1' element={<QuizOneInCss/>} />
          <Route path='lesson4' element={<LessonFourInCSS/>} />
          <Route path='lesson5' element={<LessonFiveInCSS/>} />
          <Route path='lesson6' element={<LessonSixInCSS/>} />
          <Route path='quiz2' element={<QuizTwoInCss/>} />
          <Route path='lesson7' element={<LessonSevenInCSS/>} />
          <Route path='lesson9' element={<LessonNineInCSS/>} />
          <Route path='lesson8' element={<LessonEightInCSS/>} />
          <Route path='lesson10' element={<LessonTenInCSS/>} />
          <Route path='quiz3' element={<QuizThreeInCss/>} />

</Routes>
  )
}

export default CSSRoutes