import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LessonOneInPython from '../components/courses/Python/lessonPython/LessonOne';
import LessonTwoInPython from '../components/courses/Python/lessonPython/LessonTwo';
import LessonThreeInPython from '../components/courses/Python/lessonPython/LessonThree';
import QuizOneInPython from '../components/courses/Python/quizPython/QuizOne';
import LessonFourInPython from '../components/courses/Python/lessonPython/LessonFour';
import LessonFiveInPython from '../components/courses/Python/lessonPython/LessonFive';
import LessonSixInPython from '../components/courses/Python/lessonPython/LessonSix';
import QuizTwoInPython from '../components/courses/Python/quizPython/QuizTwo';
import LessonSevenInPython from '../components/courses/Python/lessonPython/LessonSeven';
import LessonEightInPython from '../components/courses/Python/lessonPython/LessonEight';
import LessonNineInPython from '../components/courses/Python/lessonPython/LessonNine';
import LessonTenInPython from '../components/courses/Python/lessonPython/LessonTen';
import QuizThreeInPython from '../components/courses/Python/quizPython/QuizThree';



const PythonRoutes = () => {
  return (
    <Routes>
        <Route path='lesson1' element={<LessonOneInPython/>} />
          <Route path='lesson2' element={<LessonTwoInPython/>} />
          <Route path='lesson3' element={<LessonThreeInPython/>} />
          <Route path='quiz1' element={<QuizOneInPython/>} />
          <Route path='lesson4' element={<LessonFourInPython/>} />
          <Route path='lesson5' element={<LessonFiveInPython/>} />
          <Route path='lesson6' element={<LessonSixInPython/>} />
          <Route path='quiz2' element={<QuizTwoInPython/>} />
          <Route path='lesson7' element={<LessonSevenInPython/>} />
          <Route path='lesson8' element={<LessonEightInPython/>} />
          <Route path='lesson9' element={<LessonNineInPython/>} />
          <Route path='lesson10' element={<LessonTenInPython/>} />
          <Route path='quiz3' element={<QuizThreeInPython/>} />
    </Routes>
  )
}

export default PythonRoutes