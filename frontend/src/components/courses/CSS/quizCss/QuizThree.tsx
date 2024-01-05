import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizThreeInCss: React.FC = () => {

      const quizQuestions = [
        {
          questionId: 'q1_Q3_css',
          text: 'What is the primary goal of responsive design, and why is it important for web development?',
          question: 'What is the primary goal of responsive design, and why is it important for web development?',
          options: [
            'Improved server performance',
            'Consistent user experience across devices',
            'Faster loading times',
            'Enhanced security features',
          ],
          correctAnswers: 'Consistent user experience across devices',

        },
        {
          questionId: 'q2_Q3_css',
          text: 'How do media queries to responsive design, and what aspects of a device do they target?',
          question: 'How do media queries to responsive design, and what aspects of a device do they target?',
          options: [
            'Adjusting font styles',
            'Setting device screen width',
            'Applying hover effects',
            'Controlling audio playback',
          ],
          correctAnswers: 'Setting device screen width',

        },
        {
          questionId: 'q3_Q3_css',
          text: 'Why are flexible grid systems essential for responsive layouts?',
          question: 'Why are flexible grid systems essential for responsive layouts?',
          options: [
            'They improve server response time',
            'They enable the creation of dynamic animations',
            'They adapt layouts to different screen sizes',
            'They control database queries',
          ],
          correctAnswers:'They adapt layouts to different screen sizes',

        },{
          questionId: 'q4_Q3_css',
          text: 'How does the text-align property contribute to text styling?',
          question: 'How does the text-align property contribute to text styling?',
          options: [
            'Setting font color',
            'Adjusting line height',
            'Controlling horizontal text alignment',
            'Applying text shadows',
          ],
          correctAnswers: 'Controlling horizontal text alignment',

        },{
          questionId: 'q5_Q3_css',
          text: 'When and why would you use the direction property in CSS?',
          question: 'When and why would you use the direction property in CSS?',
          options: [
            'Adjusting letter spacing',
            'Setting text rotation',
            'Controlling text direction',
            'Defining font weight',
          ],
          correctAnswers: 'Controlling text direction',

        },{
          questionId: 'q6_Q3_css',
          text: 'In CSS, how is the font-style property used to modify the appearance of text?',
          question: 'In CSS, how is the font-style property used to modify the appearance of text?',
            options: [
             'Changing font color',
             'Setting text size',
             'Adjusting font style (normal, italic, oblique)',
             'Controlling line spacing',
                   ],
         correctAnswers: 'Adjusting font style (normal, italic, oblique)',

        },{
          questionId: 'q7_Q3_css',
          text: 'What role does the font-size property play in CSS, and how can it be specified?',
          question: 'What role does the font-size property play in CSS, and how can it be specified?',
          options: ['Adjusting font weight', 'Controlling letter spacing',
           'Setting text size', 'Defining font family'],
          correctAnswers: 'Setting text size',

        },{
          questionId: 'q8_Q3_css',
          text: 'How does the font property serve as a shorthand for various font-related properties?',
          question: 'How does the font property serve as a shorthand for various font-related properties?',
          options: [
            'Font size and font color',
            'Font style and font weight',
            'Font family and font size',
            'Line height and letter spacing',
          ],
          correctAnswers: 'Font family and font size',

        },{
          questionId: 'q9_Q3_css',
          text: 'What CSS property is used to adjust the space between characters?',
          question: 'What CSS property is used to adjust the space between characters?',
          options: [
            'Letter spacing',
            'Line height',
            'Text transform',
            'Word spacing',
          ],
          correctAnswers: 'Letter spacing',

        },{
          questionId: 'q10_Q3_css',
          text: 'Describe the purpose of the text-shadow property in CSS, and how is it defined?',
          question: 'Describe the purpose of the text-shadow property in CSS, and how is it defined?',
          options: [
            'Adjusting text color',
            'Creating a shadow effect for text',
            'Controlling text rotation',
            'Defining font weight',
    ],
    correctAnswers: 'Creating a shadow effect for text',

        },
      ];   
  return (
    <div>
        <Quiz  quizQuestions={quizQuestions} />
    </div>
  )
}

export default QuizThreeInCss