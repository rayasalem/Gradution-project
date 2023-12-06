import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../../quizes/Quiz';

const QuizOne: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();

    const quizData = {
        quizId:'Q1.1',
        title: 'quiz One in Html',
        course: courseId || '',
        passingScore:6,
      };
      const quizQuestions = [
        {
          questionId: 'question_1',
          text: 'What is 2 + 2?',
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '4',

        },
        {
          questionId: 'question_2',
          text: 'What is 3 + 2?',
          question: 'What is 3 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '5',

        },
        {
          questionId: 'question_3',
          text: 'What is 4 + 2?',
          question: 'What is 4 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '6',

        },{
          questionId: 'question_4',
          text: 'What is 4 + 2?',
          question: 'What is 4 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '6',

        },{
          questionId: 'question_5',
          text: 'What is 4 + 2?',
          question: 'What is 4 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '6',

        },{
          questionId: 'question_6',
          text: 'What is 4 + 2?',
          question: 'What is 4 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '6',

        },{
          questionId: 'question_7',
          text: 'What is 4 + 2?',
          question: 'What is 4 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '6',

        },{
          questionId: 'question_8',
          text: 'What is 4 + 2?',
          question: 'What is 4 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '6',

        },{
          questionId: 'question_9',
          text: 'What is 4 + 2?',
          question: 'What is 4 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '6',

        },{
          questionId: 'question_10',
          text: 'What is 4 + 2?',
          question: 'What is 4 + 2?',
          options: ['3', '4', '5', '6'],
          correctAnswers: '6',

        },
      ];   
  return (
    <div>
        <Quiz quizData={quizData} quizQuestions={quizQuestions} />
    </div>
  )
}

export default QuizOne