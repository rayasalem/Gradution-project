import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonFourInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>
       The display property in CSS is crucial for controlling the layout of elements.
      <p> It defines how an element is displayed on the web page.</p>
      <p>There are several values for the display property, each affecting the layout differently</p>
    </p>,
    },{
        type: 'text',
        text: (
            <div>
            <strong>Block-level Elements:</strong>
            <p>
              Block-level elements start on a new line and take up the full width available.<br></br>
              Examples include <code>{'<div>'}</code>, <code>{'<p>'}</code>, <code>{'<h1>'}</code> to <code>{'<h6>'}</code>.
              They create a "block" or a "box" in the layout.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q1-l4-css',
        text: <p>A block-level element always starts on a new line and takes up the full width available
        <br></br>(stretches out to the left and right as far as it can). </p>,
        question: (
            <div>
            <p>
             The {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}element is a block-level element.
            </p>
          </div>
        ),
        options: ['<div>','<img>'],
        correctAnswer: '<div>',
      },
      {
        type: 'text',
        text: (
          <div>
            <strong>Inline Elements:</strong>
            <p>
              Inline elements do not start on a new line and only take up as much width as necessary.<br></br>
              Examples include <code>{'<span>'}</code>, <code>{'<a>'}</code>, <code>{'<strong>'}</code>.
              They flow with the content and do not create a new block.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q2-l4-css',
        text: <p>An inline element does not start on a new line and only takes up as much width as necessary.
        </p>,
        question: (
            <div>
            <p>
            This is an inline {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}element inside a paragraph.
            </p>
          </div>
        ),
        options: ['<div>','<img>','<span>'],
        correctAnswer: '<span>',
      },{
        type: 'text',
        text: (
          <div>
            <strong>Display: none;</strong>
            <p>
              The <code>display: none;</code> property is used to hide an element from the layout.<br></br>
              The element is not rendered, and it does not take up any space on the page.<br></br>
              This is useful for creating dynamic layouts where elements can be hidden or shown based on certain conditions.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l4-css',
        text: <p>As mentioned, every element has a default display value. However, you can override this.
        <br></br>Changing an inline element to a block element, or vice versa, can be 
        <br></br>A common example is making inline <code>{'<li>'}</code> elements for horizontal menus: </p>,
        question: (
            <div>
            <p>
            <code>{'li {'}</code> <br></br><code>{' display:'}</code>
             {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['inline','none'],
        correctAnswer: 'inline',
      },
      {
        type: 'text',
        text: (
          <div>
            <strong>Display Value:</strong>
            <p>
              The display property also has values like inline-block, flex, grid, etc., providing various layout options.
             <br></br> For example, inline-block combines aspects of both inline and block-level elements.
            </p>
          </div>
        ),
      },{
        type: 'text',
        text: (
          <div>
            <strong>Visibility: hidden;</strong>
            <p>
              While <code>display: none;</code> hides an element and removes it from the layout, <code>visibility: hidden;</code> hides an element but still occupies space.
              The hidden element affects the layout, but it is not visible.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l4-css',
        text: <p>Hiding an element can be done by setting the display property to none. 
        <br></br>The element will be hidden, and the page will be displayed as if the element is not there: </p>,
        question: (
            <div>
            <p>
            <code>{'li {'}</code> <br></br><code>{' display:'}</code>
             {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['inline','none'],
        correctAnswer: 'none',
      },

    
  ];
  
  return (
    <div>
      <LessonSlide key="boxModel"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonFourInCSS;

