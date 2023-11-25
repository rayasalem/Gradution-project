// import React, { useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import QuestionWithDragDrop from './QuestionSlide/QuestionWithDragDrop';
// import TextSlide from './TextSlide';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import  Typography  from '@mui/material/Typography';
// import DoneLessonPage from '../LessonDone';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// const LessonSlide: React.FC = () => {
// const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
// const [currentSlide, setCurrentSlide] = useState<number>(0);
// const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
// const [isAnswerChecked, setIsAnswerChecked] = useState<boolean>(false);
   
//     const handleAnswerCorrect = () => {
//       const currentSlideData = slides[currentSlide];
  
//       if (!currentSlideData) {
//         console.error('Invalid slide data');
//         return;
//       }
//       setSelectedAnswer(null);
//       setCurrentSlide((prevSlide) => prevSlide + 1);
//       setIsAnswerCorrect(null);
//        // Set isAnswerChecked to true only for text-type slides
//   console.log('handleAnswerCorrect - currentSlideData.type:', currentSlideData.type);
//   setIsAnswerChecked(currentSlideData.type === 'text');
//   console.log('handleAnswerCorrect - isAnswerChecked:', isAnswerChecked);

//     };

//   const handleBack = () => {
//     setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
//     setSelectedAnswer(null); 
//     setIsAnswerCorrect(null); 
//     console.log('handleBack - currentSlideData.type:', currentSlideData.type);
//     setIsAnswerChecked(currentSlideData.type === 'text');
//     console.log('handleBack - isAnswerChecked:', isAnswerChecked);


//   };
//   const handleCheckAnswer = () => {
//     const currentSlideData = slides[currentSlide];

//     if (!currentSlideData) {
//       console.error('Invalid slide data');
//       return;
//     }

//     if (currentSlideData.type === 'dragDrop') {
//       const isAnswerCorrect = selectedAnswer === currentSlideData.correctAnswer;
//       setIsAnswerCorrect(isAnswerCorrect);

//       if (isAnswerCorrect) {
//         console.log('Correct answer!');
//       } else {
//         console.log('Incorrect answer!');
//       }
//     }
//     setIsAnswerChecked(true);
    
//   };
//   const getAnswerFeedbackIcon = () => {
//     if (isAnswerCorrect === null) {
//       return null;
//     } else if (isAnswerCorrect) {
//       return <Box sx={{ paddingTop: '60px' ,display:'flex',justifyContent:'center'}}>
//         <Box sx={{ paddingTop:'15px',display:'flex',justifyContent:'center',border:'1px solid #c8d2db',width:'400px',height:'50px',borderRadius:'8px'}}>
//         <CheckCircleOutlineIcon sx={{ color: 'green',padding:'2px 5px' }}></CheckCircleOutlineIcon>
//         <Typography sx={{color:'green'}} variant='h6'>You got it!</Typography>
//       </Box>
//       </Box>
      
//     } else {
//       return <Box sx={{ paddingTop: '60px' ,display:'flex',justifyContent:'center'}}>
//       <Box sx={{ paddingTop: '15px' ,display:'flex',justifyContent:'center',border:'1px solid #c8d2db',width:'400px',height:'50px',borderRadius:'8px'}}>
//        <HighlightOffIcon sx={{color:'red',padding:'2px 5px'}}></HighlightOffIcon>
//        <Typography sx={{color:'red'}} variant='h6'>Not quite</Typography>
//       </Box>
//       </Box>
      
//     }
//   };
//   const slides = [
//     {
//       type: 'dragDrop',
//       questionId:'q1',
//       text: <p>Text for drag-and-drop slide</p>,
//       question: <p>Your drag-and-drop question</p>,
//       options: ['Option 1', 'Option 2', 'Option 3'],
//       correctAnswer: 'Option 1',
//     },
//     {
//       type: 'text',
//       text: <p>Your text-based slide content</p>,
//     },
//     {
//       type: 'dragDrop',
//       questionId:'q2',
//       text: (
//         <p>
//           Headings in HTML come in different levels. <code>&lt;h1&gt;</code>
//           <br />
//           defines the most important heading.
//         </p>

//       ),
//       question: (
//         <div>
//           <p>
//             Code a level 1 heading: <code>{'<h1>'}</code> {selectedAnswer ? selectedAnswer : 'Your Answer Here'}{' '}
//             <code>{'</h1>'}</code>
//           </p>
//         </div>
//       ),
//       options: ['Heading 1', 'Heading 2', 'Heading 3'],
//       correctAnswer:'Heading 1',
//     },
//   ];

//   const currentSlideData = slides[currentSlide];

//   if (!currentSlideData) {
//     return <DoneLessonPage/>
//   }

//   return (
//     <Box>
//       <Box sx={{ height: '80vh' }}>
//         <DndProvider backend={HTML5Backend}>
//           {currentSlideData.type === 'dragDrop' && currentSlideData.options && (
//             <QuestionWithDragDrop
//             questionId={currentSlideData.questionId}
//               text={currentSlideData.text}
//               question={currentSlideData.question}
//               options={currentSlideData.options}
//               correctAnswer={currentSlideData.correctAnswer}
//               selectedAnswer={selectedAnswer}
//               setSelectedAnswer={setSelectedAnswer}
//             />
//           )}

//           {currentSlideData.type === 'text' && <TextSlide text={currentSlideData.text} />}
//         </DndProvider>
//         {getAnswerFeedbackIcon()}
//       </Box>
//       <Divider />
//       <Box
//         sx={{
//           position: 'fixed',
//           bottom: 30,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           display: 'flex',
//           justifyContent: 'space-between',
//           width: '30%',
//           padding: '16px',
//           backgroundColor: '#fff',
//           margin: '0',
//         }}
//       >
//         <Button onClick={handleBack} disabled={currentSlide === 0} variant="outlined" sx={{ width: '100px' }}>
//           Back
//         </Button>
//         <Button onClick={handleCheckAnswer} variant="contained" sx={{ width: '100px' }}>
//           Check
//         </Button>
//         <Button onClick={handleAnswerCorrect} variant="contained" sx={{ width: '100px' }}
//         disabled={!isAnswerChecked || isAnswerCorrect === null}>
//           Continue
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default LessonSlide;
import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QuestionWithDragandDrop from './QuestionSlide/QuestionWithDragDrop';
import TextSlide from './TextSlide';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DoneLessonPage from '../LessonDone';
import { createLesson } from '../../../../api/userAction';
import { Typography, Icon } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface IUserLesson {
  title: string;
  order: number;
  course: string;
  questions?: string[];
}

interface DragDropSlide {
  type: 'dragDrop';
  questionId: string;
  text?: string;
  question?: string;
  options: string[];
  correctAnswer: string;
}

interface TextSlide {
  type: 'text';
  text: JSX.Element;
}

type LessonSlide = DragDropSlide | TextSlide;

interface LessonSlideProps {
  lessonData: IUserLesson;
}

const LessonSlide: React.FC<LessonSlideProps> = ({ lessonData }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [attemptedAnswer, setAttemptedAnswer] = useState<boolean>(false);
  const [showContinueButton, setShowContinueButton] = useState<boolean>(false);
  const [heartCount, setHeartCount] = useState<number>(3);
  const [initialized, setInitialized] = useState(false);
  
  useEffect(() => {
    const createLessonAsync = async () => {
      try {
        if (!initialized ) {
          if (lessonData.course) {
            const response = await createLesson(lessonData);
          } else {
            console.error('CourseId is not defined in lessonData.');
          }
          setInitialized(true);
        }
      } catch (error) {
        console.error('Failed to create lesson:', error);
      }
    };
    createLessonAsync();
  }, [initialized, lessonData.course]);

  const slides: LessonSlide[] = [
    {
      type: 'dragDrop',
      questionId: 'q1',
      text: 'Text for drag-and-drop slide',
      options: ['Option 1', 'Option 2', 'Option 3'],
      correctAnswer: 'Option 1',
    },
    {
      type: 'text',
      text: <p>Your text-based slide content</p>,
    },
    {
      type: 'dragDrop',
      questionId: 'q2',
      text: 'Headings in HTML come in different levels. <code>&lt;h1&gt;</code><br/> defines the most important heading.',
      options: ['Heading 1', 'Heading 2', 'Heading 3'],

      correctAnswer: 'Heading 1',
    },
  ];

  const currentSlideData = slides[currentSlide];

  const handleCheckAnswer = () => {
    const currentSlideData = slides[currentSlide];

    if (!currentSlideData) {
      console.error('Invalid slide data');
      return;
    }

    if (currentSlideData.type === 'dragDrop') {
      const isAnswerCorrect = selectedAnswer === currentSlideData.correctAnswer;
      setIsAnswerCorrect(isAnswerCorrect);

      if (isAnswerCorrect) {
        console.log('Correct answer!');
      } else {
        console.log('Incorrect answer!');
        if (heartCount > 0) {
          setHeartCount((prevCount) => prevCount - 1);
        }
      }

      setAttemptedAnswer(true);
      setShowContinueButton(true);
    }
  };

  const handleNextSlide = () => {
    setSelectedAnswer(null);
    setCurrentSlide((prevSlide) => prevSlide + 1);
    setIsAnswerCorrect(null);
    setAttemptedAnswer(false);
    setShowContinueButton(false);
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => Math.max(0, prevSlide - 1));
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setAttemptedAnswer(false);
    setShowContinueButton(false);
  };

  if (!currentSlideData) {
    return <DoneLessonPage />;
  }

  let feedbackMessage = null;

  if (isAnswerCorrect !== null) {
    feedbackMessage = isAnswerCorrect ? 'Correct answer!' : 'Incorrect answer!';
  }
  return (
    <Box>
       <Box sx={{ height: '80vh' }}>
        <DndProvider backend={HTML5Backend}>
          {currentSlideData.type === 'dragDrop' && currentSlideData.options && (
            <QuestionWithDragandDrop
              questionId={(currentSlideData as DragDropSlide).questionId}
              text={(currentSlideData as DragDropSlide).text || ''}
              question={(currentSlideData as DragDropSlide).question || ''}
              options={(currentSlideData as DragDropSlide).options}
              correctAnswer={(currentSlideData as DragDropSlide).correctAnswer}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
          )}

          {currentSlideData.type === 'text' && <TextSlide text={(currentSlideData as TextSlide).text} />}
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
          flexDirection: 'column',
          alignItems: 'center',
          width: '30%',
          padding: '16px',
          backgroundColor: '#fff',
          margin: '0',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: '50px',
            border: selectedAnswer ? '1px solid black' : 'none',
            borderRadius: '8px',
            width: '150%',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          color={isAnswerCorrect !== null ? (isAnswerCorrect ? 'success' : 'error') : 'black'}
        >
          {isAnswerCorrect !== null ? (
            isAnswerCorrect ? (
              <span>
                Correct answer! <Icon component={CheckCircleIcon} style={{ fontSize: 50, color: '#77ed00' }} />
              </span>
            ) : (
              'Incorrect answer!'
            )
          ) : (
            ''
          )}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FavoriteIcon color="error" fontSize="large" />
          <Typography variant="h6">{heartCount}</Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button onClick={handleBack} variant="contained" sx={{ width: '45%' }}>
            Back
          </Button>
          {currentSlideData.type === 'dragDrop' && !showContinueButton && (
            <Button
              onClick={handleCheckAnswer}
              variant="contained"
              sx={{ width: '45%' }}
              disabled={!selectedAnswer} 
            >
              Check Answer
            </Button>
          )}
          {(showContinueButton || currentSlideData.type === 'text') && (
            <Button onClick={handleNextSlide} variant="contained" sx={{ width: '45%' }}>
              Continue
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LessonSlide;
