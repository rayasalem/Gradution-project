import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonOnejs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding var, let, and const</h2>
          <p>Explore the differences between var, let, and const and when to use them in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l1_js',
      text: (
        <p>
          Which declaration keyword has block scope in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The declaration keyword with block scope is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['var', 'let', 'const'],
      correctAnswer: 'let',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Constants in JavaScript</h2>
          <p>Understand the usage of const and its characteristics in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l1_js',
      text: (
        <p>
          Which declaration keyword creates immutable variables in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The declaration keyword creating immutable variables is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['var', 'let', 'const'],
      correctAnswer: 'const',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Data Types in JavaScript</h2>
          <p>Explore different data types in JavaScript: string, number, boolean, and object.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l1_js',
      text: (
        <p>
          Which data type represents text in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The data type representing text in JavaScript is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['number', 'string', 'boolean', 'object'],
      correctAnswer: 'string',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonOne"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonOnejs;