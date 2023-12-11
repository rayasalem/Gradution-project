import React, { useState, useEffect } from 'react';
import { createCourse, retrieveUserBitsAndHearts } from './../../../api/userAction';
import { useNavigate, Navigate } from 'react-router-dom';
import { Box, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';
import HttpsIcon from '@mui/icons-material/Https';

interface ICourse {
  title: string;
  description: string;
  savedcourse?: {
    _id: string;
  };
}
interface ILessonQuiz {
  id: number;
  OriginalID: string;
  type: string;
  contentTitle: string;
  completed: boolean;
}
const PythonCourse: React.FC = () => {
  const [courseId, setCourseId] = useState<string | null>(null);
  const [heartsCount, setheartsCount] = useState<number>(0);
  const [bitsLessonStart, setBitsLessonStart] = useState<boolean>(false); 
  const [courseCreated, setCourseCreated] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [lessonsAndQuizzes, setLessonsAndQuizzes] = useState<ILessonQuiz[]>([
    { id: 1, OriginalID: '1', type: 'lesson', contentTitle: 'Introduction to Python', completed: false },
    { id: 2, OriginalID: '2', type: 'lesson', contentTitle: 'Python Variables', completed: false },
    { id: 3, OriginalID: '3', type: 'lesson', contentTitle: 'Python Strings', completed: false },
    { id: 4, OriginalID: '1', type: 'quiz', contentTitle: 'Python Quiz ONE', completed: false },
    { id: 5, OriginalID: '4', type: 'lesson', contentTitle: 'Python Lists', completed: false },
    { id: 6, OriginalID: '5', type: 'lesson', contentTitle: 'Python Tuples', completed: false },
    { id: 7, OriginalID: '6', type: 'lesson', contentTitle: 'Python Sets', completed: false },
    { id: 8, OriginalID: '2', type: 'quiz', contentTitle: 'Python Quiz TWO', completed: false },
    { id: 9, OriginalID: '7', type: 'lesson', contentTitle: 'Python Dictionaries', completed: false },
    { id: 10, OriginalID: '8', type: 'lesson', contentTitle: 'Python Functions', completed: false },
    { id: 11, OriginalID: '9', type: 'lesson', contentTitle: 'Python If ... Else', completed: false },
    { id: 12, OriginalID: '10', type: 'lesson', contentTitle: 'Python For Loops', completed: false },
    { id: 13, OriginalID: '3', type: 'quiz', contentTitle: 'Final Python Quiz ' , completed: false},
  ]);

  const navigate = useNavigate();
  const lessonCompleted = (lessonId: number) => {
    return lessonsAndQuizzes.find((item) => item.id === lessonId)?.completed || false;
  };

  const quizCompleted = (quizId: number) => {
    return lessonsAndQuizzes.find((item) => item.id === quizId)?.completed || false;
  };
  const LOCAL_STORAGE_KEY = 'lessonsAndQuizzesStatusPython';

  const initializeLessonsAndQuizzes = () => {
    const storedStatus = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedStatus) {
      setLessonsAndQuizzes(JSON.parse(storedStatus));
    }
  };
  useEffect(() => {

    initializeLessonsAndQuizzes();
    const courseData = {
      title: 'Python',
      description: 'This is Python Course',
    };
    localStorage.removeItem('createdCourseIdToPython');

    const storedCourseId = localStorage.getItem('createdCourseIdToPytho');
    if (storedCourseId) {
      setCourseId(storedCourseId);
      setCourseCreated(true);
      navigate(`/learn/python/${storedCourseId}`);

    } else if (!courseCreated) {
      try {
        createCourse(courseData as ICourse)
          .then(result => {
            if (result && result.savedcourse && result.savedcourse._id) {

              localStorage.setItem('createdCourseIdToPytho', result.savedcourse._id);
              setCourseId(result.savedcourse._id);
              setCourseCreated(true);
              navigate(`/learn/python/${result.savedcourse._id}`);
            }
          })
          .catch(error => {
            console.error('Error creating course:', error);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }
    }
  }, [courseCreated, navigate]);
  const markItemAsCompleted = (itemId: number) => {
    const index = lessonsAndQuizzes.findIndex((item) => item.id === itemId);
    if (index !== -1 && !lessonsAndQuizzes[index].completed) {
      const updatedLessons = lessonsAndQuizzes.map((lesson, i) => {
        if (i === index) {
          return { ...lesson, completed: true };
        }
        return lesson;
      });
      setLessonsAndQuizzes(updatedLessons);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLessons));
    }
    setHoveredItem(null);
  };
  
  useEffect(() => {
    console.log('Updated state:', lessonsAndQuizzes);
  }, [lessonsAndQuizzes]);
  
  
   return (
  <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#f2f5f7',
          maxWidth: '100vw',
          overflow: 'hidden',
          paddingTop:'80px'
        }}
      >
       <Paper
          elevation={3}
          sx={{
            padding: 3,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '500px',
            backgroundColor: '#fff',
            borderRadius: '4px',
            marginBottom: '20px',
          }}
        >
          <Box>
            <img
              src='/images/python.png'
              alt='Python'
              style={{
                width: '100px',
                maxWidth: '100px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <Typography variant='h5' align='center' sx={{ color: '#2d3846', marginBottom: '16px' }}>
            Python
            </Typography>
          </Box>
          <Typography
            variant='body2'
            align='justify'
            sx={{ color: '#6b7f99', fontWeight: '400', paddingLeft: '24px' }}
          >
          Python is the world’s fastest growing programming language is easy to read, learn and code. You’ll learn to build interactive programs and automate your tasks, analyze and visualize even the most complex data and create AI and machine learning models. No previous coding experience needed.</Typography>
        </Paper>

        {lessonsAndQuizzes.map((item, index) => (
   <Button
     key={item.id}
       component={Link}
        to={
         index === 0 || (courseCreated && index < lessonsAndQuizzes.length)
         ? `/learn/python/${courseId}/${item.type}${item.OriginalID}`
        : '#'
       }
      style={{ textDecoration: 'none', width: '100%', marginBottom: '20px' }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
         disabled={index !== 0 && !lessonCompleted(lessonsAndQuizzes[index - 1].id)}   
         onClick={() => markItemAsCompleted(item.id)}
 >
            <Paper
              elevation={3}
              sx={{
                position: 'relative',
                padding: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '500px',
                transition: 'transform 0.3s ease-in-out',
                transform: hoveredItem === item.id ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {item.type === 'lesson' && <BookIcon sx={{ fontSize: 40, color: 'blue' }} />} 
                {item.type === 'quiz' && <QuizIcon sx={{ fontSize: 40, color: '#835088' }} />} 
                <Typography
          variant='body2'
          sx={{
            display: 'inline',
            color: '#999',
            fontSize: '12px',
            marginTop: '1px',
          }}
        >
          {item.type}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: '18px',
            color: 'black',
            marginBottom: '1px',
            marginTop:'30px',
            marginLeft: '1px',
            textAlign: 'center',
            fontFamily: 'Tahoma, sans-serif',          }}
        >
                  {item.contentTitle}
                </Typography>
              </Box>

                 {index !== 0 &&
                ((item.type === 'lesson' && !lessonCompleted(lessonsAndQuizzes[index - 1]?.id)) ||
                 (item.type === 'quiz' && !quizCompleted(lessonsAndQuizzes[index - 1]?.id))) ? (
                 <Box sx={{position: 'absolute', top: 0, right: 0, margin: '10px'}}>
                    <HttpsIcon />
                    </Box>
                   ) : null}
            </Paper>
          </Button>
          
        ))}
      </Box>
    </Box>
   );


};

export default PythonCourse;