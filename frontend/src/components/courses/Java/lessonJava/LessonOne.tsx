import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { getlistQustionInLesson, getprofileInfo } from '../../../../api/userAction';
import { useParams } from 'react-router-dom';


const LessonOneInJava = () => {
    const [userIsAddict, setuserIsAddict] = React.useState(false);
  const { LessonId } = useParams<{ LessonId: string }>();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const profileInfo = await getprofileInfo(); 
              if (profileInfo?.user?.role === 'admin') {
                setuserIsAddict(true);
              }
          } catch (error) {
            console.error('Error fetching profile info:', error);
          }
        };
        fetchData ();
      }, []);
      useEffect(() => {
        const fetchDataForQustion = async () => {
            try {
            const response=  await getlistQustionInLesson(LessonId)
            const { questions } = response;
            const mergedArray = [...questions, ...questions];
            const sortedMergedArray = mergedArray.sort((a, b) => a.questionOrder - b.questionOrder);

            console.log(sortedMergedArray);


          } catch (error) {
            console.error('Error :', error);
          }
        };
        fetchDataForQustion ();
      }, []);
      const handleClick = async () => {
    navigate(`/DevLoom/admin/createQustion/${LessonId}`); 
};
  return (
    <Box sx={{ display: 'flex',alignItems: 'center',justifyContent: 'center',paddingTop:'80px'}}>

{userIsAddict && (
        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button
            size="small"
            aria-label="add"
            onClick={handleClick}
            sx={{ zIndex: '1', color: '#e91e63', backgroundColor: '#78909c' }}
          >
           <AddIcon />
            create new qustion
          </Button>
          <Button
            size="small"
            aria-label="add-quiz"
            sx={{ zIndex: '1', color: '#e91e63', backgroundColor: '#78909c' }}
          >
            <AddIcon />
            create new TextSlide
          </Button>
        </Box>
      )}
        </Box>
    
  )
}

export default LessonOneInJava