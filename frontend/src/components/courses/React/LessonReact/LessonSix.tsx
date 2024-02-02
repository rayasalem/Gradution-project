import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonSixReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Handling Events in React Components</h2>
          <p>Exploring event handling in React and how to manage events within components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l6_react',
      text: (
        <p>
          Which function is commonly used to handle events in React?
        </p>
      ),
      question: (
        <div>
          <p>
            In React, events are commonly handled using{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['onClick', 'onEvent', 'handleEvent'],
      correctAnswer: 'onClick',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Event Propagation in React</h2>
          <p>Understanding event propagation and how React handles event bubbling and capturing.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l6_react',
      text: (
        <p>
          What is the default event propagation method in React?
        </p>
      ),
      question: (
        <div>
          <p>
            The default event propagation method in React is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Bubbling', 'Capturing', 'Both'],
      correctAnswer: 'Bubbling',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Synthetic Event System</h2>
          <p>Understanding the React synthetic event system and its advantages.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l6_react',
      text: (
        <p>
          What does React's synthetic event system provide over native events?
        </p>
      ),
      question: (
        <div>
          <p>
            React's synthetic event system provides <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong> compared to native events.
          </p>
        </div>
      ),
      options: ['Consistency', 'Performance', 'Both'],
      correctAnswer: 'Consistency',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Preventing Default Behavior</h2>
          <p>Understanding how to prevent the default behavior of events in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l6_react',
      text: (
        <p>
          How can you prevent the default behavior of an event in React?
        </p>
      ),
      question: (
        <div>
          <p>
            To prevent the default behavior of an event in React, you can use{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['event.preventDefault()', 'event.stopPropagation()', 'event.cancelEvent()'],
      correctAnswer: 'event.preventDefault()',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Event Handlers in JSX</h2>
          <p>Understanding how to bind event handlers in JSX and pass parameters.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l6_react',
      text: (
        <p>
          How can you pass parameters to an event handler in JSX?
        </p>
      ),
      question: (
        <div>
          <p>
            To pass parameters to an event handler in JSX, you can use{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['() => handleClick(param)', 'handleClick(param)', '{() => handleClick(param)}'],
      correctAnswer: '() => handleClick(param)',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonSixReact"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSixReact;