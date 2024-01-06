import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonNinejs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Asynchronous Programming</h2>
          <p>An introduction to asynchronous programming and its importance in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l9_js',
      text: (
        <p>
          What is asynchronous programming used for in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            Asynchronous programming in JavaScript is used for{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Sequential execution', 'Non-blocking operations', 'Synchronous execution'],
      correctAnswer: 'Non-blocking operations',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Callbacks in JavaScript</h2>
          <p>Understanding callbacks and their role in handling asynchronous operations.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l9_js',
      text: (
        <p>
          What are callbacks used for in asynchronous JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            Callbacks in asynchronous JavaScript are used for{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Sequential execution', 'Error handling', 'Event handling'],
      correctAnswer: 'Event handling',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Promises in JavaScript</h2>
          <p>Understanding Promises and how they handle asynchronous operations.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l9_js',
      text: (
        <p>
          What does a Promise represent in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            A Promise in JavaScript represents{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Synchronous value', 'Event occurrence', 'Result of an asynchronous operation'],
      correctAnswer: 'Result of an asynchronous operation',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Async/Await in JavaScript</h2>
          <p>Understanding the async/await syntax and its usage with Promises.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l9_js',
      text: (
        <p>
          What keyword is used to define an asynchronous function in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The keyword used to define an asynchronous function is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['async', 'await', 'then'],
      correctAnswer: 'async',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Error Handling in Asynchronous JavaScript</h2>
          <p>Exploring error handling techniques in asynchronous JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l9_js',
      text: (
        <p>
          How can errors be handled in asynchronous JavaScript operations?
        </p>
      ),
      question: (
        <div>
          <p>
            Errors in asynchronous JavaScript operations can be handled using{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['try/catch', 'if/else', 'switch/case'],
      correctAnswer: 'try/catch',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonNine"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonNinejs;