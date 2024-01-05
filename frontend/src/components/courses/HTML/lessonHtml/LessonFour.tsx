import React, { useState } from 'react';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';

const LessonFour: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <p>HTML forms are crucial for interacting with users on web pages.</p>
          <p>They allow users to input data that can be sent to a server for processing.</p>
          <p>To create a form, start with the <code>{'<form>'}</code> element.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1',
      text: (
        <p>
          Which HTML element is used to create a form in HTML?
        </p>
      ),
      question: (
        <div>
          <p>
            The HTML element used to create a form is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<form>', '<input>', '<div>'],
      correctAnswer: '<form>',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>Inside the form, use various input elements like:</p>
          <ul>
            <li><code>{'<input type="text">'}</code> for single-line text</li>
            <li><code>{'<textarea>'}</code> for multiline text</li>
            <li><code>{'<input type="checkbox">'}</code> for checkboxes</li>
            <li><code>{'<input type="radio">'}</code> for radio buttons</li>
            <li><code>{'<input type="submit">'}</code> for submit buttons</li>
          </ul>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2',
      text: (
        <p>
          Which input element creates a single-line text input field?
        </p>
      ),
      question: (
        <div>
          <p>
            The input element that creates a single-line text input field is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<input type="text">', '<input type="multiline">', '<textarea>'],
      correctAnswer: '<input type="text">',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>Forms can also contain elements like:</p>
          <ul>
            <li><code>{'<select>'}</code> for dropdown lists</li>
            <li><code>{'<button>'}</code> for clickable buttons</li>
            <li><code>{'<fieldset>'}</code> for grouping form elements</li>
            <li><code>{'<label>'}</code> for labeling form controls</li>
          </ul>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3',
      text: (
        <p>
          Which element creates a dropdown list in HTML forms?
        </p>
      ),
      question: (
        <div>
          <p>
            The element that creates a dropdown list is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<dropdown>', '<list>', '<select>'],
      correctAnswer: '<select>',
    },
  ];

  return (
    <div>
      <LessonSlide key="LessonFour"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFour;