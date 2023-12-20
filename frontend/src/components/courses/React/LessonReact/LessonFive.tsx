import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonFiveReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding React Hooks</h2>
          <p>Exploring the concept and usage of React Hooks in functional components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l5_react',
      text: (
        <p>
          Which hook is used for adding state to functional components?
        </p>
      ),
      question: (
        <div>
          <p>
            To add state to functional components, the hook used is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['useState', 'useEffect', 'useContext'],
      correctAnswer: 'useState',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Effect Hook</h2>
          <p>Understanding how to perform side effects in functional components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l5_react',
      text: (
        <p>
          Which hook is used to perform side effects in functional components?
        </p>
      ),
      question: (
        <div>
          <p>
            To perform side effects in functional components, the hook used is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['useEffect', 'useState', 'useContext'],
      correctAnswer: 'useEffect',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Context Hook</h2>
          <p>Understanding how to use context in functional components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l5_react',
      text: (
        <p>
          Which hook is used to access context in functional components?
        </p>
      ),
      question: (
        <div>
          <p>
            To access context in functional components, the hook used is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['useContext', 'useState', 'useEffect'],
      correctAnswer: 'useContext',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Custom Hooks</h2>
          <p>Understanding how to create and use custom hooks in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l5_react',
      text: (
        <p>
          What is the convention for naming custom hooks?
        </p>
      ),
      question: (
        <div>
          <p>
            The convention for naming custom hooks is to start the function name with{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['use', 'custom', 'hook'],
      correctAnswer: 'use',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Rules of Hooks</h2>
          <p>Understanding the rules and best practices for using React Hooks.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l5_react',
      text: (
        <p>
          What are the rules to follow when using React Hooks?
        </p>
      ),
      question: (
        <div>
          <p>
            The rules to follow when using React Hooks are to call them at the{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong> level of the component.
          </p>
        </div>
      ),
      options: ['top', 'bottom', 'any'],
      correctAnswer: 'top',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonFiveReact"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFiveReact;