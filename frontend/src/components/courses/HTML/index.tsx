import React, { useState, useEffect } from 'react';
import { createCourse } from './../../../api/userAction';
import { useNavigate } from 'react-router-dom';
import LessonOne from './lessonHtml/LessonOne';
import QuizOne from './quizHtml/QuizOne';
import LessonTwo from './lessonHtml/LessonTwo';
import LessonThree from './lessonHtml/LessonThree';
import LessonSeven from './lessonHtml/LessonSeven';
import LessonEight from './lessonHtml/LessonEight';
import LessonNine from './lessonHtml/LessonNine';
import QuizTwo from './quizHtml/QuizTwo';
import QuizThree from './quizHtml/QuizThree';
import { Box } from '@mui/material';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



interface ICourse {
  title: string;
  description: string;
  savedcourse?: {
    _id: string;
  };
}

const HTMLCourse: React.FC = () => {
  const [courseId, setCourseId] = useState<string | null>(null);
  const [courseCreated, setCourseCreated] = useState<boolean>(false);
  const navigate = useNavigate();
  const lessons = [
    { id: 1, name: 'Lesson 1', image: '/images/lesson1.png' },
    { id: 2, name: 'Lesson 2', image: '/images/lesson2.png' },
  ];
  
  const quizzes = [
    { id: 1, name: 'Quiz 1', image: '/images/quiz1.png' },
    { id: 2, name: 'Quiz 2', image: '/images/quiz2.png' },
  ];
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

  // return <div>{courseId !== null && <LessonOne />}  </div>;
  // return <div>{courseId !== null && <LessonNine/>}  </div>;
  // return <div>{courseId !== null && <QuizThree/>}  </div>;
   return (
    <Box>
  <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor:'#f2f5f7',
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
          marginTop: '100px',
          borderRadius:'4px',
        }}
      >
          <Box><img
          src='/images/html.png' 
          alt="HTML"
          style={{
            width: '100px',
            maxWidth: '100px',
            height: '80px',
            borderRadius: '50%', 
            marginBottom: '10px',
          }}
        />
        <Typography variant="h5" align="center" sx={{color:'#2d3846',marginBottom:'16px'}}>
         HTML
        </Typography>
        </Box>
        <Typography variant="body2" align="justify" sx={{color:'#6b7f99',fontWeight:'400',paddingLeft:'24px'}}>
        HTML is at the core of every web page. It’s beginner-friendly and knowing the basics is useful for everyone who works in digital design, marketing, content and more. If you’re interested in front-end web development, this course is a great place to start! You don’t need any previous coding experience, and we have plenty of other courses for you to deepen your knowledge once you’re finished, including CSS and JavaScript.
        </Typography>
      </Paper>
    </Box>
    <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#ffffff', 
          marginTop: '20px',
          borderRadius: '4px',
        }}
      >
        {lessons.map((lesson) => (
          <Link key={lesson.id} to={`/learn/html/${courseId}/lesson/${lesson.id}`}>
            <Box>
              <img
                src={lesson.image}
                alt={lesson.name}
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
              />
              <Typography variant="body1" sx={{ display: 'inline' }}>{lesson.name}</Typography>
            </Box>
          </Link>
        ))}
      </Paper>

      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '500px',
          backgroundColor: '#ffffff', 
          marginTop: '20px',
          borderRadius: '4px',
        }}
      >
        {quizzes.map((quiz) => (
          <Link key={quiz.id} to={`/learn/html/${courseId}/quiz/${quiz.id}`}>
            <Box>
              <img
                src={quiz.image}
                alt={quiz.name}
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
              />
              <Typography variant="body1" sx={{ display: 'inline' }}>{quiz.name}</Typography>
            </Box>
          </Link>
        ))}
      </Paper>
    </Box>
   );


};

export default HTMLCourse;