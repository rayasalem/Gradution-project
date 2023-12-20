import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizTwojs: React.FC = () => {
  
    const quizQuestions = [
        {
            questionId: 'q1_Q2_js',
            text: 'What is the result of 5 == "5" in JavaScript?',
            question: 'What is the result of 5 == "5" in JavaScript?',
            options: ['true', 'false', 'undefined', 'null'],
            correctAnswers: 'true',
        },
        {
            questionId: 'q2_Q2_js',
            text: 'Which loop executes at least once, even if the condition is false?',
            question: 'Which loop executes at least once, even if the condition is false?',
            options: ['for loop', 'while loop', 'do...while loop', 'switch loop'],
            correctAnswers: 'do...while loop',
        },
        {
            questionId: 'q3_Q2_js',
            text: 'How can you add a new element at the end of an array in JavaScript?',
            question: 'How can you add a new element at the end of an array in JavaScript?',
            options: ['arr.add(item)', 'arr.push(item)', 'arr.append(item)', 'arr.insert(item)'],
            correctAnswers: 'arr.push(item)',
        },
        {
            questionId: 'q4_Q2_js',
            text: 'What does the .length property return for an empty array?',
            question: 'What does the .length property return for an empty array?',
            options: ['0', 'undefined', 'null', '1'],
            correctAnswers: '0',
        },
        {
            questionId: 'q5_Q2_js',
            text: 'In JavaScript, what is a closure?',
            question: 'In JavaScript, what is a closure?',
            options: ['A function with no arguments', 'A function that returns an object', 'A function that captures its surrounding state', 'A function with multiple return statements'],
            correctAnswers: 'A function that captures its surrounding state',
        },
        {
            questionId: 'q6_Q2_js',
            text: 'Which statement defines a block of code to be executed if a condition is false?',
            question: 'Which statement defines a block of code to be executed if a condition is false?',
            options: ['else if', 'switch', 'if else', 'else'],
            correctAnswers: 'else',
        },
        {
            questionId: 'q7_Q2_js',
            text: 'What is the scope of a variable declared with "let" keyword?',
            question: 'What is the scope of a variable declared with "let" keyword?',
            options: ['Global scope', 'Function scope', 'Block scope', 'Local scope'],
            correctAnswers: 'Block scope',
        },
        {
            questionId: 'q8_Q2_js',
            text: 'How can you remove the last element from an array in JavaScript?',
            question: 'How can you remove the last element from an array in JavaScript?',
            options: ['arr.delete()', 'arr.removeLast()', 'arr.pop()', 'arr.remove()'],
            correctAnswers: 'arr.pop()',
        },
        {
            questionId: 'q9_Q2_js',
            text: 'Which method is used to iterate over the elements of an array in JavaScript?',
            question: 'Which method is used to iterate over the elements of an array in JavaScript?',
            options: ['forEach()', 'iterate()', 'loop()', 'map()'],
            correctAnswers: 'forEach()',
        },
        {
            questionId: 'q10_Q2_js',
            text: 'What is the purpose of the "break" statement in JavaScript?',
            question: 'What is the purpose of the "break" statement in JavaScript?',
            options: ['To end a loop or switch statement', 'To skip to the next iteration in a loop', 'To throw an error', 'To exit a function'],
            correctAnswers: 'To end a loop or switch statement',
        },
    ];

    return (
        <div>
            <Quiz  quizQuestions={quizQuestions} />
        </div>
    );
};

export default QuizTwojs;