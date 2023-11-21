import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QuestionWithDragDrop from './QuestionSlide/QuestionWithDragDrop';
import TextSlide from './TextSlide';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DoneLessonPage from '../LessonDone';

const LessonSlide: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleAnswerCorrect = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
  };

  const slides = [
    {
      type: 'dragDrop',
      questionId:'q1',
      text: <p>Text for drag-and-drop slide</p>,
      question: <p>Your drag-and-drop question</p>,
      options: ['Option 1', 'Option 2', 'Option 3'],
      correctAnswer: 'Option 1',
    },
    {
      type: 'text',
      text: <p>Your text-based slide content</p>,
    },
    {
      type: 'dragDrop',
      questionId:'q2',
      text: (
        <p>
          Headings in HTML come in different levels. <code>&lt;h1&gt;</code>
          <br />
          defines the most important heading.
        </p>
      ),
      question: (
        <div>
          <p>
            Code a level 1 heading: <code>{'<h1>'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
            <code>{'</h1>'}</code>
          </p>
        </div>
      ),
      options: ['Heading 1', 'Heading 2', 'Heading 3'],
      correctAnswer:'Heading 1',
    },
  ];

  const currentSlideData = slides[currentSlide];

  if (!currentSlideData) {
    return <DoneLessonPage/>
  }

  return (
    <Box>
      <Box sx={{ height: '80vh' }}>
        <DndProvider backend={HTML5Backend}>
          {currentSlideData.type === 'dragDrop' && currentSlideData.options && (
            <QuestionWithDragDrop
            questionId={currentSlideData.questionId}
              text={currentSlideData.text}
              question={currentSlideData.question}
              options={currentSlideData.options}
              correctAnswer={currentSlideData.correctAnswer}
              
            />
          )}

          {currentSlideData.type === 'text' && <TextSlide text={currentSlideData.text} />}
        </DndProvider>
      </Box>
      <Divider />
      <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          width: '30%',
          padding: '16px',
          backgroundColor: '#fff',
          margin: '0',
        }}
      >
        <Button onClick={handleBack} disabled={currentSlide === 0} variant="outlined" sx={{ width: '100px' }}>
          Back
        </Button>
        <Button onClick={handleAnswerCorrect} variant="contained" sx={{ width: '100px' }}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default LessonSlide;
