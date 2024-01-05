import React, { useState } from 'react';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonTen: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: (
        <div>
          <p>HTML5 introduces several powerful features that significantly enhance web development capabilities.</p>
          <p>Among these are new semantic elements, diverse input types like <code>date</code>, <code>email</code>, and <code>search</code>, and the versatile <code>&lt;canvas&gt;</code> element designed for drawing graphics.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q1',
      text: (
        <p>What significant enhancements does HTML5 offer for web development?</p>
      ),
      question: (
        <div>
          <p>HTML5 provides <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.</p>
        </div>
      ),
      options: [
        'Improved semantic elements',
        'Enhanced scripting capabilities',
        'Extended styling options',
        'Accessibility enhancements',
      ],
      correctAnswer: 'Improved semantic elements',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>New semantic elements like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, and <code>&lt;nav&gt;</code> offer improved structure and semantics.</p>
          <p>They enhance accessibility and provide a more meaningful HTML structure.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q2',
      text: (
        <p>What benefits do the new input types in HTML5 offer?</p>
      ),
      question: (
        <div>
          <p>The new input types in HTML5 provide <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.</p>
        </div>
      ),
      options: [
        'Better user experience and validation',
        'Extended styling options',
        'Enhanced scripting capabilities',
        'Accessibility enhancements',
      ],
      correctAnswer: 'Better user experience and validation',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>HTML5 introduces various input types such as <code>date</code>, <code>email</code>, <code>search</code>, etc.</p>
          <p>These input types significantly improve user experience and enable more effective data validation by browsers.</p>
        </div>
      ),
    },
    {
      type: 'dragDrop',
      questionId: 'q3',
      text: (
        <p>What functionality does the <code>&lt;canvas&gt;</code> element offer in HTML5?</p>
      ),
      question: (
        <div>
          <p>The <code>&lt;canvas&gt;</code> element in HTML5 provides <strong>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}</strong>.</p>
        </div>
      ),
      options: [
        'Dynamic rendering and manipulation of graphics',
        'Extended styling options',
        'Enhanced scripting capabilities',
        'Accessibility enhancements',
      ],
      correctAnswer: 'Dynamic rendering and manipulation of graphics',
    },
    {
      type: 'text',
      text: (
        <div>
          <p>The <code>&lt;canvas&gt;</code> element in HTML5 enables dynamic rendering and manipulation of graphics and images.</p>
          <p>It's widely used for drawing, creating animations, and rendering complex visuals on the web.</p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <LessonSlide
        key="LessonHTML5Features"
        slides={slides}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
    </div>
  );
};

export default LessonTen;