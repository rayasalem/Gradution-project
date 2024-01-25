// ChatMessage.tsx
import React from 'react';
import { Paper, Typography } from '@mui/material';

interface ChatMessageProps {
  message: string;
  sender: string;
  avatar: string; // Add the avatar prop
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender, avatar }) => {
  return (
    <Paper style={{ padding: '10px', margin: '10px', maxWidth: '400px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={avatar} alt="User Avatar" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
        <Typography variant="body1" color="textPrimary">
          <strong>{sender}:</strong> {message}
        </Typography>
      </div>
    </Paper>
  );
};

export default ChatMessage;