import React from 'react'
import { Avatar, Box, Paper, Typography } from '@mui/material';
import Footer from '../homePage/footer/Footer';
import ViewInArIcon from '@mui/icons-material/ViewInAr';


const ProfilePage:React.FC = () => {
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
        src="/path/to/your/profile/picture.jpg" 
        sx={{ width: '120px',maxWidth: '120px',height: '120px',borderRadius: '50%',marginBottom: '5px'}} />
         <Box  sx={{ backgroundColor: 'transparent', marginLeft: '16px', padding: '16px' }}>
        <Typography variant="h5" gutterBottom sx={{color:'#fff',fontSize:'26px',fontWeight:'600'}}>
          Your Name
        </Typography>
        <Typography variant="subtitle1" sx={{color:'#fff',fontSize:'18px',fontWeight:'300'}}>
        <ViewInArIcon style={{ fontSize: 18, color: '#ecaa00' ,paddingRight:'6px'}} />
          Bit 
        </Typography>
        <Typography variant="subtitle1" sx={{color:'#fff',fontSize:'18px',fontWeight:'300'}}>
          City Name
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