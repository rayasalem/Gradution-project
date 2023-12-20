import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonOneInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p> Cascading Style Sheets (CSS) is a stylesheet language used for describing the presentation of a document written in HTML.  
        <p>CSS enhances the look and feel of HTML by applying styles to elements on a web page.</p></p>,
    },{
      type: 'text',
      text: <p> CSS allows you to control the layout, colors, fonts, and spacing of HTML elements,
      <p> making it a powerful tool for designing and styling modern websites.</p>
      <p>  In this lesson, we'll explore the basics of CSS, including how to apply styles to HTML elements,use selectors, and understand the box model.</p></p>,
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l1-css',
      text: <p>CSS builds on top of HTML. The style attribute allows you to use CSS properties to customize the visual presentation of HTML elements.<br></br>
      Change the color of the paragraph text with the style attribute </p>,
      question: (
        <div>
          <p>
          <code>{'<p'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}<code>{'="color:green">'}</code> <br></br><code>{'Text</p>'}</code>
          </p>
        </div>
      ),
      options: ['design', 'style'],
      correctAnswer: 'style',
    },
    {
      type: 'text',
      text: <p>CSS follows a cascading order, where styles can be inherited, overridden, or combined to create a unified style.
        <br></br>Understanding the CSS Box Model is crucial, as it defines how elements are rendered in terms of width, height, padding, border, and margin.</p>,
    },
    {
      type: 'text',
      text:  <p>
      Selectors in CSS allow you to target specific HTML elements. Common selectors include element selectors, class selectors, and ID selectors.
      <br />,CSS properties control various aspects like color, font size, margin, padding, and more, providing fine-grained control over the appearance of elements.
    </p>,
    },
    {
      type: 'dragDrop',
      questionId: 'q2-l1-css',
      text: (
        <p>
            CSS stands for Cascading Style Sheets and is one of the 3 core web technologies.
            <br /> Match  type  with its purpose </p>
      ),
      question: (
        <div>
          <p>
          Structure:HTML <br />
          Style:{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
          </p>
        </div>
      ),
      options: ['javaScript', 'css'],
      correctAnswer: 'css',
    },
    {
      type: 'dragDrop',
      questionId: 'q3-l1-css',
      text: (
        <p>
           You'll learn to style your web pages in different ways.<br />
           The styling technique that adds CSS code inside HTML elements is called…
         </p>
      ),
      question: (
        <div>
          <p>
          The styling technique that adds CSS code inside HTML elements is called…
           <br></br>
          <code>{'<p style="color:orchid">My first paragraph.</p> <=='}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
          </p>
        </div>
      ),
      options: ['internal Css', 'inline Css'],
      correctAnswer: 'inline Css',
    },{
      type: 'text',
      text: <p> Now, let's explore these concepts in more detail and see how CSS can transform the visual presentation of your HTML documents.
      <br /></p>,
    },
  ];
  
  return (
    <div>
      <LessonSlide key="Introduction to CSS Course"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonOneInCSS;

