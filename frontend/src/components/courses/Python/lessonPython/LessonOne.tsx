import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonOneInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>Python is a versatile and high-level programming language known for its readability and simplicity.
        <br></br>  Let's explore the fundamental concepts and features that make Python a popular choice for developers.</p>,
    },{
      type: 'text',
      text: <div>
      <strong>Key Features of Python:</strong>
      <p>
        <ul>
          <li>
            <strong>Readability:</strong> Python's syntax is clear and expressive, making it easy to write and understand code.
          </li>
          <li>
            <strong>Extensive Libraries:</strong> Python offers a rich set of libraries for various applications, reducing development time.
          </li>
          <li>
            <strong>Community Support:</strong> A large and active community provides support, tutorials, and a wealth of resources.
          </li>
        </ul>
      </p>
    </div>,
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l1-python',
      text: <p>Python has a simple syntax which means it's easy to write, read and learn!
        <br></br> print("Welcome")
      </p>,
      question: (
        <div>
          <p>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}("Welcome")
          </p>
        </div>
      ),
      options: ['send', 'print'],
      correctAnswer: 'print',
    }, {
        type: 'dragDrop',
        questionId: 'q2-l1-python',
        text: <p>The print() instruction requires the use of parentheses around the message.
          <br></br> Complete the code
        </p>,
        question: (
          <div>
            <p>
            print {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
            <code>{'"Welcome")'}</code>
            </p>
          </div>
        ),
        options: [')', '('],
        correctAnswer: '(',
      },{
        type: 'dragDrop',
        questionId: 'q3-l1-python',
        text: <p>Make sure you use quotation marks around the text messages.
          <br></br> Complete the code for a music app
        </p>,
        question: (
          <div>
            <p>
             <code>{'print('}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
            <code>{'Welcome")'}</code>
            </p>
          </div>
        ),
        options: ['<', '"'],
        correctAnswer: '"',
      },{
        type: 'dragDrop',
        questionId: 'q4-l1-python',
        text: <p>Numbers don't require quotation marks.
          <br></br> Complete the code to send the number to the screen
        </p>,
        question: (
          <div>
            <p>
             <code>{'print('}</code>{selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '} 
            <code>{')'}</code>
            </p>
          </div>
        ),
        options: ['360', '"360"'],
        correctAnswer: '360',
      },
    {
      type: 'text',
      text: <p>Amazing job! Python is widely used to build software and games, analyze data and program Artificial Intelligence
        <br></br>You learned that:<br></br>🌟 humans use code to give instructions to machines
        <br></br>🌟 the print() instruction displays a message on the screen</p>,
    },
    
  ];
  
  return (
    <div>
      <LessonSlide key="pythonIntroduction" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonOneInPython;

