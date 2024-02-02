import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonEightjs: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding JavaScript Events</h2>
          <p>An introduction to events and how they are used in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l8_js',
      text: (
        <p>
          What are events in JavaScript triggered by?
        </p>
      ),
      question: (
        <div>
          <p>
            JavaScript events are triggered by{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['User interactions', 'Server-side requests', 'Both'],
      correctAnswer: 'User interactions',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Event Handling in JavaScript</h2>
          <p>Learning how to handle events in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l8_js',
      text: (
        <p>
          What is the function used to respond to an event in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            The function used to respond to events is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['eventListener()', 'eventHandler()', 'addEventListener()'],
      correctAnswer: 'addEventListener()',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Common JavaScript Events</h2>
          <p>Exploring some of the most frequently used events in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l8_js',
      text: (
        <p>
          Which event is triggered when a user clicks on an element?
        </p>
      ),
      question: (
        <div>
          <p>
            The event triggered by a user click is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['mouseover', 'click', 'submit'],
      correctAnswer: 'click',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Event Propagation in JavaScript</h2>
          <p>Understanding event bubbling and capturing in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l8_js',
      text: (
        <p>
          Which phase comes first in event propagation?
        </p>
      ),
      question: (
        <div>
          <p>
            The first phase in event propagation is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Bubbling phase', 'Capturing phase', 'Target phase'],
      correctAnswer: 'Capturing phase',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Event Delegation</h2>
          <p>Explaining the concept of event delegation and its usage in JavaScript.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l8_js',
      text: (
        <p>
          What is event delegation used for in JavaScript?
        </p>
      ),
      question: (
        <div>
          <p>
            Event delegation is used for{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Handling events for multiple elements', 'Handling specific events', 'Preventing event propagation'],
      correctAnswer: 'Handling events for multiple elements',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonEight"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonEightjs;