import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonFourReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding React Component Lifecycle</h2>
          <p>Exploring the lifecycle methods available in React components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l4_react',
      text: (
        <p>
          Which lifecycle method is called after a component is rendered for the first time?
        </p>
      ),
      question: (
        <div>
          <p>
            After a component is rendered for the first time, the method called is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['componentDidMount', 'componentWillUnmount', 'componentDidUpdate'],
      correctAnswer: 'componentDidMount',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Component Updating Lifecycle</h2>
          <p>Understanding the lifecycle methods triggered during component updates.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l4_react',
      text: (
        <p>
          Which method is called when the component receives new props or state?
        </p>
      ),
      question: (
        <div>
          <p>
            When a component receives new props or state, the method called is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['componentWillReceiveProps', 'componentDidUpdate', 'shouldComponentUpdate'],
      correctAnswer: 'componentDidUpdate',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Unmounting Components</h2>
          <p>Understanding the lifecycle methods triggered during component unmounting.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l4_react',
      text: (
        <p>
          Which method is called just before a component is removed from the DOM?
        </p>
      ),
      question: (
        <div>
          <p>
            Just before a component is removed from the DOM, the method called is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['componentWillUnmount', 'componentDidUpdate', 'componentWillUpdate'],
      correctAnswer: 'componentWillUnmount',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Handling Errors</h2>
          <p>Understanding error handling lifecycle methods in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l4_react',
      text: (
        <p>
          Which method is used to catch errors during rendering, in lifecycle methods, or in constructors of any child component?
        </p>
      ),
      question: (
        <div>
          <p>
            To catch errors during rendering or in lifecycle methods, the method used is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['componentWillReceiveProps', 'componentDidCatch', 'getDerivedStateFromError'],
      correctAnswer: 'componentDidCatch',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Lifecycle Methods Utilization</h2>
          <p>Understanding how to utilize lifecycle methods effectively in React applications.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l4_react',
      text: (
        <p>
          Which lifecycle method is used for performance optimization by preventing unnecessary re-renders?
        </p>
      ),
      question: (
        <div>
          <p>
            To prevent unnecessary re-renders, the method used for performance optimization is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['shouldComponentUpdate', 'componentDidUpdate', 'componentWillUpdate'],
      correctAnswer: 'shouldComponentUpdate',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonFourReact"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFourReact;