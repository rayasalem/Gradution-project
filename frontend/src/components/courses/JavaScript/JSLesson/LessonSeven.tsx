import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonSevenjs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding the DOM</h2>
          <p>Introduction to the Document Object Model (DOM) and its representation of web pages.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l7_js',
      text: (
        <p>
          Which represents a tree-like structure of elements in a web page?
        </p>
      ),
      question: (
        <div>
          <p>
            The tree-like structure representing elements is known as{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['CSS', 'DOM', 'JavaScript'],
      correctAnswer: 'DOM',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Accessing DOM Elements</h2>
          <p>Learn methods to access elements in the DOM using JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l7_js',
      text: (
        <p>
          What method is commonly used to access an element by its ID in the DOM?
        </p>
      ),
      question: (
        <div>
          <p>
            The method often used to access elements by ID is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['getElementById()', 'querySelector()', 'getElementsByClassName()'],
      correctAnswer: 'getElementById()',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Modifying DOM Elements</h2>
          <p>Explore techniques to modify elements and their properties in the DOM using JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l7_js',
      text: (
        <p>
          Which property allows you to change the content of an HTML element?
        </p>
      ),
      question: (
        <div>
          <p>
            The property allowing you to change content is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['innerHTML', 'textContent', 'innerText'],
      correctAnswer: 'innerHTML',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Manipulating Styles</h2>
          <p>Learn how to change the style of elements in the DOM dynamically using JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l7_js',
      text: (
        <p>
          What property allows you to change the CSS style of an element?
        </p>
      ),
      question: (
        <div>
          <p>
            The property for changing CSS style is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['style', 'CSS', 'class'],
      correctAnswer: 'style',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Creating and Removing Elements</h2>
          <p>Explore methods to create and remove elements from the DOM using JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l7_js',
      text: (
        <p>
          Which method is used to create a new HTML element in the DOM?
        </p>
      ),
      question: (
        <div>
          <p>
            The method for creating new elements is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['createElement()', 'addNewElement()', 'newElement()'],
      correctAnswer: 'createElement()',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonSeven"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSevenjs;