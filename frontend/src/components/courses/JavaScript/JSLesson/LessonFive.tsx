import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonFivejs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Arrays</h2>
          <p>Learn about arrays, their structure, and how to manipulate data within them.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l5_js',
      text: (
        <p>
          Which data structure allows you to store multiple elements in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The data structure allowing storage of multiple elements is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Arrays', 'Objects', 'Strings'],
      correctAnswer: 'Arrays',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Manipulating Arrays</h2>
          <p>Explore various array methods and how they alter the content of arrays.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l5_js',
      text: (
        <p>
          Which method adds one or more elements to the end of an array?
        </p>
      ),
      question: (
        <div>
          <p>
            The method that adds elements to the end of an array is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['push()', 'pop()', 'shift()'],
      correctAnswer: 'push()',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Objects</h2>
          <p>Learn about objects, their properties, and how to work with object data in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l5_js',
      text: (
        <p>
          Which data structure in JavaScript is used to store key-value pairs?
        </p>
      ),
      question: (
        <div>
          <p>
            The data structure for key-value pairs is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Arrays', 'Objects', 'Functions'],
      correctAnswer: 'Objects',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Manipulating Objects</h2>
          <p>Explore different ways to add, modify, or delete properties in JavaScript objects.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l5_js',
      text: (
        <p>
          Which operation is used to add a new property to an object in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The operation used to add a new property to an object is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['addProperty', 'insert', 'dot notation'],
      correctAnswer: 'dot notation',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Combining Arrays and Objects</h2>
          <p>Explore how arrays and objects can be combined or nested for complex data structures.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l5_js',
      text: (
        <p>
          Which process combines arrays and objects to create more complex data structures?
        </p>
      ),
      question: (
        <div>
          <p>
            The process that combines arrays and objects is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Nesting', 'Merging', 'Destructuring'],
      correctAnswer: 'Nesting',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonFive"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFivejs;