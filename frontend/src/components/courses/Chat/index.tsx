import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@mui/material';
import ChatMessage from './ChatMessage';
import { getprofileInfo } from '../../../api/userAction';

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [uploadedImage, setUploadedImage] = useState('/images/user.png');
  const [username, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileInfo = await getprofileInfo();
        if (profileInfo) {
          setUserName(profileInfo?.user?.username);
          setUploadedImage(profileInfo?.user?.avatar || '');
          console.log(profileInfo);
        }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };

    fetchData(); // Corrected function name here
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <Container maxWidth="sm">
      <Box style={{ marginTop: '100px' }}>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} sender={username} avatar={uploadedImage} />
        ))}
      </Box>
      <Box style={{ marginTop: '20px' }}>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage} style={{ marginTop: '10px' }}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default ChatApp;
