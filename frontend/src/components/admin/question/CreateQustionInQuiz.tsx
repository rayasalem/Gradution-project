import React, {  useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { createQuestion } from '../../../api/userAction';

const CreateQustionInQuiz = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const [text, setText] = useState<string>('');
    const [questionOrder, setquestionOrder] = useState<number>(0);
    const [type, setType] = useState<string>('');
    const [correctAnswer, setcorrectAnswer] = useState<string>('');
    const [options, setoptions] = useState<string[]>([]);
    
  
      const [successMessage, setSuccessMessage] = useState('');
  
      const createNewQustion = async () => {
          try {
              await createQuestion({
                  order:questionOrder,
                  text,
                  type,
                  options,
                  correctAnswer
                  ,quizId
                });
             setSuccessMessage('Create successfully!');
          } catch (error) {
            console.error('Failed to create qustion:', error);
          }
        };
        const handleOptionsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          const optionsArray = e.target.value.split('\n').map((option) => option.trim());
          setoptions(optionsArray);
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
            Create new Qustion
        </Typography>
        <div  >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="title"
                        fullWidth
                        className="input-field"
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
                      onChange={(e) => setquestionOrder(Number(e.target.value))}

                  />
    
              </Grid>               
                <Grid item xs={12}>
                  <TextField
                      label="Quiz ID"
                      fullWidth
                      className="input-field"
                      value={quizId}

                  />
    
              </Grid>
              <Grid item xs={12}>
                    <TextField
                        label="type"
                        fullWidth
                        className="input-field"
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
              value={options.join('\n')}
              onChange={handleOptionsChange}
            />
                    
                </Grid>
              <Grid item xs={12}>
                    <TextField
                        label="correctAnswer"
                        fullWidth
                        className="input-field"
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
                    }}onClick={createNewQustion} >
                        Create Qustion
                    </Button>
                </Grid>
            </Grid>
        </div>
    </Container>
  )
}

export default CreateQustionInQuiz