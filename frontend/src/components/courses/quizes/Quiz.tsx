// import React, { useState, useEffect ,Dispatch, SetStateAction} from 'react';
// import { Button, Typography, Container, Paper } from '@mui/material';
// import MultipleChoiceQuestion from './MultipleChoiceQuestion';
// import { createQuiz } from './../../../api/userAction';

// interface MultipleChoiceQuestionProps {
//   questionId: string;
//   text: string;
//   question: string;
//   options: string[];
//   correctAnswers: string[];
//   selectedAnswer: string | null;
//   setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>;
// }

// const questions: MultipleChoiceQuestionProps[] = [
//   {
//     questionId: 'question_1',
//     text: '<p>What is 2 + 2?</p>', 
//     question: 'What is 2 + 2?',
//     options: ['3', '4', '5', '6'],
//     correctAnswers: ['4'],
//     selectedAnswer: null,
//     setSelectedAnswer: () => {},
//   },
 
// ];
// interface QuizProps {
//     quizData: {
//         quizId: string;
//         title: string;
//         course: string;
//         questions: string[];
//         passingScore: number;
//     };
// }
// const Quiz: React.FC<QuizProps> = ({ quizData }) => {
//   const [currentQuestion, setCurrentQuestion] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [score, setScore] = useState<number>(0);
//   const [showScore, setShowScore] = useState<boolean>(false);
//   const [initialized, setInitialized] = useState(false);

//   useEffect(() => {
//     let isMounted = true;
//   const createQuizAsync = async () => {
//     try {
//       if (!initialized) {
//         if (quizData.course) {
//           const response = await createQuiz(quizData);
//         } else {
//           console.error('CourseId is not defined in lessonData.');
//         }
//         setInitialized(true);
//       }
//     } catch (error) {
//       console.error('Failed to create lesson:', error);
//     }
//   };

//   createQuizAsync();

//   return () => {
//     isMounted = false;
//   };
// }, [initialized, quizData.course]);
//   const handleAnswerOptionClick = (index: number) => {
//     setSelectedAnswer(questions[currentQuestion].options[index]);
//   };

//   const nextQuestion = () => {
//     const currentQuestionData = questions[currentQuestion];
//     const correctAnswers = currentQuestionData.correctAnswers;

//     if (selectedAnswer !== null && correctAnswers.includes(selectedAnswer)) {
//       setScore(score + 1);
//     }

//     setSelectedAnswer(null);
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setScore(0);
//     setShowScore(false);
//   };

//   return (
//     <Container maxWidth="sm" sx={{paddingTop:'100px'}}>
//       {showScore ? (
//         <Paper style={{ padding: '20px', textAlign: 'center' }}>
//           <Typography variant="h4">
//             You scored {score} out of {questions.length}!
//           </Typography>
//           <Button variant="contained" color="primary" onClick={restartQuiz}>
//             Restart Quiz
//           </Button>
//         </Paper>
//       ) : (
//         <Paper style={{ padding: '20px' }}>
//           <Typography variant="h5">{questions[currentQuestion].text}</Typography>
//           <div>
//             {questions[currentQuestion].options?.map((option, index) => (
//               <Button
//                 key={index}
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleAnswerOptionClick(index)}
//                 style={{ margin: '5px' }}
//               >
//                 {option}
//               </Button>
//             ))}
//           </div>
//           <Button
//             variant="contained"
//             color="primary"
//             style={{ marginTop: '20px' }}
//             onClick={nextQuestion}
//             disabled={selectedAnswer === null}
//           >
//             Next
//           </Button>
//           <MultipleChoiceQuestion
//             {...questions[currentQuestion]}
//             selectedAnswer={selectedAnswer}
//             setSelectedAnswer={setSelectedAnswer}
//           />
//         </Paper>
//       )}
//     </Container>
//   );
// };

// export default Quiz;
// Quiz.jsx

import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Paper } from '@mui/material';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import { createQuiz } from './../../../api/userAction';

interface MultipleChoiceQuestionProps {
  questionId: string;
  text: string;
  question: string;
  options: string[];
  correctAnswers: string;
  selectedAnswer: string | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>;
}

interface QuizProps {
  quizData: {
    quizId: string;
    title: string;
    course: string;
    questions: string[];
    passingScore: number;
  };
}

const Quiz: React.FC<QuizProps> = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [initialized, setInitialized] = useState(false);

  const questions: MultipleChoiceQuestionProps[] = [
    {
      questionId: 'question_1',
      text: '<p>What is 2 + 2?</p>',
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswers: '4',
      selectedAnswer: null,
      setSelectedAnswer: () => {},
    },
    {
      questionId: 'question_2',
      text: '<p>What is 3 + 2?</p>',
      question: 'What is 3 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswers: '5',
      selectedAnswer: null,
      setSelectedAnswer: () => {},
    },
    {
      questionId: 'question_3',
      text: '<p>What is 4 + 2?</p>',
      question: 'What is 4 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswers: '6',
      selectedAnswer: null,
      setSelectedAnswer: () => {},
    },
  ];

  useEffect(() => {
    let isMounted = true;

    const createQuizAsync = async () => {
      try {
        if (!initialized) {
          if (quizData.course) {
            const response = await createQuiz(quizData);
          } else {
            console.error('CourseId is not defined in lessonData.');
          }
          setInitialized(true);
        }
      } catch (error) {
        console.error('Failed to create lesson:', error);
      }
    };

    createQuizAsync();

    return () => {
      isMounted = false;
    };
  }, [initialized, quizData.course]);

  const handleAnswerOptionClick = (index: number) => {
    setSelectedAnswer(questions[currentQuestion].options[index]);
  };

  const nextQuestion = () => {
    const currentQuestionData = questions[currentQuestion];
    const correctAnswers = currentQuestionData.correctAnswers;

    if (selectedAnswer !== null && correctAnswers.includes(selectedAnswer)) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: '100px' }}>
      {showScore ? (
        <Paper style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h4">
            You scored {score} out of {questions.length}!
          </Typography>
          <Button variant="contained" color="primary" onClick={restartQuiz}>
            Restart Quiz
          </Button>
        </Paper>
      ) : (
        <div> 
              <Typography variant="h6">{questions[currentQuestion].question}</Typography>
         <Paper style={{ padding: '20px' }}>
         <Typography variant="h6">{questions[currentQuestion].question}</Typography>
         </Paper>
          <div>
            {questions[currentQuestion].options?.map((option, index) => (
              <Button
              className='draggable'
                key={index}
                variant="contained"
                onClick={() => handleAnswerOptionClick(index)}
                style={{ margin: '5px',  cursor: 'grab' ,border: '2px solid #c8d2db' ,boxShadow: '0 2px 0 1px #c8d2db',backgroundColor: 'white',color:'black' }}
              >
                {option}
              </Button>
            ))}
          </div>
        <MultipleChoiceQuestion
            {...questions[currentQuestion]}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={nextQuestion}
            disabled={selectedAnswer === null}
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
       
      )}
    </Container>
  );
};

export default Quiz;

