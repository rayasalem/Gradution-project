import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { createQuiz } from '../../../api/userAction'; 

const CreateQuiz: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [Order, setOrder] = useState<number>(0);
  const { courseId } = useParams<{ courseId: string }>();
  const [successMessage, setSuccessMessage] = useState('');

  const createNewQuiz = async () => {
    try {
      const quizData = {
        title,
        course: courseId || '',
        order:Order,
        passingScore: 70,
      };
      
      const response = await createQuiz(quizData);
      setSuccessMessage('Quiz created successfully!');
    } catch (error) {
      console.error('Failed to create quiz:', error);
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
      marginTop: '120px'
    }}>
      <Typography variant="h4" align="center" gutterBottom>
        Create new Quiz
      </Typography>
      <div>
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <TextField
        label="Title"
        fullWidth
        className="input-field"
        onChange={(e) => setTitle(e.target.value)}
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
      <Typography variant="body2" sx={{ width: '210px', padding: '5px', color: 'green' }}>
        {successMessage}
      </Typography>
    )}
    <Grid item xs={12}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
        onClick={createNewQuiz}
      >
        Create
      </Button>
    </Grid>
  </Grid>
</div>

    </Container>
  );
};

export default CreateQuiz;