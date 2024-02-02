import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizTwoReact: React.FC = () => {


    const quizQuestions = [
        {
            questionId: 'q1_Q2_react',
            text: 'Which lifecycle method is called after a component is removed from the DOM?',
            question: 'Which lifecycle method is called after a component is removed from the DOM?',
            options: ['componentDidUnmount', 'componentWillUnmount', 'componentRemoved', 'componentDidUpdate'],
            correctAnswers: 'componentWillUnmount',
        },
        {
            questionId: 'q2_Q2_react',
            text: 'What does the useEffect hook in React do?',
            question: 'What does the useEffect hook in React do?',
            options: ['It handles state updates', 'It handles component mounting and unmounting', 'It combines componentDidMount and componentDidUpdate', 'It handles asynchronous operations'],
            correctAnswers: 'It combines componentDidMount and componentDidUpdate',
        },
        {
            questionId: 'q3_Q2_react',
            text: 'How do you unsubscribe from an event using useEffect hook in React?',
            question: 'How do you unsubscribe from an event using useEffect hook in React?',
            options: ['Using a return function', 'Using cleanup()', 'UseEffect does it automatically', 'Manually removing event listeners'],
            correctAnswers: 'Using a return function',
        },
        {
            questionId: 'q4_Q2_react',
            text: 'Which React hook is used to add state to a functional component?',
            question: 'Which React hook is used to add state to a functional component?',
            options: ['useState', 'useEffect', 'useStateful', 'stateHook'],
            correctAnswers: 'useState',
        },
        {
            questionId: 'q5_Q2_react',
            text: 'What is the purpose of the useCallback hook in React?',
            question: 'What is the purpose of the useCallback hook in React?',
            options: ['To memoize functions', 'To handle component re-rendering', 'To create a callback', 'To manage state'],
            correctAnswers: 'To memoize functions',
        },
        {
            questionId: 'q6_Q2_react',
            text: 'Which event handling attribute in React prevents the default behavior of an event?',
            question: 'Which event handling attribute in React prevents the default behavior of an event?',
            options: ['onPrevent', 'preventDefault', 'preventEvent', 'onCancel'],
            correctAnswers: 'preventDefault',
        },
        {
            questionId: 'q7_Q2_react',
            text: 'What is the purpose of the useContext hook in React?',
            question: 'What is the purpose of the useContext hook in React?',
            options: ['To handle context API', 'To manage state', 'To create components', 'To handle component lifecycle'],
            correctAnswers: 'To handle context API',
        },
        {
            questionId: 'q8_Q2_react',
            text: 'Which lifecycle method is called after a component is rendered for the first time?',
            question: 'Which lifecycle method is called after a component is rendered for the first time?',
            options: ['componentDidMount', 'componentDidUpdate', 'componentWillMount', 'componentRendered'],
            correctAnswers: 'componentDidMount',
        },
        {
            questionId: 'q9_Q2_react',
            text: 'How can you prevent event bubbling in React?',
            question: 'How can you prevent event bubbling in React?',
            options: ['Using stopPropagation()', 'Event bubbling cannot be prevented', 'Using preventDefault()', 'By using event.stopBubble()'],
            correctAnswers: 'Using stopPropagation()',
        },
        {
            questionId: 'q10_Q2_react',
            text: 'Which hook is used to perform side effects in React functional components?',
            question: 'Which hook is used to perform side effects in React functional components?',
            options: ['useEffect', 'useSideEffect', 'useLifecycle', 'useSideHook'],
            correctAnswers: 'useEffect',
        },
    ];

    return (
        <div>
            <Quiz  quizQuestions={quizQuestions} />
        </div>
    );
};

export default QuizTwoReact;