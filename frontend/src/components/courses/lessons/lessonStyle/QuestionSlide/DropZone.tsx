import React from 'react';
import { useDrop, DropTargetMonitor, DropTargetHookSpec } from 'react-dnd';
import { Box } from '@mui/material';
import './questionLesson.css'

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
    <Box className="dropZone">
    <Box ref={drop} className="dropZoneContainer">
      {isActive ? 'Release to drop' : 'Drag an answer here'}
    </Box>
  </Box>
  );
};

export default DropZone;
