import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { createTextLesson } from '../../../api/userAction'; 

const CreateTextSlide: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [order, setOrder] = useState<number>(0);
  const { lessonId } = useParams<{ lessonId: string }>();
  const [successMessage, setSuccessMessage] = useState('');

  const createNewTextSlide = async () => {
    try {
      const textSlideData = {
        text,
        order,
        lessonId:lessonId || '',
        type: 'text',
      };
      
      const response = await createTextLesson(textSlideData);
      setSuccessMessage('Text Slide created successfully!');
    } catch (error) {
      console.error('Failed to create Text Slide:', error);
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
        Create new Text Slide
      </Typography>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Text"
              fullWidth
              className="input-field"
              multiline
              rows={4}
              onChange={(e) => setText(e.target.value)}
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
              label="Lesson ID"
              fullWidth
              className="input-field"
              value={lessonId}
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
              onClick={createNewTextSlide}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default CreateTextSlide;