import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getLessonById, updateTextLesson, viewTextSlideDetails } from '../../../api/userAction'; 

const UpdateTextSlide: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [order, setOrder] = useState<number>(0);
  const [type, setType] = useState<string>('');
  const { textSlideId } = useParams<{ textSlideId: string }>();
  const [successMessage, setSuccessMessage] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (textSlideId !== undefined) {
        const response = await viewTextSlideDetails(textSlideId)
        setOrder(response?.textSlide?.order)
        setText(response?.textSlide?.text)
        setType(response?.textSlide?.type)
        }
      } catch (error) {
        console.error('Error fetching text slide:', error);
      }
    };
    fetchData();
  }, [textSlideId]);

  const updateTextSlideDetails = async () => {
    try {
      if (textSlideId !== undefined) { 
        const updated = await updateTextLesson(textSlideId, text, order);
        setSuccessMessage('Text updated successfully!');
      }
    } catch (error) {
      console.error('Failed to Update Text Slide:', error);
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
        Update Text Slide
      </Typography>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Text"
              fullWidth
              className="input-field"
              multiline
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              sx={{ marginTop: '10px' }}
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
              value={order}
              onChange={(e) => setOrder(Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
                    <TextField
                        label="type"
                        fullWidth
                        className="input-field"
                        value={type}
                        onChange={(e) => {setType(e.target.value)
                        }}
                    />
                </Grid>
          {successMessage && (
                       <Typography variant="body2"sx={{ width: '210px',padding:'5px',color:'green' }}>
                        {successMessage}
                      </Typography>
                          )}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '10px' }}
              onClick={updateTextSlideDetails}
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default UpdateTextSlide;