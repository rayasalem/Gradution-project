import React, { useState, useEffect } from 'react';
import { createCourse } from './../../../api/userAction';
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
const HTMLCourse: React.FC = () => {
  const [courseId, setCourseId] = useState<string | null>(null);
  const [courseCreated, setCourseCreated] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [lessonsAndQuizzes, setLessonsAndQuizzes] = useState<ILessonQuiz[]>([
    { id: 1, OriginalID: '1', type: 'lesson', contentTitle: 'Introduction to HTML', completed: false },
    { id: 2, OriginalID: '2', type: 'lesson', contentTitle: 'HTML Tags and Structure', completed: false },
    { id: 3, OriginalID: '3', type: 'lesson', contentTitle: 'HTML Attributs', completed: false },
    { id: 4, OriginalID: '1', type: 'quiz', contentTitle: 'HTML  Quiz ONE', completed: false },
    { id: 5, OriginalID: '4', type: 'lesson', contentTitle: 'HTML Forms and Elements', completed: false },
    { id: 6, OriginalID: '5', type: 'lesson', contentTitle: 'HTML Tabel', completed: false },
    { id: 7, OriginalID: '6', type: 'lesson', contentTitle: 'HTML Semantics', completed: false },
    { id: 8, OriginalID: '2', type: 'quiz', contentTitle: 'HTML Quiz TWO', completed: false },
    { id: 9, OriginalID: '7', type: 'lesson', contentTitle: 'HTML Media', completed: false },
    { id: 10, OriginalID: '8', type: 'lesson', contentTitle: 'HTML Links and Navigation', completed: false },
    { id: 11, OriginalID: '9', type: 'lesson', contentTitle: 'HTML Meta Data', completed: false },
    { id: 12, OriginalID: '10', type: 'lesson', contentTitle: 'HTML5 Features', completed: false },
    { id: 13, OriginalID: '3', type: 'quiz', contentTitle: 'Final HTML Quiz ' , completed: false},
  ]);
  const { markCommandAsCompleted, setCompletedCommands } = props;

  const navigate = useNavigate();
  // const lessonsAndQuizzes = [
  //   { id: 1, OriginalID: '1', type: 'lesson', contentTitle: 'Introduction to HTML' },
  //   { id: 2, OriginalID: '2', type: 'lesson', contentTitle: 'HTML Tags and Structure' },
  //   { id: 3, OriginalID: '3', type: 'lesson', contentTitle: 'HTML Attributs' },
  //   { id: 4, OriginalID: '1', type: 'quiz', contentTitle: 'HTML  Quiz ONE' },
  //   { id: 5, OriginalID: '4', type: 'lesson', contentTitle: 'HTML Forms and Elements' },
  //   { id: 6, OriginalID: '5', type: 'lesson', contentTitle: 'HTML Tabel' },
  //   { id: 7, OriginalID: '6', type: 'lesson', contentTitle: 'HTML Semantics' },
  //   { id: 8, OriginalID: '2', type: 'quiz', contentTitle: 'HTML Quiz TWO' },
  //   { id: 9, OriginalID: '7', type: 'lesson', contentTitle: 'HTML Media' },
  //   { id: 10, OriginalID: '8', type: 'lesson', contentTitle: 'HTML Links and Navigation' },
  //   { id: 11, OriginalID: '9', type: 'lesson', contentTitle: 'HTML Meta Data' },
  //   { id: 12, OriginalID: '10', type: 'lesson', contentTitle: 'HTML5 Features' },
  //   { id: 13, OriginalID: '3', type: 'quiz', contentTitle: 'Final HTML Quiz ' },
  // ];
  const lessonCompleted = (lessonId: number) => {
    return lessonsAndQuizzes.find((item) => item.id === lessonId)?.completed || false;
  };

  const quizCompleted = (quizId: number) => {
    return lessonsAndQuizzes.find((item) => item.id === quizId)?.completed || false;
  };
  useEffect(() => {
    const courseData = {
      title: 'HTML',
      description: 'This is HTML Course',
    };

    const storedCourseId = localStorage.getItem('createdCourseId');

    if (storedCourseId) {
      setCourseId(storedCourseId);
      setCourseCreated(true);
      navigate(`/learn/html/${storedCourseId}`);

    } else if (!courseCreated) {
      try {
        createCourse(courseData as ICourse)
          .then(result => {
            if (result && result.savedcourse && result.savedcourse._id) {
              localStorage.setItem('createdCourseId', result.savedcourse._id);
              setCourseId(result.savedcourse._id);
              setCourseCreated(true);
              navigate(`/learn/html/${result.savedcourse._id}`);
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
    const updatedItems = lessonsAndQuizzes.map((item) =>
      item.id === itemId ? { ...item, completed: true } : item
    );
    setHoveredItem(null); 
    markCommandAsCompleted(itemId); 
    setCompletedCommands((prevCompletedCommands) => new Set([...prevCompletedCommands, itemId])); 
  };

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
            marginTop: '100px',
          }}
        >
          <Box>
            <img
              src='/images/html.png'
              alt='HTML'
              style={{
                width: '100px',
                maxWidth: '100px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <Typography variant='h5' align='center' sx={{ color: '#2d3846', marginBottom: '16px' }}>
              HTML
            </Typography>
          </Box>
          <Typography
            variant='body2'
            align='justify'
            sx={{ color: '#6b7f99', fontWeight: '400', paddingLeft: '24px' }}
          >
            HTML is at the core of every web page. It’s beginner-friendly and knowing the basics is useful for everyone
            who works in digital design, marketing, content, and more. If you’re interested in front-end web
            development, this course is a great place to start! You don’t need any previous coding experience, and we
            have plenty of other courses for you to deepen your knowledge once you’re finished, including CSS and
            JavaScript.
          </Typography>
        </Paper>

        {lessonsAndQuizzes.map((item, index) => (
   <Button
   key={item.id}
   component={Link}
   to={
  index === 0 || (courseCreated && index < lessonsAndQuizzes.length)
    ? `/learn/html/${courseId}/${item.type}${item.OriginalID}`
    : '#'
}
   style={{ textDecoration: 'none', width: '100%', marginBottom: '20px' }}
   onMouseEnter={() => setHoveredItem(item.id)}
   onMouseLeave={() => setHoveredItem(null)}
  disabled={index !== 0 && (!courseCreated || (index !== 1 && !courseCreated) || !lessonsAndQuizzes[index - 1]?.completed)
  }
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
              {index !== 0 &&(!lessonCompleted(item.id) && item.type === 'lesson') ||
             (!quizCompleted(item.id) && item.type === 'quiz') ? (
           <Box sx={{position: 'absolute',top: 0,right: 0,margin: '10px'}}>
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

export default HTMLCourse;