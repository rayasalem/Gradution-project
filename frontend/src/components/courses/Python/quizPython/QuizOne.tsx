import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizOneInPython: React.FC = () => {

      const quizQuestions = [
        {
          questionId: 'q1_Q1_python',
          text: 'What is Python primarily known for?',
          question: 'What is Python primarily known for?',
          options: ['Speed', 'Readability', 'Complexity', 'Syntax'],
          correctAnswers: 'Readability',
        },
        {
          questionId: 'q2_Q1_python',
          text: 'What function is used to display a message on the screen in Python?',
          question: 'What function is used to display a message on the screen in Python?',
          options:['show()', 'display()', 'print()', 'output()'],
          correctAnswers: 'print()',

        },
        {
          questionId: 'q3_Q1_python',
          text: 'Which symbol is used to create a variable in Python?',
          question: 'Which symbol is used to create a variable in Python?',
          options: ['$', '%', '@', '='],
          correctAnswers:'=',

        },{
          questionId: 'q4_Q1_python',
          text: 'What is the purpose of the global keyword in Python?',
          question: 'What is the purpose of the global keyword in Python?',
          options: ['Declare a global constant', 'Declare a global variable',
           'Specify global indentation', 'Define a global function'],
          correctAnswers: 'Declare a global variable',

        },{
          questionId: 'q5_Q1_python',
          text: 'How do you output the value of multiple variables in Python?',
          question: 'How do you output the value of multiple variables in Python?',
          options: ['print(var1, var2)', 'output(var1, var2)',
           'display(var1, var2)', 'show(var1, var2)'],
          correctAnswers: 'print(var1, var2)',

        },{
          questionId: 'q6_Q1_python',
          text: 'What is the correct way to create multiple variables with the same value?',
          question: 'What is the correct way to create multiple variables with the same value?',
          options: ['x, y, z = "Same"', 'x = y = z = "Same"', 'x = y = z, "Same"', 'x, y, z = "Same", "Same", "Same"'],
          correctAnswers: 'x = y = z = "Same"',

        },{
          questionId: 'q7_Q1_python',
          text: 'How do you convert a string to uppercase in Python?',
          question: 'How do you convert a string to uppercase in Python?',
          options: ['str.toUpper()', 'str.uppercase()', 'str.upper()', 'str.toUppercase()'],
          correctAnswers: 'str.upper()',

        },{
          questionId: 'q8_Q1_python',
          text: 'What operator is used for string concatenation in Python?',
          question: 'What operator is used for string concatenation in Python?',
          options:['&', ',', '+', '-'],
          correctAnswers: '+',

        },{
          questionId: 'q9_Q1_python',
          text: 'What does the slice() method do in Python?',
          question: 'What does the slice() method do in Python?',
          options: ['Slice a pizza', 'Extract a portion of a string',
           'Split a list', 'Dice vegetables'],
          correctAnswers: 'Extract a portion of a string',

        },{
          questionId: 'q10_Q1_python',
          text: 'What is the purpose of the global keyword in Python?',
          question: 'What is the purpose of the global keyword in Python?',
          options: ['Declare a global constant', 'Declare a global variable',
           'Specify global indentation', 'Define a global function'],
          correctAnswers: 'Declare a global variable',

        },
      ];   
  return (
    <div>
        <Quiz  quizQuestions={quizQuestions} />
    </div>
  )
}

export default QuizOneInPython