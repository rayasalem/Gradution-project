import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonTwojs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Arithmetic Operators</h2>
          <p>Explore various arithmetic operators (+, -, *, /, %) and their usage in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l2_js',
      text: (
        <p>
          Which operator is used for exponentiation in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The operator used for exponentiation is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['**', '^^', '^'],
      correctAnswer: '**',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding Assignment Operators</h2>
          <p>Learn about various assignment operators (+=, -=, *=, /=) and their functionalities.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l2_js',
      text: (
        <p>
          Which assignment operator is used to add and assign in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The assignment operator used to add and assign is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['+=', '-=', '*='],
      correctAnswer: '+=',
    },
    {
        type: 'text',
        text: (
          <div>
            <h2>Comparison Operators in JavaScript</h2>
            <p>
              Explore comparison operators (==, ===, !=, !==, &gt;, &lt;, &gt;=, &lt;=) and their usage in JavaScript.
            </p>
          </div>
        ),
      },
    {
      type: 'dragDrop',
      questionId: 'q3_l2_js',
      text: (
        <p>
          Which operator checks both value and type in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The operator that checks both value and type is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['==', '===', '!='],
      correctAnswer: '===',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Logical Operators</h2>
          <p>Understand logical operators (&&, ||, !) and their functionality in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l2_js',
      text: (
        <p>
          Which logical operator returns true if both operands are true in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The logical operator that returns true if both operands are true is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['&&', '||', '!'],
      correctAnswer: '&&',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Evaluating Expressions</h2>
          <p>Learn how expressions are evaluated in JavaScript and the order of precedence of operators.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l2_js',
      text: (
        <p>
          Which operator has the highest precedence in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The operator with the highest precedence is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['*', '&&', '!'],
      correctAnswer: '*',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonTwo"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonTwojs;