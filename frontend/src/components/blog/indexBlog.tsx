import React from 'react'
import { Box ,Typography,TextField,Button,Paper} from '@mui/material'
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';



const Blog = () => {
  return (
    <Box
    sx={{
        display: 'flex',
        minHeight: '100vh',
        maxWidth: '100vw',
        overflow: 'hidden',
        paddingTop:'80px',
        flexDirection: 'column'}}>
            <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',
        fontSize:'40px',fontWeight:'600',marginBottom:'20px',display:'flex',
        justifyContent:'center',alignItems:'center'}}>
        Blog</Typography>
      <Box sx={{display: 'flex',}}>
        
        <Box sx={{width:'55%'}}>
        <Box sx={{padding:'15px',display:'flex',justifyContent:'space-between'}}>
        <TextField id="outlined-basic" label="Search..." variant="outlined" sx={{gap:'16px',width:'570px',height:'54px',borderColor:'#2493df',backgroundColor:'#fff'}}
        />
        <Button variant="outlined"sx={{height:'54px',marginLeft:'5px',width:'100px'}}
        >search</Button>
        </Box>
        <Box sx={{padding:'10px',display:'flex',justifyContent:'space-between'}}>
        <Paper
              elevation={3}
              sx={{
                position: 'relative',
                padding: '15px',
                marginLeft:'12px',
                marginTop:'15px',   
                Width:'20%'   
              }}
            >
    <Box sx={{marginBottom:'10px'}}>      
        <Link
           to={``}  
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
                title
                </Typography></Link> </Box>
                <Box sx={{marginBottom:'30px'}}>
              <Link
                to={``}
                style={{
                  backgroundColor: '#eaf0f3',
                  borderRadius: '4px',
                  color: '#6b7f99',
                  fontSize: '10px',
                  fontWeight: '600',
                  padding: '5px 12px',
                  textDecoration: 'none',
                  marginRight: '5px',
                }}
              >
                topic 
              </Link>
                </Box>
                <Box>             
           
                  </Box>
            </Paper>
      
        </Box>
        <Stack spacing={2} sx={{margin:'20px',display:'flex',alignItems:'center'}}>
           <Pagination 
                  count={10}
                variant="outlined"
                 shape="rounded" 
                 />
                 </Stack>
        </Box>
        <Box sx={{padding:'15px'}}>
        
        <Box sx={{display: 'flex',flexDirection: 'column'}}>
        <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans',
        fontSize:'20px',fontWeight:'600',marginBottom:'12px',wordBreak:'break-word',
        lineHeight:'1.4',paddingLeft:'20px'
        }}>Most popular blogposts</Typography>
           <Paper
              elevation={3}
              className="discussPaper2"
              sx={{
                backgroundColor:'#f2f5f7',
                position: 'relative',
                padding: '15px',
                marginLeft:'12px',
                marginTop:'15px',  
                width:'300px'    ,
                boxSizing:'border-box',
                borderRadius:'8px'
              }}
            >
                <Box sx={{marginBottom:'5px'}}>      
        <Link 
            to={``} 
       style={{ textDecoration: 'none', width: '100%'}}
        > 
        <Typography
          variant='body1'
          sx={{
            color:'#2d3846',
            fontSize: '20px',
            fontWeight:'600',
            marginBottom: '1px',
            fontFamily: 'Fira Sans,sans-seri' }}
        >
                  title
                </Typography></Link> </Box>
                <Link 
            to={``} 
               style={{ textDecoration: 'none', width: '100%'}}
                 > 
                <span style={{fontSize:'17px',color:'#6b7f99'}}>min read</span>
                </Link>
                </Paper>
                <Typography sx={{color:'#2d3846',fontFamily:'Fira Sans,sans-seri',
        fontSize:'20px',fontWeight:'600',marginBottom:'20px',wordBreak:'break-word',
        paddingTop:'20px',paddingLeft:'20px'
        }}>Learn on the go!</Typography>
                
        </Box>
        </Box>

        </Box>
        </Box>

  )
}

export default Blog