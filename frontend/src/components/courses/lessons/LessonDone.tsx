import React, { useState, useEffect } from 'react';
import { Icon, Typography, Box, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { completeLesson, earnBitsBitsAndHearts } from './../../../api/userAction';
import { Link, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';


interface IUserBitsAndHearts {
  actionType: 'lesson' | 'elementaryLevel' | 'proficientLevel' | 'advancedLevel';
}
const DoneLessonPage = () => {
  const { LessonId } = useParams<{ LessonId: string }>();
  const location = useLocation();
  const currentPathname = location.pathname;

  const removeLastPart = currentPathname.replace(/\/[^/]+$/, '');
  const rewards = [
    { icon: FavoriteIcon, label: 'XP', value: 10 },
    { icon: ViewInArIcon, label: 'Cube', value: 5 }, 
  ];

  const borderStyles = {
    border: '1px solid white',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30vw', 
    marginTop: '30px',
  };
  const borderStylesGeneral = {
    border: '1px solid  white',
    padding: '10px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50vw',
  };

  useEffect(() => {
    const createUserBitsAndHeartsAsync = async () => {
      try {
        const userBitsAndHeartsData: IUserBitsAndHearts = {
          actionType: 'lesson',
        };
        const bitsAndHeartsResponse = await earnBitsBitsAndHearts(userBitsAndHeartsData);
          await completeLesson(LessonId);
      } catch (error) {
        console.error('Failed to create user bits and hearts:', error);
      }
    };

    createUserBitsAndHeartsAsync();
  }, []);
  return (
    <>
      <Box
        bgcolor="#f5f5f5"
        p={3}
        borderRadius={4}
        sx={{
          backgroundColor: 'white',
          padding: '20px',
          color: 'black',
          marginTop: '100px',
          marginLeft: '70px',
         
        }}
      >
        <Box style={{ border: '1px solid white' , paddingLeft: '130px',}}>
          <Box sx={borderStylesGeneral}>
            <Icon component={CheckCircleIcon} style={{ fontSize: 50, color: '#77ed00' }} />
            <Typography variant="h5" align="center" color="black" sx={{ marginTop: '30px' }}>
              Lesson completed!
            </Typography>
            <Typography variant="body1" color="black" sx={{ marginTop: '30px', color: 'rgba(0, 0, 0, 0.3)' }}>
              You learned something valuable. You’re one step closer to reaching your goal!
            </Typography>
            <Box sx={{ ...borderStyles,  minWidth: '200px'}}>
              <Typography variant="subtitle1" component="span" color="black">
                Your reward:
              </Typography>
              {rewards.map((reward, index) => (
                <Box key={index} display="flex" alignItems="center" justifyContent="center" marginTop="10px">
                  <Typography variant="subtitle1" component="span" color="black">
                    {reward.label.toLowerCase() === 'xp'
                      ? `+${reward.value} ${reward.label}`
                      : `+${reward.value} `}
                    {reward.label.toLowerCase() === 'cube' && (
                      <ViewInArIcon style={{ fontSize: 18, color: '#7f00ff' }} />
                    )}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      
      <hr style={{ width: '100%', margin: '0', padding: '0' }} />
      <Box mt={3} mb={3} sx={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" component={Link} to={removeLastPart}>Continue</Button>
      </Box>
      </Box>
    </>
  );
};

export default DoneLessonPage;