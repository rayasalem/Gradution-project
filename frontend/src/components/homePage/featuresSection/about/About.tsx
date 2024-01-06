import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Grid from '@mui/material/Grid';
import './about.css'
const keyComponents = [
  {
    title: 'Learning Experience',
    description:
      "DevLoom provides a dynamic and interactive way to learn and acquire new skills. It transforms traditional education by simplifying complex subjects and making learning enjoyable. With DevLoom, you'll embark on a journey filled with coding challenges, quizzes, and exciting projects.",
  },
  {
    title: 'Diverse Blog Topics',
    description:
      'DevLoom blog section is a goldmine of knowledge encompassing a wide spectrum of tech-related subjects. From programming languages and web development to the realms of data science and AI, our blogs delve into the latest trends and offer profound insights.',
  },
  {
    title: 'Community Interaction',
    description:
      'DevLoom thrives as a vibrant community where you can share your knowledge and insights by publishing your posts and tutorials. The supportive community welcomes your contributions, allowing you to showcase your expertise and interact with fellow learners, enthusiasts, and experts.',
  },
];

const About: React.FC = () => {
  return (
    <div style={{ marginTop: '50px', minHeight: 'calc(100vh - 160px)' }}>
      <Typography variant="h4" sx={{ marginBottom: 3, padding: 3, color: '#2d3846', fontWeight: 'bold',display: 'flex',justifyContent: 'center', alignItems: 'center'  }}>
        Explore Our Platform's Key Components
      </Typography>
      <Grid container spacing={2}>
        {keyComponents.map((component, index) => (
          <Grid item key={index} xs={12} sm={12} md={4} >
            <Paper
              elevation={3}
              sx={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '12px',
                margin: 4,
                backgroundColor: '#f9f9ff',
                transition: 'transform 0.2s',
              }}
             className='hover-effect'
            >
              <MenuBookIcon data-testid="MenuBookIcon" sx={{ fontSize: 45, color: '#3CB371' }} />
              <Typography variant="h5" className='titlePaper' sx={{ paddingBottom: 2,fontSize: '28px', fontWeight: 'bold', color: '#2d3846' }}>
                {component.title}
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Monospace', fontWeight: 'bold' , textAlign: 'center',}}>
                {component.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      </div>
  );
}

export default About;
