import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonSevenInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);



  const slides: LessonSlide[] = [
    {
      type: 'text',
      text:  <p>
      The `outline-style` property in CSS is used to specify the style of the outline around an element.
      <br />It can have various values, each defining a different visual style for the outline.
    </p>,
    },{
        type: 'text',
        text: (
            <div>
          <strong>Outline Styles:</strong>
          <p>
            The `outline-style` property can take one of the following values:
            <ul>
              <li>dotted - Defines a dotted outline</li>
              <li>dashed - Defines a dashed outline</li>
              <li>solid - Defines a solid outline</li>
              <li>double - Defines a double outline</li>
              <li>groove - Defines a 3D grooved outline</li>
              <li>ridge - Defines a 3D ridged outline</li>
              <li>inset - Defines a 3D inset outline</li>
              <li>outset - Defines a 3D outset outline</li>
              <li>none - Defines no outline</li>
              <li>hidden - Defines a hidden outline</li>
            </ul>
          </p>
        </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q1-l7-css',
        text: <p>What is the outline style property to create a solid outline?</p>,
        question: (
            <div>
            <p>
              <code>{'div {'}</code>
              <br></br>
              <code>{'outline-style: '}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}<br></br>
              <code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['dotted', 'solid', 'inset'],
        correctAnswer: 'solid',
      },
      {
        type: 'text',
        text: (
            <div>
            <strong>Customizing Outline:</strong>
            <p>
              The `outline` property can be further customized by combining it with `outline-width` and `outline-color`.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q2-l7-css',
        text: <p>How would you create a red dashed outline with a width of 2 pixels?</p>,
        
        question: (
            <div>
            <p>
            <code>{'div {'}</code>
              <br></br>
              <code>{'outline: '}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}<br></br>
              <code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['2px dashed red', 'red 2px dashed', 'dashed red 2px'],
        correctAnswer: '2px dashed red',
      },{
        type: 'text',
        text: (
          <p>
            The `outline` property in CSS is a shorthand property for setting the individual outline properties, which include:
            <ul>
              <li>outline-width</li>
              <li>outline-style (required)</li>
              <li>outline-color</li>
            </ul>
          </p>
        ),
      },{
        type: 'text',
        text: (
          <div>
            <strong>Outline Shorthand:</strong>
            <p>
              The `outline` property can be set using the following syntax:
              <br />
              <code>{'outline: outline-width outline-style outline-color;'}</code>
            </p>
          </div>
        ),
      },{
        type: 'text',
        text: (
          <div>
            <strong>Individual Outline Properties:</strong>
            <p>
              If you want to set specific properties individually, you can use:
              <br />
              <code>{'outline-width: value;'}</code>
              <br />
              <code>{'outline-style: value;'}</code>
              <br />
              <code>{'outline-color: value;'}</code>
            </p>
          </div>
        ),
      },

    
  ];
  
  return (
    <div>
      <LessonSlide key="Outline"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSevenInCSS;

