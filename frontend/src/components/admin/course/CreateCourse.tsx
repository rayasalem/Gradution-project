import React, {  useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { createCourse } from '../../../api/userAction';
import { useNavigate, Navigate } from 'react-router-dom';

const CreateCourse: React.FC = () => {
  const [title, settitle] = useState<string>('');
  const [description, setdescription] = useState<string>('');
  const navigate = useNavigate();

    const handleSubmit = async () => {
      try {
        const courseData = {
          title ,
          description
        };
       const course = await createCourse(courseData)
       .then(result => {
        if (result && result.savedcourse && result.savedcourse._id) {
          navigate(`/learn/n/${result.savedcourse._id}`);
        }
      })
      .catch(error => {
        console.error('Error creating course:', error);
      });
      } catch (err) {
          console.log('Error Create Course:', err);
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
          Create new Course
      </Typography>
      <div  >
          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                      label="title"
                      fullWidth
                      className="input-field"
                      onChange={(e) => {settitle(e.target.value)
                         }}
                  />
              </Grid>
              <Grid item xs={12}>
                  <TextField
                      label="description"
                      fullWidth
                      className="input-field"
                      onChange={(e) => { setdescription(e.target.value) }}
                  />
                  
              </Grid>
              
              <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" style={{
                      marginTop: '10px'
                  }}onClick={handleSubmit} >
                      Create
                  </Button>
              </Grid>
          </Grid>
      </div>
  </Container>
  )
}

export default CreateCourse