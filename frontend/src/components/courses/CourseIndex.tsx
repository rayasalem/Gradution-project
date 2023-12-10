import React, { useState ,useEffect} from 'react'
import { Box, Typography, Button } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from './../homePage/footer/Footer';

const CourseContent: React.FC<{ link: string; imageUrl: string; title: string; description: string }> = 
({ link, imageUrl, title, description }) => (
  <Button
    component={Link}
    to={link}
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '750px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        marginBottom: '20px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: '80px',
            maxWidth: '80px',
            height: '80px',
            borderRadius: '50%',
            marginBottom: '10px',
          }}
        />
      </Box>

      <Box>
        <Typography variant="h5" align="center" sx={{ color: '#2d3846', marginBottom: '16px' , textTransform: 'uppercase' }}>
        {title}
        </Typography>

        <Typography variant="body2" align="justify" sx={{ color: '#6b7f99', fontWeight: '400', textTransform: 'uppercase'  }}>
          {description}
        </Typography>
      </Box>
    </Paper>
  </Button>
);

const IndexCourse: React.FC = () => {
  const [value, setValue] = React.useState("1");
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const isSmall = useMediaQuery('(max-width:600px)');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
          paddingTop:'100px'
        }}
      >
       
        <Typography variant="h5" sx={{fontWeight:'600',letterSpacing:'-0.03em',marginBottom:'40px'}}>Explore our courses</Typography>

          <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider',
            width: isSmall ? '400px' : isSmallScreen ? '600px' : '950px',margin: '0 auto', }}>
          <TabList onChange={handleChange}   variant="scrollable"  scrollButtons="auto"  allowScrollButtonsMobile

               aria-label="scrollable auto tabs example">
          <Tab label="All Course" value="1" />
          <Tab label="Websites" value="2"/>
          <Tab label="Mobile apps" value="3"/>
          <Tab label="Games for mobile and web" value="4" />
          <Tab label="Backend System" value="5"/>
          <Tab label="Data Science" value="6"/>
    </TabList>
  </Box>
        <TabPanel value="1">
        <CourseContent
              link={`/learn/html/:`} imageUrl="/images/html.png" title="HTML"
              description="HTML is at the core of every web page. It’s beginner-friendly and knowing the basics is useful for everyone who works in digital design, marketing, content, and more. If you’re interested in front-end web development, this course is a great place to start!"
           />
        <CourseContent
              link={`/learn/Java/:`} imageUrl="/images/Java-.png" title="Java"
              description="This simple, beginner-friendly Java course requires no previous coding knowledge. All you need is a mobile phone or desktop computer and 5 minutes a day! You’ll learn all about the key concepts of Java, and will be writing clear"
            />
        <CourseContent
              link={`/learn/c-plus-plus/:`} imageUrl="/images/cpp.png" title="Introduction to C++"
              description="Learn the basics of this popular coding language. Our C++ course covers basic concepts, data types, arrays, pointers, conditional statements, loops, functions. You don’t need any previous coding experience to do this course."
        />
        <CourseContent
              link={`/learn/python/:`} imageUrl="/images/python.png" title="Python Developer"
              description="Python is the world’s fastest growing programming language is easy to read, learn and code. You’ll learn to build interactive programs and automate your tasks. No previous coding experience needed."
            />
        <CourseContent
              link={`/learn/javaScript/:`} imageUrl="/images/javascript.png" title="javaScript"
              description="JavaScript, renowned as the world's most popular programming language, serves as the backbone of the Web. Its user-friendly nature makes it an ideal language for learners, allowing for a smooth progression from basic concepts to advanced techniques in this comprehensive tutorial."
            />
        <CourseContent
              link={`/learn/css/:`} imageUrl="/images/css.png" title="CSS"
              description="CSS, the styling language for HTML, dictates the visual presentation of web content, allowing designers to craft visually appealing and responsive layouts."
           />
        <CourseContent
              link={`/learn/React/:`} imageUrl="/images/React.png" title="React"
              description="React, a JavaScript library for building user interfaces, revolutionizes web development by enabling the creation of dynamic, efficient, and interactive applications with a component-based architecture."
            />
        <CourseContent
              link={`/learn/sql/:`} imageUrl="/images/sql.png" title="SQL Intermediate"
              description="Advance your SQL skills by delving into multi-table databases, learning essential techniques for data manipulation, and ensuring data integrity. Building upon the fundamentals covered in our Introduction to SQL course, this Intermediate SQL course equips you to handle more complex, interrelated tables and extract powerful insights from your data."
            />
        <CourseContent
              link={`/learn/Angular/:`} imageUrl="/images/angular.png" title="Angular"
              description="This course will enable you to understand and use the Angular framework, create scalable and dynamic web applications using Angular , employ components for organized and structured code, implement user interaction features, and so much more."
            />
        </TabPanel>
        <TabPanel value="2">
        <CourseContent
              link={`/learn/Angular/:`} imageUrl="/images/angular.png" title="Angular"
              description="This course will enable you to understand and use the Angular framework, create scalable and dynamic web applications using Angular , employ components for organized and structured code, implement user interaction features, and so much more."
            />
        </TabPanel>
        <TabPanel value="3">
        <CourseContent
              link={`/learn/Java/:`} imageUrl="/images/Java-.png" title="Java"
              description="This simple, beginner-friendly Java course requires no previous coding knowledge. All you need is a mobile phone or desktop computer and 5 minutes a day! You’ll learn all about the key concepts of Java, and will be writing clear"
            />
        </TabPanel>
        <TabPanel value="4">
        <CourseContent
              link={`/learn/Java/:`} imageUrl="/images/Java-.png" title="Java"
              description="This simple, beginner-friendly Java course requires no previous coding knowledge. All you need is a mobile phone or desktop computer and 5 minutes a day! You’ll learn all about the key concepts of Java, and will be writing clear"
            />
            <CourseContent
              link={`/learn/c-plus-plus/:`} imageUrl="/images/cpp.png" title="Introduction to C++"
              description="Learn the basics of this popular coding language. Our C++ course covers basic concepts, data types, arrays, pointers, conditional statements, loops, functions. You don’t need any previous coding experience to do this course."
            />
        </TabPanel>
        
        <TabPanel value="5">
        <CourseContent
              link={`/learn/c-plus-plus/:`} imageUrl="/images/cpp.png" title="Introduction to C++"
              description="Learn the basics of this popular coding language. Our C++ course covers basic concepts, data types, arrays, pointers, conditional statements, loops, functions. You don’t need any previous coding experience to do this course."
            />
            <CourseContent
              link={`/learn/Java/:`} imageUrl="/images/Java-.png" title="Java"
              description="This simple, beginner-friendly Java course requires no previous coding knowledge. All you need is a mobile phone or desktop computer and 5 minutes a day! You’ll learn all about the key concepts of Java, and will be writing clear"
            />
            <CourseContent
              link={`/learn/python/:`} imageUrl="/images/python.png" title="Python Developer"
              description="Python is the world’s fastest growing programming language is easy to read, learn and code. You’ll learn to build interactive programs and automate your tasks. No previous coding experience needed."
            />
        </TabPanel>
        <TabPanel value="6">
        <CourseContent
              link={`/learn/python/:`} imageUrl="/images/python.png" title="Python Developer"
              description="Python is the world’s fastest growing programming language is easy to read, learn and code. You’ll learn to build interactive programs and automate your tasks. No previous coding experience needed."
            />
        </TabPanel>
    </TabContext>
        </Box>
        <Footer/>
        </Box>

  )
}

export default IndexCourse     