import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizThreeInPython: React.FC = () => {
   
      const quizQuestions = [
        {
          questionId: 'q1_Q3_python',
          text: 'Access the value of the key age in the dictionary person.',
          question: 'Access the value of the key age in the dictionary person.',
          options: ['(age)', '[age]', '{age}', '+ age'],
          correctAnswers: '[age]',

        },
        {
          questionId: 'q2_Q3_python',
          text: 'Add a new key email with the value example@email.com to the dictionary person.',
          question: 'Add a new key email with the value example@email.com to the dictionary person.',
          options:['add', 'insert', 'update', 'remove'],
          correctAnswers: 'update',

        },
        {
          questionId: 'q3_Q3_python',
          text: 'Remove the key email from the dictionary person?',
          question: 'Remove the key email from the dictionary person?',
          options: ['add', 'delete', 'remove', 'pop'],
          correctAnswers:'pop',

        },{
          questionId: 'q4_Q3_python',
          text: 'Loop through the keys of the person dictionary and print each key?',
          question: 'Loop through the keys of the person dictionary and print each key??',
          options: ['for', 'if', 'while', 'Lopp'],
          correctAnswers: 'for',

        },{
          questionId: 'q5_Q3_python',
          text: 'Merge the dictionaries dict1 and dict2?',
          question: 'Merge the dictionaries dict1 and dict2?',
          options: ['merge', 'copy(dict2)', 'update(dict2)', 'update'],
          correctAnswers: 'update(dict2)',

        },{
          questionId: 'q6_Q3_python',
          text: 'Define a function named greet that prints "Hello, World!" when called?',
          question: 'Define a function named greet that prints "Hello, World!" when called?',
          options: ['create', 'define', 'def', 'add'],
          correctAnswers: 'def',

        },{
          questionId: 'q7_Q3_python',
          text: 'Modify the greet function to take a parameter name and print a personalized greeting.',
          question: 'Modify the greet function to take a parameter name and print a personalized greeting.',
          options: ['greet(name)', 'hello', 'greet()', 'greet'],
          correctAnswers: 'greet(name)',

        },{
          questionId: 'q8_Q3_python',
          text: 'Modify the greet function to return the greeting message instead of printing it.',
          question: 'Modify the greet function to return the greeting message instead of printing it.',
          options:['change', 'convert', 'return', 'Create'],
          correctAnswers: 'return',

        },{
          questionId: 'q9_Q3_python',
          text: 'What syntax is used to accept a variable number of arguments in a function?',
          question: 'What syntax is used to accept a variable number of arguments in a function?',
          options: ['*args', '**args', '&args', '%args'],
          correctAnswers: '*args',

        },{
          questionId: 'q10_Q3_python',
          text: 'What can you do by nesting for loops in Python?',
          question: 'What can you do by nesting for loops in Python?',
          options: ['Iterate over multiple sequences', 'Create conditional statements',
           'Define functions', 'no one'],
          correctAnswers: 'Iterate over multiple sequences',

        },
      ];   
  return (
    <div>
        <Quiz  quizQuestions={quizQuestions} />
    </div>
  )
}

export default QuizThreeInPython