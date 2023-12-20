import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonSixInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text:  <p>
      Colors in CSS can be defined using various formats, each with its own advantages.
      <br />Let's explore RGB, HEX, and HSL color representations.
    </p>
    ,
    },{
        type: 'dragDrop',
        questionId: 'q1-l6-css',
        text: <p>You can set the background color for HTML elements:
         </p>,
        question: (
            <div>
            <p>
            <code>{'<p style="'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <br></br> <code>{':Tomato;">Lorem ipsum...</p>'}</code> 
            </p>
          </div>
        ),
        options: ['background-color','color'],
        correctAnswer: 'background-color',
      },
      {
        type: 'text',
        text: (
            <div>
          <strong>RGB Color:</strong>
          <p>
            RGB stands for Red, Green, and Blue. It is represented as <code>rgb(red, green, blue)</code>, where each
            value is between 0 and 255.
          </p>
        </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q2-l6-css',
        text: <p>Example of use RGB Color<br></br>
         
        </p>,
        question: (
            <div>
            <p>
            <code>{'<h1 style="background-color:'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <br></br> <code>{';">...</h1>'}</code> 
            </p>
          </div>
        ),
        options: ['hsl(9, 100%, 64%)','#ff6347','rgb(255, 99, 71)'],
        correctAnswer: 'rgb(255, 99, 71)',
      },
      {
        type: 'text',
        text: (
            <div>
            <strong>HEX Color:</strong>
            <p>
              HEX is a hexadecimal representation of RGB. It is written as <code>#RRGGBB</code>,
              <br></br> where RR, GG, and BB are two-digit hexadecimal values for red, green, and blue, respectively.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l6-css',
        text: <p>Example of use HEX Color:<br></br>
         
        </p>,
        question: (
            <div>
            <p>
            <code>{'<h1 style="background-color:'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <br></br> <code>{';">...</h1>'}</code> 
            </p>
          </div>
        ),
        options: ['hsl(9, 100%, 64%)','#ff6347','rgb(255, 99, 71)'],
        correctAnswer: '#ff6347',
      },{
        type: 'text',
        text: (
            <div>
          <strong>HSL Color:</strong>
          <p>
            HSL stands for Hue, Saturation, and Lightness. It is represented as <code>hsl(hue, saturation%, lightness%)</code>,
          <br></br>  where hue is a degree on the color wheel (0 to 360), and saturation and lightness are percentages.
          </p>
        </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l6-css',
        text: <p>Example of use HSL Color:<br></br>
         
        </p>,
        question: (
            <div>
            <p>
            <code>{'<h1 style="background-color:'}</code> <br></br> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <br></br> <code>{';">...</h1>'}</code> 
            </p>
          </div>
        ),
        options: ['hsl(9, 100%, 64%)','#ff6347','rgb(255, 99, 71)'],
        correctAnswer: 'hsl(9, 100%, 64%)',
      },
     
    
  ];
  
  return (
    <div>
      <LessonSlide key="color"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonSixInCSS;

