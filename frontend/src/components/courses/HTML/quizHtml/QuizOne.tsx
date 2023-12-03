import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../../quizes/Quiz';

const QuizOne: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const quizData = {
        quizId:'Q1.1',
        title: 'quiz One in Html',
        course: courseId || '',
        questions: ['656c8cca5261a0c96552f631'],
        passingScore:6,
      };
      const questionsData = [
        {
          type: 'multipleChoice',
          questionId: 'question_1',
          text: <p>What is 2 + 2?</p>, 
          question:  (
            <div>
              <p>
                2+2 =: {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
              </p>
            </div>
          ),
          options: ['3', '4', '5', '6'],
          correctAnswers: '4',

        },
       
      ];
  return (
    <div>
        <Quiz quizData={quizData} />
    </div>
  )
}

export default QuizOne