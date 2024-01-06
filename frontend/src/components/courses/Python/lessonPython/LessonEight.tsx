import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonEightInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>Functions in Python are reusable blocks of code that perform a specific task. 
        <br></br>Let's explore the fundamentals of Python functions.
      </p>
    },{
      type: 'text',
      text:  <div>
      <strong>Function Definition:</strong>
      <p>
        Define a function using the <code>def</code> keyword.
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l8-python',
      text:<p>Define a function named <code>greet</code> that prints "Hello, World!" when called.</p>,
      question: (
        <div>
        <p>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
          <code>
            {'greet():'}
          </code>
          <br></br>
          <code>
            {'print("Hello, World!")'}
          </code>
        </p>
      </div>
      ),
      options: ['create', 'define', 'def'],
      correctAnswer: 'def',
    },{
        type: 'text',
        text: (
            <div>
            <strong>Function Parameters:</strong>
            <p>
              Pass parameters to a function to make it more flexible.
            </p>
          </div>
        ),
      }, {
        type: 'dragDrop',
        questionId: 'q2-l8-python',
        text: <p>Modify the <code>greet</code> function to take a parameter  
        <br></br><code>name</code> and print a personalized greeting.</p>,
        question: (
            <div><p>
            
            <code>
              {'def greet('}
            </code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}
            <code>
              {'):'}
            </code>
            <br></br>
            <code>
              {' print("Hello, " + name + "!")'}
            </code>
          </p>
        </div>
        ),
        options: ['name','hello'],
        correctAnswer: 'name',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Function Return Values:</strong>
            <p>
              Use the <code>return</code> statement to return a value from a function.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l8-python',
        text:<p>Modify the <code>greet</code> function to return the greeting message instead of printing it.</p>,
        question: (
            <div><p>
            
            <code>
              {'def greet(name)'}
            </code>
            <br></br>
            {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
            <code>
              {' "Hello, " + name + "!"'}
            </code>
          </p>
        </div>
        ),
        options: ['change', 'convert', 'return'],
      correctAnswer: 'return',
      },{
        type: 'text',
        text: (
            <div>
            <strong>Default Parameters:</strong>
            <p>
              Set default values for function parameters.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q4-l7-python',
        text: <p>Modify the <code>greet</code> function to have a 
        <br></br>default parameter <code>name</code> set to "Guest".</p>
        ,
        question: (
            <div><p>
            <code>
              {'def greet(name="'}{selectedAnswer ? selectedAnswer : 'Your Answer Here'}
            </code>
            <code>
              {'"'}
            </code>
            <br></br> 
            <code>
              {'return "Hello, " + name + "!"'}
            </code>
          </p>
        </div>
        ),
        options: ['Guest', '"Guest"'],
      correctAnswer: 'Guest',
      },
      {
        type: 'text',
        text: (
            <div>
            <strong>Variable Number of Arguments:</strong>
            <p>
              Use the <code>*args</code> syntax to accept a variable number of arguments.
            </p>
          </div>
        ),
      },
     {
        type: 'text',
        text: (
            <div>
            <strong>Explore and Experiment:</strong>
            <p>
              Functions are a powerful tool in Python for organizing and reusing code.
              <br></br> Experiment with different function features to enhance your programming skills.
            </p>
          </div>
        ),
      }
  ];
  
  return (
    <div>
      <LessonSlide key="pythonFunctions" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonEightInPython;

