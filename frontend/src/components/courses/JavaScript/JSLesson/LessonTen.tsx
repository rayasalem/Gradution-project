import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonTenjs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Error Handling</h2>
          <p>An introduction to error handling and the importance of effective error management.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l10_js',
      text: (
        <p>
          Why is effective error handling important in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            Effective error handling in JavaScript is important to{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Improve code performance', 'Minimize code complexity', 'Identify and resolve issues'],
      correctAnswer: 'Identify and resolve issues',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Debugging Techniques</h2>
          <p>Exploring various debugging techniques to identify and fix errors in JavaScript code.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l10_js',
      text: (
        <p>
          What does the process of debugging involve in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The process of debugging in JavaScript involves{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Finding and fixing errors', 'Optimizing code execution', 'Enhancing code readability'],
      correctAnswer: 'Finding and fixing errors',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Using Browser Developer Tools</h2>
          <p>Understanding the tools available in browsers for debugging JavaScript code.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l10_js',
      text: (
        <p>
          Which browser tool is commonly used for JavaScript debugging?
        </p>
      ),
      question: (
        <div>
          <p>
            The commonly used browser tool for JavaScript debugging is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Browser Console', 'Network Monitor', 'Performance Analyzer'],
      correctAnswer: 'Browser Console',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Error Handling Best Practices</h2>
          <p>Exploring best practices for effective error handling in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l10_js',
      text: (
        <p>
          What should developers aim for in terms of error handling in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            Developers should aim for{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong> in error handling.
          </p>
        </div>
      ),
      options: ['Handling every error scenario', 'Logging and tracking errors', 'Ignoring minor errors'],
      correctAnswer: 'Logging and tracking errors',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Common JavaScript Errors</h2>
          <p>Identifying and understanding common errors encountered in JavaScript programming.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l10_js',
      text: (
        <p>
          What's an important step in resolving common JavaScript errors?
        </p>
      ),
      question: (
        <div>
          <p>
            An important step in resolving common JavaScript errors is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Ignoring errors', 'Understanding error messages', 'Disabling browser extensions'],
      correctAnswer: 'Understanding error messages',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonTen" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonTenjs;