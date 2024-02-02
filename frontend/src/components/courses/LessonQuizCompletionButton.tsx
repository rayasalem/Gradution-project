import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import { VerifiedUser } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface LessonQuizCompletionButtonProps {
  isCompleted: boolean;
  projectName: string;
  recipientName: string;
  issuedDate: string;
}

const LessonQuizCompletionButton: React.FC<LessonQuizCompletionButtonProps> = ({
  isCompleted,
  projectName,
  recipientName,
  issuedDate,
}) => {
  const navigate = useNavigate();

  const handleCertificateClick = () => {
    
    navigate(`/certificate/${projectName}/${recipientName}/${issuedDate}`);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '300px',
        width:'560px',
        backgroundColor:'#FFFF',
      }}
    >
      <Box>
        <VerifiedUser fontSize="large" sx={{            marginLeft:'70px',
}} />
        <Typography variant="h6" sx={{ marginBottom: 2,            marginLeft:'50px',
 }}>
          Certificate
        </Typography>
        <Button
          onClick={isCompleted ? handleCertificateClick : undefined}
          disabled={!isCompleted}
          sx={{
            color: '#c4e17f',
            background: 'black',
            '&:disabled': {
              backgroundColor: 'grey',
              cursor: 'not-allowed',

            },
          }}
        >
          {isCompleted ? 'Take Your Certificate' : 'Complete All Lessons and Quizzes'}
        </Button>
      </Box>
    </Container>
  );
};

export default LessonQuizCompletionButton;