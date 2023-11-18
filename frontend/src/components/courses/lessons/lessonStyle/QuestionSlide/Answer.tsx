import React from 'react';
import { useDrag } from 'react-dnd';

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
    <div ref={drag} onClick={() => onDrop(answer)} style={{ display:'inline-block', marginRight: '10px' }}>
      <div style={{cursor: 'grab',
    padding: '10px',
    border: '2px solid #c8d2db',
    boxShadow: '0 2px 0 1px #c8d2db',
    backgroundColor: 'white',}}>{answer}</div>
    </div>
  );
};

export default Answer;
