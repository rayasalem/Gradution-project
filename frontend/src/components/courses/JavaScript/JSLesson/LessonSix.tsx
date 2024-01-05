import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonSixjs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); 
  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Scope</h2>
          <p>Explore the concept of scope in JavaScript and how it affects variable accessibility.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l6_js',
      text: (
        <p>
          Which type of scope defines the accessibility of variables within a function?
        </p>
      ),
      question: (
        <div>
          <p>
            The scope that defines variable accessibility within a function is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Global scope', 'Local scope', 'Block scope'],
      correctAnswer: 'Local scope',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Closures</h2>
          <p>Learn about closures and how they retain access to variables from their lexical scope.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l6_js',
      text: (
        <p>
          What allows a function to remember and access its lexical scope even when executed outside that scope?
        </p>
      ),
      question: (
        <div>
          <p>
            The feature that enables a function to access its lexical scope is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Closure', 'Encapsulation', 'Inheritance'],
      correctAnswer: 'Closure',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Applications of Closures</h2>
          <p>Explore practical applications of closures in JavaScript programming.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l6_js',
      text: (
        <p>
          Which scenario represents a common use case for closures in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            A common use case for closures is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Event handlers', 'Data encapsulation', 'Both of the above'],
      correctAnswer: 'Both of the above',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Potential Pitfalls</h2>
          <p>Understand potential pitfalls related to closures and how to mitigate them.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l6_js',
      text: (
        <p>
          Which issue might occur due to improper usage of closures in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            An issue that might occur due to improper closure usage is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Memory leaks', 'Syntax errors', 'Both of the above'],
      correctAnswer: 'Memory leaks',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Best Practices</h2>
          <p>Learn best practices when working with closures to ensure optimal code performance.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l6_js',
      text: (
        <p>
          Which approach improves code readability and avoids unintended closure-related issues?
        </p>
      ),
      question: (
        <div>
          <p>
            An approach that improves readability and avoids closure-related issues is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Avoiding nested functions', 'Using more closures', 'Encouraging circular references'],
      correctAnswer: 'Avoiding nested functions',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonSix" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSixjs;