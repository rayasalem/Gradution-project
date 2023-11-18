import React from 'react';
import { useDrop, DropTargetMonitor, DropTargetHookSpec } from 'react-dnd';

interface DropZoneProps {
  onDrop: (answer: string) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'ANSWER',
    drop: (item: { type: string; answer: string }) => onDrop(item.answer),
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div style={{paddingTop:'10px'}}>
    <div ref={drop} style={{ border: `1px solid ${isActive ? 'green' : 'black'}`, minHeight: '30px',width:'150px',padding:'5px'}}>
      {isActive ? 'Release to drop' : 'Drag an answer here'}
    </div>
    </div>
  );
};

export default DropZone;
