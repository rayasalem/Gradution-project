import React from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';



const LessonOne: React.FC = (props) => {
  const lessonData = {
    title: 'Lesson One Title',
    order: 1,
    course: '65396d2d54eda77741d5833a',
    question: ['655de7488bb5a3a55c3bcf2c'],
  };

  return (
    <div>
      <h1>Lesson One</h1>
      <LessonSlide lessonData={lessonData} />
    </div>
  );
};

export default LessonOne;
