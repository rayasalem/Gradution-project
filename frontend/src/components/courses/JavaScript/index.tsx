import React, { useState, useEffect } from 'react';
import { createCourse, enrollInCourse, getCourseDetails } from './../../../api/userAction';
import { useNavigate } from 'react-router-dom';
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

const JSCourse: React.FC = () => {
  const [courseId, setCourseId] = useState<string | null>(null);
  const [courseCreated, setCourseCreated] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const [lessonsAndQuizzes, setLessonsAndQuizzes] = useState<ILessonQuiz[]>([
    { id: 1, OriginalID: '1', type: 'lesson', contentTitle: 'Variables and Data Types', completed: false },
    { id: 2, OriginalID: '2', type: 'lesson', contentTitle: 'Operators and Expressions', completed: false },
    { id: 3, OriginalID: '3', type: 'lesson', contentTitle: 'Functions', completed: false },
    { id: 4, OriginalID: '4', type: 'quiz', contentTitle: 'Quiz 1', completed: false },
    { id: 5, OriginalID: '5', type: 'lesson', contentTitle: 'Control Flow and Loops', completed: false },
    { id: 6, OriginalID: '6', type: 'lesson', contentTitle: 'Arrays and Objects', completed: false },
    { id: 7, OriginalID: '7', type: 'lesson', contentTitle: 'Scope and Closures', completed: false },
    { id: 8, OriginalID: '8', type: 'quiz', contentTitle: 'Quiz 2', completed: false },
    { id: 9, OriginalID: '9', type: 'lesson', contentTitle: 'DOM Manipulation', completed: false },
    { id: 10, OriginalID: '10', type: 'lesson', contentTitle: 'Events', completed: false },
    { id: 11, OriginalID: '11', type: 'lesson', contentTitle: 'Asynchronous JavaScript', completed: false },
    { id: 12, OriginalID: '12', type: 'lesson', contentTitle: 'Error Handling and Debugging', completed: false },
    { id: 13, OriginalID: '13', type: 'quiz', contentTitle: 'Final Quiz', completed: false },
  ]);

  const navigate = useNavigate();

  const lessonCompleted = (lessonId: number) => lessonsAndQuizzes.find((item) => item.id === lessonId)?.completed || false;

  const quizCompleted = (quizId: number) => lessonsAndQuizzes.find((item) => item.id === quizId)?.completed || false;
  const LOCAL_STORAGE_KEY = 'lessonsAndQuizzesStatusjs';

  const initializeLessonsAndQuizzes = () => {
    const storedStatus = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedStatus) {
      setLessonsAndQuizzes(JSON.parse(storedStatus));
    }
  };
  useEffect(() => {
    initializeLessonsAndQuizzes();
    const fetchData = async () => {
      try {
        const Course = await getCourseDetails('JavaScript');
        if (Course && Course.course) {
          setCourseId(Course.course._id)
          localStorage.setItem('createdCourseIdJavaScript', Course.course._id);
          navigate(`/learn/javaScript/${Course.course._id}`);
        }
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchenrolledCourses = async () => {
        try {
          const createdCourseIdJS = localStorage.getItem('createdCourseIdJavaScript');
          const res =await enrollInCourse(createdCourseIdJS)
      } catch (error) {
        console.error('Error fetching enrolledCourses:', error);
      }
    };
    fetchenrolledCourses ();
  }, []);
  const markItemAsCompleted = (itemId: number) => {
    const index = lessonsAndQuizzes.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const updatedLessons = [...lessonsAndQuizzes];
      updatedLessons[index].completed = true;
      setLessonsAndQuizzes(updatedLessons);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLessons));

    }
    setHoveredItem(null);
  };

  useEffect(() => {
    console.log('Updated state:', lessonsAndQuizzes);
    console.log('Previous lesson:', lessonsAndQuizzes[0]);
    console.log('Previous lesson completed:', lessonCompleted(lessonsAndQuizzes[0]?.id));
  }, [lessonsAndQuizzes]);

  return (
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
              src='/images/javascript.png'
              alt='JavaScript'
              style={{
                width: '100px',
                maxWidth: '100px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <Typography variant='h5' align='center' sx={{ color: '#2d3846', marginBottom: '16px' }}>
              JavaScript
            </Typography>
          </Box>
          <Typography
            variant='body2'
            align='justify'
            sx={{ color: '#6b7f99', fontWeight: '400', paddingLeft: '24px' }}
          >
            JavaScript is a versatile programming language used in web development. This course covers fundamental
            concepts such as variables, functions, control flow, DOM manipulation, asynchronous programming, error
            handling, and more. It's a crucial language for both front-end and back-end web development.
          </Typography>
        </Paper>    
        {lessonsAndQuizzes.map((item, index) => (
        <Button
          key={item.id}
          component={Link}
          to={
            index === 0 || (index < lessonsAndQuizzes.length)
              ? `/learn/javaScript/${courseId}/${item.type}${item.OriginalID}`
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
                  marginTop: '30px',
                  marginLeft: '1px',
                  textAlign: 'center',
                  fontFamily: 'Tahoma, sans-serif',
                }}
              >
                {item.contentTitle}
              </Typography>
            </Box>

            {index !== 0 &&
              ((item.type === 'lesson' && !lessonCompleted(lessonsAndQuizzes[index - 1]?.id)) ||
                (item.type === 'quiz' && !quizCompleted(lessonsAndQuizzes[index - 1]?.id))) ? (
                <Box sx={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
                  <HttpsIcon />
                </Box>
              ) : null}
          </Paper>
        </Button>
      ))}
    </Box>
  );
};

export default JSCourse;