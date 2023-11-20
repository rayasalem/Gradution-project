import React from 'react';
import { useDrag } from 'react-dnd';
import { Box } from '@mui/material';
import './questionLesson.css'

interface AnswerProps {
  answer: string;
  onDrop: (droppedAnswer: string) => void;
}

const Answer: React.FC<AnswerProps> = ({ answer, onDrop }) => {
  const [, drag] = useDrag({
    type: 'ANSWER',
    item: { answer },
  });

  return (
    <Box ref={drag} className="dragItem" onClick={() => onDrop(answer)}>
      <div className="draggable">{answer}</div>
    </Box>
  );
};

export default Answer;
