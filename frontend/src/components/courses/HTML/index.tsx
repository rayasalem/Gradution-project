import React, { useState, useEffect } from 'react';
import { createCourse } from './../../../api/userAction';
import { useNavigate } from 'react-router-dom';
import LessonOne from './lessonHtml/LessonOne';
import QuizOne from './quizHtml/QuizOne';
import LessonTwo from './lessonHtml/LessonTwo';
import LessonThree from './lessonHtml/LessonThree';

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
  // return <div>{courseId !== null && <LessonThree/>}  </div>;
  return <div>{courseId !== null && <QuizOne />}  </div>;

};

export default HTMLCourse;