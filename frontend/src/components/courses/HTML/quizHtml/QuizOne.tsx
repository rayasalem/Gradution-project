import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizOne: React.FC = () => {
    
      const quizQuestions = [
        {
          questionId: 'q1_Q1',
          text: 'What does the "src" attribute in the <img> element specify?',
          question: 'What does the "src" attribute in the <img> element specify?',
          options: ['Image style', 'Image source', 'Image size', 'Image shape'],
          correctAnswers: 'Image source',

        },
        {
          questionId: 'q2_Q1',
          text: 'Which attribute is used in the <a> element to define the hyperlink destination?',
          question: 'Which attribute is used in the <a> element to define the hyperlink destination?',
          options:['link', 'destination', 'url', 'href'],
          correctAnswers: 'href',

        },
        {
          questionId: 'q3_Q1',
          text: 'What does the "target" attribute in the <a> element control?',
          question: 'What does the "target" attribute in the <a> element control?',
          options: ['Link color', 'Link size', 'Linked content display', 'Link position'],
          correctAnswers:'Linked content display',

        },{
          questionId: 'q4_Q1',
          text: 'What does the <ul> element represent in HTML?',
          question: 'What does the <ul> element represent in HTML?',
          options: ['Ordered list', 'Unordered list', 'Link list', 'Image list'],
          correctAnswers: 'Unordered list',

        },{
          questionId: 'q5_Q1',
          text: 'In the <input> element, what is the purpose of the placeholder attribute?',
          question: 'In the <input> element, what is the purpose of the placeholder attribute?',
          options: ['Provide input value', 'Define input style', 'Offer input suggestion', 'Specify input size'],
          correctAnswers: 'Offer input suggestion',

        },{
          questionId: 'q6_Q1',
          text: 'Where should the <!DOCTYPE> declaration appear in an HTML document?',
          question: 'Where should the <!DOCTYPE> declaration appear in an HTML document?',
          options: ['After <html>', 'Before <html>', 'Inside <head>', 'Inside <body>'],
          correctAnswers: 'Before <html>',

        },{
          questionId: 'q7_Q1',
          text: 'What attribute in the <input> element specifies the type of input control?',
          question: 'What attribute in the <input> element specifies the type of input control?',
          options: ['type', 'placeholder', 'link', 'value'],
          correctAnswers: 'type',

        },{
          questionId: 'q8_Q1',
          text: 'What is the purpose of the <li> element in HTML?',
          question: 'What is the purpose of the <li> element in HTML?',
          options:['Create images', 'Create links', 'Create lists', 'Create paragraphs'],
          correctAnswers: 'Create lists',

        },{
          questionId: 'q9_Q1',
          text: 'What is the purpose of the <!DOCTYPE> declaration in an HTML document?',
          question: 'What is the purpose of the <!DOCTYPE> declaration in an HTML document?',
          options: ['Set document style', 'Define document structure', 'Specify document color', 'Declare document size'],
          correctAnswers: 'Define document structure',

        },{
          questionId: 'q10_Q1',
          text: 'Which tag is used to create an ordered list in HTML?',
          question: 'Which tag is used to create an ordered list in HTML?',
          options: ['<ol>', '<order>', '<list>', '<ul>'],
          correctAnswers: '<ol>',

        },
      ];   
  return (
    <div>
        <Quiz  quizQuestions={quizQuestions} />
    </div>
  )
}

export default QuizOne