import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { createFeedBack } from '../../api/userAction';
import { Box } from '@mui/system';


const SendFeedBack: React.FC  = () => {
  const [text, settext] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
    const SendFeedBack = async () => {
      try {
       const response =await createFeedBack(text)
       setSubmitted(true);
      } catch (error) {
        console.error('Failed to Send FeedBack :', error);
      }
    };
 
  return (
    <Box sx={{
        display: 'flex',
          minHeight: '100vh',
        backgroundColor:'#f2f5f7',
        maxWidth: '100vw',
          overflow: 'hidden',
        }}>
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '40%',
      height: '40%',
      margin: '1% auto -2%',
      boxShadow: '0px 0px 10px black',
      padding: '3%',
      backgroundColor:'#FFFF',
      marginTop:'120px'
  }}>
      <Typography variant="h4" align="center" gutterBottom>
      Your Feed Back 
      </Typography>
      <div  >
          <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField
                      label="text"
                      fullWidth
                      className="input-field"
                      multiline
                      rows={4}
                      onChange={(e) => {settext(e.target.value)
                        setSubmitted(false)
                         }}
                  />
              </Grid>
              
              
              <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" style={{
                      marginTop: '10px'
                  }}onClick={SendFeedBack} >
                      Send Feed Back
                      <SendIcon sx={{marginLeft:'5px'}}></SendIcon>
                  </Button>
              </Grid>
          </Grid>
          {submitted  && (
          <div>
            <Typography variant="body1" gutterBottom sx={{ width: '300px',padding:'10px',color:'green' }}>
              Thank you for your feedback!
            </Typography>
          </div>
          )}
      </div>
  </Container>
  
  </Box>
  )
}

export default SendFeedBack