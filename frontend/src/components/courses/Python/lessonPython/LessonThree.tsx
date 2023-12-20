import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonThreeInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p> In Python, strings are sequences of characters. <br></br>
        Let's explore some important operations and methods related to strings.</p>,
    },{
      type: 'text',
      text: <div>
      <strong>Upper Case:</strong>
      <p>
        The <code>upper()</code> method is used to convert a string to uppercase.
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l3-python',
      text:<p>Convert the string <code>text</code> to uppercase.</p>,
      question: (
        <div>
           <p>
            <code>{'text = "example"'}</code> <br />
            <code>{'text.'}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'} 
          </p>
        </div>
      ),
      options: ['uppercase', 'toUppercase', 'upper'],
      correctAnswer: 'upper',
    },{
        type: 'text',
        text: (
          <div>
            <strong>String Concatenation:</strong>
            <p>
              Use the <code>+</code> operator to concatenate (combine) two strings.
            </p>
          </div>
        ),
      }, {
        type: 'dragDrop',
        questionId: 'q2-l3-python',
        text: <p>Concatenate the strings <code>str1</code> and <code>str2</code>.</p>,
        question: (
            <div>
            <p>
              <code>{'str1 = "Hello"'}</code> <br />
              <code>{'str2 = "World"'}</code> <br />
              <code>{'str1'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'} <code>{'str2'}</code>
            </p>
          </div>
        ),
        options: ['-', ',', '+'],
      correctAnswer: '+',
      },{
        type: 'text',
        text: (
            <div>
            <strong>String Methods - Slicing:</strong>
            <p>
              The <code>slice()</code> method is used to extract a portion of a string.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l3-python',
        text: <p>Extract the first three characters from the string <code>word</code>.
        </p>,
        question: (
            <div>
            <p>
              <code>{'word = "Python"'}</code> <br /><code>{'word'}</code>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'} 
            </p>
          </div>
        ),
        options: ['[:3]', '[0:3]','[2:]'],
        correctAnswer: '[0:3]',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Explore and Experiment:</strong>
            <p>
              Strings in Python offer a variety of methods and operations.  <br></br>
              Experiment with these to manipulate and work with text effectively in your Python programs.
            </p>
          </div>
        ),
      },
  ];
  
  return (
    <div>
      <LessonSlide key="pythonStrings"  slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonThreeInPython;

