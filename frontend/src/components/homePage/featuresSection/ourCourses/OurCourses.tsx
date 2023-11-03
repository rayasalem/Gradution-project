import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import './test.css';

type CourseCardProps = {
  description: string;
  icon: React.ReactNode;
};

const CourseCard: React.FC<CourseCardProps> = ({ description, icon }) => {
  return (
    <Paper elevation={3} className="paper-container">
        {icon}
      <Typography variant="body1" className="description">
        {description}
      </Typography>
    </Paper>
  );
};

interface OurCoursesProps {}

const OurCourses: React.FC<OurCoursesProps> = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className="hidden-md-and-down">
        <div style={{  padding: '100px' }}>
       <img
      src="./images/Lang.png"
      alt="Courses Image"
      style={{ height: '700px', width: '500px' }} 
      />
         </div>
       </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div style={{ minHeight: 'calc(100vh - 200px)', padding: '20px' }}>
            <Typography variant="h3" className='title' sx={{  fontWeight: 'bold' ,color:'#2d3846'}}>
              Our Popular Courses
            </Typography>
            <Typography variant="body1" className='descripaton' sx={{ marginBottom: 3, fontStyle: 'italic' }}>
              Join and experience our interactive courses filled with exciting coding challenges and quizzes.
            </Typography>
            <>
              <CourseCard
                description="DevLoom's HTML course provides a strong foundation in web development. Learners acquire skills to create web pages, format text, embed images, and add links. Completing the course earns them an HTML proficiency certification. The course is interactive, featuring coding challenges and quizzes to reinforce HTML knowledge."
                icon={<HtmlIcon sx={{ fontSize: 120}} className="icon" />}
              />
              <CourseCard
                description="DevLoom's JavaScript course empowers learners to master client-side scripting. They gain skills to add dynamic behavior, create interactive web applications, and manipulate web content. The course is highly interactive, featuring hands-on coding challenges and quizzes for a deeper understanding of JavaScript."
                icon={<JavascriptIcon sx={{ fontSize: 120}} className="icon" />}
              />
              <CourseCard
                description="Learn CSS with DevLoom's interactive course. Acquire skills to style web pages, create beautiful designs, and ensure responsive layouts. Completing the course earns you a CSS proficiency certification. The course features hands-on coding challenges and quizzes for an in-depth understanding of CSS."
                icon={<CssIcon  sx={{ fontSize: 120}} className="icon" />}
              />
            </>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OurCourses;
