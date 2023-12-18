import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getQuizById, updateQuiz } from '../../../api/userAction'; 

const UpdateQuiz: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [passingScore, setPassingScore] = useState<number>(0);
  const [quizIdInput, setQuizIdInput] = useState<string>(''); // Added state for user input of quizId
  const { quizId } = useParams<{ quizId: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getQuizById(quizId || '');
        console.log(data);
        setTitle(data?.quiz?.title || '');
        setPassingScore(data?.quiz?.passingScore || 0);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };
    fetchData();
  }, [quizId]);

  const updateQuizDetails = async () => {
    try {
      if (quizIdInput && title) { // Validate both inputs before updating
        const updated = await updateQuiz(quizIdInput, title);
        console.log('Updated Quiz:', updated);
      } else {
        console.error('Please enter quizId and title');
      }
    } catch (error) {
      console.error('Failed to Update Quiz:', error);
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
        Update Quiz
      </Typography>
      <div>
        <TextField
          label="Enter Quiz ID"
          fullWidth
          className="input-field"
          value={quizIdInput}
          onChange={(e) => setQuizIdInput(e.target.value)}
        />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              fullWidth
              className="input-field"
              value={title}
              sx={{ marginTop: '10px' }}

              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
 
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
              onClick={updateQuizDetails}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default UpdateQuiz;