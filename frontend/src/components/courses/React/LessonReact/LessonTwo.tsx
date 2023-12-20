import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonTwoReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Introduction to JSX</h2>
          <p>Understanding JSX, a syntax extension for JavaScript used in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l2_react',
      text: (
        <p>
          What is JSX?
        </p>
      ),
      question: (
        <div>
          <p>
            JSX is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['A markup syntax for JavaScript', 'A CSS framework', 'A programming language'],
      correctAnswer: 'A markup syntax for JavaScript',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Embedding HTML in JavaScript</h2>
          <p>Exploring how JSX allows embedding HTML in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l2_react',
      text: (
        <p>
          How does JSX allow combining HTML and JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            JSX enables combining HTML and JavaScript by{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Using curly braces', 'Using HTML tags only', 'Using JavaScript functions'],
      correctAnswer: 'Using curly braces',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>JSX Elements and Expressions</h2>
          <p>Understanding JSX elements and embedding expressions.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l2_react',
      text: (
        <p>
          What can be embedded within JSX?
        </p>
      ),
      question: (
        <div>
          <p>
            JSX allows embedding{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Only HTML elements', 'Only JavaScript expressions', 'Both HTML elements and JavaScript expressions'],
      correctAnswer: 'Both HTML elements and JavaScript expressions',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Transforming JSX to JavaScript</h2>
          <p>How JSX gets compiled to JavaScript for the browser.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l2_react',
      text: (
        <p>
          How does JSX code get translated to regular JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            JSX gets translated to JavaScript using{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Babel', 'Webpack', 'React Compiler'],
      correctAnswer: 'Babel',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>JSX Benefits</h2>
          <p>Exploring the advantages of using JSX in React development.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l2_react',
      text: (
        <p>
          What are some advantages of JSX?
        </p>
      ),
      question: (
        <div>
          <p>
            JSX provides advantages like{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Cleaner syntax', 'Performance optimization', 'Minimizing code duplication'],
      correctAnswer: 'Cleaner syntax',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonTwoReact"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonTwoReact;