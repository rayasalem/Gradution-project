import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box } from '@mui/material';
import ChatMessage from './ChatMessage';
import { getprofileInfo, addComment, getAllComments } from '../../../api/userAction';

interface ChatAppProps {
  lessonId: string;
}

const ChatApp: React.FC<ChatAppProps> = ({ lessonId }) => {
  const [messages, setMessages] = useState<string[]>([]);
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
          console.log(profileInfo);
        }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };

    fetchData();
  }, []);

  const handleSendMessage = async () => {
    try {
      if (!lessonId) {
        console.error('LessonId not found');
        return;
      }

      if (!newMessage.trim()) {
        console.error('Cannot send an empty message');
        return;
      }

      await addComment({ lessonId, text: newMessage });

      const comments = await getAllComments(lessonId);

      if (comments) {
        const updatedMessages = comments.map(comment => comment.text || '');
        setMessages(updatedMessages);
      }

      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
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
