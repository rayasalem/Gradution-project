import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonFourjs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Conditional Statements: if...else</h2>
          <p>Learn about the if...else conditional statement for control flow in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l4_js',
      text: (
        <p>
          Which conditional statement is used for simple true/false checks in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The conditional statement used for simple true/false checks is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['if', 'switch', 'while'],
      correctAnswer: 'if',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Conditional Statements: switch</h2>
          <p>Explore the switch statement for multi-way branching in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l4_js',
      text: (
        <p>
          Which conditional statement is useful for multiple conditions in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The conditional statement useful for multiple conditions is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['if', 'switch', 'for'],
      correctAnswer: 'switch',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Loops: for</h2>
          <p>Learn about the for loop for iterative control in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l4_js',
      text: (
        <p>
          Which loop is suitable for iterating a specific number of times in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The loop suitable for iterating a specific number of times is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['for', 'while', 'do...while'],
      correctAnswer: 'for',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Loops: while</h2>
          <p>Explore the while loop for conditional iteration in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l4_js',
      text: (
        <p>
          Which loop executes while a specified condition is true in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The loop that executes while a specified condition is true is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['for', 'while', 'do...while'],
      correctAnswer: 'while',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Loops: do...while</h2>
          <p>Understand the do...while loop for conditional looping in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l4_js',
      text: (
        <p>
          Which loop ensures that the code block is executed at least once, even if the condition is false?
        </p>
      ),
      question: (
        <div>
          <p>
            The loop that ensures code block execution at least once is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['for', 'while', 'do...while'],
      correctAnswer: 'do...while',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonFour"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFourjs;