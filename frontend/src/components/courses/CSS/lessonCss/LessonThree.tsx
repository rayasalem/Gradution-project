import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonThreeInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>
       The box model is the foundation of layout in CSS.
      <p>It includes the content area, padding, border, and margin.</p>
      <p> Understanding how these components interact is essential.</p>
    </p>,
    },{
        type: 'text',
        text: (
            <p>
            The box model consists of four main parts:
            <ul>
              <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
              <li><strong>Padding:</strong> Clears an area around the content. The padding is transparent and adds space between the content and the border.</li>
              <li><strong>Border:</strong> A border that goes around the padding and content. It defines the visual boundary of the box.</li>
              <li><strong>Margin:</strong> Clears an area outside the border. The margin is transparent and provides space between the border of this box and surrounding elements.</li>
            </ul>
          </p>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q1-l3-css',
        text: <p>In order to set the width and height of an element correctly in all browsers, <br></br>
        you need to know how the box model works.
        <br></br>This <code>{'<div>'}</code> element will have a total width of 350px and a total height of 80px: </p>,
        question: (
            <div>
            <p>
            <code>{'div {'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{': 320px;'}</code> 
            <br></br> <code>{'height: 50px; }'}</code> 
            </p>
          </div>
        ),
        options: ['width','size'],
        correctAnswer: 'width',
      },
      {
        type: 'text',
        text: (
          <p>
            Padding is the space between the content area and the border. It can be set using the <code>{'padding'}</code> property.
          </p>
        ),
      },
      {
        type: 'dragDrop',
        questionId: 'q2-l3-css',
        text: <p>
           Understanding the <code>padding</code> property is crucial for
           <br></br>  controlling the space around an element within the box model.
        <br></br>In this example, the <code>{'<div>'}</code> element will have 25px space around </p>,
        question: (
            <div>
            <p>
            <code>{'div {'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{': 25px;'}</code> 
            <br></br> <code>{'}'}</code> 
            </p>
          </div>
        ),
        options: ['padding', 'margin'],
        correctAnswer: 'padding',
      },
      {
        type: 'text',
        text: (
          <p>
            Border is the line that surrounds the content and padding.<br></br>
            It can be styled and sized using the <code>{'border'}</code> property.
          </p>
        ),
      },
    {
      type: 'dragDrop',
      questionId: 'q3-l3-css',
      text: <p>The <code>border</code> property is used to create borders around an element within the box model.<br></br>
      In this example, the <code>{'<div>'}</code> element will have  border <br></br>
      <code>5px</code> in size, <code>solid</code> in style, and has the color <code>#3498db</code>  </p>,
      question: (
        <div>
        <p>
        <code>{'div {'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{': 5px solid #3498db;'}</code> 
        <br></br> <code>{'}'}</code> 
        </p>
      </div>
      ),
      options: ['border', 'outline'],
      correctAnswer: 'border',
    },
    {
      type: 'text',
      text: <p>Margin is the space outside the border. It provides spacing 
      <br></br>between the element's border and other elements on the page.</p>,
    },
    {
        type: 'dragDrop',
        questionId: 'q4-l3-css',
        text: <p>
        The <code>margin</code> property is used to define the space outside the border of an element within the box model.
        <br />
        In this example, the <code>{'<div>'}</code> element will have a margin of <code>10px</code>.
      </p>,
        question: (
            <div>
            <p>
              <code>{'div {'}</code> <br />
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{': 10px;'}</code>
              <br /> <code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['padding', 'margin'],
         correctAnswer: 'margin',
      },
    {
      type: 'text',
      text: <p>
      The total width of an element is calculated as follows: <br />
      Total Width = Width + Padding + Border + Margin
    </p>,
    },
    {
        type: 'text',
        text: <p>
        Understanding the box model is crucial for designing and structuring layouts in CSS. <br />
        Experiment with adjusting content, padding, border, and margin to achieve the desired layout for your web pages.
      </p>,
      },
    
  ];
  
  return (
    <div>
      <LessonSlide key="boxModel"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonThreeInCSS;

