import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonNineInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>
       <p>
          CSS provides various properties to style and format text.
          <br></br> Let's explore some essential text properties.
        </p>
    </p>,
    },{
        type: 'text',
        text: (
            <div>
            <strong>Text Alignment:</strong>
            <p>
              The <code>text-align</code> property is used to set the horizontal alignment of text within an element.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q1-l9-css',
        text: <p>Set the text alignment to center for a paragraph.</p>,
        question: (
            <div>
          <p>
            <code>{'p {'}</code> <br />
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{': center;'}</code>
            <br /> <code>{'}'}</code>
          </p>
        </div>
        ),
        options: ['text-align', 'align', 'horizontal-align'],
      correctAnswer: 'text-align',
      },
      {
        type: 'text',
        text: (
            <div>
            <strong>Text Direction:</strong>
            <p>
              The <code>direction</code> property is used to set the text direction,
              <br></br> such as left-to-right or right-to-left.
            </p>
          </div>
        ),
      },
      {
        type: 'dragDrop',
        questionId: 'q2-l9-css',
        text: <p>Set the text direction to right-to-left for a specific element.</p>,
        question: (
            <div>
            <p>
              <code>{'.rtl {'}</code> <br />
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{': rtl;'}</code>
              <br /> <code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['text-direction', 'direction', 'rtl'],
      correctAnswer: 'direction',
      },
      {
        type: 'text',
        text: (
            <div>
            <strong>Text Transformation:</strong>
            <p>
              The <code>text-transform</code> property is used to control the capitalization of text.
            </p>
          </div>
        ),
      },
    {
      type: 'dragDrop',
      questionId: 'q3-l9-css',
      text: <p>Transform the text to uppercase for a heading.</p>,
      question: (
        <div>
          <p>
            <code>{'h1 {'}</code> <br />
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{': uppercase;'}</code>
            <br /> <code>{'}'}</code>
          </p>
        </div>
      ),
      options: ['capitalize', 'transform', 'uppercase'],
      correctAnswer: 'transform',
    },
    {
      type: 'text',
      text: <div>
      <strong>Text Spacing:</strong>
      <p>
        The <code>letter-spacing</code> property adjusts the space between characters, while <code>word-spacing</code> adjusts the space between words.
      </p>
    </div>,
    },
    {
        type: 'dragDrop',
        questionId: 'q4-l9-css',
        text: <p>Set letter-spacing to 2px for a paragraph.</p>,
        question: (
            <div>
          <p>
            <code>{'p {'}</code> <br />
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{': 2px;'}</code>
            <br /> <code>{'}'}</code>
          </p>
        </div>
        ),
        options: ['character-spacing', 'spacing', 'letter-spacing'],
        correctAnswer: 'letter-spacing',
      },
    {
      type: 'text',
      text: <div>
      <strong>Text Shadow:</strong>
      <p>
        The <code>text-shadow</code> property adds a shadow effect to text.
        <br></br> It takes values for the horizontal and vertical offset, blur radius, and color.
      </p>
    </div>
    },{
        type: 'dragDrop',
        questionId: 'q5-l9-css',
        text: <p>Create a text shadow with a horizontal offset of 2px, vertical offset of 4px, blur of 3px, and color #333.</p>,
        question: (
          <div>
            <p>
              <code>{'h2 {'}</code> <br />
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
              <code>{'text-shadow: 2px 4px 3px #333;'}</code>
              <br /> <code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['shadow', 'text-effect', 'text-shadow'],
        correctAnswer: 'text-shadow',
      },{
        type: 'text',
        text: (
          <div>
            <strong>Explore and Experiment:</strong>
            <p>
              CSS provides a range of text properties to customize the appearance and style of text content.
              <br></br> Experiment with these properties to achieve the desired look for your web pages.
            </p>
          </div>
        ),
      },
    
    
  ];
  
  return (
    <div>
      <LessonSlide key="textProperties"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonNineInCSS;

