import React, { useEffect } from 'react';
import { Typography, Box, Button } from '@mui/material';
import {  createQuestion } from '../../../api/userAction';

interface MultipleChoiceQuestionProps {
  questionId?: string;
  text: string;
  question?: string;
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
    if (questionId) {
      createQuestionAndQuiz();
    }
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
    <Box>
    <Typography >{text}</Typography>
    
    <Box sx={{ paddingTop: '20px',width:'500px' }}>
      {options && options.map((option, index) => (
        <Button
          className="draggable"
          key={index}
          variant="contained"
          onClick={() => handleAnswerSelection(option)}
          style={{
            margin: '5px',
            cursor: 'grab',
            border: '2px solid #c8d2db',
            boxShadow: '0 2px 0 1px #c8d2db',
            backgroundColor: 'white',
            color: 'black',
            width: '100%',
          }}
        >
          {option}
        </Button>
      ))}
    </Box>
    <Typography sx={{ paddingTop: '10px' }}>
        Selected Answer: {selectedAnswer}
      </Typography> 
  </Box>
  );
};

export default MultipleChoiceQuestion;