import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonOne: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const lessonData = {
    title: 'Lesson One Title',
    order: 1,
    course: courseId || '',
  };

  const slides: LessonSlide[] = [
    {
      type: 'dragDrop',
      questionId: 'q1',
      text: <p>Text for drag-and-drop slide</p>,
      question: (
        <div>
          <p>
            Code a level 1 heading: {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}Heading1<code>{'</h1>'}</code>
          </p>
        </div>
      ),
      options: ['<h1>', '<h2>', '<h3>'],
      correctAnswer: '<h1>',
    },
    {
      type: 'text',
      text: <p>Your text-based slide content</p>,
    },
    {
      type: 'dragDrop',
      questionId: 'q2',
      text: (
        <p>
          Headings in HTML come in different levels. <code>&lt;h1&gt;</code>
          <br />
          defines the most important heading.
        </p>
      ),
      question: (
        <div>
          <p>
            Code a level 1 heading: <code>{'<h1>'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <code>{'</h1>'}</code>
          </p>
        </div>
      ),
      options: ['Heading 1', 'Heading 2', 'Heading 3'],
      correctAnswer: 'Heading 1',
    },
  ];
  

  return (
    <div>
      <LessonSlide key="lessonOne" lessonData={lessonData} slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonOne;

