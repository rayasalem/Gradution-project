import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';

const QuizOneReact: React.FC = () => {
 
    const quizQuestions = [
        {
            questionId: 'q1_Q1_react',
            text: 'What is a React component?',
            question: 'What is a React component?',
            options: ['A function that returns HTML', 'An HTML element', 'A JavaScript object', 'A class that extends Component'],
            correctAnswers: 'A function that returns HTML',
        },
        {
            questionId: 'q2_Q1_react',
            text: 'What does JSX stand for in React?',
            question: 'What does JSX stand for in React?',
            options: ['JavaScript XML', 'JavaScript Extension', 'JSX is not an abbreviation', 'Java XML'],
            correctAnswers: 'JavaScript XML',
        },
        {
            questionId: 'q3_Q1_react',
            text: 'How do you define a state in a React component?',
            question: 'How do you define a state in a React component?',
            options: ['Using this.state', 'Using useState()', 'With props', 'State cannot be defined in React'],
            correctAnswers: 'Using useState()',
        },
        {
            questionId: 'q4_Q1_react',
            text: 'How can you pass data from a parent component to a child component in React?',
            question: 'How can you pass data from a parent component to a child component in React?',
            options: ['Using state', 'Using props', 'Using refs', 'Directly modifying child component state'],
            correctAnswers: 'Using props',
        },
        {
            questionId: 'q5_Q1_react',
            text: 'What is the purpose of the key attribute in React when rendering lists?',
            question: 'What is the purpose of the key attribute in React when rendering lists?',
            options: ['To uniquely identify elements', 'To style elements', 'To provide additional data to the element', 'It is not necessary in lists'],
            correctAnswers: 'To uniquely identify elements',
        },
        {
            questionId: 'q6_Q1_react',
            text: 'What is the main advantage of using components in React?',
            question: 'What is the main advantage of using components in React?',
            options: ['Easier code organization', 'Faster performance', 'More efficient memory usage', 'Components do not have advantages'],
            correctAnswers: 'Easier code organization',
        },
        {
            questionId: 'q7_Q1_react',
            text: 'Can you use JavaScript expressions within JSX?',
            question: 'Can you use JavaScript expressions within JSX?',
            options: ['Yes', 'No', 'Only if wrapped in quotes', 'Only in functional components'],
            correctAnswers: 'Yes',
        },
        {
            questionId: 'q8_Q1_react',
            text: 'How do you update the state in a class-based React component?',
            question: 'How do you update the state in a class-based React component?',
            options: ['Using this.setState()', 'Directly modifying state', 'Using useState()', 'State cannot be updated'],
            correctAnswers: 'Using this.setState()',
        },
        {
            questionId: 'q9_Q1_react',
            text: 'What does the componentDidMount() lifecycle method in React do?',
            question: 'What does the componentDidMount() lifecycle method in React do?',
            options: ['It is used to update the component state', 'It is called after the component is rendered', 'It is called before the component is mounted', 'It is not a valid lifecycle method'],
            correctAnswers: 'It is called after the component is rendered',
        },
        {
            questionId: 'q10_Q1_react',
            text: 'Can you use props in a stateful component in React?',
            question: 'Can you use props in a stateful component in React?',
            options: ['Yes', 'No', 'Only if explicitly passed', 'Props cannot be used in stateful components'],
            correctAnswers: 'Yes',
        },
    ];

    return (
        <div>
            <Quiz  quizQuestions={quizQuestions} />
        </div>
    );
};

export default QuizOneReact;