import React, { useState } from 'react';
import Answer from './Answer';
import DropZone from './DropZone';
import './questionLesson.css'
import { Typography, Box } from '@mui/material';
interface QuestionWithDragDropProps {
  text:React.ReactNode;
  question: React.ReactNode;
  answers: string[];
  
}
const QuestionWithDragDrop: React.FC<QuestionWithDragDropProps> = ({ text,question, answers }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleDrop = (droppedAnswer: string) => {
    setSelectedAnswer(droppedAnswer);
  };


  const replaceText = (element: React.ReactNode, isEmptySpace: boolean): React.ReactNode => {
    if (React.isValidElement(element)) {
      const children = React.Children.map(element.props.children, (child) => replaceText(child, isEmptySpace));
      return React.cloneElement(element, undefined, children);
    } else if (typeof element === 'string' && element.trim() === 'Your Answer Here') {
      return (
        <span
          style={{
            backgroundColor:'#fff',
            border: '2px solid #c8d2db',padding: '8px',display: 'inline-block',
            minWidth: '50px',minHeight: '25px',boxSizing: 'border-box', 
          }}
        >
          {selectedAnswer || ''}
        </span>
      );
    }
    return element;
  };
  
  const updatedQuestion = replaceText(question, !selectedAnswer);
  

  return (
    <Box className="questionSlide">
      <Box>
        <Box>{text}</Box>
        <Box className="qLesson">{updatedQuestion}</Box>
        <DropZone onDrop={handleDrop} />
        <Box className="answersLesson">
          {answers.map((answer, index) => (
            <Answer key={index} answer={answer} onDrop={handleDrop} />
          ))}
        </Box>
        <Typography sx={{ paddingTop: '10px' }}>Selected Answer: {selectedAnswer}</Typography>
      </Box>
    </Box>
  
  );
};

export default QuestionWithDragDrop;
