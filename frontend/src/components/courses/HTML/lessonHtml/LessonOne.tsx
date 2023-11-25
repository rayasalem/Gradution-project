import React from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonOne: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const lessonData = {
    title: 'Lesson One Title',
    order: 1,
    course: courseId || '',
    questions: ['655de7488bb5a3a55c3bcf2c','655de74d8bb5a3a55c3bcf32'],
  };


  return (
    <div>
      <LessonSlide key="lessonOne" lessonData={lessonData} />
    </div>
  );
};

export default LessonOne;
