import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getLessonById, updateLesson } from '../../../api/userAction';



const UpdateLesson: React.FC  = () => {
  const [title, settitle] = useState<string>('');
  const [Order, setOrder] = useState<number>(0);
  const { lessonId } = useParams<{ lessonId: string }>();
  useEffect(() => {
    const fetchData = async () => {
      try {
         const data = await getLessonById(lessonId || '');
         console.log(data);
         settitle(data?.lesson?.title);
         setOrder(data?.lesson?.order)
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchData();
  }, []);
    const UpdateLessonDetails = async () => {
      try {
        if (lessonId !== undefined) {
        const update = await updateLesson(lessonId,title,Order)
        }else {
          console.error('lessonId is undefined');
        }
      } catch (error) {
        console.error('Failed to Update Lesson :', error);
      }
    };
 
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '40%',
      margin: '1% auto -2%',
      backgroundColor: '#9e9e9e',
      boxShadow: '0px 0px 10px black',
      padding: '3%',
      marginTop:'120px'
  }}>
      <Typography variant="h4" align="center" gutterBottom>
           update Lesson
      </Typography>
      <div  >
          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                      label="title"
                      fullWidth
                      className="input-field"
                      value={title}
                      onChange={(e) => {settitle(e.target.value)
                         }}
                  />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                      label="Order"
                      type="number" 
                        inputProps={{
                        min: 0,
                        step: 1,
                       }}
                      fullWidth
                      className="input-field"
                      value={Order}
                      onChange={(e) => setOrder(Number(e.target.value))}
                  />
    
              </Grid>
              
              <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" style={{
                      marginTop: '10px'
                  }}onClick={UpdateLessonDetails} >
                      Update
                  </Button>
              </Grid>
          </Grid>
      </div>
  </Container>
    
  )
}

export default UpdateLesson