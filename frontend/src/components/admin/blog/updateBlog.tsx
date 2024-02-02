import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { TextField, Button, Box, Avatar  ,Typography} from '@mui/material';
import { getprofileInfo, createBlog, updateBlog, getBlogById, uploadImageBlog } from '../../../api/userAction';

const UpdateBlog: React.FC = () => {
  const { blogId }: { blogId?: string } = useParams();
  const [newTitle, setNewTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');
  const [timeToRead, setTimeToRead] = useState<number>(4);
  const [isAdmin, setIsAdmin] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);


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
    const fetchBlogInfo = async () => {
        try {
            const fetchedBlog = await getBlogById(blogId || '');
            setNewTitle(fetchedBlog?.blog?.title);
            setContent(fetchedBlog?.blog?.content)
            setTopic(fetchedBlog?.blog?.topic)
            setTimeToRead(fetchedBlog?.blog?.timeToRead)
            setImageUrl(fetchedBlog?.blog?.blogImages);
        } catch (error) {
          console.error('Error fetching Blog info:', error);
        }
      };
      fetchBlogInfo();
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
    if (isAdmin && blogId ) {
      try {
       const response = await updateBlog(blogId, newTitle, content, topic, timeToRead);
        console.log(response);
        if (response?.blog) {
          setNewTitle(response?.blog?.title);
          setContent(response?.blog?.content);
          setTopic(response?.blog?.topic);
          setTimeToRead(response?.blog?.timeToRead);
        }
      } catch (error) {
        console.error('Failed to update a blog post:', error);
      }
    }
  };
  const handleImageChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0] && blogId) {
      const file = event.target.files[0];       
      await uploadImageBlog(blogId, file);
      
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', 
    marginTop: '130px' ,width: '20%',backgroundColor: '#9e9e9e',padding: '3%',margin: '6% auto -2%'}}>
      <Typography variant="h4" align="center" gutterBottom>
                Update Blog
            </Typography>
      <TextField
        type="text"
        placeholder="Enter Title"
        value={newTitle}
        onChange={handleTitleChange}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2, width: 300 }}
      />
      <TextField
        type="text"
        placeholder="Enter Content"
        value={content}
        onChange={handleContentChange}
        variant="outlined"
        multiline
        fullWidth
        rows={4}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        type="text"
        placeholder="Enter Topic"
        value={topic}
        onChange={handleTopicChange}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        type="number"
        placeholder="Enter Time to Read"
        value={timeToRead || ''}
        onChange={handleTimeToReadChange}
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      {imageUrl && (
        <Avatar
          alt="Blog Image"
          src={imageUrl}
          sx={{ mb: 4, width: 100 ,height:100}}
        />
      )}
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {isAdmin && (
        <Button variant="contained" onClick={addTitle} sx={{ padding: '12px 32px' }}>
          update
        </Button>
      )}
    </Box>
  );
};

export default UpdateBlog;