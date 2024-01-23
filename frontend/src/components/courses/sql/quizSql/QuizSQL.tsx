import React, {  useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getlistQustionInQuiz, getprofileInfo } from '../../../../api/userAction';
import AddIcon from '@mui/icons-material/Add';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { questionsState } from '../../../recoilState';
import Quiz from '../../quizes/Quiz';
interface MultipleChoiceQuestionProps {
    questionId?: string;
    text: string;
    question?: string;
    options: string[];
    correctAnswers: string;
    quizId?: string; 
  
  }
const QuizSQL = () => {
    const [userIsAddict, setuserIsAddict] = React.useState(false);
    const { quizId } = useParams<{ quizId: string }>();
    const [questions, setQuestions] = useRecoilState<MultipleChoiceQuestionProps[]>(questionsState as any);
    const navigate = useNavigate();
    
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
      useEffect(() => {
        const fetchDataForQustion = async () => {
            try {
            const Qustionresponse=  await getlistQustionInQuiz(quizId)
            const { questions } = Qustionresponse;
            setQuestions(questions);
          } catch (error) {
            console.error('Error :', error);
          }
        };
        fetchDataForQustion ();
      }, [quizId, setQuestions]);
      const handleClick = async () => {
        navigate(`/DevLoom/admin/createQustionInQuiz/${quizId}`); 
    };
  return (
    <Box sx={{ display: 'flex',alignItems: 'center',flexDirection: 'column',justifyContent: 'center',paddingTop:'80px'}}>

    {userIsAddict && (
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <Button
                size="small"
                aria-label="add-qustion"
                onClick={handleClick}
                sx={{ zIndex: '1', color: '#e91e63', backgroundColor: '#78909c' }}
              >
               <AddIcon />
                create new qustion
              </Button>
            </Box>
          )}
        <Quiz quizQuestions={questions} />
            </Box>
  )
}

export default QuizSQL