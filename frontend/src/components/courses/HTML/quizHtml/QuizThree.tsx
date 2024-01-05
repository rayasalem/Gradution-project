import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../../quizes/Quiz';

interface MultipleChoiceQuestionProps {
  questionId: string;
  text: string;
  question: string;
  options: string[];
  correctAnswers: string;
}

const QuizThree: React.FC = () => {
 
  const quizQuestions: MultipleChoiceQuestionProps[] = [
    {
      questionId: 'q1_HTMLMedia',
      text: 'How can audio and video content be embedded in HTML?',
      question: 'How can audio and video content be embedded in HTML?',
      options: [
        '<audio> and <video> tags',
        '<sound> and <vision> tags',
        '<music> and <movie> tags',
        '<media> and <player> tags',
      ],
      correctAnswers: '<audio> and <video> tags',
    },
    {
      questionId: 'q2_HTMLStyle',
      text: 'What attribute is used to set the background color of an HTML element?',
      question: 'What attribute is used to set the background color of an HTML element?',
      options: ['bgcolor', 'color', 'background-color', 'style'],
      correctAnswers: 'background-color',
    },
    {
      questionId: 'q3_HTMLStyle',
      text: 'How can you define the text color of an HTML element using inline styling?',
      question: 'How can you define the text color of an HTML element using inline styling?',
      options: [
        'color',
        'text-color',
        'font-color',
        'style',
      ],
      correctAnswers: 'color',
    },
    {
      questionId: 'q4_HTMLMetadata',
      text: 'What does the <meta> tag provide in HTML?',
      question: 'What does the <meta> tag provide in HTML?',
      options: [
        'Styling information',
        'Page navigation',
        'Metadata about the HTML document',
        'Audio and video embedding',
      ],
      correctAnswers: 'Metadata about the HTML document',
    },
    {
      questionId: 'q5_HTMLMetadata',
      text: 'What attribute is used to specify the character encoding in the <meta> tag?',
      question: 'What attribute is used to specify the character encoding in the <meta> tag?',
      options: ['charset', 'encoding', 'char', 'text'],
      correctAnswers: 'charset',
    },
    {
      questionId: 'q6_HTML5Features',
      text: 'What are some new input types introduced in HTML5?',
      question: 'What are some new input types introduced in HTML5?',
      options: [
        'date, email, search',
        'audio, video, image',
        'file, folder, directory',
        'text, number, checkbox',
      ],
      correctAnswers: 'date, email, search',
    },
    {
      questionId: 'q7_HTML5Features',
      text: 'What is the primary purpose of the <canvas> element in HTML5?',
      question: 'What is the primary purpose of the <canvas> element in HTML5?',
      options: [
        'Creating hyperlinks',
        'Drawing graphics',
        'Embedding media content',
        'Styling web elements',
      ],
      correctAnswers: 'Drawing graphics',
    },{
      questionId: 'q8_HTMLStyle',
      text: 'Which property is used to customize text fonts for an HTML element?',
      question: 'Which property is used to customize text fonts for an HTML element?',
      options: [
        'font-style',
        'text-font',
        'font-family',
        'style',
      ],
      correctAnswers: 'font-family',
    },{
      questionId: 'q9_HTMLStyle',
      text: 'What is the primary purpose of the <canvas> element in HTML5?',
      question: 'What is the primary purpose of the <canvas> element in HTML5?',
      options: [
        'Creating hyperlinks',
        'Drawing graphics',
        'Embedding media content',
        'Styling web elements',
      ],
      correctAnswers: 'Drawing graphics',
    },{
      questionId: 'q10_HTMLStyle',
      text: 'To adjust text sizes using inline styling, which property should be used?',
      question: 'To adjust text sizes using inline styling, which property should be used?',
      options: [
        'font-size',
        'text-size',
        'size',
        'style',
      ],
      correctAnswers: 'font-size',
    },
  ];

  return (
    <div>
      <Quiz  quizQuestions={quizQuestions} />
    </div>
  );
};

export default QuizThree;