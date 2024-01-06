import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import DropZone from './DropZone';
import './questionLesson.css'
import { Typography, Box } from '@mui/material';
import { createQuestion } from '../../../../../api/userAction';
interface QuestionWithDragDropProps {
  questionId:string;
  text:React.ReactNode;
  question: React.ReactNode;
  options: string[];
  correctAnswer:string;
  selectedAnswer: string | null; 
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>;
  lessonId?: string;
}
const QuestionWithDragDrop: React.FC<QuestionWithDragDropProps> = ({questionId, text,question, options,correctAnswer, selectedAnswer,
  setSelectedAnswer ,lessonId }) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {

    const createQuestionAndHandleErrors = async () => {
      try {
        if (!initialized) {

        await createQuestion({
          questionId,
          text: text?.toString() ?? '',
          type: 'dragDrop',
          options,
          correctAnswer,
          lessonId
        });
        setInitialized(true);
      }
      } catch (error) {
        console.error('Failed to create question. Error:', error);
      }
    };

    createQuestionAndHandleErrors();
  }, [initialized]);

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
          {options.map((answer, index) => (
            <Answer key={index} answer={answer} onDrop={handleDrop} />
          ))}
        </Box>
        <Typography sx={{ paddingTop: '10px' }}>Selected Answer: {selectedAnswer}</Typography>
      </Box>
    </Box>
  
  );
};

export default QuestionWithDragDrop;
