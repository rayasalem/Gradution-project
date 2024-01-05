import React, { useState , useEffect} from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { retrieveUserBitsAndHearts } from '../../../../../api/userAction';
import { updateUserHearts, deductBitUser } from './../../../../../api/userAction';

interface ModalComponentProps {
  open: boolean;
  onClose: () => void;
}

const ModalBitsStart: React.FC<ModalComponentProps> = ({open, onClose}) => {

    const [bitsCount, setBitsCount] = useState<number>(0);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { bitsCount, heartsCount } = await retrieveUserBitsAndHearts();
          setBitsCount(bitsCount);
        } catch (error) {
          console.error('Error retrieving bits and hearts:', error);
        }
      };
  
      fetchData();
    }, []); 
    const handleRefillClick = async () => {
      try {
        await updateUserHearts();
        const deductionResult = await deductBitUser();
        if (deductionResult !== undefined) {
         const { updatedBitsCount } = deductionResult; 
         setBitsCount(updatedBitsCount);
       }
      } catch (error) {
        console.error('Error updating hearts:', error);
      }
    };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center',position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: 700,height:300, bgcolor: '#f9f9fa', boxShadow: 24, p: 4 }}>
        <Button sx={{ position: 'absolute', top: 10, right: 10, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', color: '#333' }} onClick={onClose}>
          X
        </Button>
        <Grid container spacing={2} >
        <Grid item  xs={6} > 
            <Typography variant="h6" component="h2" sx={{fontWeight:'bold',textAlign:'center'}}>
            You need Hearts to start a lesson
            </Typography> 
            <Box sx={{padding:'15px',display:'flex',justifyContent:'center'}}>
                <FavoriteIcon sx={{color:'#e0e0e0',height:40,width:40}}></FavoriteIcon>
                <FavoriteIcon sx={{color:'#e0e0e0',height:40,width:40}}></FavoriteIcon>
                <FavoriteIcon sx={{color:'#e0e0e0',height:40,width:40}}></FavoriteIcon>
            </Box>
            <Typography variant="body2" sx={{color:'#6b7f99',textAlign:'center'}}>
            You’ll have Hearts again in 1h 39m. Or refill now
            </Typography> 
            
        </Grid>
        <Grid item  xs={6} >  
            <Box sx={{padding:'16px',border:'2px solid #d2d2d2',borderRadius:'10px',display: 'flex', alignItems: 'center'}}>
                <Box>
                <VolunteerActivismIcon sx={{color:'#f50057',height:40,width:40}}></VolunteerActivismIcon>
                </Box>
                <Box sx={{ marginLeft: '16px' }}>
                <Typography variant="body1" sx={{fontWeight:'bold',textAlign:'center'}}>
                  Your bits: <ViewInArIcon sx={{color:'#6a1b9a' ,padding:'0 2px',width:'25px',height:'20px'}}></ViewInArIcon>
                  <span style={{color:'#757575',fontSize:'16px',fontWeight:'400'}}>{bitsCount}</span> 
                </Typography> 
                <Box sx={{padding:'10px'}}>
                <Button sx={{color:'#2493df',border:'1px solid #2493df',padding:'5px',borderRadius:'4px',
                     ...(bitsCount > 60 ? {} : { opacity: '50%', pointerEvents: 'none' }),

              }} onClick={handleRefillClick}
              >
                    One refill only <ViewInArIcon sx={{color:'#6a1b9a' ,padding:'0 4px'}}></ViewInArIcon>60
                </Button>
                </Box>
                </Box>
            </Box>
        </Grid>
        </Grid>

        
      </Box>
    </Modal>
  );
};

export default ModalBitsStart;


