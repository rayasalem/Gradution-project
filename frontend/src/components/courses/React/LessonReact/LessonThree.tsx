import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonThreeReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Stateful Components</h2>
          <p>Exploring stateful components and their management in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l3_react',
      text: (
        <p>
          What is a stateful component?
        </p>
      ),
      question: (
        <div>
          <p>
            A stateful component in React{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Manages its own state', 'Does not have a state', 'Receives data from props'],
      correctAnswer: 'Manages its own state',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>State and Its Management</h2>
          <p>Learning how to manage state within React components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l3_react',
      text: (
        <p>
          How is state managed in React components?
        </p>
      ),
      question: (
        <div>
          <p>
            State in React components is managed by{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['useState hook', 'Props object', 'Component constructor'],
      correctAnswer: 'useState hook',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Props</h2>
          <p>Exploring props and their role in React components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l3_react',
      text: (
        <p>
          What are props used for in React?
        </p>
      ),
      question: (
        <div>
          <p>
            Props in React components are used to{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Initialize state', 'Pass data between components', 'Define component methods'],
      correctAnswer: 'Pass data between components',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Passing Data Through Props</h2>
          <p>Learning how to pass data from parent to child components using props.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l3_react',
      text: (
        <p>
          How is data passed from parent to child components in React?
        </p>
      ),
      question: (
        <div>
          <p>
            Data is passed from parent to child components in React through{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['useState hook', 'Component constructor', 'Props'],
      correctAnswer: 'Props',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Stateless Components and Props</h2>
          <p>Understanding how stateless components interact with props in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l3_react',
      text: (
        <p>
          Can stateless components receive props in React?
        </p>
      ),
      question: (
        <div>
          <p>
            Yes/No, stateless components in React can{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong> receive props.
          </p>
        </div>
      ),
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonThreeReact"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonThreeReact;