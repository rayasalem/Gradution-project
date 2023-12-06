import React, { useState, useEffect ,Dispatch, SetStateAction} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import QuestionWithDragandDrop from './QuestionSlide/QuestionWithDragDrop';
import TextSlide from './TextSlide';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DoneLessonPage from '../LessonDone';
import { createLesson, deductHeartUser } from '../../../../api/userAction';
import { createBitAndHeartUser } from '../../../../api/userAction';
import { Typography, Icon } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BitsLessonEnd from './LessonHearts/BitsLessonEnd';
import { updateUserHeartsat } from './../../../../api/userAction';

interface IUserLesson {
  title: string;
  order: number;
  course: string;
  questions?: string[];
}

interface DragDropSlide {
  type: 'dragDrop';
  questionId: string;
  text: React.ReactNode; 
  question?: React.ReactNode; 
  options: string[];
  correctAnswer: string;
  lessonId?:string;
}

interface TextSlide {
  type: 'text';
  text: JSX.Element;
}

type LessonSlide = DragDropSlide | TextSlide;

interface LessonSlideProps {
  lessonData: IUserLesson;
  slides: LessonSlide[];
  selectedAnswer: string | null;
  setSelectedAnswer: Dispatch<SetStateAction<string | null>>;
}

const LessonSlide: React.FC<LessonSlideProps> = ({ lessonData, slides }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [attemptedAnswer, setAttemptedAnswer] = useState<boolean>(false);
  const [showContinueButton, setShowContinueButton] = useState<boolean>(false);
  const [heartCount, setHeartCount] = useState<number>(() => {
    const storedHeartCount = localStorage.getItem('heartCount');
    return storedHeartCount ? parseInt(storedHeartCount, 10) : 3;
  });
  const [initialized, setInitialized] = useState(false);
  const [LessonID, setLessonID] = useState<string | undefined>(undefined); 


  useEffect(() => {
    localStorage.setItem('heartCount', heartCount.toString());
  }, [heartCount]);

  const createUserBitsAndHeartsAsync = async () => {
    try {
      const bitsAndHeartsResponse = await createBitAndHeartUser();
    } catch (error) {
      console.error('Failed to create user bits and hearts:', error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const createLessonAsync = async () => {
      try {
        if (!initialized) {
          if (lessonData.course) {
            const response = await createLesson(lessonData);
            setLessonID(response?.lesson?._id)
            console.log(response?.lesson?._id)
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
    createUserBitsAndHeartsAsync();

    return () => {
      isMounted = false;
    };
  }, [initialized, lessonData.course]);

  const handleHeartLoss = async () => {
    try {
      const response = await deductHeartUser();
      if (response && response.updatedHeartsCount !== undefined) {
        setHeartCount(response.updatedHeartsCount);
        console.log('Hearts deducted successfully:', response);
        if (response.updatedHeartsCount === 0) {
          try {
            await updateUserHeartsat();
          } catch (error) {
            console.error('Failed to update hearts after reaching 0:', error);
          }
        }
      } else {
        console.error('Failed to deduct hearts: Unexpected response format');
      }
    } catch (error) {
      console.error('Failed to deduct hearts:', error);
    }
  };

  const getAnswerFeedbackIcon = () => {
    if (isAnswerCorrect === null) {
      return null;
    } else if (isAnswerCorrect) {
      return (
        <Box sx={{ paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ paddingTop: '15px', display: 'flex', justifyContent: 'center', border: '1px solid #c8d2db', width: '400px', height: '50px', borderRadius: '8px' }}>
            <CheckCircleOutlineIcon sx={{ color: 'green', padding: '2px 5px' }}></CheckCircleOutlineIcon>
            <Typography sx={{ color: 'green' }} variant='h6'>Correct answer!</Typography>
          </Box>
        </Box>
      );
    } else {
      return (
        <Box sx={{ paddingTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ paddingTop: '15px', display: 'flex', justifyContent: 'center', border: '1px solid #c8d2db', width: '400px', height: '50px', borderRadius: '8px' }}>
            <HighlightOffIcon sx={{ color: 'red', padding: '2px 5px' }}></HighlightOffIcon>
            <Typography sx={{ color: 'red' }} variant='h6'>Not quite</Typography>
          </Box>
        </Box>
      );
    }
  };

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
        handleHeartLoss();
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
  // if (heartCount === 0) {
  //   try {
  //      updateUserHeartsat();
  //   } catch (error) {
  //     console.error('Failed to update hearts after reaching 0:', error);
  //   }
  //   return <BitsLessonEnd />;

  // }
  return (
    <Box>
      <Box sx={{ position: 'absolute', top: '90px', right: '50px', display: 'flex', alignItems: 'center' }}>
        <FavoriteIcon color="error" fontSize="large" />
        <Typography variant="h6" sx={{ marginLeft: '5px' }}>{heartCount}</Typography>
      </Box>
      <Box sx={{ height: '80vh' }}>
        <DndProvider backend={HTML5Backend}>
          {currentSlideData.type === 'dragDrop' && currentSlideData.options && (
            <QuestionWithDragandDrop
            lessonId={LessonID}
              questionId={currentSlideData.questionId}
              text={currentSlideData.text}
              question={currentSlideData.question}
              options={currentSlideData.options}
              correctAnswer={currentSlideData.correctAnswer}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
          )}

          {currentSlideData.type === 'text' && <TextSlide text={(currentSlideData as TextSlide).text} />}
        </DndProvider>
        {getAnswerFeedbackIcon()}
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



