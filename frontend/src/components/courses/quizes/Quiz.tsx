import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Paper } from '@mui/material';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import { completeQuiz, createQuiz, deleteQustionById, earnBitsBitsAndHearts, getprofileInfo } from './../../../api/userAction';
import { Icon, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useParams } from 'react-router-dom';
interface MultipleChoiceQuestionProps {
  questionId?: string;
  text: string;
  question?: string;
  options: string[];
  correctAnswers: string;
  quizId?: string; 
  correctAnswer?: string;
  _id?:any;
}
interface QuizProps {
  quizQuestions: MultipleChoiceQuestionProps[]; 
}
interface IUserBitsAndHearts {
    actionType: 'lesson' | 'elementaryLevel' | 'proficientLevel' | 'advancedLevel';
  }

const Quiz: React.FC<QuizProps> = ({  quizQuestions}) => {
  const { quizId } = useParams<{ quizId: string }>();
  const [userIsAddict, setuserIsAddict] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [initialized, setInitialized] = useState(false);
  const [bitsEarned, setBitsEarned] = useState<boolean>(false);
  const [QizeID, setQizeID] = useState<string | undefined>(undefined); 
  const location = useLocation();
  const currentPathname = location.pathname;
  const navigate = useNavigate();

  const removeLastPart = currentPathname.replace(/\/[^/]+$/, '');
 
  useEffect(() => {
    const fetchData = async () => {
        try {
          const profileInfo = await getprofileInfo(); 
          if (profileInfo?.user?.role === 'admin') {
            setuserIsAddict(true);
          }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };
    fetchData ();
  }, []);
  const createUserBitsAndHeartsAsync = async () => {
    try {
      let actionType: IUserBitsAndHearts['actionType'] = 'proficientLevel';
            const bitsEarned = calculateBits(score);

      if (bitsEarned === 5) {
        actionType = 'elementaryLevel';
      } else if (bitsEarned === 10) {
        actionType = 'proficientLevel';
      } else if (bitsEarned === 15) {
        actionType = 'advancedLevel';
      } 
      const userBitsAndHeartsData: IUserBitsAndHearts = {
        actionType,
      };
      const bitsAndHeartsResponse = await earnBitsBitsAndHearts(userBitsAndHeartsData);
    } catch (error) {
      console.error('Failed to create user bits and hearts:', error);
    }
  };
  const checkAndEarnBits = async () => {
    if (!bitsEarned && currentQuestion === quizQuestions.length - 1) {
      await createUserBitsAndHeartsAsync();
      setBitsEarned(true);
    }
  };
  useEffect(() => {
    let isMounted = true;
    checkAndEarnBits();

    return () => {
      isMounted = false;

    }; 
  }, [currentQuestion, bitsEarned]);
  const handleAnswerOptionClick = (index: number) => {
    setSelectedAnswer(quizQuestions[currentQuestion].options[index]);
  };
  const CompleteQuiz =async () => {
    await completeQuiz(quizId)
  };
  const nextQuestion = () => {
    const currentQuestionData = quizQuestions[currentQuestion];
    const correctAnswer = currentQuestionData.correctAnswer;
    if (selectedAnswer !== null && correctAnswer && selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };
  const calculateBits = (score: number): number => {
    if (score <= 5) {
      return 5;
    } else if (score >= 6 && score <= 8) {
      return 10;
    } else {
      return 15;
    }
  };
 
  const handleEditQuestion = (questionId:any) => {
    navigate(`/DevLoom/admin/updateQustion/${questionId}`)
  };
  const handledeleteQuestion = async(questionId:any) => {
   await deleteQustionById(questionId)
  };
  return (
    
    <Container maxWidth="sm" sx={{ paddingTop: '30px' }}>
      {showScore ? (
        <div>
    <Box
      bgcolor="#f5f5f5"
      p={3}
      borderRadius={4}
      sx={{
        backgroundColor: 'white',
        padding: '20px',
        color: 'black',
        textAlign: 'center',
        display:'flex',
        justifyContent: 'center',
      }}
    >
      <Box style={{ border: '1px solid white' }}>
        <Box sx={{border: '1px solid  white',padding: '10px',backgroundColor: 'white',display: 'flex',
    flexDirection: 'column',alignItems: 'center',width: '50vw'}}>
          <Icon component={CheckCircleIcon} style={{ fontSize: 50, color: '#77ed00' }} />
          <Typography variant="h5" align="center" color="black" sx={{ marginTop: '30px' }}>
            Quiz completed!
          </Typography>
          <Typography variant="body1" color="black" sx={{ marginTop: '30px', color: 'rgba(0, 0, 0, 0.3)' }}>
          You scored {score} out of {quizQuestions.length}!
          </Typography>
          <Box sx={{ border: '1px solid white',padding: '10px',backgroundColor: '#f5f5f5',display: 'flex',flexDirection: 'column',
              alignItems: 'center',width: '30vw',marginTop: '30px',  minWidth: '200px'}}>
            <Typography variant="subtitle1" component="span" color="black">
              Your reward: 
            </Typography>
              <Box display="flex" alignItems="center" justifyContent="center" marginTop="10px">
                <Typography variant="subtitle1"  color="black">
                  {calculateBits(score)}
                    <ViewInArIcon style={{ paddingLeft:'8px',fontSize: 18, color: '#7f00ff' }} />
                </Typography>
              </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    <hr style={{ width: '100%', margin: '0', padding: '0' }} />
    <Box mt={3} mb={3} sx={{ textAlign: 'center' }}>
      <Button variant="contained" color="primary" component={Link} to={removeLastPart} onClick={CompleteQuiz}>Continue</Button>
    </Box>
        </div>
      ) : (
        <div> 
           {userIsAddict && (
             <Box>
              <Button
            onClick={() => handleEditQuestion(quizQuestions[currentQuestion]?._id)}
            variant="contained"
            sx={{ width: '160px' }}
          >
            Edit Question
          </Button>
          <IconButton
        aria-label="delete-quiz"
        size="medium"
            onClick={() => handledeleteQuestion(quizQuestions[currentQuestion]?._id)}
          >
           <DeleteIcon fontSize="inherit" />
           </IconButton>
           </Box>
           )}
           <MultipleChoiceQuestion
            questionId={quizQuestions[currentQuestion]?.questionId}
            text={quizQuestions[currentQuestion]?.text}
            question={quizQuestions[currentQuestion]?.question}
            options={quizQuestions[currentQuestion]?.options}
            correctAnswers={quizQuestions[currentQuestion]?.correctAnswers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            quizId={QizeID}
          />
          
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={nextQuestion}
            disabled={selectedAnswer === null}
          >
           
            {currentQuestion === quizQuestions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
       
      )}
    </Container>
  );
};

export default Quiz;
