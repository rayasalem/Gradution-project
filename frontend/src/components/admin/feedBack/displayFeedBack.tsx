import React, { useState ,useEffect} from 'react'
import { Box, Typography, Button ,Paper} from '@mui/material';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SetFeedBackTrue, getAllFeedBack, getFeedbackRead, getFeedbackUnRead } from '../../../api/userAction';
import { useRecoilState } from 'recoil';
import { AllFeedBackState, FeedBackReadState, FeedBackUNReadState } from '../../recoilState';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import './Feed.css';

interface Feed {
    _id: any;
    text: string;
    createdAt:Date;
    isRead:boolean;
  }

const DisplayFeedBack = () => {
    const [value, setValue] = React.useState("1");
    const [AllFeedBack, setAllFeedBack] = useRecoilState<Feed[]>(AllFeedBackState as any);
    const [FeedBackRead, setFeedBackRead] = useRecoilState<Feed[]>(FeedBackReadState as any);
    const [FeedBackUNRead, setFeedBackUNRead] = useRecoilState<Feed[]>(FeedBackUNReadState as any);
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    const isSmall = useMediaQuery('(max-width:600px)');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
              const FeedList = await getAllFeedBack(); 
              setAllFeedBack(FeedList?.feedbackList)
              const FeedReadList = await getFeedbackRead();
              setFeedBackRead(FeedReadList?.feedbackList)
              const FeedUNReadList = await getFeedbackUnRead(); 
              setFeedBackUNRead(FeedUNReadList?.feedbackList)
          } catch (error) {
            console.error('Error fetching FeedBack:', error);
          }
        };
        fetchData();
      }, []);
      const handleSubmit = async (FeedId:string) => {
        try {
           const res =await SetFeedBackTrue(FeedId);
        } catch (err) {
            console.log('Error changing password:', err);
        }
    };
  return (
    
    <Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f2f5f7',
        maxWidth: '100vw',
        overflow: 'hidden',
        paddingTop:'100px'
      }}
    >
      <Typography variant="h5" sx={{fontWeight:'600',letterSpacing:'-0.03em',marginBottom:'40px'}}>Admin Page_Feed Back 
       </Typography>
     
        <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',width:'550px',margin: '0 auto' }}>

        <TabList onChange={handleChange}   variant="scrollable"  scrollButtons="auto"  allowScrollButtonsMobile
             aria-label="scrollable auto tabs example">
        <Tab label="All FeedBack" value="1" />
        <Tab label="FeedbackUnRead" value="2"/>
        <Tab label="FeedbackRead" value="3"/>
       </TabList>
        </Box>
      <TabPanel value="1">
      {AllFeedBack && AllFeedBack.map((feed) => (
      <Paper
       className='paperInFeedBack'
              elevation={3}
              sx={{
                position: 'relative',
                padding: '15px',
                marginTop:'15px',   
                height:'100px' 
              }}
            >          
    <Box sx={{marginBottom:'10px'}}>      
        <Typography
          variant='body1'
          sx={{
            fontSize: '20px',
            fontWeight:'600',
            color: 'black',
            marginBottom: '1px',
            fontFamily: 'Fira Sans,sans-seri' ,
        width:'75%',
      }}
        >
                  {feed.text}
                </Typography> 
                </Box>
                <Box>

           <Box sx={{ position: 'absolute', top: 0, right: 0, margin: '10px',display:'flex' ,flexDirection:'coulmn'}}>
            <Box><Typography sx={{fontFamily:'Fira Sans,sans-seri',fontSize:'12px',fontWeight:'400'}}>
            {feed.isRead?(<MarkEmailReadIcon color="success" sx={{fontSize:'35px'}}></MarkEmailReadIcon>):
            (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
            <Box><MarkunreadIcon sx={{fontSize:'35px',color:'red'}}></MarkunreadIcon> </Box>
            <Box> <Button variant="outlined" onClick={()=>handleSubmit(feed._id)}>Mark Read</Button></Box>
        </Box>)}
            </Typography>
            </Box>
            
          </Box>               
           <Box sx={{ position: 'absolute', bottom: 0, right: 0, margin: '10px',display:'flex' ,flexDirection:'row'}}>
            <Box><Typography sx={{color:'#6b7f99',fontFamily:'Fira Sans,sans-seri',fontSize:'12px',fontWeight:'400'}}>
            {feed.createdAt.toLocaleString()}</Typography></Box>
            
          </Box>
                  </Box>
            </Paper>
            ))}
      </TabPanel>
      <TabPanel value="2">
      {FeedBackUNRead && FeedBackUNRead.map((feed) => (
      <Paper
      className='paperInFeedBack'
              elevation={3}
              sx={{
                position: 'relative',
                padding: '15px',
                marginTop:'15px',   
                height:'100px' 
              }}
            >          
    <Box sx={{marginBottom:'10px'}}>      
        
        
        <Typography
          variant='body1'
          sx={{
            fontSize: '20px',
            fontWeight:'600',
            color: 'black',
            marginBottom: '1px',
            fontFamily: 'Fira Sans,sans-seri' ,
        width:'75%'
      }}
        >
                  {feed.text}
                </Typography> </Box>
                <Box>

           <Box sx={{ position: 'absolute', top: 0, right: 0, margin: '10px',display:'flex'}}>
            <Box>
            {feed.isRead?(<MarkEmailReadIcon color="success" sx={{fontSize:'35px'}}></MarkEmailReadIcon>):
            (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
            <Box><MarkunreadIcon sx={{fontSize:'35px',color:'red'}}></MarkunreadIcon> </Box>
            <Box> <Button variant="outlined" onClick={()=>handleSubmit(feed._id)}>Mark Read</Button></Box>
        </Box>)}
            </Box>
          </Box>               
           <Box sx={{ position: 'absolute', bottom: 0, right: 0, margin: '10px',display:'flex' ,flexDirection:'row'}}>
            <Box><Typography sx={{color:'#6b7f99',fontFamily:'Fira Sans,sans-seri',fontSize:'12px',fontWeight:'400'}}>
            {feed.createdAt.toLocaleString()}</Typography></Box>
            
          </Box>
                  </Box>
            </Paper>
            ))}
      
      </TabPanel>
      <TabPanel value="3">
      {FeedBackRead && FeedBackRead.map((feed) => (
        <Paper
        className='paperInFeedBack'
                elevation={3}
                sx={{
                  position: 'relative',
                  padding: '15px',
                  marginTop:'15px',   
                  height:'100px' 
                }}
              >          
      <Box sx={{marginBottom:'10px'}}>      
          
          
          <Typography
            variant='body1'
            sx={{
              fontSize: '20px',
              fontWeight:'600',
              color: 'black',
              marginBottom: '1px',
              fontFamily: 'Fira Sans,sans-seri' ,
          width:'75%'
        }}
          >
                    {feed.text}
                  </Typography> </Box>
                  <Box>
  
             <Box sx={{ position: 'absolute', top: 0, right: 0, margin: '10px',display:'flex'}}>
              <Box>
              {feed.isRead?(<MarkEmailReadIcon color="success" sx={{fontSize:'35px'}}></MarkEmailReadIcon>):
              (<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
              <Box><MarkunreadIcon sx={{fontSize:'35px',color:'red'}}></MarkunreadIcon> </Box>
              <Box> <Button variant="outlined" onClick={()=>handleSubmit(feed._id)}>Mark Read</Button></Box>
          </Box>)}
              </Box>
            </Box>               
             <Box sx={{ position: 'absolute', bottom: 0, right: 0, margin: '10px',display:'flex' ,flexDirection:'row'}}>
              <Box><Typography sx={{color:'#6b7f99',fontFamily:'Fira Sans,sans-seri',fontSize:'12px',fontWeight:'400'}}>
              {feed.createdAt.toLocaleString()}</Typography></Box>
              
            </Box>
                    </Box>
              </Paper>
      
            ))}
      
      </TabPanel>
  </TabContext>
      </Box>
      </Box>

)
}

export default DisplayFeedBack