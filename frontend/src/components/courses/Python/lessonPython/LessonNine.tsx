import React, { useState } from 'react';
import LessonSlide from './../../lessons/lessonStyle/LessonSlide';

const LessonNineInPython: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const slides: LessonSlide[] = [
    {
      type: 'text',
      text: <p>Conditional statements in Python, such as <code>if</code>, <code>else</code>, and <code>elif</code>, 
        <br></br>allow you to control the flow of your program based on conditions. Let's explore how to use them.
      </p>
    },{
      type: 'text',
      text: <div>
      <strong>Basic If Statement:</strong>
      <p>
        Use the <code>if</code> statement to execute a block of code if a condition is true.
      </p>
    </div>
    },
    {
      type: 'dragDrop',
      questionId: 'q1-l9-python',
      text:<p>Write an <code>if</code> statement that prints 
      <br></br>"It's a sunny day!" if the variable <code>isSunny</code> is true.</p>,
      question: (
        <div>
        <p>
          {selectedAnswer ? selectedAnswer : 'Your Answer Here'}
          <code>
            {'isSunny:'}
          </code>
          <br></br>
          <code>
            {`print("It's a sunny day!")`}
          </code>
        </p>
      </div>
      ),
      options: ['is', 'if', 'def'],
      correctAnswer: 'if',
    },{
        type: 'text',
        text: (
            <div>
            <strong>If...Else Statement:</strong>
            <p>
              Use <code>else</code> to specify a block of code to be executed if the condition is false.
            </p>
          </div>
        ),
      }, {
        type: 'dragDrop',
        questionId: 'q2-l9-python',
        text: <p>Add an <code>else</code> statement that prints "It's a cloudy day!" 
        <br></br>when <code>isSunny</code> is false.</p>,
        question: (
            <div>
            <p>
              <code>
                {'if isSunny:'}
              </code>
              <br></br>
              <code>
                {`print("It's a sunny day!")`}
              </code>
              <br></br>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}<code>{':'}</code>
              <br></br>
              <code>
                {`print("It's a cloudy day!")`}
              </code>
            </p>
          </div>
        ),
        options: ['else','if'],
        correctAnswer: 'else',
      },{
        type: 'text',
        text: (
            <div>
            <strong>If...Elif...Else Statement:</strong>
            <p>
              Use <code>elif</code> to add more conditions to check.
            </p>
          </div>
        ),
      },{
        type: 'dragDrop',
        questionId: 'q3-l8-python',
        text:<p>Extend the previous code to print
            <br></br> "It's a stormy day!" when <code>isStormy</code> is true.</p>,
        question: (
            <div>
            <p>
              
              <code>
                {'if isSunny:'}
              </code>
              <br></br>
              <code>
                {`print("It's a sunny day!")`}
              </code>
              <br></br>
              {selectedAnswer ? selectedAnswer : 'Your Answer Here'}<code>{'isStormy:'}</code>
              <br></br>
              <code>
                {`print("It's a stormy day!!")`}
              </code>
              <code>
                {'else isSunny:'}
              </code>
              <br></br>
              <code>
                {`print("It's a cloudy day!")`}
              </code>
            </p>
          </div>
        ),
        options: ['else', 'if', 'elif',],
      correctAnswer: 'elif',
      },{
        type: 'text',
        text: (
            <div>
          <strong>Logical Operators:</strong>
          <p>
            Use <code>and</code>, <code>or</code>, and <code>not</code> to combine or negate conditions.
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
              Conditional statements are crucial for decision-making in your Python programs.
              <br></br> Experiment with different conditions and logical operators to understand their impact on program flow.
            </p>
          </div>
        ),
      }
  ];
  
  return (
    <div>
      <LessonSlide key="pythonIfElse" slides={slides} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
    </div>
  );
};

export default LessonNineInPython;

