import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonEightInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);



  const slides: LessonSlide[] = [
    {
      type: 'text',
      text:   <p>
      Responsive Design involves creating designs that work well on various devices and screen sizes.
      <br />
      It ensures a seamless user experience, regardless of whether the user is on a desktop, tablet, or mobile device.
    </p>,
    },{
        type: 'text',
        text: (
            <div>
            <strong>Key Concepts:</strong>
            <p>
              <ul>
                <li>
                  <strong>Media Queries:</strong><br></br> Media queries allow you to apply styles based on the characteristics of the device, such as its width, height, or screen orientation.
                </li>
                <li>
                  <strong>Flexible Grid Systems:</strong><br></br> Using flexible grids helps in creating layouts that can adapt to different screen sizes. 
                </li>
              </ul>
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q1-l8-css',
        text: <p> Media query for screens with a maximum width of 600 pixels </p>,
        question: (
            <div>
            <p>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}<br></br>
              <code>{'only screen and (max-width: 600px) {'}</code>
              <br></br>
              <code>{' body {font-size: 14px} '}</code>
              <code>{'}'}</code>
            </p>
          </div>
        ),
        options: ['@media', 'media'],
        correctAnswer: '@media',
      },
      {
        type: 'text',
        text: (
          <div>
            <strong>Media Queries:</strong>
            <p>
              Media queries are a fundamental part of responsive design.
              <br></br> They allow you to apply CSS styles based on conditions such as screen width, height, and device characteristics.
            </p>
          </div>
        ),
      },
      {
        type: 'text',
        text: (
          <div>
            <strong>Flexible Grid Systems:</strong>
            <p>
              Flexible grid systems, such as those provided by CSS frameworks like Bootstrap, enable the creation of responsive layouts.
              <br />
              Columns and rows can be adjusted to fit different screen sizes.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q2-l8-css',
        text: <p>Creating a Bootstrap grid system with two columns of equal width</p>,
        question: (
            <div>
            <p>
              <code>{'<div class="container">'}</code>
              <br />
              <code>{'  <div class="row">'}</code>
              <br />
             {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
              <br />
             
              <code>{'    </div>'}</code>
          
              <code>{'  </div>'}</code>
              <br />
              <code>{'</div>'}</code>
            </p>
          </div>
        ),
        options: ['<div class="col-md-6">', '<div class="col-6">', '<div class="col-md">', '<div class="col">'],
        correctAnswer: '<div class="col-md-6">',
      },
    
  ];
  
  return (
    <div>
      <LessonSlide key="responsiveDesign"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonEightInCSS;

