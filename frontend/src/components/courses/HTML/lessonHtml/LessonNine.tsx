import React, { useState } from 'react';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';

const LessonNine: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <p>The <code>&lt;meta&gt;</code> tag in HTML is used to provide metadata about the HTML document.</p>
          <p>It contains information such as character set, viewport settings, and page description.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1',
      text: (
        <p>
          What does the <code>charset</code> attribute in the <code>&lt;meta&gt;</code> tag specify?
        </p>
      ),
      question: (
        <div>
          <p>
            The <code>charset</code> attribute specifies{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Character encoding', 'Document language', 'Viewport settings', 'Page title'],
      correctAnswer: 'Character encoding',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>The <code>charset</code> attribute in the <code>&lt;meta&gt;</code> tag specifies the character encoding for the document.</p>
          <p>For example, <code>&lt;meta charset="UTF-8"&gt;</code> sets the character encoding to UTF-8.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2',
      text: (
        <p>
          What does the <code>viewport</code> attribute control in the <code>&lt;meta&gt;</code> tag?
        </p>
      ),
      question: (
        <div>
          <p>
            The <code>viewport</code> attribute controls{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Character encoding', 'Document language', 'Viewport settings', 'Page title'],
      correctAnswer: 'Viewport settings',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>The <code>viewport</code> attribute controls the layout and scaling of the viewport for responsive web design.</p>
          <p>It's commonly used for setting the width and initial scale of the webpage for different devices.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3',
      text: (
        <p>
          What is the purpose of the <code>name</code> attribute in the <code>&lt;meta&gt;</code> tag?
        </p>
      ),
      question: (
        <div>
          <p>
            The purpose of the <code>name</code> attribute is to define{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Metadata name', 'Document language', 'Viewport settings', 'Page title'],
      correctAnswer: 'Metadata name',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>The <code>name</code> attribute in the <code>&lt;meta&gt;</code> tag defines the name of the metadata.</p>
          <p>For example, <code>&lt;meta name="description" content="This is a description"&gt;</code> sets a description for the page.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q4',
      text: (
        <p>
          What does the <code>content</code> attribute specify in the <code>&lt;meta&gt;</code> tag?
        </p>
      ),
      question: (
        <div>
          <p>
            The <code>content</code> attribute specifies{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['Metadata value', 'Document language', 'Viewport settings', 'Page title'],
      correctAnswer: 'Metadata value',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>The <code>content</code> attribute in the <code>&lt;meta&gt;</code> tag specifies the value associated with the metadata.</p>
          <p>For instance, in <code>&lt;meta name="author" content="John Doe"&gt;</code>, the content is "John Doe" for the author metadata.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q5',
      text: (
        <p>
          Which attribute in the <code>&lt;meta&gt;</code> tag is used to define the value associated with metadata?
        </p>
      ),
      question: (
        <div>
          <p>
            The attribute used to define the value associated with metadata is{' '}
            <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.
          </p>
        </div>
      ),
      options: ['charset', 'name', 'content', 'viewport'],
      correctAnswer: 'content',
    },
  ];

  return (
    <div>
      <LessonSlide key="LessonMetadata" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonNine;