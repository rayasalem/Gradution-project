import React, { useState } from 'react';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';

const LessonTenReact: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <h2>Understanding React Performance</h2>
          <p>Exploring techniques to optimize React applications and improve performance.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1_l10_react',
      text: (
        <p>
          Which tool in React helps in avoiding unnecessary renders?
        </p>
      ),
      question: (
        <div>
          <p>
            The tool in React that helps in avoiding unnecessary renders is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Memoization', 'Code Splitting', 'Virtual DOM'],
      correctAnswer: 'Memoization',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Memoization in React</h2>
          <p>Understanding how memoization improves performance in React.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2_l10_react',
      text: (
        <p>
          Which React feature helps in splitting code into smaller chunks?
        </p>
      ),
      question: (
        <div>
          <p>
            The feature in React that helps in splitting code into smaller chunks is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Virtual DOM', 'Code Splitting', 'Pure Components'],
      correctAnswer: 'Code Splitting',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Improving Performance</h2>
          <p>Techniques to enhance performance by optimizing React components.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3_l10_react',
      text: (
        <p>
          Which React API helps in lazy loading components?
        </p>
      ),
      question: (
        <div>
          <p>
            The React API that helps in lazy loading components is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['React.memo()', 'React.lazy()', 'useMemo()'],
      correctAnswer: 'React.lazy()',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Code Splitting Strategies</h2>
          <p>Understanding various strategies and tools for effective code splitting.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4_l10_react',
      text: (
        <p>
          Which technique can be used to avoid re-rendering unchanged components in React?
        </p>
      ),
      question: (
        <div>
          <p>
            The technique used to avoid re-rendering unchanged components in React is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Virtual DOM', 'Memoization', 'useEffect()'],
      correctAnswer: 'Memoization',
    },
    {
      type: 'text',
      text: (
        <div>
          <h2>Performance Profiling Tools</h2>
          <p>Introduction to tools for measuring and profiling performance in React applications.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5_l10_react',
      text: (
        <p>
          Which tool is commonly used for performance profiling in React?
        </p>
      ),
      question: (
        <div>
          <p>
            The tool commonly used for performance profiling in React is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['React DevTools', 'Chrome Developer Tools', 'React Profiler'],
      correctAnswer: 'React Profiler',
    },
  ];

  return (
    <div>
      <LessonSlide key="lessonTenReact" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonTenReact;