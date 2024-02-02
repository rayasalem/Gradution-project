import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizThreejs: React.FC = () => {

    const quizQuestions = [
        {
            questionId: 'q1_Q3_js',
            text: 'Which method is used to retrieve an HTML element in JavaScript?',
            question: 'Which method is used to retrieve an HTML element in JavaScript?',
            options: ['getElement()', 'queryElement()', 'document.querySelector()', 'getById()'],
            correctAnswers: 'document.querySelector()',
        },
        {
            questionId: 'q2_Q3_js',
            text: 'How do you add an event listener to an element in JavaScript?',
            question: 'How do you add an event listener to an element in JavaScript?',
            options: ['element.addEventListener()', 'element.attachEvent()', 'element.listenEvent()', 'element.bindEvent()'],
            correctAnswers: 'element.addEventListener()',
        },
        {
            questionId: 'q3_Q3_js',
            text: 'Which keyword is used to handle asynchronous programming in JavaScript?',
            question: 'Which keyword is used to handle asynchronous programming in JavaScript?',
            options: ['async', 'await', 'promise', 'callback'],
            correctAnswers: 'async',
        },
        {
            questionId: 'q4_Q3_js',
            text: 'How do you catch errors in JavaScript?',
            question: 'How do you catch errors in JavaScript?',
            options: ['try/except statement', 'catch statement', 'errorHandler() function', 'try/catch statement'],
            correctAnswers: 'try/catch statement',
        },
        {
            questionId: 'q5_Q3_js',
            text: 'Which method is used to make an asynchronous request in JavaScript?',
            question: 'Which method is used to make an asynchronous request in JavaScript?',
            options: ['fetch()', 'request()', 'ajax()', 'asyncFetch()'],
            correctAnswers: 'fetch()',
        },
        {
            questionId: 'q6_Q3_js',
            text: 'What is the purpose of the event.preventDefault() method?',
            question: 'What is the purpose of the event.preventDefault() method?',
            options: ['To stop event propagation', 'To prevent the default behavior of an event', 'To cancel the event', 'To trigger the event'],
            correctAnswers: 'To prevent the default behavior of an event',
        },
        {
            questionId: 'q7_Q3_js',
            text: 'Which method is used to add a class to an HTML element?',
            question: 'Which method is used to add a class to an HTML element?',
            options: ['element.addClass()', 'element.class()', 'element.classList.add()', 'element.addClassList()'],
            correctAnswers: 'element.classList.add()',
        },
        {
            questionId: 'q8_Q3_js',
            text: 'What is the role of the window.onerror event in JavaScript?',
            question: 'What is the role of the window.onerror event in JavaScript?',
            options: ['To catch global errors', 'To trigger errors intentionally', 'To handle errors asynchronously', 'To log errors in the console'],
            correctAnswers: 'To catch global errors',
        },
        {
            questionId: 'q9_Q3_js',
            text: 'Which method is used to convert a Promise to an async/await syntax?',
            question: 'Which method is used to convert a Promise to an async/await syntax?',
            options: ['toAsync()', 'Promise.toAsync()', 'asyncify()', 'None of the above'],
            correctAnswers: 'None of the above',
        },
        {
            questionId: 'q10_Q3_js',
            text: 'How can you identify the type of an error in JavaScript?',
            question: 'How can you identify the type of an error in JavaScript?',
            options: ['Using typeof operator', 'Using error.type property', 'Checking error.message', 'Using error.name property'],
            correctAnswers: 'Using error.name property',
        },
    ];

    return (
        <div>
            <Quiz  quizQuestions={quizQuestions} />
        </div>
    );
};

export default QuizThreejs;