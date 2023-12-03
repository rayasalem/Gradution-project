import React from 'react';
import { Box } from '@mui/material';

interface AnswerProps {
  answer: string;
  onAnswerSelection: (selectedAnswer: string) => void;
  isSelected: boolean;
}

const Answer: React.FC<AnswerProps> = ({ answer, onAnswerSelection, isSelected }) => {
  const handleAnswerClick = () => {
    onAnswerSelection(answer);
  };

  return (
    <Box
      onClick={handleAnswerClick}
      sx={{
        display: 'inline-block',
        marginRight: '10px',
        cursor: 'pointer',
        padding: '10px',
        border: isSelected ? '2px solid #4caf50' : '2px solid #c8d2db',
        backgroundColor: isSelected ? '#dcedc8' : 'white',
        borderRadius: '4px',
      }}
    >
      {answer}
    </Box>
  );
};

export default Answer;