import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Container ,Paper} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import './feed.css'
const Feedback: React.FC = () => {
  return (
    <div style={{ marginTop: '30px', minHeight: 'calc(100vh - 180px)'}}>
    <Paper component="section" className="client" id="client" sx={{backgroundColor:'#f9f9ff'}}>
    <Container>
      <Typography variant="h3">
        our <span style={{fontWeight:'bold'}}>client</span>
      </Typography>
      <Typography variant="body2" sx={{color:'#6c757d'}}>
      Feedback from Clients about DevLoom
      </Typography>
      <Grid container spacing={3}>
        {[
          {
            img: './images/per1.jpg',
            text:"DevLoom is a game-changer! Thanks to their interactive courses and supportive community, I've transformed from a beginner to a confident coder. I've landed my dream job as a web developer!",
             author: "Mohamed Ali",
             Date: "October 30, 2023",
          },
          {
            img: './images/per3.jpg',
            text:"The DevLoom community is incredible! I've published tutorials, received valuable feedback, and made priceless connections. It's not just a learning platform; it's a tech enthusiast's paradise.",
            author: 'Omar Khalid',
            Date: "September 29, 2023",
          },
          {
            img: './images/per2.jpeg',
            text:"DevLoom's blogs are a treasure trove of knowledge. The diverse range of tech topics keeps me inspired. I've honed my skills in web development and programming, and I'm excited to explore more.",
            author: 'Layla Ahmed',
            Date: "September 14, 2023",
          },
        ].map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <FormatQuoteIcon sx={{ fontSize: '70px', color: '#3CB371'}} />
            <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',margin:'2' }}>
              <Avatar alt="client" src={item.img} style={{ width: '100px', height: '100px' }} />
            </div>
           <div style={{paddingTop:'20px'}}>
           <Typography variant="h6" style={{margin:'2px',fontWeight:'bold',color:'#000000'}}>
           - {item.author}
            </Typography>
           <Typography variant="body2" sx={{color:'#6c757d',fontSize: '21px !important',minHeight:'210px'}}>
              {item.text}
            </Typography>
            <Typography variant="body2" >
              <span style={{fontSize: '1rem',color:'#6c757d'}}>-{item.Date}</span>
            </Typography>
           </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Paper>
  </div>
  )
};



export default Feedback;
