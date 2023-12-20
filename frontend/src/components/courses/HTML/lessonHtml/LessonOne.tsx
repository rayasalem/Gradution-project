import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonOne: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>HTML (HyperText Markup Language) is the standard language for creating web pages. 
        <p>Let's explore the basic structure of an HTML document.</p></p>,
    },{
      type: 'text',
      text: <p>An HTML document begins with a <code>{'<!DOCTYPE>'}</code> declaration,
      <p>which defines the document type and version of HTML being used.</p></p>,
    },
    {
      type: 'dragDrop',
      questionId: 'q1',
      text: <p>The <code>{'<!DOCTYPE>'}</code> declaration represents the document type, and helps browsers to display web pages correctly.</p>,
      question: (
        <div>
          <p>
          It must only appear once, at the top of the page {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} any HTML tags.
          </p>
        </div>
      ),
      options: ['before', 'after'],
      correctAnswer: 'before',
    },
    {
      type: 'text',
      text: <p>The <code>{'<html>'}</code> element is the root element of an HTML document. All other elements are nested within it.</p>,
    },
    {
      type: 'text',
      text: <p>The <code>{'<head>'}</code> contains meta-information about the HTML document, such as the title, character set, linked stylesheets, and metadata.</p>,
    },
    {
      type: 'dragDrop',
      questionId: 'q2',
      text: (
        <p>
          Inside the <code>{'<head>'}</code>, the <code>{'<title>'}</code> element sets the title of the HTML document
          <br />
          , which is displayed in the browser's title bar or tab.
        </p>
      ),
      question: (
        <div>
          <p>
          <code>{'<head>'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}Page Title<code>{'</title>'}</code>
          <code>{'</head>'}</code>
          </p>
        </div>
      ),
      options: ['<title>', '<p>', '<h3>'],
      correctAnswer: '<title>',
    },
    {
      type: 'text',
      text: <p>The <code>{'<body>'}</code>  contains the content of the HTML document that is displayed on the web page.
      <br /> This includes text, images, links, and other elements.</p>,
    },{
      type: 'dragDrop',
      questionId: 'q2',
      text: (
        <p>
          Inside the <code>{'<head>'}</code>, the <code>{'<title>'}</code> element sets the title of the HTML document
        </p>
      ),
      question: (
        <div>
          <p>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<br></br><code>{'<h1>My First Heading</h1>'}</code><br></br>
          <code>{'<p>My first paragraph.</p>'}</code> <br></br>
          <code>{'</body>'}</code>
          </p>
        </div>
      ),
      options: ['<title>', '<body>', '<html>'],
      correctAnswer: '<body>',
    }
  ];
  
  return (
    <div>
      <LessonSlide key="lessonOne"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonOne;

