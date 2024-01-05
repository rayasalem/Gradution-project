import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonNineReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding State Management in React</h2>
          <p>Exploring the need for state management libraries like Redux in React applications.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l9_react',
      text: (
        <p>
          Which library is commonly used for state management in React for complex applications?
        </p>
      ),
      question: (
        <div>
          <p>
            The library commonly used for state management in React for complex applications is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Redux', 'React State', 'MobX'],
      correctAnswer: 'Redux',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Working with Redux</h2>
          <p>Understanding the fundamental concepts and workflow of Redux in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l9_react',
      text: (
        <p>
          Which component is primarily responsible for dispatching actions in Redux?
        </p>
      ),
      question: (
        <div>
          <p>
            The component primarily responsible for dispatching actions in Redux is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Action Creators', 'Reducers', 'Dispatchers'],
      correctAnswer: 'Action Creators',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Actions and Reducers</h2>
          <p>Understanding actions and reducers, the core building blocks of Redux.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l9_react',
      text: (
        <p>
          Which function in Redux specifies how the state changes in response to an action?
        </p>
      ),
      question: (
        <div>
          <p>
            The function in Redux that specifies how the state changes in response to an action is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Action Handler', 'Dispatch Function', 'Reducer'],
      correctAnswer: 'Reducer',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Managing State in React Components</h2>
          <p>Understanding how to connect Redux state to React components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l9_react',
      text: (
        <p>
          Which function connects React components to the Redux store?
        </p>
      ),
      question: (
        <div>
          <p>
            The function that connects React components to the Redux store is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['connect()', 'bindStore()', 'mapStateToStore()'],
      correctAnswer: 'connect()',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Async Actions in Redux</h2>
          <p>Understanding how to handle asynchronous actions in Redux.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l9_react',
      text: (
        <p>
          Which middleware in Redux is commonly used for handling asynchronous actions?
        </p>
      ),
      question: (
        <div>
          <p>
            The middleware commonly used for handling asynchronous actions in Redux is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Thunk', 'Sagas', 'PromiseMiddleware'],
      correctAnswer: 'Thunk',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonNineReact"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonNineReact;