import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonThreejs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Defining Functions in JavaScript</h2>
          <p>Learn how to define and call functions in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l3_js',
      text: (
        <p>
          Which keyword is used to define a function in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The keyword used to define a function is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['function', 'define', 'const'],
      correctAnswer: 'function',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Parameters and Arguments</h2>
          <p>Understand how parameters are used in functions and passed as arguments.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l3_js',
      text: (
        <p>
          What are placeholders for parameters in a function called?
        </p>
      ),
      question: (
        <div>
          <p>
            Placeholders for parameters in a function are called{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Variables', 'Parameters', 'Arguments'],
      correctAnswer: 'Parameters',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Returning Values</h2>
          <p>Explore how functions return values and their significance in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l3_js',
      text: (
        <p>
          What is the keyword used to return a value from a function?
        </p>
      ),
      question: (
        <div>
          <p>
            The keyword used to return a value from a function is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['return', 'value', 'exit'],
      correctAnswer: 'return',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Function Expressions</h2>
          <p>Understand how to define functions as expressions in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l3_js',
      text: (
        <p>
          What is an anonymous function assigned to a variable called?
        </p>
      ),
      question: (
        <div>
          <p>
            An anonymous function assigned to a variable is called{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Function Expression', 'Arrow Function', 'Method'],
      correctAnswer: 'Function Expression',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Arrow Functions</h2>
          <p>Explore the concise syntax and benefits of using arrow functions in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l3_js',
      text: (
        <p>
          What symbol is used to define an arrow function in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The symbol used to define an arrow function is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['=>', '->', '=='],
      correctAnswer: '=>',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonThree"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonThreejs;