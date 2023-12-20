import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonTwoInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>In Python, variables are used to store data values. Let's explore the basics of working with variables.</p>,
    },{
      type: 'text',
      text: <div>
      <strong>Creating Variables:</strong>
      <p>
        In Python, you can create a variable by assigning a value to it. For example:
      </p>
      <p>
        <code>{'x = 5'}</code> <br></br><code>{'y = "John"'}</code>
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l2-python',
      text: <p>To create a variable, you just need to give it a name.
        <br></br> Complete the code to create a variable called item
      </p>,
      question: (
        <div>
          <p>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}(="bike")
          </p>
        </div>
      ),
      options: ['item', 'shop'],
      correctAnswer: 'item',
    }, {
        type: 'dragDrop',
        questionId: 'q2-l2-python',
        text: <p>Variables have a name and a value. They are connected with the equal sign =.
          <br></br> Complete the code to store the value watch in a variable named item
        </p>,
        question: (
          <div>
            <p>
            item {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
            <code>{'"watch"'}</code>
            </p>
          </div>
        ),
        options: ['=', ':'],
        correctAnswer: '=',
      },{
        type: 'text',
        text: (
          <div>
            <strong>Variable Names:</strong>
            <p>
              Variable names in Python can include letters, numbers, and underscores.
              <br></br> They cannot start with a number.
            </p>
            <p>
              <code>{'my_variable = 10'}</code>
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l2-python',
        text: <p>Illegal variable names:
        </p>,
        question: (
          <div>
            <p>
             {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
            <code>{'"John"'}</code>
            </p>
          </div>
        ),
        options: ['2myvar', '_my_var','MYVAR'],
        correctAnswer: '2myvar',
      },{
        type: 'text',
        text: (
          <div>
            <strong>Many Values to Multiple Variables:</strong>
            <p>
              You can assign multiple values to multiple variables in a single line.
            </p>
            <p>
              <code>{'a, b, c = 1, 2, 3'}</code>
            </p>
          </div>
        ),
      },{
        type: 'text',
        text: (
          <div>
            <p>
            And you can assign the same value to multiple variables in one line:
            </p>
            <p>
              <code>{'x = y = z = "Orange"'}</code>
            </p>
          </div>
        ),
      },{
        type: 'text',
        text: (
          <div>
            <strong>Output Variables:</strong>
            <p>
              You can output the value of a variable using the <code>print</code> function.
            </p>
            <p>
              <code>{'print(x)'}</code>
            </p>
          </div>
        ),
      }, {
        type: 'text',
        text: (
          <div>
            <strong>Global Variables:</strong>
            <p>
              A variable declared outside a function is a global variable and can be accessed globally.
            </p>
            <p>
              <code>{'global_var = 50'}</code>
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q4-l2-python',
        text: <p>You can also use the + operator to output multiple variables:
          
        </p>,
        question: (
          <div>
            <p>
             x = "Python " <br></br>
             y = "is " <br></br>
             z = "awesome" <br></br>
             <code>{'print('}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
            <code>{'y + z)'}</code>
            </p>
          </div>
        ),
        options: ['+', '-'],
        correctAnswer: '+',
      },
    
    
  ];
  
  return (
    <div>
      <LessonSlide key="Variables" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonTwoInPython;

