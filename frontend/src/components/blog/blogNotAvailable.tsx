import { Typography, Grid, Box, Icon } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

const BlogNotAvailable = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ minHeight: '80vh' }} 
    >
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Icon component={ErrorOutline} fontSize="large" color="error" />
          <Typography variant="h4" color="textSecondary" style={{ marginLeft: '40px' }}>
            blog not available
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BlogNotAvailable;