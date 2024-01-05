import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonOneReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Introduction to React Components</h2>
          <p>Understanding the core concepts of React components and their role in building UIs.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l1_react',
      text: (
        <p>
          What is a React component?
        </p>
      ),
      question: (
        <div>
          <p>
            A React component is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['A function or class that returns JSX', 'A CSS framework', 'A JavaScript library'],
      correctAnswer: 'A function or class that returns JSX',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Creating React Components</h2>
          <p>Exploring ways to create reusable components in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l1_react',
      text: (
        <p>
          What are the benefits of using React components?
        </p>
      ),
      question: (
        <div>
          <p>
            Some benefits of using React components include{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Code reusability', 'Improved performance', 'Support for CSS modules'],
      correctAnswer: 'Code reusability',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Component Lifecycle</h2>
          <p>Understanding the lifecycle phases of a React component.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l1_react',
      text: (
        <p>
          What are the phases of the React component lifecycle?
        </p>
      ),
      question: (
        <div>
          <p>
            The React component lifecycle includes{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Initialization, Mounting, Update, Unmounting', 'Pre-render, Render, Post-render', 'Start, Execute, Finish'],
      correctAnswer: 'Initialization, Mounting, Update, Unmounting',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>State and Props</h2>
          <p>Exploring stateful and stateless components, and how props are used to pass data between components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l1_react',
      text: (
        <p>
          What's the difference between state and props in React?
        </p>
      ),
      question: (
        <div>
          <p>
            State and props differ in that{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['State is immutable, Props are mutable', 'State is mutable, Props are immutable', 'State is local, Props are global'],
      correctAnswer: 'State is mutable, Props are immutable',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Rendering Components</h2>
          <p>How React components are rendered and displayed in the UI.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l1_react',
      text: (
        <p>
          How is a React component rendered in the browser?
        </p>
      ),
      question: (
        <div>
          <p>
            A React component is rendered in the browser by{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Using the ReactDOM library', 'Using Node.js', 'Directly in the HTML file'],
      correctAnswer: 'Using the ReactDOM library',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonOneReact"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonOneReact;