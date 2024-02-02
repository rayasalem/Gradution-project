import React, {  useState } from 'react';
import { Box, Button, TextField, Typography, InputLabel, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './newPost.css';
import { CreatePost } from '../../../api/userAction';
import { useNavigate, useParams } from 'react-router';
const NewPost = () => {
  const [title, settitle] = useState<string>('');
  const [content, setcontent] = useState<string>('');
  const [tags, setTag] = useState<string[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const postData = {
        title,content,tags
      };
     const post = await CreatePost(postData);
     settitle('');
      setcontent('');
      setTag([]);
      setSuccess(true);
      setOpenDialog(true);
    
    } catch (err) {
        console.log('Error Create Post:', err);
    }
};
const handleCloseDialog = () => {
  setOpenDialog(false);
  setSuccess(false);
  navigate(`/discuss`);
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
        paddingTop:'70px',
        flexDirection: 'column',
      }}
    >
      {success && (
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>
              <Typography variant="h6">Post Created Successfully</Typography>
            </DialogTitle>
            <DialogContent>
              <Typography variant="body1">Here is a gentle confirmation that your action was successful.</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                OK
              </Button>
            </DialogActions>
          </Dialog>
        )}
        <Typography sx={{padding:'15px',color:'#2d3846',fontFamily:'Fira Sans,sans-seri',fontSize:'24px',fontWeight:'600',marginBottom:'20px'}}>
        Ask the community a question
        </Typography>
        <Box sx={{display:'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
        <Box >
        <InputLabel className="discussNewLabel"sx={{fontSize:'20px',fontWeight:'600',marginBottom:'8px',color:'#6b7f99'}} >Your question</InputLabel>
          <TextField
            type="text"
            label="What would you like to know?"
            fullWidth
            className="discussNewField"
            sx={{borderColor:'#2493df',backgroundColor:'#fff'}}
            onChange={(e) => {settitle(e.target.value)}}
                        />
        <InputLabel className="discussNewLabel"sx={{fontSize:'16px',fontWeight:'400',marginBottom:'8px',color:'#6b7f99'}}>Tip: write as if asking a friend, being as specific as possibleTag</InputLabel>
        <InputLabel className="discussNewLabel"sx={{fontSize:'20px',fontWeight:'600',marginBottom:'8px',color:'#6b7f99'}}>Description</InputLabel>
           <TextField
            type="text"
            label="Include as much detail as possible to get the most relevant answers."
            fullWidth
            multiline
            rows={4}
            className="discussNewField"
            sx={{borderColor:'#2493df',backgroundColor:'#fff'}}
            onChange={(e) => {setcontent(e.target.value)}}
                        />
        <InputLabel className="discussNewLabel"sx={{fontSize:'20px',fontWeight:'600',marginBottom:'8px',color:'#6b7f99'}}>Tag</InputLabel>
        <TextField
            type="text"
            label="Start typing to add tags…"
            fullWidth
            className="discussNewField"
            sx={{borderColor:'#2493df',backgroundColor:'#fff'}}
            onChange={(e) => { setTag(e.target.value.split(' ').map(tag => tag.trim())) }}
                        />
        <InputLabel className="discussNewLabel" sx={{fontSize:'16px',fontWeight:'400',marginBottom:'8px',color:'#6b7f99'}}>You can add up to 10 tags</InputLabel>
        </Box>
        <Box >
        <Button className="discussNewButton" variant="outlined"sx={{height:'54px',marginLeft:'5px',width:'150px'}}
        component={Link}to={'/discuss'}>Cancel</Button>
        <Button className="discussNewButton" variant="contained"sx={{height:'54px',marginLeft:'30px',width:'200px'}}
                  onClick={handleSubmit} 
          >Post question</Button>
        </Box>
        </Box>
        </Box>
        
        </Box>

  )
}

export default NewPost