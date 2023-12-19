import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { createLesson } from '../../../api/userAction';


const CreateLesson: React.FC = () => {
  const [title, settitle] = useState<string>('');
  const [Order, setOrder] = useState<number>(0);
  const { courseId } = useParams<{ courseId: string }>();
  const [successMessage, setSuccessMessage] = useState('');

 
    const createNewLesson = async () => {
      try {
        const lessonData = {
          title,
          order:Order,
          course: courseId || '',
        };
         const response = await createLesson(lessonData);
         setSuccessMessage('Create successfully!');
      } catch (error) {
        console.error('Failed to create lesson:', error);
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
          Create new Lesson
      </Typography>
      <div  >
          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                      label="text"
                      fullWidth
                      className="input-field"
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
                      onChange={(e) => setOrder(Number(e.target.value))}
                  />
    
              </Grid>
              <Grid item xs={12}>
                  <TextField
                      label="Course ID"
                      fullWidth
                      className="input-field"
                      value={courseId}
                  />
    
              </Grid>
              {successMessage && (
                       <Typography variant="body2"sx={{ width: '210px',padding:'5px',color:'green' }}>
                        {successMessage}
                      </Typography>
                          )}
              <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" style={{
                      marginTop: '10px'
                  }}onClick={createNewLesson} >
                      Create
                  </Button>
              </Grid>
          </Grid>
      </div>
  </Container>
  )
}

export default CreateLesson