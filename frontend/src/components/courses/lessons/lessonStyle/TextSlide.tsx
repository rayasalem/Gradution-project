import React from 'react';
import { Box } from '@mui/material';

interface TextSlideProps {
  text: React.ReactNode;
}

const TextSlide: React.FC<TextSlideProps> = ({ text }) => {
  return (
    <Box sx={{paddingTop:'60px'}}>
    <div>{React.cloneElement(text as React.ReactElement)}</div>
  </Box>
  );
};

export default TextSlide;
