import React, { useEffect } from 'react';
import { createCourse } from './../../../api/userAction';

const HTMLCourse: React.FC = () => {
  const lessonData = {
    title: 'HTML',
    description: 'This is HTML Course',
  };


  useEffect(() => {
    const courseData = {
      ...lessonData,
    };

    createCourse(courseData)
      .then(result => {
        console.log(result); 
      })
      .catch(error => {
        console.error(error); 
      });
  }, []);

  return (
    <div>
      <h2>HTML Course</h2>
    </div>
  );
};

export default HTMLCourse;
