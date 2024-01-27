import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Grid, Avatar } from '@mui/material';
import ChatMessage from './ChatMessage';
import { getprofileInfo } from '../../../api/userAction';

interface ChatAppProps {}

interface ChatMessageData {
  id: number;
  username: string;
  avatar: string;
  text: string;
  timestamp: number;
}

const ChatApp: React.FC<ChatAppProps> = () => {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [uploadedImage, setUploadedImage] = useState('/images/user.png');
  const [username, setUserName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileInfo = await getprofileInfo();
        if (profileInfo) {
          setUserName(profileInfo?.user?.username);
          setUploadedImage(profileInfo?.user?.avatar || '');

          const storedMessages = localStorage.getItem('chatMessages');
          if (storedMessages) {
            const parsedMessages: ChatMessageData[] = JSON.parse(storedMessages);
            const filteredMessages = parsedMessages.filter(
              (message) => Date.now() - message.timestamp < 24 * 60 * 60 * 1000
            );
            setMessages(filteredMessages);
          }
        }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };

    fetchData();
  }, []);

  const handleSendMessage = () => {
    try {
      if (!newMessage.trim()) {
        console.error('Cannot send an empty message');
        return;
      }

      const newChatMessage: ChatMessageData = {
        id: messages.length + 1,
        username: username || 'Anonymous',
        avatar: uploadedImage,
        text: newMessage,
        timestamp: Date.now(),
      };

      setMessages((prevMessages) => [...prevMessages, newChatMessage]);
      localStorage.setItem(
        'chatMessages',
        JSON.stringify([...messages, newChatMessage])
      );
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box style={{ marginTop: '100px' }}>
        {messages.map((message) => (
          <Grid item key={message.id}>
            <ChatMessage
              message={message.text}
              sender={message.username}
              avatar={message.avatar}
            />
          </Grid>
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          style={{ marginTop: '10px' }}
          disabled={!newMessage.trim()}
        >
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default ChatApp;