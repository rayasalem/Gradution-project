import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';
import { useParams } from 'react-router-dom';

const LessonTwoInCSS: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>
      Understanding how selectors work and their specificity is fundamental.
      <p>It involves selecting HTML elements to apply styles.</p>
    </p>,
    },{
        type: 'text',
        text: (
          <p>
            Three common types of selectors are:
            <ul>
              <li>Element Selectors</li>
              <li>Class Selectors</li>
              <li>ID Selectors</li>
            </ul>
          </p>
        ),
      },
      {
        type: 'dragDrop',
        questionId: 'q1-l2-css',
        text: <p>To select an element with a specific id, write a hash (#) character, <br></br>followed by the id of the element. 
        To select an element with a specific class, write a hash (.) character,<br></br> followed by the class of the element.
        <br></br> The CSS rule below will be applied to the HTML element with id="para1":  </p>,
        question: (
            <div>
            <p>
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <code>{'{text-align: center;'}</code> <br></br> <code>{' color: blue;}'}</code> 
            </p>
          </div>
        ),
        options: ['#para1','.para1', '$para1'],
        correctAnswer: '#para1',
      },
    {
      type: 'dragDrop',
      questionId: 'q2-l2-css',
      text: <p>The specificity of a selector determines which style is applied <br></br>
      when multiple conflicting styles are present.<br></br>
      Which of the following determinants is shown in the example? </p>,
      question: (
        <div>
          <p>
          <code>{' <p id="uniqueElement">This is a paragraph </p> <=='}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
          </p>
        </div>
      ),
      options: ['.class-selector','#id-selector', 'element-selector'],
      correctAnswer: '#id-selector',
    },
    {
      type: 'text',
      text: <p>CSS follows a cascading order, where styles can be inherited, overridden, or combined to create a unified style.
        <br></br>Understanding the CSS Box Model is crucial, as it defines how elements are rendered in terms of width, height, padding, border, and margin.</p>,
    },
    {
      type: 'text',
      text:  <p>Understanding how selectors combine and override each other
      <br />is crucial for creating maintainable and effective stylesheets.
    </p>,
    },
    {
      type: 'dragDrop',
      questionId: 'q3-l2-css',
      text: (
        <p>
           In this example the<code>{'<p>'}</code>element will be styled according to class="center" and to class="large":<br />  </p>
      ),
      question: (
        <div>
          <p>
          <code>{'<p class='}</code>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
          <code>{'>This paragraph refers to two classes.</p>'}</code>
          </p>
        </div>
      ),
      options: ['centerlarge', 'center-large', 'center large'],
      correctAnswer: 'center large',
    },
    {
      type: 'dragDrop',
      questionId: 'q4-l2-css',
      text: (
        <p>
           The universal selector (*) selects all HTML elements on the page.<br />
           The CSS rule below will affect every HTML element on the page: 
         </p>
      ),
      question: (
        <div>
          <p>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
          <code>{'{text-align: center;'}</code> <br></br> <code>{' color: blue;}'}</code> 
          </p>
        </div>
      ),
      options: ['*', '.'],
      correctAnswer: '*',
    },{
        type: 'dragDrop',
        questionId: 'q5-l2-css',
        text: (
          <p>
             The grouping selector selects all the HTML elements with the same style definitions.<br />
             Look at the following CSS code (the h1 elements have the same style definitions):
           </p>
        ),
        question: (
          <div>
            <p>
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <code>{'{text-align: center;'}</code> <br></br> <code>{' color: blue;}'}</code> 
            </p>
          </div>
        ),
        options: ['h2', 'h1','*'],
        correctAnswer: 'h1',
      },{
        type: 'dragDrop',
        questionId: 'q6-l2-css',
        text: (
          <p>
             It will be better to group the selectors, to minimize the code.<br />
             To group selectors, separate each selector with a comma.<br />
             Look at the following CSS code (the h1, h2, and p elements have the same style definitions):
           </p>
        ),
        question: (
          <div>
            <p>
            <code>{'h1 , h2 '}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <code>{'p'}</code> <br></br>
            <code>{'{text-align: center;'}</code> <br></br> <code>{' color: blue;}'}</code> 
            </p>
          </div>
        ),
        options: ['-', ',','*'],
        correctAnswer: ',',
      },
  ];
  
  return (
    <div>
      <LessonSlide key="selectorsAndSpecificity"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonTwoInCSS;

