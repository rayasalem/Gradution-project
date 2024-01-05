import React, { useState } from 'react';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';

const LessonEight = () => {
const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

      const slides: LessonSlide[] = [
        {
          type: 'text',
          text: <p> Learn to style HTML elements using the <code>{'style'}</code> attribute.
            <p> The <code>{'style'}</code> attribute allows inline styling for individual elements.</p></p>,
        },
        {
          type: 'dragDrop',
          questionId: 'q1-l8',
          text: <p>Use <code>{'background-color'}</code> to set the background color of an element.</p>,
          question: (
            <div>
              <p>
              <code>{'<div style="'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
              <code>{' : #3498db;">Blue Background</div>'}</code>
              </p>
            </div>
          ),
          options: ['background-color', 'color'],
          correctAnswer: 'background-color',
        },
        {
            type: 'dragDrop',
            questionId: 'q2-l8',
            text: <p> Set text color with the <code>{'color'}</code> property.</p>,
            question: (
              <div>
                <p>
                <code>{'<p style="'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
               <code>{': #2ecc71;">Green Text</p>'}</code>
                </p>
              </div>
            ),
            options: ['background-color', 'color'],
            correctAnswer: 'color',
          },
        {
            type: 'dragDrop',
            questionId: 'q3-l8',
            text: <p>Customize text fonts using <code>{'font-family'}</code>.</p>,
            question: (
              <div>
                <p>
                <code>{'<h1 style="'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
               <code>{': \'Arial\', sans-serif;">Styled Heading</h1>'}</code>
                </p>
              </div>
            ),
            options: ['font-family', 'color'],
            correctAnswer: 'font-family',
          },
          {
            type: 'dragDrop',
            questionId: 'q4-l8',
            text: <p>Adjust text sizes using the <code>{'font-size'}</code> property.</p>,
            question: (
              <div>
                <p>
                <code>{'<span style="'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
               <code>{': 18px;">Larger Text</span>'}</code>
                </p>
              </div>
            ),
            options: ['font-family', 'font-size'],
            correctAnswer: 'font-size',
          },
          {
            type: 'dragDrop',
            questionId: 'q5-l8',
            text: <p>Align text with the <code>{'text-align'}</code> property. </p>,
            question: (
              <div>
                <p>
                <code>{'<div style="'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
               <code>{': center;">Centered Text</div>'}</code>
                </p>
              </div>
            ),
            options: ['text-align', 'font-size'],
            correctAnswer: 'text-align',
          },
          {
            type: 'dragDrop',
            questionId: 'q6-l8',
            text: <p> Set the <code>{'font-weight'}</code> property to control the thickness of text. </p>,
            question: (
              <div>
                <p>
                <code>{'<span style="'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
               <code>{': bold;">Bold Text</span>'}</code>
                </p>
              </div>
            ),
            options: ['font-weight', 'font-size'],
            correctAnswer: 'font-weight',
          },{
            type: 'dragDrop',
            questionId: 'q7-l8',
            text: <p>  Use the <code>{'text-decoration'}</code> property to add or remove decorations like underlines.</p>,
            question: (
              <div>
                <p>
                <code>{'<a href="#" style="'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
               <code>{': none; color: #e74c3c;">No Underline Link</a>'}</code>
                </p>
              </div>
            ),
            options: ['text-decoration', 'text-align'],
            correctAnswer: 'text-decoration',
          },
        
      ];
  return (
    <div>
     <LessonSlide key="lessonEight"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  )
}

export default LessonEight