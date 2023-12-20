import React, { useState } from 'react';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonSix: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <p>Semantic HTML is crucial for building accessible and well-structured web pages.</p>
          <p>It uses meaningful tags to describe the content's purpose rather than just its appearance.</p>
          <p>Elements like <code>{'<header>'}</code>, <code>{'<footer>'}</code>, and <code>{'<nav>'}</code> are examples of semantic tags.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1',
      text: (
        <p>
          Which HTML element is used to represent the main content area of a web page?
        </p>
      ),
      question: (
        <div>
          <p>
            The HTML element used to represent the main content area is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<main>', '<section>', '<div>'],
      correctAnswer: '<main>',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>Semantic tags provide context and improve SEO by helping search engines understand the page's structure.</p>
          <p>Tags like <code>{'<article>'}</code>, <code>{'<aside>'}</code>, and <code>{'<figure>'}</code> define specific sections of content.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2',
      text: (
        <p>
          Which HTML element is used to contain content aside from the main content?
        </p>
      ),
      question: (
        <div>
          <p>
            The HTML element used to contain content aside from the main content is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<aside>', '<section>', '<nav>'],
      correctAnswer: '<aside>',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>Using semantic HTML improves accessibility by providing a clear document structure for screen readers.</p>
          <p>Tags like <code>{'<header>'}</code>, <code>{'<footer>'}</code>, and <code>{'<nav>'}</code> define essential page sections.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3',
      text: (
        <p>
          Which tag defines introductory content or a navigational link section?
        </p>
      ),
      question: (
        <div>
          <p>
            The tag that defines introductory content or a navigational link section is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['<header>', '<footer>', '<nav>'],
      correctAnswer: '<nav>',
    },
  ];

  return (
    <div>
      <LessonSlide key="LessonSemanticHTML"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSix;