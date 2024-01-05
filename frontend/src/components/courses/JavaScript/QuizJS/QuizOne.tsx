import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizOnejs: React.FC = () => {

    const quizQuestions = [
        {
            questionId: 'q1_Q1_js',
            text: 'Which keyword is used to declare a variable that cannot be reassigned?',
            question: 'Which keyword is used to declare a variable that cannot be reassigned?',
            options: ['var', 'let', 'const', 'both let and const'],
            correctAnswers: 'const',
        },
        {
            questionId: 'q2_Q1_js',
            text: 'What will be the value of x after this statement: let x = 5; x += 3;?',
            question: 'What will be the value of x after this statement: let x = 5; x += 3;?',
            options: ['3', '5', '8', '15'],
            correctAnswers: '8',
        },
        {
            questionId: 'q3_Q1_js',
            text: 'Which operator is used for strict equality in JavaScript?',
            question: 'Which operator is used for strict equality in JavaScript?',
            options: ['==', '===', '=', '!='],
            correctAnswers: '===',
        },
        {
            questionId: 'q4_Q1_js',
            text: 'What will be the result of: 10 + "20" in JavaScript?',
            question: 'What will be the result of: 10 + "20" in JavaScript?',
            options: ['30', '1020', 'Error', '102030'],
            correctAnswers: '1020',
        },
        {
            questionId: 'q5_Q1_js',
            text: 'Which function type returns a value back to the caller?',
            question: 'Which function type returns a value back to the caller?',
            options: ['Regular function', 'Arrow function', 'Both regular and arrow functions', 'None of the above'],
            correctAnswers: 'Both regular and arrow functions',
        },
        {
            questionId: 'q6_Q1_js',
            text: 'What is the purpose of a default parameter in a JavaScript function?',
            question: 'What is the purpose of a default parameter in a JavaScript function?',
            options: ['To specify a parameter as required', 'To assign a value in case no argument is passed', 'To avoid function errors', 'To define a parameter type'],
            correctAnswers: 'To assign a value in case no argument is passed',
        },
        {
            questionId: 'q7_Q1_js',
            text: 'Which logical operator in JavaScript has higher precedence?',
            question: 'Which logical operator in JavaScript has higher precedence?',
            options: ['&& (logical AND)', '|| (logical OR)', '! (logical NOT)', 'All have equal precedence'],
            correctAnswers: '&& (logical AND)',
        },
        {
            questionId: 'q8_Q1_js',
            text: 'What is the result of typeof 42 in JavaScript?',
            question: 'What is the result of typeof 42 in JavaScript?',
            options: ['number', 'string', 'object', 'undefined'],
            correctAnswers: 'number',
        },
        {
            questionId: 'q9_Q1_js',
            text: 'What does the isNaN() function do in JavaScript?',
            question: 'What does the isNaN() function do in JavaScript?',
            options: ['Checks if a value is not a number', 'Checks if a value is a number', 'Converts a value to a number', 'None of the above'],
            correctAnswers: 'Checks if a value is not a number',
        },
        {
            questionId: 'q10_Q1_js',
            text: 'Which function type does not have its own this value?',
            question: 'Which function type does not have its own this value?',
            options: ['Regular function', 'Arrow function', 'Both regular and arrow functions', 'None of the above'],
            correctAnswers: 'Arrow function',
        },
    ];

    return (
        <div>
            <Quiz  quizQuestions={quizQuestions} />
        </div>
    );
};

export default QuizOnejs;