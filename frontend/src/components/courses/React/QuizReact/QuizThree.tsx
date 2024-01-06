import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizThreeReact: React.FC = () => {

    const quizQuestions = [
        {
            questionId: 'q1_Q3_react',
            text: 'Which library is commonly used for routing in React applications?',
            question: 'Which library is commonly used for routing in React applications?',
            options: ['React Router', 'Redux', 'Axios', 'jQuery'],
            correctAnswers: 'React Router',
        },
        {
            questionId: 'q2_Q3_react',
            text: 'In React Router, what component is used to define a route?',
            question: 'In React Router, what component is used to define a route?',
            options: ['<Link>', '<Route>', '<Router>', '<Redirect>'],
            correctAnswers: '<Route>',
        },
        {
            questionId: 'q3_Q3_react',
            text: 'What event is commonly used to handle form submission in React?',
            question: 'What event is commonly used to handle form submission in React?',
            options: ['onSubmit', 'onClick', 'onChange', 'onFormSubmit'],
            correctAnswers: 'onSubmit',
        },
        {
            questionId: 'q4_Q3_react',
            text: 'Which Redux function is used to dispatch an action?',
            question: 'Which Redux function is used to dispatch an action?',
            options: ['dispatchAction()', 'actionDispatch()', 'dispatch()', 'sendAction()'],
            correctAnswers: 'dispatch()',
        },
        {
            questionId: 'q5_Q3_react',
            text: 'What is a common tool used for performance optimization in React?',
            question: 'What is a common tool used for performance optimization in React?',
            options: ['Axios', 'Redux', 'Memoization', 'React Router'],
            correctAnswers: 'Memoization',
        },
        {
            questionId: 'q6_Q3_react',
            text: 'Which Redux function is used to combine multiple reducers?',
            question: 'Which Redux function is used to combine multiple reducers?',
            options: ['combineReducers()', 'mergeReducers()', 'concatReducers()', 'composeReducers()'],
            correctAnswers: 'combineReducers()',
        },
        {
            questionId: 'q7_Q3_react',
            text: 'What does React.memo() do?',
            question: 'What does React.memo() do?',
            options: ['Memoizes a function component', 'Optimizes CSS rendering', 'Memoizes state updates', 'It is not a valid React function'],
            correctAnswers: 'Memoizes a function component',
        },
        {
            questionId: 'q8_Q3_react',
            text: 'What is the purpose of React.lazy() in React?',
            question: 'What is the purpose of React.lazy() in React?',
            options: ['To define lazy components', 'To load components lazily', 'To delay rendering', 'To handle errors in components'],
            correctAnswers: 'To load components lazily',
        },
        {
            questionId: 'q9_Q3_react',
            text: 'Which hook in React is used to manage local component state?',
            question: 'Which hook in React is used to manage local component state?',
            options: ['useContext', 'useState', 'useEffect', 'useReducer'],
            correctAnswers: 'useState',
        },
        {
            questionId: 'q10_Q3_react',
            text: 'How can you implement code splitting in React?',
            question: 'How can you implement code splitting in React?',
            options: ['Using React.lazy()', 'Using Redux', 'Using React Router', 'Using Axios'],
            correctAnswers: 'Using React.lazy()',
        },
    ];

    return (
        <div>
            <Quiz  quizQuestions={quizQuestions} />
        </div>
    );
};

export default QuizThreeReact;