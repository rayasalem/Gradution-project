import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizOneInCss: React.FC = () => {

      const quizQuestions = [
        {
          questionId: 'q1_Q1_css',
          text: 'What is CSS, and how does it enhance the presentation of an HTML document?',
          question: 'What is CSS, and how does it enhance the presentation of an HTML document?',
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
          text: 'How does specificity play a role in CSS selectors?',
          question: 'How does specificity play a role in CSS selectors?',
          options: [
            'Determines hyperlink destination',
            'Defines the order of styles',
            'Decides which style is applied in conflicts',
            'Sets document color',
          ],
          correctAnswers: 'Decides which style is applied in conflicts',

        },
        {
          questionId: 'q3_Q1_css',
          text: 'Explain the components of the CSS Box Model.',
          question: 'Explain the components of the CSS Box Model.',
          options: [
            'Width, height, and margin',
            'Padding, border, and margin',
            'Padding, color, and border',
            'Padding, image, and margin',
          ],
          correctAnswers:'Padding, border, and margin',

        },{
          questionId: 'q4_Q1_css',
          text: 'How does the universal selector (*) work in CSS?',
          question: 'How does the universal selector (*) work in CSS?',
          options: [
            'Selects all HTML elements on the page',
            'Targets specific elements',
            'Applies styles to inline elements',
            'Defines hyperlink destinations',
          ],
          correctAnswers: 'Selects all HTML elements on the page',

        },{
          questionId: 'q5_Q1_css',
          text: 'Explain the concept of grouping selectors in CSS. Provide an example.',
          question: 'Explain the concept of grouping selectors in CSS. Provide an example.',
          options: [
            'Selectors for nested elements',
            'Selectors applied to specific IDs',
            'Selectors combined for shared styles',
            'Selectors targeting specific classes',
          ],
          correctAnswers: 'Selectors combined for shared styles',

        },{
          questionId: 'q6_Q1_css',
          text: 'What is the purpose of the margin property in CSS?',
          question: 'What is the purpose of the margin property in CSS?',
            options: [
             'Controls text alignment',
             'Defines border style',
             'Specifies spacing outside the border',
             'Sets document color',
                   ],
         correctAnswers: 'Specifies spacing outside the border',

        },{
          questionId: 'q7_Q1_css',
          text: 'How is the border property used in CSS?',
          question: 'How is the border property used in CSS?',
          options: ['Defines space outside the border', 'Sets element width', 'Creates a line around content and padding', 'Adds space between content and border'],
          correctAnswers: 'Creates a line around content and padding',

        },{
          questionId: 'q8_Q1_css',
          text: 'Explain how the box model is essential for designing layouts in CSS.',
          question: 'Explain how the box model is essential for designing layouts in CSS.',
          options: [
            'Controls font styles',
            'Defines layout and spacing',
            'Manages interactivity',
            'Specifies hyperlink destinations',
          ],
          correctAnswers: 'Defines layout and spacing',

        },{
          questionId: 'q9_Q1_css',
          text: 'Describe the difference between margin and padding in the CSS Box Model.',
          question: 'Describe the difference between margin and padding in the CSS Box Model.',
          options: [
            'Margin is inside the border, padding is outside',
            'Margin is outside the border, padding is inside',
            'Margin and padding are the same',
            'Margin and padding are used interchangeably',
          ],
          correctAnswers: 'Margin is outside the border, padding is inside',

        },{
          questionId: 'q10_Q1_css',
          text: 'What is the purpose of the padding property in CSS?',
          question: 'What is the purpose of the padding property in CSS?',
          options: [
            'Controls text alignment',
            'Defines border style',
            'Specifies spacing inside the border',
            'Sets document color',
    ],
    correctAnswers: 'Specifies spacing inside the border',

        },
      ];   
  return (
    <div>
        <Quiz  quizQuestions={quizQuestions} />
    </div>
  )
}

export default QuizOneInCss