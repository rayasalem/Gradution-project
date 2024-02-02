import React, { useState, useEffect} from 'react';
import { deleteLessonById, enrollInCourse, getCourseDetails, getlistLessonsInCourse, getprofileInfo, trackCourseProgress } from './../../../api/userAction';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, Button ,TextField} from '@mui/material';
import { Link } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';
import HttpsIcon from '@mui/icons-material/Https';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { deleteQuizById } from './../../../api/userAction';
import { getlistQuizsInCourse } from './../../../api/userAction';
import { useParams } from 'react-router-dom';
import LessonQuizCompletionButton from '../LessonQuizCompletionButton';
interface ICourse {
  title: string;
  description: string;
  savedcourse?: {
    _id: string;
  };
}
interface ILessonQuiz {
  id: number;
  OriginalID: number;
  type: string;
  contentTitle: string;
  lessonId?: string;
  quizId?:string;
  is_completed?: boolean;
}
const JavaCourse: React.FC = () => {
  const [hasEffectRun, setHasEffectRun] = useState(false);
  const { CourseId } = useParams<{ CourseId: string }>();
  const [courseId, setCourseId] = useState<string | null>(null); 
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [userIsAddict, setuserIsAddict] = React.useState(false);
  const [Title, setTitle] = useState<string | null>(null);
  const [Discription, setDiscription] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [lessonsAndQuizzes, setLessonsAndQuizzes] = useState<ILessonQuiz[]>([
    { id: 1, OriginalID: 1, type: 'lesson', contentTitle: ''},
    { id: 2, OriginalID: 2, type: 'lesson', contentTitle: '' },
    { id: 3, OriginalID: 3, type: 'lesson', contentTitle: ''},
    { id: 4, OriginalID: 1, type: 'quiz', contentTitle: ''},
    { id: 5, OriginalID: 4, type: 'lesson', contentTitle: ''},
    { id: 6, OriginalID: 5, type: 'lesson', contentTitle: ''},
    { id: 7, OriginalID: 6, type: 'lesson', contentTitle: '' },
    { id: 8, OriginalID: 2, type: 'quiz', contentTitle: ''},
    { id: 9, OriginalID: 7, type: 'lesson', contentTitle: '' },
    { id: 10, OriginalID: 8, type: 'lesson', contentTitle: ''},
    { id: 11, OriginalID: 9, type: 'lesson', contentTitle: '' },
    { id: 12, OriginalID: 10, type: 'lesson', contentTitle: '' },
    { id: 13, OriginalID: 3, type: 'quiz', contentTitle: ''},
  ]);

  const navigate = useNavigate();
  const LOCAL_STORAGE_KEY = 'lessonsAndQuizzesStatusJava';

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
        const Course = await getCourseDetails('Java');
        if (Course && Course.course && 'title' in Course.course && 'description' in Course.course) {
          setTitle(Course.course?.title as string)
          setDiscription(Course.course?.description as string)
          setCourseId(Course.course._id)
          localStorage.setItem('createdCourseIdJAVA', Course.course._id);
          navigate(`/learn/Java/${Course.course._id}`);
        }
      } catch (error) {
        console.error('An unexpected error occurred:', error);
      }
    };
    fetchData();
  }, []);
  
  
            
  useEffect(() => {
    const fetchData = async () => {
      try {
        const createdCourseIdJAVA = localStorage.getItem('createdCourseIdJAVA');
        const allQuizzes = await  getlistQuizsInCourse(createdCourseIdJAVA);
        if (allQuizzes?.Quiz) {
          setLessonsAndQuizzes((prevLessonsAndQuizzes) => {
            const updatedLessonsAndQuizzes = prevLessonsAndQuizzes.map((item) => {
              const correspondingQuiz = allQuizzes.Quiz.find(
                (quiz: { _id: string;order: number;is_completed:boolean; title: string }) =>
                  item.type === 'quiz' && quiz.order === item.OriginalID
              );
              if (correspondingQuiz) {
                return { ...item, contentTitle: correspondingQuiz.title, quizId: correspondingQuiz._id,is_completed: correspondingQuiz.is_completed};
              }
              return item;
            });
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLessonsAndQuizzes));
            console.log(updatedLessonsAndQuizzes)

            return updatedLessonsAndQuizzes;
          });
        }
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const createdCourseIdJAVA = localStorage.getItem('createdCourseIdJAVA');
        const allLessons = await getlistLessonsInCourse(createdCourseIdJAVA);
        if (allLessons?.lessons) {
          setLessonsAndQuizzes((prevLessonsAndQuizzes) => {
            const updatedLessonsAndQuizzes = prevLessonsAndQuizzes.map((item) => {
              const correspondingLesson = allLessons.lessons.find(
                (lesson: { _id: string; order: number;is_completed:boolean; title: string }) =>
                  item.type === 'lesson' && lesson.order === item.OriginalID
              );
  
              if (correspondingLesson) {
                return { ...item, contentTitle: correspondingLesson.title, lessonId: correspondingLesson._id,is_completed: correspondingLesson.is_completed};
              }
              return item;
            });
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLessonsAndQuizzes));
            return updatedLessonsAndQuizzes;
          });
        }
      } catch (error) {
        console.error('error in getAllLesson:', error);
      }
    };
  
    fetchData();
  }, []);
  useEffect(() => {
    const fetchProgressData = async () => {
    
      const storedHasEffectRun = localStorage.getItem('hasEffectRun');

   
        try {
          const createdCourseIdJAVA = localStorage.getItem('createdCourseIdJAVA');
          const progressData = await trackCourseProgress(createdCourseIdJAVA);
        } catch (error) {
          console.error('An unexpected error occurred:', error);
        }
       
    };
    fetchProgressData();
  }, []);
  useEffect(() => {
    const checkQuizCompletion = () => {
      const allQuizzes = lessonsAndQuizzes.filter((item) => item.type === 'quiz');
      const allQuizzesCompleted = allQuizzes.every((quiz) => quiz.is_completed);
      const allLessons = lessonsAndQuizzes.filter((item) => item.type === 'lesson');
      const allLessonsCompleted = allLessons.every((lesson) => lesson.is_completed);
      setIsQuizCompleted(allQuizzesCompleted&&allLessonsCompleted);
    };

    checkQuizCompletion();
  }, [lessonsAndQuizzes]);
  useEffect(() => {
    const fetchDataForQuizzes = async () => {
        try {
          const profileInfo = await getprofileInfo(); 
          setUsername(profileInfo?.user?.username);
          if (profileInfo?.user?.role === 'admin') {
            setuserIsAddict(true);
          }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };
    fetchDataForQuizzes ();
  }, []);
  useEffect(() => {
    const fetchenrolledCourses = async () => {
        try {
          const createdCourseIdJAVA = localStorage.getItem('createdCourseIdJAVA');
          const res =await enrollInCourse(createdCourseIdJAVA)
      } catch (error) {
        console.error('Error fetching enrolledCourses:', error);
      }
    };
    fetchenrolledCourses ();
  }, []);
  const handleClick = async () => {
    const createdCourseIdJAVA = localStorage.getItem('createdCourseIdJAVA');

    if (createdCourseIdJAVA) {
      navigate(`/DevLoom/admin/createLesson/${createdCourseIdJAVA}`);
    } else {
      console.error('No course ID found in local storage');
    }  };
    const handleCreateQuiz = async () => {
        const createdCourseIdJAVA = localStorage.getItem('createdCourseIdJAVA');
    
        if (createdCourseIdJAVA) {
          navigate(`/DevLoom/admin/createQuiz/${createdCourseIdJAVA}`);
        } else {
          console.error('No course ID found in local storage');
        }  };
        const deleteLesson = async (lessonId: any, originalId: number, event: React.MouseEvent<HTMLButtonElement>) => {
          try {
            await deleteLessonById(lessonId);
            setLessonsAndQuizzes((prevLessonsAndQuizzes) => {
              const updatedLessons = prevLessonsAndQuizzes.filter(
                (item) => item.type !== 'lesson' || item.OriginalID !== originalId
              );
              return updatedLessons;
            });
          } catch (error) {
            console.error('Error deleting lesson:', error);
          }
        };
    const deleteQuiz = async (quizId:any,originalId: number, event: React.MouseEvent<HTMLButtonElement>) => {
      try {
        await deleteQuizById(quizId);
        setLessonsAndQuizzes((prevLessonsAndQuizzes) => {
          const updatedLessons = prevLessonsAndQuizzes.filter(
            (item) => item.type !== 'quiz' || item.OriginalID !== originalId
          );
          return updatedLessons;
        });
      } catch (error) {
        console.error('Error deleting quiz:', error);
      }
     };
     const handleupdateClick = async () => {
      const createdCourseIdJAVA = localStorage.getItem('createdCourseIdJAVA');
      if (createdCourseIdJAVA) {
        navigate(`/DevLoom/admin/updateCourse/${createdCourseIdJAVA}`);
      } else {
        console.error('No course ID found in local storage');
      }  };
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
              src='/images/Java.png'
              alt='JAVA'
              style={{
                width: '100px',
                maxWidth: '100px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            />
            <Typography variant='h5' align='center' sx={{ color: '#2d3846', marginBottom: '16px' }}>
            {Title}
            </Typography>
          </Box>
          <Typography
            variant='body2'
            align='justify'
            sx={{ color: '#6b7f99', fontWeight: '400', paddingLeft: '24px' }}
          >
          {Discription}    
      </Typography>
        </Paper>
        {userIsAddict && (
        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button
            size="small"
            aria-label="add"
            onClick={handleupdateClick}
            sx={{ zIndex: '1', color: '#e91e63', backgroundColor: '#78909c' }}
          >
            update Course
          </Button>
          <Button
            size="small"
            aria-label="add"
            onClick={handleClick}
            sx={{ zIndex: '1', color: '#e91e63', backgroundColor: '#78909c' }}
          >
            <AddIcon />
            create new Lesson
          </Button>
          <Button
            size="small"
            aria-label="add-quiz"
            onClick={handleCreateQuiz}
            sx={{ zIndex: '1', color: '#e91e63', backgroundColor: '#78909c' }}
          >
            <AddIcon />
            create new Quiz
          </Button>
        </Box>
      )}
      
        {lessonsAndQuizzes.map((item, index) => (
           <Button
           key={item.id}
            style={{ textDecoration: 'none', width: '100%', marginBottom: '20px' }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            disabled={userIsAddict ? false :index !== 0 && !(lessonsAndQuizzes[index - 1].is_completed)}   
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
        <Link
            to={`/learn/Java/${item.type}/${item.type === 'lesson' ? item.lessonId : item.quizId}`}   
       style={{ textDecoration: 'none', width: '100%', marginBottom: '20px' }}
        > 
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
                </Typography></Link>
                
              </Box>

               {!userIsAddict &&( 
                   index !== 0 && !(lessonsAndQuizzes[index]?.is_completed) &&
                    !(lessonsAndQuizzes[index - 1]?.is_completed)) ? (
                <Box sx={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
                    <HttpsIcon /> 
                  </Box>
                 ) : null}
                 {!userIsAddict && (lessonsAndQuizzes[index]?.is_completed) ? (
                   <Box sx={{ position: 'absolute', top: 0, right: 0, margin: '10px' }}>
                      <CheckIcon sx={{ color: 'green', fontSize: 30 }} />
                          </Box>
                       ) : null} 
             {userIsAddict && item.type === 'lesson' && (
            <Box>
             <Button
               color="primary"
               size="small"
               aria-label="update-lesson"
               onClick={() => navigate(`/DevLoom/admin/updateLesson/${item.lessonId}`)}
              sx={{ zIndex: '1' }}
                 >
                Update Lesson
              </Button>
             <IconButton
        aria-label="delete"
        size="small"
        onClick={(event) => deleteLesson(item.lessonId,item.OriginalID, event)}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Box>
  )}

{userIsAddict &&
  item.type === 'quiz' && (
    <Box>
      <Button
        color="primary"
        size="small"
        aria-label="update-quiz"
        onClick={() => navigate(`/DevLoom/admin/updateQuiz/${item.quizId}`)}
        sx={{ zIndex: '1' }}
      >
        Update Quiz
      </Button>
      <IconButton
        aria-label="delete-quiz"
        size="small"
        onClick={(event) => deleteQuiz(item.quizId, item.OriginalID, event)}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Box>
  )}
            </Paper>
            </Button>
            
        ))}
         <LessonQuizCompletionButton
        isCompleted={isQuizCompleted}
        projectName="Java"
        recipientName={username}
        issuedDate={new Date().toLocaleDateString()}
      />
      </Box>
     
    </Box>
   );


};

export default JavaCourse;