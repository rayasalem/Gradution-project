import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { getBitLeaderboard } from '../../api/userAction';
import { useRecoilState } from 'recoil';
import { topStudentsState } from '../recoilState';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import './leader.css'
interface topStudents{
    name: string;
    photo: string;
    bits:number;
  }
const LeaderBoard = () => {
    const [topStudents, settopStudents] = useRecoilState<topStudents[]>(topStudentsState as any);
 
 

useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getBitLeaderboard();
        const uniqueNames = new Set<string>();
        const filteredStudents = res.filter((student:any) => {
          if (!uniqueNames.has(student.name)) {
            uniqueNames.add(student.name);
            return true;
          }
          return false;
        });

        settopStudents(filteredStudents);
      } catch (error) {
        console.error('Error :', error);
      }
    };

    fetchData();
  }, []); 
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#f2f5f7',
          maxWidth: '100vw',
        }}
      >
        <Box
          sx={{
            minHeight: '55vh',
            backgroundColor: 'rgb(45, 56, 70)',
            maxWidth: '100vw',
            borderBottomLeftRadius: '50%',
            borderBottomRightRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '250px',flexDirection: 'column'}}>
            <Typography variant="h4" gutterBottom sx={{ color: '#fff', fontSize: '26px', fontWeight: '600' }}>
              LeaderBoard
            </Typography>
            <Typography className='leaderText' variant="body1" gutterBottom sx={{ color: '#fff', fontSize: '23px', fontWeight: '300' }}>
            Complete the lesson and Earn bits to join this leaderboard!
            </Typography> 
          </Box>
          
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Paper elevation={3} className='topStudents' sx={{ padding: '20px', width: '35%' ,height:'45%',marginBottom:'20px'}}>
            
            {topStudents.map((student, index) => (
              <Box key={index} className='topStudents' sx={{ marginBottom: '20px' ,display: 'flex', justifyContent: 'center',alignItems:'center'}}>
               
                <MilitaryTechIcon sx={{color:'#ffc107',fontSize:'35px'}}></MilitaryTechIcon>
                <Box >
        <img
        src={student.photo}
          alt={student.name}
          style={{
            width: '32px',
            maxWidth: '32px',
            height: '32px',
            borderRadius: '50%',
            marginBottom: '10px',
            marginLeft:'20px'
          }}
        />
        </Box>
        
                <Typography variant="h6" sx={{marginLeft:'8px'}}>{student.name}</Typography>
                <Typography variant="h6" sx={{marginLeft:'15px'}}> 
                {student.bits}
                <ViewInArIcon style={{ fontSize: 18, color: '#ecaa00' ,paddingRight:'6px',marginLeft:'5px'}} />
                 </Typography>
              </Box>
            ))}
          </Paper>
        </Box>
        
       
      </Box>
    </Box>
  );
};

export default LeaderBoard;
