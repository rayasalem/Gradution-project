import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getQustionById, updateQustion } from '../../../api/userAction';


const UpdateQustion = () => {
    const { questionId } = useParams<{ questionId: string }>();
    const [successMessage, setSuccessMessage] = useState('');
    const [text, setText] = useState<string>('');
    const [questionOrder, setquestionOrder] = useState<number>(0);
    const [type, setType] = useState<string>('');
    const [correctAnswer, setcorrectAnswer] = useState<string>('');
    const [options, setoptions] = useState<string[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const questionData = await getQustionById(questionId);
    
            setText(questionData.text);
            setquestionOrder(questionData.order);
            setType(questionData.type);
            setcorrectAnswer(questionData.correctAnswer);
            setoptions(questionData.options || []);
          } catch (error) {
            console.error('Error fetching question details:', error);
          }
        };
        fetchData();
      }, [questionId]);
      const handleUpdateQuestion = async () => {
        try {
          await updateQustion(questionId, text, questionOrder, type, options, correctAnswer);
          setSuccessMessage('Question updated successfully!');
        
        } catch (error) {
          console.error('Error updating question:', error);
        }
      };
      const handleDisplayOptionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedDisplayOptions = e.target.value.split('\n').map((option) => option.trim());
        setoptions(updatedDisplayOptions);
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
            Update Qustion
        </Typography>
        <div  >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="title"
                        fullWidth
                        className="input-field"
                        value={text}
                        onChange={(e) => {setText(e.target.value)
                        }}
                    />
                </Grid>
            <Grid item xs={12}>
                  <TextField
                      label="questionOrder"
                      type="number" 
                        inputProps={{
                        min: 0,
                        step: 1,
                       }}
                      fullWidth
                      className="input-field"
                      value={questionOrder}
                      onChange={(e) => setquestionOrder(Number(e.target.value))}

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
                <Grid item xs={12}>
                <TextField
              label="options"
              multiline
              rows={4} 
              fullWidth
              className="input-field"
              onChange={handleDisplayOptionsChange}
              value={options.join('\n')}
            />
                    
                </Grid>
              <Grid item xs={12}>
                    <TextField
                        label="correctAnswer"
                        fullWidth
                        className="input-field"
                        value={correctAnswer}
                        onChange={(e) => {setcorrectAnswer(e.target.value)
                        }}
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
                    }}
                    onClick={handleUpdateQuestion}
                     >
                        Update
                    </Button>
                </Grid>
            </Grid>
        </div>
    </Container>
  )
}

export default UpdateQustion