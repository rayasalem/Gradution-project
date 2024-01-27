import React from 'react';
import { Typography, Grid, Box, Icon } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

const PostNotAvailable = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        minHeight: '100vh', 
        width: '100vw',   
        marginTop: '60px',
      }}
    >
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Icon component={ErrorOutline} fontSize="large" color="error" />
          <Typography variant="h4" color="textSecondary" style={{ marginLeft: '40px' }}>
            Post not available
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PostNotAvailable;
