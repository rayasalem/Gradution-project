import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizTwoInCss: React.FC = () => {

      const quizQuestions = [
        {
          questionId: 'q1_Q2_css',
          text: 'What is the purpose of the CSS display property?',
          question: 'What is the purpose of the CSS display property?',
          options: [
            'Defines document color',
            'Adds interactivity',
            'Enhances look and feel',
            'Specifies document size',
          ],
          correctAnswers: 'Enhances look and feel',

        },
        {
          questionId: 'q2_Q1_css',
          text: 'How are block-level elements different from inline elements in the CSS Box Model?',
          question: 'How does specificity play a role in CSS selectors?',
          options: [
            'Block-level elements take up the full width, while inline elements take up necessary width',
            'Inline elements create a box in the layout, while block-level elements flow with the content.',
            'Block-level elements are hidden, while inline elements are visible',
            'Inline elements start on a new line, while block-level elements do not.',
          ],
          correctAnswers: 'Block-level elements take up the full width, while inline elements take up necessary width.',

        },
        {
          questionId: 'q3_Q2_css',
          text: 'What does the CSS property display: none; do?',
          question: 'Explain the components of the CSS Box Model.',
          options: [
            'Width, height, and margin Creates a line around content and padding',
            'Hides an element and removes it from the layout',
            ' Defines the order of styles',
            'Specifies spacing outside the border',
          ],
          correctAnswers:'Hides an element and removes it from the layout',

        },{
          questionId: 'q4_Q2_css',
          text: 'What is the default positioning method used for an element when no position is specified?',
          question: 'What is the default positioning method used for an element when no position is specified?',
          options: [
            'Relative',
            'Absolute',
            'Fixed',
            'Static',
          ],
          correctAnswers: 'Static',

        },{
          questionId: 'q5_Q2_css',
          text: 'How does a relatively-positioned element behave when its top, right, bottom, and left properties are set?',
          question: 'How does a relatively-positioned element behave when its top, right, bottom, and left properties are set?',
          options: [
            'It adjusts away from its normal position.',
            'It remains fixed relative to the viewport.',
            'It becomes hidden from the layout.',
            'It expands to fill the available space.',
          ],
          correctAnswers: 'It adjusts away from its normal position.',

        },{
          questionId: 'q6_Q2_css',
          text: 'Which CSS property is used to set the background color of an HTML element?',
          question: 'Which CSS property is used to set the background color of an HTML element?',
            options: [
             'color',
             'background-color',
             'background',
             ' text-color',
                   ],
         correctAnswers: 'background-color',

        },{
          questionId: 'q7_Q2_css',
          text: 'In the RGB color model, how is the color represented?',
          question: 'In the RGB color model, how is the color represented?',
          options: ['As a hexadecimal value', ' As a combination of hue, saturation, and lightness',
           'As a combination of red, green, and blue values', 'As a percentage value'],
          correctAnswers: 'As a combination of red, green, and blue values',

        },{
          questionId: 'q8_Q2_css',
          text: 'In the HSL color model, what does the "hue" represent?',
          question: 'In the HSL color model, what does the "hue" represent?',
          options: [
            'Color intensity',
            'Color brightness',
            'Color name',
            'Color shade',
          ],
          correctAnswers: 'Color intensity',

        },{
          questionId: 'q9_Q2_css',
          text: 'How is the HSL color represented in CSS?',
          question: 'How is the HSL color represented in CSS?',
          options: [
            'hsl(9, 100%, 64%)',
            '#ff6347',
            'rgb(255, 99, 71)',
            'hsl(0, 0%, 100%)',
          ],
          correctAnswers: 'hsl(9, 100%, 64%)',

        },{
          questionId: 'q10_Q2_css',
          text: 'How is the RGB color represented in CSS?',
          question: 'How is the HSL color represented in CSS?',
          options: [
            'hsl(9, 100%, 64%)',
            '#ff6347',
            'rgb(255, 99, 71)',
            'hsl(0, 0%, 100%)',
          ],
          correctAnswers: 'rgb(255, 99, 71)',

        },
      ];   
  return (
    <div>
        <Quiz quizQuestions={quizQuestions} />
    </div>
  )
}

export default QuizTwoInCss