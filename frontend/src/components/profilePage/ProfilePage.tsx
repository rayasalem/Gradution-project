import React, { useState, useEffect } from 'react';
import { Avatar, Box, Paper, Typography } from '@mui/material';
import Footer from '../homePage/footer/Footer';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { getprofileInfo, retrieveUserBitsAndHearts } from '../../api/userAction';


const ProfilePage:React.FC = () => {
  const [bitsCount, setBitsCount] = useState<number>();
  const [uploadedImage, setUploadedImage] = useState('/images/user.png');
  const [userName, setUserName] = useState('');
  const [Bio, setBio] = useState('');
  const [Country, setCountry] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { bitsCount } = await retrieveUserBitsAndHearts();
        setBitsCount(bitsCount);
      } catch (error) {
        console.error('Error retrieving bits and hearts:', error);
      }
    };

    fetchData();
  }, []); 
  useEffect(() => {
    const fetchData = async () => {
      try {
          const profileInfo = await getprofileInfo(); 
          if (profileInfo) {
            setUserName(profileInfo?.user?.username);
            setBio(profileInfo?.user?.bio)
            setCountry(profileInfo?.user?.country)
            setUploadedImage(profileInfo?.user?.avatar)
           console.log(profileInfo)
          }
      } catch (error) {
        console.error('Error fetching profile info:', error);
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
          overflow: 'hidden',
        }}
      >
           <Box
        sx={{
          minHeight: '55vh',
          backgroundColor: 'rgb(45, 56, 70)',
          maxWidth: '100vw',
          overflow: 'hidden',
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{display: 'flex', alignItems: 'center',paddingTop:'100px'}}>
        <Avatar  
        alt="Your Name"
        src={uploadedImage}
        sx={{ width: '120px',maxWidth: '120px',height: '120px',borderRadius: '50%',marginBottom: '5px'}} />
         <Box  sx={{ backgroundColor: 'transparent', marginLeft: '16px', padding: '16px' }}>
        <Typography variant="h5" gutterBottom sx={{color:'#fff',fontSize:'26px',fontWeight:'600'}}>
          {userName}
        </Typography>
        <Typography variant="subtitle1" sx={{color:'#c8d2db',fontSize:'12px',fontWeight:'300'}}>
          {Bio}
        </Typography>
        <Typography variant="subtitle1" sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}}>
        <ViewInArIcon style={{ fontSize: 18, color: '#ecaa00' ,paddingRight:'6px'}} />
          {bitsCount} Bit 
        </Typography>
        <Typography variant="subtitle1" sx={{color:'#fff',fontSize:'18px',fontWeight:'300'}}>
          {Country}
        </Typography>
        </Box>
        </Box>
         

        </Box>

        
        </Box>
        <Footer/>
        </Box>

  )
}

export default ProfilePage