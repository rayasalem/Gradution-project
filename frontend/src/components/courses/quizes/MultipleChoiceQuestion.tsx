import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import {  createQuestion } from '../../../api/userAction';

interface MultipleChoiceQuestionProps {
  questionId: string;
  text: string;
  question: string;
  options: string[];
  correctAnswers: string;
  selectedAnswer: string | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>;
  quizId?:string;

}
const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  questionId,
  text,
  question,
  options,
  correctAnswers,
  selectedAnswer,
  setSelectedAnswer,
  quizId
}) => {
  useEffect(() => {
    createQuestionAndQuiz();
  }, [questionId]); 

  const createQuestionAndQuiz = async () => {
    try {
      await createQuestion({
        questionId,
        text,
        type: 'multipleChoice',
        options,
        correctAnswer: correctAnswers,
        quizId
      });

    } catch (error) {
      console.error('Failed to create question Error:', error);
    }
  };

  const handleAnswerSelection = (selectedOption: string) => {
    setSelectedAnswer(selectedOption);
  };

  return (
    <Box >
      <Typography sx={{ paddingTop: '10px' }}>
        Selected Answer: {selectedAnswer}
      </Typography> 
    </Box>
  );
};

export default MultipleChoiceQuestion;
