import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Button, TextField, Typography,Paper} from '@mui/material'
import { Link } from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Footer from '../homePage/footer/Footer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate, Navigate } from 'react-router-dom';

import './discuss.css';
const Discuss = () => {
    const [Sort, setSort] = React.useState('');
    const navigate = useNavigate();

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const CreatePost = () => {
    navigate(`/discuss/New`);

  };
  
  return (
    <Box>
      <Box
      className="discussPart"
        sx={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: '#f2f5f7',
          maxWidth: '100vw',
          overflow: 'hidden',
          paddingTop:'80px'
        }}
      >
        <Box className="discussPart1"
         sx={{padding:'15px',display: 'flex',flexDirection: 'column',}}>
        <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',fontSize:'24px',fontWeight:'600',marginBottom:'20px'}}>
            Q&A Discussions</Typography>
        <Box sx={{padding:'15px',display:'flex',justifyContent:'space-between'}}>
        <TextField id="outlined-basic" label="Search..." variant="outlined" sx={{gap:'16px',width:'570px',height:'54px',borderColor:'#2493df',backgroundColor:'#fff'}}/>
        <Button variant="outlined"sx={{height:'54px',marginLeft:'5px',width:'100px'}}>search</Button>
        </Box>
        <Box sx={{padding:'10px',display:'flex',justifyContent:'space-between'}}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          value={Sort}
          id="demo-simple-select-helper"
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value={10}>Trending</MenuItem>
          <MenuItem value={20}>Most Recent</MenuItem>
          <MenuItem value={30}>Unanswerd</MenuItem>
          <MenuItem value={40}>My Qustions</MenuItem>
          <MenuItem value={50}>My Answers</MenuItem>

        </Select>
      </FormControl>
      <Button variant="contained" onClick={CreatePost} sx={{height:'54px',backgroundColor:'#2493df',fontFamily:'Fira Sans",sans-serif'}}>
        Ask a question</Button>
        </Box>
        <Paper
              elevation={3}
              className="discussPaper1"
              sx={{
                position: 'relative',
                padding: '15px',
                marginLeft:'12px',
                marginTop:'15px',   
                Width:'500px'   
              }}
            >
    <Box sx={{marginBottom:'10px'}}>      
        <Link
            to={`/learn}`}   
       style={{ textDecoration: 'none', width: '100%'}}
        > 
        <Typography
          variant='body1'
          sx={{
            fontSize: '20px',
            fontWeight:'600',
            color: 'black',
            marginBottom: '1px',
            fontFamily: 'Fira Sans,sans-seri' }}
        >
                  content
                </Typography></Link> </Box>
                <Box sx={{marginBottom:'30px'}}>
                <Link to={'/'} style={{backgroundColor:'#eaf0f3',borderRadius:'4px',
            color:'#6b7f99',fontSize:'10px',fontWeight:'600',padding:'5px 12px',textDecoration: 'none'}}>
                python
            </Link>
                </Box>
                <Box>
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, margin: '10px',display:'flex' ,flexDirection:'row'}}>
            <Box> 
                <ThumbUpAltIcon sx={{fontSize:'18px'}}></ThumbUpAltIcon>
                <span style={{fontSize:'12px',color:'#6b7f99'}}>66 Vote</span>
            </Box>  
            <Box sx={{marginLeft:'8px'}}>
                <Link to={'/'} style={{fontSize:'12px',color:'#6b7f99',textDecoration: 'none'}}>
                <ChatBubbleIcon sx={{fontSize:'18px',color:'#000'}}></ChatBubbleIcon>13 Answer
                </Link>
            </Box>
            </Box>               
           <Box sx={{ position: 'absolute', bottom: 0, right: 0, margin: '10px',display:'flex' ,flexDirection:'row'}}>
            <Box><Typography sx={{color:'#6b7f99',fontFamily:'Fira Sans,sans-seri',fontSize:'12px',fontWeight:'400'}}>
            24/11/2023</Typography> <Typography sx={{color:'#2493df',fontFamily:'Fira Sans,sans-seri',fontSize:'12px',fontWeight:'400'}}>
            Bessan</Typography></Box>
            <Box>
            <img
          src={`./images/html.png`} alt='c'
          style={{
          width: '30px',maxWidth: '30px',
          height: '30px',borderRadius: '50%',
          }}/>
            </Box>
          </Box>
                  </Box>
            </Paper>
            <Stack spacing={2} sx={{margin:'20px',display:'flex',alignItems:'center'}}>
            <Pagination count={10} variant="outlined" shape="rounded" />
           </Stack>
        </Box>
        <Box className="discussPart2"
        sx={{padding:'15px'}}>
        <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',fontSize:'24px',fontWeight:'600',marginBottom:'20px',
    wordBreak:'break-word'}}>
        Hot today</Typography>
        <Box sx={{display: 'flex',flexDirection: 'column'}}>
           <Paper
              elevation={3}
              className="discussPaper2"
              sx={{
                position: 'relative',
                padding: '15px',
                marginLeft:'12px',
                marginTop:'15px',  
                width:'400px'    
              }}
            >
                <Box sx={{marginBottom:'5px'}}>      
        <Link
            to={`/learn}`}   
       style={{ textDecoration: 'none', width: '100%'}}
        > 
        <Typography
          variant='body1'
          sx={{
            fontSize: '20px',
            fontWeight:'600',
            color: 'black',
            marginBottom: '1px',
            fontFamily: 'Fira Sans,sans-seri' }}
        >
                  content
                </Typography></Link> </Box>
                <Box> 
                <ThumbUpAltIcon sx={{fontSize:'18px',color:'#6b7f99'}}></ThumbUpAltIcon>
                <span style={{fontSize:'12px',color:'#6b7f99'}}>66 Vote</span>
                </Box>
                </Paper> 
        </Box>
        </Box>
        </Box>
       
        <Footer/>
        </Box>

  )
}

export default Discuss