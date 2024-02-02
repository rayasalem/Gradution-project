import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Grid, Avatar, Typography } from '@mui/material';
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
      <Box marginTop={4} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Daily Note
        </Typography>
      </Box>
      <Box>
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            sender={message.username}
            avatar={message.avatar}
          />
        ))}
      </Box>
      <Box marginTop={2}>
        <TextField
          label="Write your note"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
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
          Add Note
        </Button>
      </Box>
    </Container>
  );
};

export default ChatApp;