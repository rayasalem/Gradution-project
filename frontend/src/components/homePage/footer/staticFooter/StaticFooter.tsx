import React from 'react'
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';
import './static.css'
type Props = {}
const StaticFooter = (props: Props) => {
  return (
<AppBar position="static" sx={{ backgroundColor: '#18171d',minHeight:'90px'}}>
      <Container>
        <Toolbar>
          <Grid container justifyContent="space-between">
          <Grid item sx={{paddingTop:'15px'}}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <Link href="/" color="#6c757d" className='static' sx={{ textDecoration: 'none' }}>
                  Home
                </Link>
                <Link href="/feedBack" color="#6c757d" className='static' sx={{ textDecoration: 'none' }}>
                  Send FeedBack
                </Link>
                <Link href="/privacy-policy" color="#6c757d" className='static' sx={{ textDecoration: 'none' }}>
                  Privacy Policy
                </Link>
              </div>
            </Grid>
            <Grid item sx={{paddingTop:'15px'}}>
              <Typography variant="body1" color="#6c757d">
                Made With<FavoriteIcon sx={{color:"#e53935" ,marginLeft:'4px',marginRight:'4px'}} fontSize="small" />by 
               <span style={{color:'#fff'}}> DevLoom   </span> 
                 | &copy; {new Date().getFullYear()}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
    )
}

export default StaticFooter