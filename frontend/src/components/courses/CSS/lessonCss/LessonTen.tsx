import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonTenInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>
         <p>
          Typography plays a crucial role in web design.
          <br></br> Let's explore CSS properties related to fonts, styles, and sizes.
        </p>
    </p>,
    },{
        type: 'text',
        text: (
            <div>
          <strong>Font Style:</strong>
          <p>
            The <code>font-style</code> property is used to set the style of the font, such as normal, italic, or oblique.
          </p>
        </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q1-l10-css',
        text: <p>Set the font style to italic for a paragraph.</p>,
        question: (
            <div>
            <p>
              <code>{'p {'}</code> <br />
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{': italic;'}</code>
              <br /> <code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['italicize', 'style', 'font-style'],
        correctAnswer: 'font-style',
      },
      {
        type: 'text',
        text: (
            <div>
          <strong>Font Size:</strong>
          <p>
            The <code>font-size</code> property is used to set the size of the font. It can be specified in pixels, em units, percentages, etc.
          </p>
        </div>
        ),
      },
      {
        type: 'dragDrop',
        questionId: 'q2-l10-css',
        text: <p>Set the font size to 20 pixels for a heading.</p>,
        question: (
            <div>
          <p>
            <code>{'h1 {'}</code> <br />
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{': 20px;'}</code>
            <br /> <code>{'}'}</code>
          </p>
        </div>
        ),
        options: ['size', 'font-size', 'resize'],
        correctAnswer: 'font-size',
      },
      {
        type: 'text',
        text: (
            <div>
          <strong>The CSS Font Property:</strong>
          <p>
            The <code>font</code> property is a shorthand for setting various font properties, including font size and font family.
          </p>
        </div>
        ),
      },
    {
      type: 'dragDrop',
      questionId: 'q3-l10-css',
      text: <p>Set the font property to 16 pixels, Arial, sans-serif for a paragraph.</p>,
      question: (
        <div>
        <p>
          <code>{'p {'}</code> <br />
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
          <code>{': 16px Arial, sans-serif;'}</code>
          <br /> <code>{'}'}</code>
        </p>
      </div>
      ),
      options: ['family', 'font-family', 'font'],
      correctAnswer: 'font',
    },
    {
      type: 'text',
      text: <div>
      <strong>Explore and Experiment:</strong>
      <p>
        CSS provides flexibility in styling text, allowing you to control the font style, size,
        <br></br> and other properties. Experiment with these properties to enhance the typography on your web pages.
      </p>
    </div>
    }
    
  ];
  
  return (
    <div>
      <LessonSlide key="fontProperties"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonTenInCSS;

