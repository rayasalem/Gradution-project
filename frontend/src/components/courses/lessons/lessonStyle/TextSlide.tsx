import React from 'react';
import { Box } from '@mui/material';
import  Typography  from '@mui/material/Typography';

interface TextSlideProps {
  text: React.ReactNode;
}

const TextSlide: React.FC<TextSlideProps> = ({ text }) => {
  return (
    <Box sx={{paddingTop:'70px',display:'flex',justifyContent:'center'}}>
      <Typography variant="h6">
      {React.cloneElement(text as React.ReactElement)}
      </Typography>
  </Box>
  );
};

export default TextSlide;