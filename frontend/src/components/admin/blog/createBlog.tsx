import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { getprofileInfo, createBlog } from '../../../api/userAction';

const CreateBlog: React.FC = () => {
  const navigate = useNavigate();
  const [newTitle, setNewTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');
  const [timeToRead, setTimeToRead] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const profileInfo = await getprofileInfo();
        if (profileInfo?.user?.role === 'admin') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };

    fetchProfileInfo();
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const handleTimeToReadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeToRead(Number(event.target.value));
  };

  const addTitle = async () => {
    if (isAdmin ) {
      try {
        const response = await createBlog(newTitle, content, topic, timeToRead || 0);
        console.log(response);
        if (response?.blog) {
          setNewTitle('');
          setContent('');
          setTopic('');
          setTimeToRead(null);
          navigate(`/DevLoom/admin/addSection/${response?.blog?._id}`);
        }
      } catch (error) {
        console.error('Failed to create a blog post:', error);
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', 
    marginTop: '130px' ,width: '30%',backgroundColor: '#9e9e9e',padding: '3%',margin: '6% auto -2%'}}>
      <Typography variant="h4" align="center" gutterBottom>
                Create new Blog
            </Typography>
      <TextField
        type="text"
        placeholder="Enter Title"
        value={newTitle}
        onChange={handleTitleChange}
        variant="outlined"
        multiline
        rows={2}
        sx={{ marginBottom: 2, width: 300 }}
      />
      <TextField
        type="text"
        placeholder="Enter Content"
        value={content}
        onChange={handleContentChange}
        variant="outlined"
        multiline
        rows={4}
        sx={{ marginBottom: 2, width: 300 }}
      />
      <TextField
        type="text"
        placeholder="Enter Topic"
        value={topic}
        onChange={handleTopicChange}
        variant="outlined"
        sx={{ marginBottom: 2, width: 300 }}
      />
      <TextField
        type="number"
        placeholder="Enter Time to Read"
        value={timeToRead || ''}
        onChange={handleTimeToReadChange}
        variant="outlined"
        
        sx={{ marginBottom: 2, width: 300 }}
      />
      {isAdmin && (
        <Button variant="contained" onClick={addTitle} sx={{ padding: '12px 32px' }}>
          Create Blog
        </Button>
      )}
    </Box>
  );
};

export default CreateBlog;