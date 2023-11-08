import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './test.css';

type CourseCardProps = {
  description: string;
  imageSrc: string;
};

const CourseCard: React.FC<CourseCardProps> = ({ description, imageSrc }) => {
  return (
    <Paper elevation={3} className="paper-container">
      <img src={imageSrc} alt="Course" className="course-image" />
      <Typography variant="body1" className="description">
        {description}
      </Typography>
      <Typography className='enroll-now' > Enroll Now</Typography>
    </Paper>
  );
};

interface OurCoursesProps {}

const OurCourses: React.FC<OurCoursesProps> = () => {
  return (
    <div   style={{ paddingTop: '40px', minHeight: 'calc(100vh - 150px)' }}>
      <div style={{  padding: '20px' }}>
            <Typography variant="h4" className='subtitle' sx={{  fontWeight: 'bold' ,color:'#2d3846'}}>
              Our Popular Courses
            </Typography>
            <Typography variant="body1" className='description' sx={{ marginBottom: 3, fontStyle: 'italic' }}>
              Join and experience our interactive courses filled with exciting coding challenges and quizzes.
            </Typography>
        </div>  
      <Grid container spacing={2} > 
        {coursesData.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2} className="course-card">
            <CourseCard 
              description={course.description}
              imageSrc={course.imageSrc}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OurCourses;

const coursesData = [
  {
    description: "JavaScript ",
    imageSrc: '/images/javascript.png',
  },
  {
    description: "Html",
    imageSrc: '/images/html.png',
  },
  {
    description: "Css",
    imageSrc: '/images/css.png',
  },
  {
    description: "Python",
    imageSrc: '/images/python.png',
  },
  {
    description: "Raact",
    imageSrc: '/images/React.png',
  },
  {
    description: "c++",
    imageSrc: '/images/cpp.png',
  },
];
