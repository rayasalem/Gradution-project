import React, { useState } from 'react';
import Answer from './Answer';
import DropZone from './DropZone';

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
            border: '2px solid #c8d2db',
            padding: '8px',
            display: 'inline-block',
            minWidth: '50px',
            minHeight: '25px',
            boxSizing: 'border-box', 
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
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop: '70px'}}>
    <div >
        <div>{text}</div>
      <div style={{backgroundColor:'#f2f5f7',padding:'10px',minWidth:'650px',minHeight:'100px'}}>{updatedQuestion}</div>
      <DropZone onDrop={handleDrop} />
      <div style={{paddingTop:'10px'}}>
        {answers.map((answer, index) => (
          <Answer key={index} answer={answer} onDrop={handleDrop} />
        ))}
      </div>
      <p>Selected Answer: {selectedAnswer}</p>
    </div>
    </div>
  
  );
};

export default QuestionWithDragDrop;
