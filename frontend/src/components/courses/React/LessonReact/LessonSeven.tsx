import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonSevenReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Introduction to React Router</h2>
          <p>Understanding the concept of routing and its importance in React applications.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l7_react',
      text: (
        <p>
          Which library is commonly used for routing in React applications?
        </p>
      ),
      question: (
        <div>
          <p>
            The commonly used library for routing in React is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['React Router', 'React Navigator', 'React Route'],
      correctAnswer: 'React Router',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Setting up Routes</h2>
          <p>Understanding how to set up routes using React Router in a React application.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l7_react',
      text: (
        <p>
          What is the primary component used to define routes in React Router?
        </p>
      ),
      question: (
        <div>
          <p>
            The primary component used to define routes in React Router is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<Router>', '<Switch>', '<Route>'],
      correctAnswer: '<Route>',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Navigation and Links</h2>
          <p>Understanding how to navigate between different views using React Router's Link component.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l7_react',
      text: (
        <p>
          Which React Router component is used for client-side navigation?
        </p>
      ),
      question: (
        <div>
          <p>
            The React Router component used for client-side navigation is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<Link>', '<Navigate>', '<Redirect>'],
      correctAnswer: '<Link>',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Passing Parameters via Routes</h2>
          <p>Understanding how to pass and access parameters through React Router's routes.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l7_react',
      text: (
        <p>
          How can you access route parameters in a React component using React Router?
        </p>
      ),
      question: (
        <div>
          <p>
            To access route parameters in a React component using React Router, you can use{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['props.params', 'props.match.params', 'props.route.params'],
      correctAnswer: 'props.match.params',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Nested Routes</h2>
          <p>Understanding how to define nested routes for more complex navigation in React applications.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l7_react',
      text: (
        <p>
          Which React Router component allows the creation of nested routes?
        </p>
      ),
      question: (
        <div>
          <p>
            The React Router component that allows the creation of nested routes is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<ChildRoute>', '<NestedRoute>', '<Route>'],
      correctAnswer: '<Route>',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonSevenReact" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSevenReact;