import React, { useState } from 'react';
import Quiz from '../../quizes/Quiz';
interface MultipleChoiceQuestionProps {
    questionId: string;
    text: string;
    question: string;
    options: string[];
    correctAnswers: string;
  
  }
const QuizTwo: React.FC = () => {
   
    const quizQuestions: MultipleChoiceQuestionProps[] = [
        {
            questionId: 'q1_HTMLForms',
            text: 'Which attribute specifies the type of input in HTML forms?',
            question: 'Which attribute specifies the type of input in HTML forms?',
            options: ['type', 'placeholder', 'value', 'name'],
            correctAnswers: 'type',
        },
        {
            questionId: 'q2_HTMLForms',
            text: 'What does the "required" attribute do in HTML forms?',
            question: 'What does the "required" attribute do in HTML forms?',
            options: ['Prevents form submission', 'Hides the input field', 'Makes input field optional', 'Clears input value'],
            correctAnswers: 'Prevents form submission',
        },
        {
            questionId: 'q3_HTMLForms',
            text: 'In HTML forms, which input type allows for a file to be uploaded?',
            question: 'In HTML forms, which input type allows for a file to be uploaded?',
            options: ['file', 'upload', 'image', 'data'],
            correctAnswers: 'file',
        },
        {
            questionId: 'q4_HTMLForms',
            text: 'What is the purpose of the <label> element in HTML forms?',
            question: 'What is the purpose of the <label> element in HTML forms?',
            options: ['Define input value', 'Create input style', 'Offer input suggestion', 'Associate with input element'],
            correctAnswers: 'Associate with input element',
        },
        {
            questionId: 'q5_HTMLTables',
            text: 'Which HTML element defines a row in a table?',
            question: 'Which HTML element defines a row in a table?',
            options: ['<tr>', '<td>', '<th>', '<table>'],
            correctAnswers: '<tr>',
        },
        {
            questionId: 'q6_HTMLTables',
            text: 'What does the "colspan" attribute define in HTML tables?',
            question: 'What does the "colspan" attribute define in HTML tables?',
            options: ['Number of rows a cell should span', 'Number of columns a cell should span', 'Table color', 'Table size'],
            correctAnswers: 'Number of columns a cell should span',
        },
        {
            questionId: 'q7_HTMLTables',
            text: 'In HTML tables, which element defines a header cell?',
            question: 'In HTML tables, which element defines a header cell?',
            options: ['<thead>', '<th>', '<tr>', '<td>'],
            correctAnswers: '<th>',
        },
        {
            questionId: 'q8_SemanticHTML',
            text: 'Which HTML element represents independent content in a document?',
            question: 'Which HTML element represents independent content in a document?',
            options: ['<div>', '<article>', '<section>', '<p>'],
            correctAnswers: '<article>',
        },
        {
            questionId: 'q9_SemanticHTML',
            text: 'What is the purpose of the <nav> element in HTML?',
            question: 'What is the purpose of the <nav> element in HTML?',
            options: ['Create navigation links', 'Display images', 'Format text', 'Create tables'],
            correctAnswers: 'Create navigation links',
        },
        {
            questionId: 'q10_SemanticHTML',
            text: 'Which HTML element defines a footer for a document or section?',
            question: 'Which HTML element defines a footer for a document or section?',
            options: ['<footer>', '<end>', '<section>', '<bottom>'],
            correctAnswers: '<footer>',
        },
    ];
    
    return (
        <div>
            <Quiz  quizQuestions={quizQuestions} />
        </div>
    );
};

export default QuizTwo;